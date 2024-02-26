import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EmploymentStatusServices from 'App/Services/EmploymentStatusServices';
import EmploymentStatusSchema from 'App/Validators/EmploymentStatusValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EmploymentStatusController extends BaseController {
    constructor(private employmentStatusService: EmploymentStatusServices) {
        super();
    }

    public async getEmploymentStatus({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const employmentStatusSchema =
                EmploymentStatusSchema.safeParse(requestParams);
            if (!employmentStatusSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        employmentStatusSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.employmentStatusService.getEmploymentStatuss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEmploymentStatus({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.employmentStatusService.getEmploymentStatus,
        );
    }

    public async addEmploymentStatus({ request }: HttpContextContract) {
        const employmentStatus = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EmploymentStatusValidate =
                EmploymentStatusSchema.safeParse(employmentStatus);
            if (!EmploymentStatusValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmploymentStatusValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employmentStatusService.addEmploymentStatus(employmentStatus);
            return this.responseStatusService.showSuccess(
                'create',
                employmentStatus,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEmploymentStatus({ request }: HttpContextContract) {
        const employmentStatus = request.body();

        try {
            const EmploymentStatusValidate =
                EmploymentStatusSchema.safeParse(employmentStatus);
            if (!EmploymentStatusValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmploymentStatusValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employmentStatusService.editEmploymentStatus(employmentStatus);
            return this.responseStatusService.showSuccess(
                'update',
                employmentStatus,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
