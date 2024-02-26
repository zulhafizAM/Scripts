import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import WithdrawalAnnualLeaveProcessServices from 'App/Services/WithdrawalAnnualLeaveProcessServices';
import WithdrawalAnnualLeaveProcessSchema from 'App/Validators/WithdrawalAnnualLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class WithdrawalAnnualLeaveProcessesController extends BaseController {
    constructor(private withdrawalAnnualLeaveProcessService: WithdrawalAnnualLeaveProcessServices) {
        super();
    }

    public async getWithdrawalAnnualLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const withdrawalAnnualLeaveProcessSchema =
                WithdrawalAnnualLeaveProcessSchema.safeParse(requestParams);
            if (!withdrawalAnnualLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        withdrawalAnnualLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.withdrawalAnnualLeaveProcessService.getWithdrawalAnnualLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getWithdrawalAnnualLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.withdrawalAnnualLeaveProcessService.getWithdrawalAnnualLeaveProcess,
        );
    }

    public async addWithdrawalAnnualLeaveProcess({ request }: HttpContextContract) {
        const withdrawalAnnualLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const WithdrawalAnnualLeaveProcessValidate =
                WithdrawalAnnualLeaveProcessSchema.safeParse(withdrawalAnnualLeaveProcess);
            if (!WithdrawalAnnualLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithdrawalAnnualLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withdrawalAnnualLeaveProcessService.addWithdrawalAnnualLeaveProcess(withdrawalAnnualLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                withdrawalAnnualLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editWithdrawalAnnualLeaveProcess({ request }: HttpContextContract) {
        const withdrawalAnnualLeaveProcess = request.body();

        try {
            const WithdrawalAnnualLeaveProcessValidate =
                WithdrawalAnnualLeaveProcessSchema.safeParse(withdrawalAnnualLeaveProcess);
            if (!WithdrawalAnnualLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithdrawalAnnualLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withdrawalAnnualLeaveProcessService.editWithdrawalAnnualLeaveProcess(withdrawalAnnualLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                withdrawalAnnualLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
