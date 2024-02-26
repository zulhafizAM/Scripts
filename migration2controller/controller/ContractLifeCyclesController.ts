import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ContractLifeCycleServices from 'App/Services/ContractLifeCycleServices';
import ContractLifeCycleSchema from 'App/Validators/ContractLifeCycleValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ContractLifeCyclesController extends BaseController {
    constructor(private contractLifeCycleService: ContractLifeCycleServices) {
        super();
    }

    public async getContractLifeCycles({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const contractLifeCycleSchema =
                ContractLifeCycleSchema.safeParse(requestParams);
            if (!contractLifeCycleSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        contractLifeCycleSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.contractLifeCycleService.getContractLifeCycles(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getContractLifeCycle({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.contractLifeCycleService.getContractLifeCycle,
        );
    }

    public async addContractLifeCycle({ request }: HttpContextContract) {
        const contractLifeCycle = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ContractLifeCycleValidate =
                ContractLifeCycleSchema.safeParse(contractLifeCycle);
            if (!ContractLifeCycleValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractLifeCycleValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractLifeCycleService.addContractLifeCycle(contractLifeCycle);
            return this.responseStatusService.showSuccess(
                'create',
                contractLifeCycle,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editContractLifeCycle({ request }: HttpContextContract) {
        const contractLifeCycle = request.body();

        try {
            const ContractLifeCycleValidate =
                ContractLifeCycleSchema.safeParse(contractLifeCycle);
            if (!ContractLifeCycleValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractLifeCycleValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractLifeCycleService.editContractLifeCycle(contractLifeCycle);
            return this.responseStatusService.showSuccess(
                'update',
                contractLifeCycle,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
