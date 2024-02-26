import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SurchargeServices from 'App/Services/SurchargeServices';
import SurchargeSchema from 'App/Validators/SurchargeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SurchargesController extends BaseController {
    constructor(private surchargeService: SurchargeServices) {
        super();
    }

    public async getSurcharges({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const surchargeSchema =
                SurchargeSchema.safeParse(requestParams);
            if (!surchargeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        surchargeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.surchargeService.getSurcharges(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSurcharge({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.surchargeService.getSurcharge,
        );
    }

    public async addSurcharge({ request }: HttpContextContract) {
        const surcharge = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SurchargeValidate =
                SurchargeSchema.safeParse(surcharge);
            if (!SurchargeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SurchargeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.surchargeService.addSurcharge(surcharge);
            return this.responseStatusService.showSuccess(
                'create',
                surcharge,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSurcharge({ request }: HttpContextContract) {
        const surcharge = request.body();

        try {
            const SurchargeValidate =
                SurchargeSchema.safeParse(surcharge);
            if (!SurchargeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SurchargeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.surchargeService.editSurcharge(surcharge);
            return this.responseStatusService.showSuccess(
                'update',
                surcharge,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
