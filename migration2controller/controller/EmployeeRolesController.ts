import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EmployeeRoleServices from 'App/Services/EmployeeRoleServices';
import EmployeeRoleSchema from 'App/Validators/EmployeeRoleValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EmployeeRolesController extends BaseController {
    constructor(private employeeRoleService: EmployeeRoleServices) {
        super();
    }

    public async getEmployeeRoles({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const employeeRoleSchema =
                EmployeeRoleSchema.safeParse(requestParams);
            if (!employeeRoleSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        employeeRoleSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.employeeRoleService.getEmployeeRoles(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEmployeeRole({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.employeeRoleService.getEmployeeRole,
        );
    }

    public async addEmployeeRole({ request }: HttpContextContract) {
        const employeeRole = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EmployeeRoleValidate =
                EmployeeRoleSchema.safeParse(employeeRole);
            if (!EmployeeRoleValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeRoleValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeRoleService.addEmployeeRole(employeeRole);
            return this.responseStatusService.showSuccess(
                'create',
                employeeRole,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEmployeeRole({ request }: HttpContextContract) {
        const employeeRole = request.body();

        try {
            const EmployeeRoleValidate =
                EmployeeRoleSchema.safeParse(employeeRole);
            if (!EmployeeRoleValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmployeeRoleValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employeeRoleService.editEmployeeRole(employeeRole);
            return this.responseStatusService.showSuccess(
                'update',
                employeeRole,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
