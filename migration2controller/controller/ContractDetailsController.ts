import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ContractDetailServices from 'App/Services/ContractDetailServices';
import ContractDetailSchema from 'App/Validators/ContractDetailValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ContractDetailsController extends BaseController {
    constructor(private contractDetailService: ContractDetailServices) {
        super();
    }

    public async getContractDetails({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const contractDetailSchema =
                ContractDetailSchema.safeParse(requestParams);
            if (!contractDetailSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        contractDetailSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.contractDetailService.getContractDetails(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getContractDetail({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.contractDetailService.getContractDetail,
        );
    }

    public async addContractDetail({ request }: HttpContextContract) {
        const contractDetail = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ContractDetailValidate =
                ContractDetailSchema.safeParse(contractDetail);
            if (!ContractDetailValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractDetailValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractDetailService.addContractDetail(contractDetail);
            return this.responseStatusService.showSuccess(
                'create',
                contractDetail,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editContractDetail({ request }: HttpContextContract) {
        const contractDetail = request.body();

        try {
            const ContractDetailValidate =
                ContractDetailSchema.safeParse(contractDetail);
            if (!ContractDetailValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ContractDetailValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.contractDetailService.editContractDetail(contractDetail);
            return this.responseStatusService.showSuccess(
                'update',
                contractDetail,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
