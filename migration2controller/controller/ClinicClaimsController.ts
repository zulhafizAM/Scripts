import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ClinicClaimServices from 'App/Services/ClinicClaimServices';
import ClinicClaimSchema from 'App/Validators/ClinicClaimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ClinicClaimsController extends BaseController {
    constructor(private clinicClaimService: ClinicClaimServices) {
        super();
    }

    public async getClinicClaims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const clinicClaimSchema =
                ClinicClaimSchema.safeParse(requestParams);
            if (!clinicClaimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        clinicClaimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.clinicClaimService.getClinicClaims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getClinicClaim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.clinicClaimService.getClinicClaim,
        );
    }

    public async addClinicClaim({ request }: HttpContextContract) {
        const clinicClaim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ClinicClaimValidate =
                ClinicClaimSchema.safeParse(clinicClaim);
            if (!ClinicClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicClaimService.addClinicClaim(clinicClaim);
            return this.responseStatusService.showSuccess(
                'create',
                clinicClaim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editClinicClaim({ request }: HttpContextContract) {
        const clinicClaim = request.body();

        try {
            const ClinicClaimValidate =
                ClinicClaimSchema.safeParse(clinicClaim);
            if (!ClinicClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClinicClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clinicClaimService.editClinicClaim(clinicClaim);
            return this.responseStatusService.showSuccess(
                'update',
                clinicClaim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
