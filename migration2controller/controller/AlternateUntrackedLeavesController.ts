import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AlternateUntrackedLeaveServices from 'App/Services/AlternateUntrackedLeaveServices';
import AlternateUntrackedLeaveSchema from 'App/Validators/AlternateUntrackedLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AlternateUntrackedLeavesController extends BaseController {
    constructor(private alternateUntrackedLeaveService: AlternateUntrackedLeaveServices) {
        super();
    }

    public async getAlternateUntrackedLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const alternateUntrackedLeaveSchema =
                AlternateUntrackedLeaveSchema.safeParse(requestParams);
            if (!alternateUntrackedLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        alternateUntrackedLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.alternateUntrackedLeaveService.getAlternateUntrackedLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAlternateUntrackedLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.alternateUntrackedLeaveService.getAlternateUntrackedLeave,
        );
    }

    public async addAlternateUntrackedLeave({ request }: HttpContextContract) {
        const alternateUntrackedLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AlternateUntrackedLeaveValidate =
                AlternateUntrackedLeaveSchema.safeParse(alternateUntrackedLeave);
            if (!AlternateUntrackedLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AlternateUntrackedLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.alternateUntrackedLeaveService.addAlternateUntrackedLeave(alternateUntrackedLeave);
            return this.responseStatusService.showSuccess(
                'create',
                alternateUntrackedLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAlternateUntrackedLeave({ request }: HttpContextContract) {
        const alternateUntrackedLeave = request.body();

        try {
            const AlternateUntrackedLeaveValidate =
                AlternateUntrackedLeaveSchema.safeParse(alternateUntrackedLeave);
            if (!AlternateUntrackedLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AlternateUntrackedLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.alternateUntrackedLeaveService.editAlternateUntrackedLeave(alternateUntrackedLeave);
            return this.responseStatusService.showSuccess(
                'update',
                alternateUntrackedLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
