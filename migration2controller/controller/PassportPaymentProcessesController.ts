import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PassportPaymentProcessServices from 'App/Services/PassportPaymentProcessServices';
import PassportPaymentProcessSchema from 'App/Validators/PassportPaymentProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PassportPaymentProcessesController extends BaseController {
    constructor(private passportPaymentProcessService: PassportPaymentProcessServices) {
        super();
    }

    public async getPassportPaymentProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const passportPaymentProcessSchema =
                PassportPaymentProcessSchema.safeParse(requestParams);
            if (!passportPaymentProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        passportPaymentProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.passportPaymentProcessService.getPassportPaymentProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPassportPaymentProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.passportPaymentProcessService.getPassportPaymentProcess,
        );
    }

    public async addPassportPaymentProcess({ request }: HttpContextContract) {
        const passportPaymentProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PassportPaymentProcessValidate =
                PassportPaymentProcessSchema.safeParse(passportPaymentProcess);
            if (!PassportPaymentProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PassportPaymentProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.passportPaymentProcessService.addPassportPaymentProcess(passportPaymentProcess);
            return this.responseStatusService.showSuccess(
                'create',
                passportPaymentProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPassportPaymentProcess({ request }: HttpContextContract) {
        const passportPaymentProcess = request.body();

        try {
            const PassportPaymentProcessValidate =
                PassportPaymentProcessSchema.safeParse(passportPaymentProcess);
            if (!PassportPaymentProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PassportPaymentProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.passportPaymentProcessService.editPassportPaymentProcess(passportPaymentProcess);
            return this.responseStatusService.showSuccess(
                'update',
                passportPaymentProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
