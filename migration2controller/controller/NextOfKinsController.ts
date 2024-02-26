import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NextOfKinServices from 'App/Services/NextOfKinServices';
import NextOfKinSchema from 'App/Validators/NextOfKinValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class NextOfKinsController extends BaseController {
    constructor(private nextOfKinService: NextOfKinServices) {
        super();
    }

    public async getNextOfKins({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const nextOfKinSchema =
                NextOfKinSchema.safeParse(requestParams);
            if (!nextOfKinSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        nextOfKinSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.nextOfKinService.getNextOfKins(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getNextOfKin({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.nextOfKinService.getNextOfKin,
        );
    }

    public async addNextOfKin({ request }: HttpContextContract) {
        const nextOfKin = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const NextOfKinValidate =
                NextOfKinSchema.safeParse(nextOfKin);
            if (!NextOfKinValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NextOfKinValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.nextOfKinService.addNextOfKin(nextOfKin);
            return this.responseStatusService.showSuccess(
                'create',
                nextOfKin,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editNextOfKin({ request }: HttpContextContract) {
        const nextOfKin = request.body();

        try {
            const NextOfKinValidate =
                NextOfKinSchema.safeParse(nextOfKin);
            if (!NextOfKinValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NextOfKinValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.nextOfKinService.editNextOfKin(nextOfKin);
            return this.responseStatusService.showSuccess(
                'update',
                nextOfKin,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
