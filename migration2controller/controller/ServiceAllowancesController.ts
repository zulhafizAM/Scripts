import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ServiceAllowanceServices from 'App/Services/ServiceAllowanceServices';
import ServiceAllowanceSchema from 'App/Validators/ServiceAllowanceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ServiceAllowancesController extends BaseController {
    constructor(private serviceAllowanceService: ServiceAllowanceServices) {
        super();
    }

    public async getServiceAllowances({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const serviceAllowanceSchema =
                ServiceAllowanceSchema.safeParse(requestParams);
            if (!serviceAllowanceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        serviceAllowanceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.serviceAllowanceService.getServiceAllowances(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getServiceAllowance({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.serviceAllowanceService.getServiceAllowance,
        );
    }

    public async addServiceAllowance({ request }: HttpContextContract) {
        const serviceAllowance = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ServiceAllowanceValidate =
                ServiceAllowanceSchema.safeParse(serviceAllowance);
            if (!ServiceAllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceAllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceAllowanceService.addServiceAllowance(serviceAllowance);
            return this.responseStatusService.showSuccess(
                'create',
                serviceAllowance,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editServiceAllowance({ request }: HttpContextContract) {
        const serviceAllowance = request.body();

        try {
            const ServiceAllowanceValidate =
                ServiceAllowanceSchema.safeParse(serviceAllowance);
            if (!ServiceAllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ServiceAllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.serviceAllowanceService.editServiceAllowance(serviceAllowance);
            return this.responseStatusService.showSuccess(
                'update',
                serviceAllowance,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
