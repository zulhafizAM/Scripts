import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import WithdrawalAnnualLeaveServices from 'App/Services/WithdrawalAnnualLeaveServices';
import WithdrawalAnnualLeaveSchema from 'App/Validators/WithdrawalAnnualLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class WithdrawalAnnualLeavesController extends BaseController {
    constructor(private withdrawalAnnualLeaveService: WithdrawalAnnualLeaveServices) {
        super();
    }

    public async getWithdrawalAnnualLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const withdrawalAnnualLeaveSchema =
                WithdrawalAnnualLeaveSchema.safeParse(requestParams);
            if (!withdrawalAnnualLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        withdrawalAnnualLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.withdrawalAnnualLeaveService.getWithdrawalAnnualLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getWithdrawalAnnualLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.withdrawalAnnualLeaveService.getWithdrawalAnnualLeave,
        );
    }

    public async addWithdrawalAnnualLeave({ request }: HttpContextContract) {
        const withdrawalAnnualLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const WithdrawalAnnualLeaveValidate =
                WithdrawalAnnualLeaveSchema.safeParse(withdrawalAnnualLeave);
            if (!WithdrawalAnnualLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithdrawalAnnualLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withdrawalAnnualLeaveService.addWithdrawalAnnualLeave(withdrawalAnnualLeave);
            return this.responseStatusService.showSuccess(
                'create',
                withdrawalAnnualLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editWithdrawalAnnualLeave({ request }: HttpContextContract) {
        const withdrawalAnnualLeave = request.body();

        try {
            const WithdrawalAnnualLeaveValidate =
                WithdrawalAnnualLeaveSchema.safeParse(withdrawalAnnualLeave);
            if (!WithdrawalAnnualLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithdrawalAnnualLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withdrawalAnnualLeaveService.editWithdrawalAnnualLeave(withdrawalAnnualLeave);
            return this.responseStatusService.showSuccess(
                'update',
                withdrawalAnnualLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
