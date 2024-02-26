import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PersonalTravelInsuranceClaimServices from 'App/Services/PersonalTravelInsuranceClaimServices';
import PersonalTravelInsuranceClaimSchema from 'App/Validators/PersonalTravelInsuranceClaimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PersonalTravelInsuranceClaimsController extends BaseController {
    constructor(private personalTravelInsuranceClaimService: PersonalTravelInsuranceClaimServices) {
        super();
    }

    public async getPersonalTravelInsuranceClaims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const personalTravelInsuranceClaimSchema =
                PersonalTravelInsuranceClaimSchema.safeParse(requestParams);
            if (!personalTravelInsuranceClaimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        personalTravelInsuranceClaimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.personalTravelInsuranceClaimService.getPersonalTravelInsuranceClaims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPersonalTravelInsuranceClaim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.personalTravelInsuranceClaimService.getPersonalTravelInsuranceClaim,
        );
    }

    public async addPersonalTravelInsuranceClaim({ request }: HttpContextContract) {
        const personalTravelInsuranceClaim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PersonalTravelInsuranceClaimValidate =
                PersonalTravelInsuranceClaimSchema.safeParse(personalTravelInsuranceClaim);
            if (!PersonalTravelInsuranceClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PersonalTravelInsuranceClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.personalTravelInsuranceClaimService.addPersonalTravelInsuranceClaim(personalTravelInsuranceClaim);
            return this.responseStatusService.showSuccess(
                'create',
                personalTravelInsuranceClaim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPersonalTravelInsuranceClaim({ request }: HttpContextContract) {
        const personalTravelInsuranceClaim = request.body();

        try {
            const PersonalTravelInsuranceClaimValidate =
                PersonalTravelInsuranceClaimSchema.safeParse(personalTravelInsuranceClaim);
            if (!PersonalTravelInsuranceClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PersonalTravelInsuranceClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.personalTravelInsuranceClaimService.editPersonalTravelInsuranceClaim(personalTravelInsuranceClaim);
            return this.responseStatusService.showSuccess(
                'update',
                personalTravelInsuranceClaim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
