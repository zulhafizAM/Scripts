import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AppealApplicationServices from 'App/Services/AppealApplicationServices';
import AppealApplicationSchema from 'App/Validators/AppealApplicationValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AppealApplicationsController extends BaseController {
    constructor(private appealApplicationService: AppealApplicationServices) {
        super();
    }

    public async getAppealApplications({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const appealApplicationSchema =
                AppealApplicationSchema.safeParse(requestParams);
            if (!appealApplicationSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        appealApplicationSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.appealApplicationService.getAppealApplications(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAppealApplication({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.appealApplicationService.getAppealApplication,
        );
    }

    public async addAppealApplication({ request }: HttpContextContract) {
        const appealApplication = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AppealApplicationValidate =
                AppealApplicationSchema.safeParse(appealApplication);
            if (!AppealApplicationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AppealApplicationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.appealApplicationService.addAppealApplication(appealApplication);
            return this.responseStatusService.showSuccess(
                'create',
                appealApplication,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAppealApplication({ request }: HttpContextContract) {
        const appealApplication = request.body();

        try {
            const AppealApplicationValidate =
                AppealApplicationSchema.safeParse(appealApplication);
            if (!AppealApplicationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AppealApplicationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.appealApplicationService.editAppealApplication(appealApplication);
            return this.responseStatusService.showSuccess(
                'update',
                appealApplication,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
