import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ClinicClaimProcessServices from 'App/Services/ClinicClaimProcessServices';
import ClinicClaimProcessSchema from 'App/Validators/ClinicClaimProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ClinicClaimProcessesController extends BaseController {
    constructor(private clinicClaimProcessService: ClinicClaimProcessServices) {
        super();
    }

    public async getClinicClaimProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const clinicClaimProcessSchema =
                ClinicClaimProcessSchema.safeParse(requestParams);
            if (!clinicClaimProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        clinicClaimProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.clinicClaimProcessService.getClinicClaimProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getClinicClaimProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.clinicClaimProcessService.getClinicClaimProcess,
        );
    }

    public async addClinicClaimProcess({ request }: HttpContextContract) {
        const clinicClaimProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ClinicClaimProcessValidate =
                ClinicClaimProcessSchema.safeParse(clinicClaimProcess);
            if (!ClinicClaimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicClaimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicClaimProcessService.addClinicClaimProcess(clinicClaimProcess);
            return this.responseStatusService.showSuccess(
                'create',
                clinicClaimProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editClinicClaimProcess({ request }: HttpContextContract) {
        const clinicClaimProcess = request.body();

        try {
            const ClinicClaimProcessValidate =
                ClinicClaimProcessSchema.safeParse(clinicClaimProcess);
            if (!ClinicClaimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicClaimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicClaimProcessService.editClinicClaimProcess(clinicClaimProcess);
            return this.responseStatusService.showSuccess(
                'update',
                clinicClaimProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
