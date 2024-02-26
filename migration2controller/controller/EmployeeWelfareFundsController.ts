import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EmployeeWelfareFundServices from 'App/Services/EmployeeWelfareFundServices';
import EmployeeWelfareFundSchema from 'App/Validators/EmployeeWelfareFundValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EmployeeWelfareFundsController extends BaseController {
    constructor(private employeeWelfareFundService: EmployeeWelfareFundServices) {
        super();
    }

    public async getEmployeeWelfareFunds({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const employeeWelfareFundSchema =
                EmployeeWelfareFundSchema.safeParse(requestParams);
            if (!employeeWelfareFundSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        employeeWelfareFundSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.employeeWelfareFundService.getEmployeeWelfareFunds(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEmployeeWelfareFund({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.employeeWelfareFundService.getEmployeeWelfareFund,
        );
    }

    public async addEmployeeWelfareFund({ request }: HttpContextContract) {
        const employeeWelfareFund = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EmployeeWelfareFundValidate =
                EmployeeWelfareFundSchema.safeParse(employeeWelfareFund);
            if (!EmployeeWelfareFundValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeWelfareFundValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeWelfareFundService.addEmployeeWelfareFund(employeeWelfareFund);
            return this.responseStatusService.showSuccess(
                'create',
                employeeWelfareFund,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEmployeeWelfareFund({ request }: HttpContextContract) {
        const employeeWelfareFund = request.body();

        try {
            const EmployeeWelfareFundValidate =
                EmployeeWelfareFundSchema.safeParse(employeeWelfareFund);
            if (!EmployeeWelfareFundValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeWelfareFundValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeWelfareFundService.editEmployeeWelfareFund(employeeWelfareFund);
            return this.responseStatusService.showSuccess(
                'update',
                employeeWelfareFund,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
