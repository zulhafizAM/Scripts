import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SalaryDeductionServices from 'App/Services/SalaryDeductionServices';
import SalaryDeductionSchema from 'App/Validators/SalaryDeductionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SalaryDeductionsController extends BaseController {
    constructor(private salaryDeductionService: SalaryDeductionServices) {
        super();
    }

    public async getSalaryDeductions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const salaryDeductionSchema =
                SalaryDeductionSchema.safeParse(requestParams);
            if (!salaryDeductionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        salaryDeductionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.salaryDeductionService.getSalaryDeductions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSalaryDeduction({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.salaryDeductionService.getSalaryDeduction,
        );
    }

    public async addSalaryDeduction({ request }: HttpContextContract) {
        const salaryDeduction = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SalaryDeductionValidate =
                SalaryDeductionSchema.safeParse(salaryDeduction);
            if (!SalaryDeductionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SalaryDeductionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.salaryDeductionService.addSalaryDeduction(salaryDeduction);
            return this.responseStatusService.showSuccess(
                'create',
                salaryDeduction,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSalaryDeduction({ request }: HttpContextContract) {
        const salaryDeduction = request.body();

        try {
            const SalaryDeductionValidate =
                SalaryDeductionSchema.safeParse(salaryDeduction);
            if (!SalaryDeductionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SalaryDeductionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.salaryDeductionService.editSalaryDeduction(salaryDeduction);
            return this.responseStatusService.showSuccess(
                'update',
                salaryDeduction,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
