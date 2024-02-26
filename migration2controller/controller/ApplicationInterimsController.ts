import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ApplicationInterimServices from 'App/Services/ApplicationInterimServices';
import ApplicationInterimSchema from 'App/Validators/ApplicationInterimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ApplicationInterimsController extends BaseController {
    constructor(private applicationInterimService: ApplicationInterimServices) {
        super();
    }

    public async getApplicationInterims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const applicationInterimSchema =
                ApplicationInterimSchema.safeParse(requestParams);
            if (!applicationInterimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        applicationInterimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.applicationInterimService.getApplicationInterims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getApplicationInterim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.applicationInterimService.getApplicationInterim,
        );
    }

    public async addApplicationInterim({ request }: HttpContextContract) {
        const applicationInterim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ApplicationInterimValidate =
                ApplicationInterimSchema.safeParse(applicationInterim);
            if (!ApplicationInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ApplicationInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.applicationInterimService.addApplicationInterim(applicationInterim);
            return this.responseStatusService.showSuccess(
                'create',
                applicationInterim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editApplicationInterim({ request }: HttpContextContract) {
        const applicationInterim = request.body();

        try {
            const ApplicationInterimValidate =
                ApplicationInterimSchema.safeParse(applicationInterim);
            if (!ApplicationInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ApplicationInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.applicationInterimService.editApplicationInterim(applicationInterim);
            return this.responseStatusService.showSuccess(
                'update',
                applicationInterim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
