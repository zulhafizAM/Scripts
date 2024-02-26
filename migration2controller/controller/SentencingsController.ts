import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SentencingServices from 'App/Services/SentencingServices';
import SentencingSchema from 'App/Validators/SentencingValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SentencingsController extends BaseController {
    constructor(private sentencingService: SentencingServices) {
        super();
    }

    public async getSentencings({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const sentencingSchema =
                SentencingSchema.safeParse(requestParams);
            if (!sentencingSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        sentencingSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.sentencingService.getSentencings(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSentencing({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.sentencingService.getSentencing,
        );
    }

    public async addSentencing({ request }: HttpContextContract) {
        const sentencing = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SentencingValidate =
                SentencingSchema.safeParse(sentencing);
            if (!SentencingValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SentencingValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.sentencingService.addSentencing(sentencing);
            return this.responseStatusService.showSuccess(
                'create',
                sentencing,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSentencing({ request }: HttpContextContract) {
        const sentencing = request.body();

        try {
            const SentencingValidate =
                SentencingSchema.safeParse(sentencing);
            if (!SentencingValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SentencingValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.sentencingService.editSentencing(sentencing);
            return this.responseStatusService.showSuccess(
                'update',
                sentencing,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
