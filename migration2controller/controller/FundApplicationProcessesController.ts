import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import FundApplicationProcessServices from 'App/Services/FundApplicationProcessServices';
import FundApplicationProcessSchema from 'App/Validators/FundApplicationProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class FundApplicationProcessesController extends BaseController {
    constructor(private fundApplicationProcessService: FundApplicationProcessServices) {
        super();
    }

    public async getFundApplicationProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const fundApplicationProcessSchema =
                FundApplicationProcessSchema.safeParse(requestParams);
            if (!fundApplicationProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        fundApplicationProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.fundApplicationProcessService.getFundApplicationProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getFundApplicationProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.fundApplicationProcessService.getFundApplicationProcess,
        );
    }

    public async addFundApplicationProcess({ request }: HttpContextContract) {
        const fundApplicationProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const FundApplicationProcessValidate =
                FundApplicationProcessSchema.safeParse(fundApplicationProcess);
            if (!FundApplicationProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FundApplicationProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.fundApplicationProcessService.addFundApplicationProcess(fundApplicationProcess);
            return this.responseStatusService.showSuccess(
                'create',
                fundApplicationProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editFundApplicationProcess({ request }: HttpContextContract) {
        const fundApplicationProcess = request.body();

        try {
            const FundApplicationProcessValidate =
                FundApplicationProcessSchema.safeParse(fundApplicationProcess);
            if (!FundApplicationProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FundApplicationProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.fundApplicationProcessService.editFundApplicationProcess(fundApplicationProcess);
            return this.responseStatusService.showSuccess(
                'update',
                fundApplicationProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
