import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SalaryServices from 'App/Services/SalaryServices';
import SalarySchema from 'App/Validators/SalaryValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SalariesController extends BaseController {
    constructor(private salaryService: SalaryServices) {
        super();
    }

    public async getSalaries({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const salarySchema =
                SalarySchema.safeParse(requestParams);
            if (!salarySchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        salarySchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.salaryService.getSalarys(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSalary({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.salaryService.getSalary,
        );
    }

    public async addSalary({ request }: HttpContextContract) {
        const salary = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SalaryValidate =
                SalarySchema.safeParse(salary);
            if (!SalaryValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SalaryValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.salaryService.addSalary(salary);
            return this.responseStatusService.showSuccess(
                'create',
                salary,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSalary({ request }: HttpContextContract) {
        const salary = request.body();

        try {
            const SalaryValidate =
                SalarySchema.safeParse(salary);
            if (!SalaryValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SalaryValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.salaryService.editSalary(salary);
            return this.responseStatusService.showSuccess(
                'update',
                salary,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
