import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ConfirmationMoreThan3Services from 'App/Services/ConfirmationMoreThan3Services';
import ConfirmationMoreThan3Schema from 'App/Validators/ConfirmationMoreThan3Validator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ConfirmationMoreThan3sController extends BaseController {
    constructor(private confirmationMoreThan3Service: ConfirmationMoreThan3Services) {
        super();
    }

    public async getConfirmationMoreThan3s({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const confirmationMoreThan3Schema =
                ConfirmationMoreThan3Schema.safeParse(requestParams);
            if (!confirmationMoreThan3Schema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        confirmationMoreThan3Schema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.confirmationMoreThan3Service.getConfirmationMoreThan3s(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getConfirmationMoreThan3({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.confirmationMoreThan3Service.getConfirmationMoreThan3,
        );
    }

    public async addConfirmationMoreThan3({ request }: HttpContextContract) {
        const confirmationMoreThan3 = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ConfirmationMoreThan3Validate =
                ConfirmationMoreThan3Schema.safeParse(confirmationMoreThan3);
            if (!ConfirmationMoreThan3Validate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ConfirmationMoreThan3Validate.error.errors,
                    );

                return errorMessage;
            }
            await this.confirmationMoreThan3Service.addConfirmationMoreThan3(confirmationMoreThan3);
            return this.responseStatusService.showSuccess(
                'create',
                confirmationMoreThan3,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editConfirmationMoreThan3({ request }: HttpContextContract) {
        const confirmationMoreThan3 = request.body();

        try {
            const ConfirmationMoreThan3Validate =
                ConfirmationMoreThan3Schema.safeParse(confirmationMoreThan3);
            if (!ConfirmationMoreThan3Validate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ConfirmationMoreThan3Validate.error.errors,
                    );

                return errorMessage;
            }
            await this.confirmationMoreThan3Service.editConfirmationMoreThan3(confirmationMoreThan3);
            return this.responseStatusService.showSuccess(
                'update',
                confirmationMoreThan3,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
