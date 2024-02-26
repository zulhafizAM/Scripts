import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ServiceConfirmationServices from 'App/Services/ServiceConfirmationServices';
import ServiceConfirmationSchema from 'App/Validators/ServiceConfirmationValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ServiceConfirmationsController extends BaseController {
    constructor(private serviceConfirmationService: ServiceConfirmationServices) {
        super();
    }

    public async getServiceConfirmations({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const serviceConfirmationSchema =
                ServiceConfirmationSchema.safeParse(requestParams);
            if (!serviceConfirmationSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        serviceConfirmationSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.serviceConfirmationService.getServiceConfirmations(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getServiceConfirmation({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.serviceConfirmationService.getServiceConfirmation,
        );
    }

    public async addServiceConfirmation({ request }: HttpContextContract) {
        const serviceConfirmation = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ServiceConfirmationValidate =
                ServiceConfirmationSchema.safeParse(serviceConfirmation);
            if (!ServiceConfirmationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceConfirmationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceConfirmationService.addServiceConfirmation(serviceConfirmation);
            return this.responseStatusService.showSuccess(
                'create',
                serviceConfirmation,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editServiceConfirmation({ request }: HttpContextContract) {
        const serviceConfirmation = request.body();

        try {
            const ServiceConfirmationValidate =
                ServiceConfirmationSchema.safeParse(serviceConfirmation);
            if (!ServiceConfirmationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceConfirmationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceConfirmationService.editServiceConfirmation(serviceConfirmation);
            return this.responseStatusService.showSuccess(
                'update',
                serviceConfirmation,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
