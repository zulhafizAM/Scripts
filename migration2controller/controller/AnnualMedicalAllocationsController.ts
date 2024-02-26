import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AnnualMedicalAllocationServices from 'App/Services/AnnualMedicalAllocationServices';
import AnnualMedicalAllocationSchema from 'App/Validators/AnnualMedicalAllocationValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AnnualMedicalAllocationsController extends BaseController {
    constructor(private annualMedicalAllocationService: AnnualMedicalAllocationServices) {
        super();
    }

    public async getAnnualMedicalAllocations({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const annualMedicalAllocationSchema =
                AnnualMedicalAllocationSchema.safeParse(requestParams);
            if (!annualMedicalAllocationSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        annualMedicalAllocationSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.annualMedicalAllocationService.getAnnualMedicalAllocations(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAnnualMedicalAllocation({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.annualMedicalAllocationService.getAnnualMedicalAllocation,
        );
    }

    public async addAnnualMedicalAllocation({ request }: HttpContextContract) {
        const annualMedicalAllocation = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AnnualMedicalAllocationValidate =
                AnnualMedicalAllocationSchema.safeParse(annualMedicalAllocation);
            if (!AnnualMedicalAllocationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AnnualMedicalAllocationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.annualMedicalAllocationService.addAnnualMedicalAllocation(annualMedicalAllocation);
            return this.responseStatusService.showSuccess(
                'create',
                annualMedicalAllocation,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAnnualMedicalAllocation({ request }: HttpContextContract) {
        const annualMedicalAllocation = request.body();

        try {
            const AnnualMedicalAllocationValidate =
                AnnualMedicalAllocationSchema.safeParse(annualMedicalAllocation);
            if (!AnnualMedicalAllocationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AnnualMedicalAllocationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.annualMedicalAllocationService.editAnnualMedicalAllocation(annualMedicalAllocation);
            return this.responseStatusService.showSuccess(
                'update',
                annualMedicalAllocation,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
