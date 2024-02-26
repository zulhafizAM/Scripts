import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import HalfPayLeaveServices from 'App/Services/HalfPayLeaveServices';
import HalfPayLeaveSchema from 'App/Validators/HalfPayLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class HalfPayLeavesController extends BaseController {
    constructor(private halfPayLeaveService: HalfPayLeaveServices) {
        super();
    }

    public async getHalfPayLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const halfPayLeaveSchema =
                HalfPayLeaveSchema.safeParse(requestParams);
            if (!halfPayLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        halfPayLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.halfPayLeaveService.getHalfPayLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getHalfPayLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.halfPayLeaveService.getHalfPayLeave,
        );
    }

    public async addHalfPayLeave({ request }: HttpContextContract) {
        const halfPayLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const HalfPayLeaveValidate =
                HalfPayLeaveSchema.safeParse(halfPayLeave);
            if (!HalfPayLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HalfPayLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.halfPayLeaveService.addHalfPayLeave(halfPayLeave);
            return this.responseStatusService.showSuccess(
                'create',
                halfPayLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editHalfPayLeave({ request }: HttpContextContract) {
        const halfPayLeave = request.body();

        try {
            const HalfPayLeaveValidate =
                HalfPayLeaveSchema.safeParse(halfPayLeave);
            if (!HalfPayLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HalfPayLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.halfPayLeaveService.editHalfPayLeave(halfPayLeave);
            return this.responseStatusService.showSuccess(
                'update',
                halfPayLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
