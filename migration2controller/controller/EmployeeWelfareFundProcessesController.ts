import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EmployeeWelfareFundProcessServices from 'App/Services/EmployeeWelfareFundProcessServices';
import EmployeeWelfareFundProcessSchema from 'App/Validators/EmployeeWelfareFundProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EmployeeWelfareFundProcessesController extends BaseController {
    constructor(private employeeWelfareFundProcessService: EmployeeWelfareFundProcessServices) {
        super();
    }

    public async getEmployeeWelfareFundProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const employeeWelfareFundProcessSchema =
                EmployeeWelfareFundProcessSchema.safeParse(requestParams);
            if (!employeeWelfareFundProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        employeeWelfareFundProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.employeeWelfareFundProcessService.getEmployeeWelfareFundProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEmployeeWelfareFundProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.employeeWelfareFundProcessService.getEmployeeWelfareFundProcess,
        );
    }

    public async addEmployeeWelfareFundProcess({ request }: HttpContextContract) {
        const employeeWelfareFundProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EmployeeWelfareFundProcessValidate =
                EmployeeWelfareFundProcessSchema.safeParse(employeeWelfareFundProcess);
            if (!EmployeeWelfareFundProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeWelfareFundProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeWelfareFundProcessService.addEmployeeWelfareFundProcess(employeeWelfareFundProcess);
            return this.responseStatusService.showSuccess(
                'create',
                employeeWelfareFundProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEmployeeWelfareFundProcess({ request }: HttpContextContract) {
        const employeeWelfareFundProcess = request.body();

        try {
            const EmployeeWelfareFundProcessValidate =
                EmployeeWelfareFundProcessSchema.safeParse(employeeWelfareFundProcess);
            if (!EmployeeWelfareFundProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeWelfareFundProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeWelfareFundProcessService.editEmployeeWelfareFundProcess(employeeWelfareFundProcess);
            return this.responseStatusService.showSuccess(
                'update',
                employeeWelfareFundProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
