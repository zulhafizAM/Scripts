import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PassportPaymentClaimServices from 'App/Services/PassportPaymentClaimServices';
import PassportPaymentClaimSchema from 'App/Validators/PassportPaymentClaimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PassportPaymentClaimsController extends BaseController {
    constructor(private passportPaymentClaimService: PassportPaymentClaimServices) {
        super();
    }

    public async getPassportPaymentClaims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const passportPaymentClaimSchema =
                PassportPaymentClaimSchema.safeParse(requestParams);
            if (!passportPaymentClaimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        passportPaymentClaimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.passportPaymentClaimService.getPassportPaymentClaims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPassportPaymentClaim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.passportPaymentClaimService.getPassportPaymentClaim,
        );
    }

    public async addPassportPaymentClaim({ request }: HttpContextContract) {
        const passportPaymentClaim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PassportPaymentClaimValidate =
                PassportPaymentClaimSchema.safeParse(passportPaymentClaim);
            if (!PassportPaymentClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PassportPaymentClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.passportPaymentClaimService.addPassportPaymentClaim(passportPaymentClaim);
            return this.responseStatusService.showSuccess(
                'create',
                passportPaymentClaim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPassportPaymentClaim({ request }: HttpContextContract) {
        const passportPaymentClaim = request.body();

        try {
            const PassportPaymentClaimValidate =
                PassportPaymentClaimSchema.safeParse(passportPaymentClaim);
            if (!PassportPaymentClaimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PassportPaymentClaimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.passportPaymentClaimService.editPassportPaymentClaim(passportPaymentClaim);
            return this.responseStatusService.showSuccess(
                'update',
                passportPaymentClaim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
