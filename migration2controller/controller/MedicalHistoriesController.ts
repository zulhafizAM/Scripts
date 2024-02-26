import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MedicalHistoryServices from 'App/Services/MedicalHistoryServices';
import MedicalHistorySchema from 'App/Validators/MedicalHistoryValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MedicalHistoriesController extends BaseController {
    constructor(private medicalHistoryService: MedicalHistoryServices) {
        super();
    }

    public async getMedicalHistories({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const medicalHistorySchema =
                MedicalHistorySchema.safeParse(requestParams);
            if (!medicalHistorySchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        medicalHistorySchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.medicalHistoryService.getMedicalHistorys(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMedicalHistory({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.medicalHistoryService.getMedicalHistory,
        );
    }

    public async addMedicalHistory({ request }: HttpContextContract) {
        const medicalHistory = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MedicalHistoryValidate =
                MedicalHistorySchema.safeParse(medicalHistory);
            if (!MedicalHistoryValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MedicalHistoryValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.medicalHistoryService.addMedicalHistory(medicalHistory);
            return this.responseStatusService.showSuccess(
                'create',
                medicalHistory,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMedicalHistory({ request }: HttpContextContract) {
        const medicalHistory = request.body();

        try {
            const MedicalHistoryValidate =
                MedicalHistorySchema.safeParse(medicalHistory);
            if (!MedicalHistoryValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MedicalHistoryValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.medicalHistoryService.editMedicalHistory(medicalHistory);
            return this.responseStatusService.showSuccess(
                'update',
                medicalHistory,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
