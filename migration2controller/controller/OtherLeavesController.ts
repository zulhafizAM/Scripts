import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import OtherLeaveServices from 'App/Services/OtherLeaveServices';
import OtherLeaveSchema from 'App/Validators/OtherLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class OtherLeavesController extends BaseController {
    constructor(private otherLeaveService: OtherLeaveServices) {
        super();
    }

    public async getOtherLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const otherLeaveSchema =
                OtherLeaveSchema.safeParse(requestParams);
            if (!otherLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        otherLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.otherLeaveService.getOtherLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getOtherLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.otherLeaveService.getOtherLeave,
        );
    }

    public async addOtherLeave({ request }: HttpContextContract) {
        const otherLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const OtherLeaveValidate =
                OtherLeaveSchema.safeParse(otherLeave);
            if (!OtherLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        OtherLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.otherLeaveService.addOtherLeave(otherLeave);
            return this.responseStatusService.showSuccess(
                'create',
                otherLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editOtherLeave({ request }: HttpContextContract) {
        const otherLeave = request.body();

        try {
            const OtherLeaveValidate =
                OtherLeaveSchema.safeParse(otherLeave);
            if (!OtherLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        OtherLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.otherLeaveService.editOtherLeave(otherLeave);
            return this.responseStatusService.showSuccess(
                'update',
                otherLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
