import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ContractAppointmentsProcessServices from 'App/Services/ContractAppointmentsProcessServices';
import ContractAppointmentsProcessSchema from 'App/Validators/ContractAppointmentsProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ContractAppointmentsProcessesController extends BaseController {
    constructor(private contractAppointmentsProcessService: ContractAppointmentsProcessServices) {
        super();
    }

    public async getContractAppointmentsProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const contractAppointmentsProcessSchema =
                ContractAppointmentsProcessSchema.safeParse(requestParams);
            if (!contractAppointmentsProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        contractAppointmentsProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.contractAppointmentsProcessService.getContractAppointmentsProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getContractAppointmentsProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.contractAppointmentsProcessService.getContractAppointmentsProcess,
        );
    }

    public async addContractAppointmentsProcess({ request }: HttpContextContract) {
        const contractAppointmentsProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ContractAppointmentsProcessValidate =
                ContractAppointmentsProcessSchema.safeParse(contractAppointmentsProcess);
            if (!ContractAppointmentsProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractAppointmentsProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractAppointmentsProcessService.addContractAppointmentsProcess(contractAppointmentsProcess);
            return this.responseStatusService.showSuccess(
                'create',
                contractAppointmentsProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editContractAppointmentsProcess({ request }: HttpContextContract) {
        const contractAppointmentsProcess = request.body();

        try {
            const ContractAppointmentsProcessValidate =
                ContractAppointmentsProcessSchema.safeParse(contractAppointmentsProcess);
            if (!ContractAppointmentsProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractAppointmentsProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractAppointmentsProcessService.editContractAppointmentsProcess(contractAppointmentsProcess);
            return this.responseStatusService.showSuccess(
                'update',
                contractAppointmentsProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
