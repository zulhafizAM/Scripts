import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import FundReimbursementProcessServices from 'App/Services/FundReimbursementProcessServices';
import FundReimbursementProcessSchema from 'App/Validators/FundReimbursementProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class FundReimbursementProcessesController extends BaseController {
    constructor(private fundReimbursementProcessService: FundReimbursementProcessServices) {
        super();
    }

    public async getFundReimbursementProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const fundReimbursementProcessSchema =
                FundReimbursementProcessSchema.safeParse(requestParams);
            if (!fundReimbursementProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        fundReimbursementProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.fundReimbursementProcessService.getFundReimbursementProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getFundReimbursementProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.fundReimbursementProcessService.getFundReimbursementProcess,
        );
    }

    public async addFundReimbursementProcess({ request }: HttpContextContract) {
        const fundReimbursementProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const FundReimbursementProcessValidate =
                FundReimbursementProcessSchema.safeParse(fundReimbursementProcess);
            if (!FundReimbursementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FundReimbursementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.fundReimbursementProcessService.addFundReimbursementProcess(fundReimbursementProcess);
            return this.responseStatusService.showSuccess(
                'create',
                fundReimbursementProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editFundReimbursementProcess({ request }: HttpContextContract) {
        const fundReimbursementProcess = request.body();

        try {
            const FundReimbursementProcessValidate =
                FundReimbursementProcessSchema.safeParse(fundReimbursementProcess);
            if (!FundReimbursementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FundReimbursementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.fundReimbursementProcessService.editFundReimbursementProcess(fundReimbursementProcess);
            return this.responseStatusService.showSuccess(
                'update',
                fundReimbursementProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
