import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EmployeeServices from 'App/Services/EmployeeServices';
import EmployeeSchema from 'App/Validators/EmployeeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EmployeesController extends BaseController {
    constructor(private employeeService: EmployeeServices) {
        super();
    }

    public async getEmployees({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const employeeSchema =
                EmployeeSchema.safeParse(requestParams);
            if (!employeeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        employeeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.employeeService.getEmployees(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEmployee({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.employeeService.getEmployee,
        );
    }

    public async addEmployee({ request }: HttpContextContract) {
        const employee = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EmployeeValidate =
                EmployeeSchema.safeParse(employee);
            if (!EmployeeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeService.addEmployee(employee);
            return this.responseStatusService.showSuccess(
                'create',
                employee,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEmployee({ request }: HttpContextContract) {
        const employee = request.body();

        try {
            const EmployeeValidate =
                EmployeeSchema.safeParse(employee);
            if (!EmployeeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeService.editEmployee(employee);
            return this.responseStatusService.showSuccess(
                'update',
                employee,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
