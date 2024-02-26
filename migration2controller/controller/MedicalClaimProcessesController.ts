import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MedicalClaimProcessServices from 'App/Services/MedicalClaimProcessServices';
import MedicalClaimProcessSchema from 'App/Validators/MedicalClaimProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MedicalClaimProcessesController extends BaseController {
    constructor(private medicalClaimProcessService: MedicalClaimProcessServices) {
        super();
    }

    public async getMedicalClaimProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const medicalClaimProcessSchema =
                MedicalClaimProcessSchema.safeParse(requestParams);
            if (!medicalClaimProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        medicalClaimProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.medicalClaimProcessService.getMedicalClaimProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMedicalClaimProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.medicalClaimProcessService.getMedicalClaimProcess,
        );
    }

    public async addMedicalClaimProcess({ request }: HttpContextContract) {
        const medicalClaimProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MedicalClaimProcessValidate =
                MedicalClaimProcessSchema.safeParse(medicalClaimProcess);
            if (!MedicalClaimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MedicalClaimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.medicalClaimProcessService.addMedicalClaimProcess(medicalClaimProcess);
            return this.responseStatusService.showSuccess(
                'create',
                medicalClaimProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMedicalClaimProcess({ request }: HttpContextContract) {
        const medicalClaimProcess = request.body();

        try {
            const MedicalClaimProcessValidate =
                MedicalClaimProcessSchema.safeParse(medicalClaimProcess);
            if (!MedicalClaimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MedicalClaimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.medicalClaimProcessService.editMedicalClaimProcess(medicalClaimProcess);
            return this.responseStatusService.showSuccess(
                'update',
                medicalClaimProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
