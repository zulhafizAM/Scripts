import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PersonalInsuranceProcessServices from 'App/Services/PersonalInsuranceProcessServices';
import PersonalInsuranceProcessSchema from 'App/Validators/PersonalInsuranceProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PersonalInsuranceProcessesController extends BaseController {
    constructor(private personalInsuranceProcessService: PersonalInsuranceProcessServices) {
        super();
    }

    public async getPersonalInsuranceProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const personalInsuranceProcessSchema =
                PersonalInsuranceProcessSchema.safeParse(requestParams);
            if (!personalInsuranceProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        personalInsuranceProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.personalInsuranceProcessService.getPersonalInsuranceProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPersonalInsuranceProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.personalInsuranceProcessService.getPersonalInsuranceProcess,
        );
    }

    public async addPersonalInsuranceProcess({ request }: HttpContextContract) {
        const personalInsuranceProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PersonalInsuranceProcessValidate =
                PersonalInsuranceProcessSchema.safeParse(personalInsuranceProcess);
            if (!PersonalInsuranceProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PersonalInsuranceProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.personalInsuranceProcessService.addPersonalInsuranceProcess(personalInsuranceProcess);
            return this.responseStatusService.showSuccess(
                'create',
                personalInsuranceProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPersonalInsuranceProcess({ request }: HttpContextContract) {
        const personalInsuranceProcess = request.body();

        try {
            const PersonalInsuranceProcessValidate =
                PersonalInsuranceProcessSchema.safeParse(personalInsuranceProcess);
            if (!PersonalInsuranceProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PersonalInsuranceProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.personalInsuranceProcessService.editPersonalInsuranceProcess(personalInsuranceProcess);
            return this.responseStatusService.showSuccess(
                'update',
                personalInsuranceProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
