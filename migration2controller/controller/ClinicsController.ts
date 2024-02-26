import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ClinicServices from 'App/Services/ClinicServices';
import ClinicSchema from 'App/Validators/ClinicValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ClinicsController extends BaseController {
    constructor(private clinicService: ClinicServices) {
        super();
    }

    public async getClinics({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const clinicSchema =
                ClinicSchema.safeParse(requestParams);
            if (!clinicSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        clinicSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.clinicService.getClinics(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getClinic({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.clinicService.getClinic,
        );
    }

    public async addClinic({ request }: HttpContextContract) {
        const clinic = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ClinicValidate =
                ClinicSchema.safeParse(clinic);
            if (!ClinicValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicService.addClinic(clinic);
            return this.responseStatusService.showSuccess(
                'create',
                clinic,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editClinic({ request }: HttpContextContract) {
        const clinic = request.body();

        try {
            const ClinicValidate =
                ClinicSchema.safeParse(clinic);
            if (!ClinicValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicService.editClinic(clinic);
            return this.responseStatusService.showSuccess(
                'update',
                clinic,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
