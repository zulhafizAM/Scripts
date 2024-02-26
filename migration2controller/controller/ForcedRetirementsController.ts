import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedRetirementServices from 'App/Services/ForcedRetirementServices';
import ForcedRetirementSchema from 'App/Validators/ForcedRetirementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedRetirementsController extends BaseController {
    constructor(private forcedRetirementService: ForcedRetirementServices) {
        super();
    }

    public async getForcedRetirements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedRetirementSchema =
                ForcedRetirementSchema.safeParse(requestParams);
            if (!forcedRetirementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedRetirementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedRetirementService.getForcedRetirements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedRetirement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedRetirementService.getForcedRetirement,
        );
    }

    public async addForcedRetirement({ request }: HttpContextContract) {
        const forcedRetirement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedRetirementValidate =
                ForcedRetirementSchema.safeParse(forcedRetirement);
            if (!ForcedRetirementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedRetirementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedRetirementService.addForcedRetirement(forcedRetirement);
            return this.responseStatusService.showSuccess(
                'create',
                forcedRetirement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedRetirement({ request }: HttpContextContract) {
        const forcedRetirement = request.body();

        try {
            const ForcedRetirementValidate =
                ForcedRetirementSchema.safeParse(forcedRetirement);
            if (!ForcedRetirementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedRetirementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedRetirementService.editForcedRetirement(forcedRetirement);
            return this.responseStatusService.showSuccess(
                'update',
                forcedRetirement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
