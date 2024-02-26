import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ApplicationInterimProcessServices from 'App/Services/ApplicationInterimProcessServices';
import ApplicationInterimProcessSchema from 'App/Validators/ApplicationInterimProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ApplicationInterimProcessesController extends BaseController {
    constructor(private applicationInterimProcessService: ApplicationInterimProcessServices) {
        super();
    }

    public async getApplicationInterimProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const applicationInterimProcessSchema =
                ApplicationInterimProcessSchema.safeParse(requestParams);
            if (!applicationInterimProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        applicationInterimProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.applicationInterimProcessService.getApplicationInterimProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getApplicationInterimProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.applicationInterimProcessService.getApplicationInterimProcess,
        );
    }

    public async addApplicationInterimProcess({ request }: HttpContextContract) {
        const applicationInterimProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ApplicationInterimProcessValidate =
                ApplicationInterimProcessSchema.safeParse(applicationInterimProcess);
            if (!ApplicationInterimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ApplicationInterimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.applicationInterimProcessService.addApplicationInterimProcess(applicationInterimProcess);
            return this.responseStatusService.showSuccess(
                'create',
                applicationInterimProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editApplicationInterimProcess({ request }: HttpContextContract) {
        const applicationInterimProcess = request.body();

        try {
            const ApplicationInterimProcessValidate =
                ApplicationInterimProcessSchema.safeParse(applicationInterimProcess);
            if (!ApplicationInterimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ApplicationInterimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.applicationInterimProcessService.editApplicationInterimProcess(applicationInterimProcess);
            return this.responseStatusService.showSuccess(
                'update',
                applicationInterimProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
