import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import OnSuspensionOrDismissalServices from 'App/Services/OnSuspensionOrDismissalServices';
import OnSuspensionOrDismissalSchema from 'App/Validators/OnSuspensionOrDismissalValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class OnSuspensionOrDismissalsController extends BaseController {
    constructor(private onSuspensionOrDismissalService: OnSuspensionOrDismissalServices) {
        super();
    }

    public async getOnSuspensionOrDismissals({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const onSuspensionOrDismissalSchema =
                OnSuspensionOrDismissalSchema.safeParse(requestParams);
            if (!onSuspensionOrDismissalSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        onSuspensionOrDismissalSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.onSuspensionOrDismissalService.getOnSuspensionOrDismissals(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getOnSuspensionOrDismissal({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.onSuspensionOrDismissalService.getOnSuspensionOrDismissal,
        );
    }

    public async addOnSuspensionOrDismissal({ request }: HttpContextContract) {
        const onSuspensionOrDismissal = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const OnSuspensionOrDismissalValidate =
                OnSuspensionOrDismissalSchema.safeParse(onSuspensionOrDismissal);
            if (!OnSuspensionOrDismissalValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        OnSuspensionOrDismissalValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.onSuspensionOrDismissalService.addOnSuspensionOrDismissal(onSuspensionOrDismissal);
            return this.responseStatusService.showSuccess(
                'create',
                onSuspensionOrDismissal,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editOnSuspensionOrDismissal({ request }: HttpContextContract) {
        const onSuspensionOrDismissal = request.body();

        try {
            const OnSuspensionOrDismissalValidate =
                OnSuspensionOrDismissalSchema.safeParse(onSuspensionOrDismissal);
            if (!OnSuspensionOrDismissalValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        OnSuspensionOrDismissalValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.onSuspensionOrDismissalService.editOnSuspensionOrDismissal(onSuspensionOrDismissal);
            return this.responseStatusService.showSuccess(
                'update',
                onSuspensionOrDismissal,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
