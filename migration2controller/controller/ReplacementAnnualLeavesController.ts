import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ReplacementAnnualLeaveServices from 'App/Services/ReplacementAnnualLeaveServices';
import ReplacementAnnualLeaveSchema from 'App/Validators/ReplacementAnnualLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ReplacementAnnualLeavesController extends BaseController {
    constructor(private replacementAnnualLeaveService: ReplacementAnnualLeaveServices) {
        super();
    }

    public async getReplacementAnnualLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const replacementAnnualLeaveSchema =
                ReplacementAnnualLeaveSchema.safeParse(requestParams);
            if (!replacementAnnualLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        replacementAnnualLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.replacementAnnualLeaveService.getReplacementAnnualLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getReplacementAnnualLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.replacementAnnualLeaveService.getReplacementAnnualLeave,
        );
    }

    public async addReplacementAnnualLeave({ request }: HttpContextContract) {
        const replacementAnnualLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ReplacementAnnualLeaveValidate =
                ReplacementAnnualLeaveSchema.safeParse(replacementAnnualLeave);
            if (!ReplacementAnnualLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ReplacementAnnualLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.replacementAnnualLeaveService.addReplacementAnnualLeave(replacementAnnualLeave);
            return this.responseStatusService.showSuccess(
                'create',
                replacementAnnualLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editReplacementAnnualLeave({ request }: HttpContextContract) {
        const replacementAnnualLeave = request.body();

        try {
            const ReplacementAnnualLeaveValidate =
                ReplacementAnnualLeaveSchema.safeParse(replacementAnnualLeave);
            if (!ReplacementAnnualLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ReplacementAnnualLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.replacementAnnualLeaveService.editReplacementAnnualLeave(replacementAnnualLeave);
            return this.responseStatusService.showSuccess(
                'update',
                replacementAnnualLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
