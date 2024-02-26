import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AccussationServices from 'App/Services/AccussationServices';
import AccussationSchema from 'App/Validators/AccussationValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AccussationsController extends BaseController {
    constructor(private accussationService: AccussationServices) {
        super();
    }

    public async getAccussations({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const accussationSchema =
                AccussationSchema.safeParse(requestParams);
            if (!accussationSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        accussationSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.accussationService.getAccussations(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAccussation({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.accussationService.getAccussation,
        );
    }

    public async addAccussation({ request }: HttpContextContract) {
        const accussation = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AccussationValidate =
                AccussationSchema.safeParse(accussation);
            if (!AccussationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AccussationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.accussationService.addAccussation(accussation);
            return this.responseStatusService.showSuccess(
                'create',
                accussation,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAccussation({ request }: HttpContextContract) {
        const accussation = request.body();

        try {
            const AccussationValidate =
                AccussationSchema.safeParse(accussation);
            if (!AccussationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AccussationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.accussationService.editAccussation(accussation);
            return this.responseStatusService.showSuccess(
                'update',
                accussation,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
