import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ServiceConfirmationProcessServices from 'App/Services/ServiceConfirmationProcessServices';
import ServiceConfirmationProcessSchema from 'App/Validators/ServiceConfirmationProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ServiceConfirmationProcessesController extends BaseController {
    constructor(private serviceConfirmationProcessService: ServiceConfirmationProcessServices) {
        super();
    }

    public async getServiceConfirmationProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const serviceConfirmationProcessSchema =
                ServiceConfirmationProcessSchema.safeParse(requestParams);
            if (!serviceConfirmationProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        serviceConfirmationProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.serviceConfirmationProcessService.getServiceConfirmationProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getServiceConfirmationProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.serviceConfirmationProcessService.getServiceConfirmationProcess,
        );
    }

    public async addServiceConfirmationProcess({ request }: HttpContextContract) {
        const serviceConfirmationProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ServiceConfirmationProcessValidate =
                ServiceConfirmationProcessSchema.safeParse(serviceConfirmationProcess);
            if (!ServiceConfirmationProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceConfirmationProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceConfirmationProcessService.addServiceConfirmationProcess(serviceConfirmationProcess);
            return this.responseStatusService.showSuccess(
                'create',
                serviceConfirmationProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editServiceConfirmationProcess({ request }: HttpContextContract) {
        const serviceConfirmationProcess = request.body();

        try {
            const ServiceConfirmationProcessValidate =
                ServiceConfirmationProcessSchema.safeParse(serviceConfirmationProcess);
            if (!ServiceConfirmationProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceConfirmationProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceConfirmationProcessService.editServiceConfirmationProcess(serviceConfirmationProcess);
            return this.responseStatusService.showSuccess(
                'update',
                serviceConfirmationProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
