import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DepartmentServices from 'App/Services/DepartmentServices';
import DepartmentSchema from 'App/Validators/DepartmentValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class DepartmentsController extends BaseController {
    constructor(private departmentService: DepartmentServices) {
        super();
    }

    public async getDepartments({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const departmentSchema =
                DepartmentSchema.safeParse(requestParams);
            if (!departmentSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        departmentSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.departmentService.getDepartments(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getDepartment({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.departmentService.getDepartment,
        );
    }

    public async addDepartment({ request }: HttpContextContract) {
        const department = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const DepartmentValidate =
                DepartmentSchema.safeParse(department);
            if (!DepartmentValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DepartmentValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.departmentService.addDepartment(department);
            return this.responseStatusService.showSuccess(
                'create',
                department,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editDepartment({ request }: HttpContextContract) {
        const department = request.body();

        try {
            const DepartmentValidate =
                DepartmentSchema.safeParse(department);
            if (!DepartmentValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DepartmentValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.departmentService.editDepartment(department);
            return this.responseStatusService.showSuccess(
                'update',
                department,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
