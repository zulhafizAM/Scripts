import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EmploymentInterimServices from 'App/Services/EmploymentInterimServices';
import EmploymentInterimSchema from 'App/Validators/EmploymentInterimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EmploymentInterimsController extends BaseController {
    constructor(private employmentInterimService: EmploymentInterimServices) {
        super();
    }

    public async getEmploymentInterims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const employmentInterimSchema =
                EmploymentInterimSchema.safeParse(requestParams);
            if (!employmentInterimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        employmentInterimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.employmentInterimService.getEmploymentInterims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEmploymentInterim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.employmentInterimService.getEmploymentInterim,
        );
    }

    public async addEmploymentInterim({ request }: HttpContextContract) {
        const employmentInterim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EmploymentInterimValidate =
                EmploymentInterimSchema.safeParse(employmentInterim);
            if (!EmploymentInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmploymentInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employmentInterimService.addEmploymentInterim(employmentInterim);
            return this.responseStatusService.showSuccess(
                'create',
                employmentInterim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEmploymentInterim({ request }: HttpContextContract) {
        const employmentInterim = request.body();

        try {
            const EmploymentInterimValidate =
                EmploymentInterimSchema.safeParse(employmentInterim);
            if (!EmploymentInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EmploymentInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.employmentInterimService.editEmploymentInterim(employmentInterim);
            return this.responseStatusService.showSuccess(
                'update',
                employmentInterim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
