import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import IntegrityProceedingServices from 'App/Services/IntegrityProceedingServices';
import IntegrityProceedingSchema from 'App/Validators/IntegrityProceedingValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class IntegrityProceedingsController extends BaseController {
    constructor(private integrityProceedingService: IntegrityProceedingServices) {
        super();
    }

    public async getIntegrityProceedings({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const integrityProceedingSchema =
                IntegrityProceedingSchema.safeParse(requestParams);
            if (!integrityProceedingSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        integrityProceedingSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.integrityProceedingService.getIntegrityProceedings(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getIntegrityProceeding({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.integrityProceedingService.getIntegrityProceeding,
        );
    }

    public async addIntegrityProceeding({ request }: HttpContextContract) {
        const integrityProceeding = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const IntegrityProceedingValidate =
                IntegrityProceedingSchema.safeParse(integrityProceeding);
            if (!IntegrityProceedingValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        IntegrityProceedingValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.integrityProceedingService.addIntegrityProceeding(integrityProceeding);
            return this.responseStatusService.showSuccess(
                'create',
                integrityProceeding,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editIntegrityProceeding({ request }: HttpContextContract) {
        const integrityProceeding = request.body();

        try {
            const IntegrityProceedingValidate =
                IntegrityProceedingSchema.safeParse(integrityProceeding);
            if (!IntegrityProceedingValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        IntegrityProceedingValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.integrityProceedingService.editIntegrityProceeding(integrityProceeding);
            return this.responseStatusService.showSuccess(
                'update',
                integrityProceeding,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
