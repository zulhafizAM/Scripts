import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MedicalClaimServices from 'App/Services/MedicalClaimServices';
import MedicalClaimSchema from 'App/Validators/MedicalClaimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MedicalClaimsController extends BaseController {
    constructor(private medicalClaimService: MedicalClaimServices) {
        super();
    }

    public async getMedicalClaims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const medicalClaimSchema =
                MedicalClaimSchema.safeParse(requestParams);
            if (!medicalClaimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        medicalClaimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.medicalClaimService.getMedicalClaims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMedicalClaim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.medicalClaimService.getMedicalClaim,
        );
    }

    public async addMedicalClaim({ request }: HttpContextContract) {
        const medicalClaim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MedicalClaimValidate =
                MedicalClaimSchema.safeParse(medicalClaim);
            if (!MedicalClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MedicalClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.medicalClaimService.addMedicalClaim(medicalClaim);
            return this.responseStatusService.showSuccess(
                'create',
                medicalClaim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMedicalClaim({ request }: HttpContextContract) {
        const medicalClaim = request.body();

        try {
            const MedicalClaimValidate =
                MedicalClaimSchema.safeParse(medicalClaim);
            if (!MedicalClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MedicalClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.medicalClaimService.editMedicalClaim(medicalClaim);
            return this.responseStatusService.showSuccess(
                'update',
                medicalClaim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
