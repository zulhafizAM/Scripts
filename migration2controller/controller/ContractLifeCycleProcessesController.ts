import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ContractLifeCycleProcessServices from 'App/Services/ContractLifeCycleProcessServices';
import ContractLifeCycleProcessSchema from 'App/Validators/ContractLifeCycleProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ContractLifeCycleProcessesController extends BaseController {
    constructor(private contractLifeCycleProcessService: ContractLifeCycleProcessServices) {
        super();
    }

    public async getContractLifeCycleProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const contractLifeCycleProcessSchema =
                ContractLifeCycleProcessSchema.safeParse(requestParams);
            if (!contractLifeCycleProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        contractLifeCycleProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.contractLifeCycleProcessService.getContractLifeCycleProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getContractLifeCycleProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.contractLifeCycleProcessService.getContractLifeCycleProcess,
        );
    }

    public async addContractLifeCycleProcess({ request }: HttpContextContract) {
        const contractLifeCycleProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ContractLifeCycleProcessValidate =
                ContractLifeCycleProcessSchema.safeParse(contractLifeCycleProcess);
            if (!ContractLifeCycleProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractLifeCycleProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractLifeCycleProcessService.addContractLifeCycleProcess(contractLifeCycleProcess);
            return this.responseStatusService.showSuccess(
                'create',
                contractLifeCycleProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editContractLifeCycleProcess({ request }: HttpContextContract) {
        const contractLifeCycleProcess = request.body();

        try {
            const ContractLifeCycleProcessValidate =
                ContractLifeCycleProcessSchema.safeParse(contractLifeCycleProcess);
            if (!ContractLifeCycleProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractLifeCycleProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractLifeCycleProcessService.editContractLifeCycleProcess(contractLifeCycleProcess);
            return this.responseStatusService.showSuccess(
                'update',
                contractLifeCycleProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
