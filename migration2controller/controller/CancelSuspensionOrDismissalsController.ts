import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CancelSuspensionOrDismissalServices from 'App/Services/CancelSuspensionOrDismissalServices';
import CancelSuspensionOrDismissalSchema from 'App/Validators/CancelSuspensionOrDismissalValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class CancelSuspensionOrDismissalsController extends BaseController {
    constructor(private cancelSuspensionOrDismissalService: CancelSuspensionOrDismissalServices) {
        super();
    }

    public async getCancelSuspensionOrDismissals({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const cancelSuspensionOrDismissalSchema =
                CancelSuspensionOrDismissalSchema.safeParse(requestParams);
            if (!cancelSuspensionOrDismissalSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        cancelSuspensionOrDismissalSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.cancelSuspensionOrDismissalService.getCancelSuspensionOrDismissals(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getCancelSuspensionOrDismissal({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.cancelSuspensionOrDismissalService.getCancelSuspensionOrDismissal,
        );
    }

    public async addCancelSuspensionOrDismissal({ request }: HttpContextContract) {
        const cancelSuspensionOrDismissal = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const CancelSuspensionOrDismissalValidate =
                CancelSuspensionOrDismissalSchema.safeParse(cancelSuspensionOrDismissal);
            if (!CancelSuspensionOrDismissalValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CancelSuspensionOrDismissalValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.cancelSuspensionOrDismissalService.addCancelSuspensionOrDismissal(cancelSuspensionOrDismissal);
            return this.responseStatusService.showSuccess(
                'create',
                cancelSuspensionOrDismissal,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editCancelSuspensionOrDismissal({ request }: HttpContextContract) {
        const cancelSuspensionOrDismissal = request.body();

        try {
            const CancelSuspensionOrDismissalValidate =
                CancelSuspensionOrDismissalSchema.safeParse(cancelSuspensionOrDismissal);
            if (!CancelSuspensionOrDismissalValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CancelSuspensionOrDismissalValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.cancelSuspensionOrDismissalService.editCancelSuspensionOrDismissal(cancelSuspensionOrDismissal);
            return this.responseStatusService.showSuccess(
                'update',
                cancelSuspensionOrDismissal,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
