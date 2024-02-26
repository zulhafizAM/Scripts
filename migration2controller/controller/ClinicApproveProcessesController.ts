import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ClinicApproveProcessServices from 'App/Services/ClinicApproveProcessServices';
import ClinicApproveProcessSchema from 'App/Validators/ClinicApproveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ClinicApproveProcessesController extends BaseController {
    constructor(private clinicApproveProcessService: ClinicApproveProcessServices) {
        super();
    }

    public async getClinicApproveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const clinicApproveProcessSchema =
                ClinicApproveProcessSchema.safeParse(requestParams);
            if (!clinicApproveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        clinicApproveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.clinicApproveProcessService.getClinicApproveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getClinicApproveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.clinicApproveProcessService.getClinicApproveProcess,
        );
    }

    public async addClinicApproveProcess({ request }: HttpContextContract) {
        const clinicApproveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ClinicApproveProcessValidate =
                ClinicApproveProcessSchema.safeParse(clinicApproveProcess);
            if (!ClinicApproveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicApproveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicApproveProcessService.addClinicApproveProcess(clinicApproveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                clinicApproveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editClinicApproveProcess({ request }: HttpContextContract) {
        const clinicApproveProcess = request.body();

        try {
            const ClinicApproveProcessValidate =
                ClinicApproveProcessSchema.safeParse(clinicApproveProcess);
            if (!ClinicApproveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicApproveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicApproveProcessService.editClinicApproveProcess(clinicApproveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                clinicApproveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
