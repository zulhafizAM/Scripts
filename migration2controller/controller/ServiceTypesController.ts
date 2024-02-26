import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ServiceTypeServices from 'App/Services/ServiceTypeServices';
import ServiceTypeSchema from 'App/Validators/ServiceTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ServiceTypesController extends BaseController {
    constructor(private serviceTypeService: ServiceTypeServices) {
        super();
    }

    public async getServiceTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const serviceTypeSchema =
                ServiceTypeSchema.safeParse(requestParams);
            if (!serviceTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        serviceTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.serviceTypeService.getServiceTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getServiceType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.serviceTypeService.getServiceType,
        );
    }

    public async addServiceType({ request }: HttpContextContract) {
        const serviceType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ServiceTypeValidate =
                ServiceTypeSchema.safeParse(serviceType);
            if (!ServiceTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceTypeService.addServiceType(serviceType);
            return this.responseStatusService.showSuccess(
                'create',
                serviceType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editServiceType({ request }: HttpContextContract) {
        const serviceType = request.body();

        try {
            const ServiceTypeValidate =
                ServiceTypeSchema.safeParse(serviceType);
            if (!ServiceTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceTypeService.editServiceType(serviceType);
            return this.responseStatusService.showSuccess(
                'update',
                serviceType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
