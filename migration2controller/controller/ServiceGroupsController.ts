import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ServiceGroupServices from 'App/Services/ServiceGroupServices';
import ServiceGroupSchema from 'App/Validators/ServiceGroupValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ServiceGroupsController extends BaseController {
    constructor(private serviceGroupService: ServiceGroupServices) {
        super();
    }

    public async getServiceGroups({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const serviceGroupSchema =
                ServiceGroupSchema.safeParse(requestParams);
            if (!serviceGroupSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        serviceGroupSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.serviceGroupService.getServiceGroups(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getServiceGroup({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.serviceGroupService.getServiceGroup,
        );
    }

    public async addServiceGroup({ request }: HttpContextContract) {
        const serviceGroup = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ServiceGroupValidate =
                ServiceGroupSchema.safeParse(serviceGroup);
            if (!ServiceGroupValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceGroupValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceGroupService.addServiceGroup(serviceGroup);
            return this.responseStatusService.showSuccess(
                'create',
                serviceGroup,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editServiceGroup({ request }: HttpContextContract) {
        const serviceGroup = request.body();

        try {
            const ServiceGroupValidate =
                ServiceGroupSchema.safeParse(serviceGroup);
            if (!ServiceGroupValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceGroupValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceGroupService.editServiceGroup(serviceGroup);
            return this.responseStatusService.showSuccess(
                'update',
                serviceGroup,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
