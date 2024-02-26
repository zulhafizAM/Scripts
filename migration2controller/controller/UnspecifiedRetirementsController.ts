import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UnspecifiedRetirementServices from 'App/Services/UnspecifiedRetirementServices';
import UnspecifiedRetirementSchema from 'App/Validators/UnspecifiedRetirementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class UnspecifiedRetirementsController extends BaseController {
    constructor(private unspecifiedRetirementService: UnspecifiedRetirementServices) {
        super();
    }

    public async getUnspecifiedRetirements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const unspecifiedRetirementSchema =
                UnspecifiedRetirementSchema.safeParse(requestParams);
            if (!unspecifiedRetirementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        unspecifiedRetirementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.unspecifiedRetirementService.getUnspecifiedRetirements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getUnspecifiedRetirement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.unspecifiedRetirementService.getUnspecifiedRetirement,
        );
    }

    public async addUnspecifiedRetirement({ request }: HttpContextContract) {
        const unspecifiedRetirement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const UnspecifiedRetirementValidate =
                UnspecifiedRetirementSchema.safeParse(unspecifiedRetirement);
            if (!UnspecifiedRetirementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UnspecifiedRetirementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.unspecifiedRetirementService.addUnspecifiedRetirement(unspecifiedRetirement);
            return this.responseStatusService.showSuccess(
                'create',
                unspecifiedRetirement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editUnspecifiedRetirement({ request }: HttpContextContract) {
        const unspecifiedRetirement = request.body();

        try {
            const UnspecifiedRetirementValidate =
                UnspecifiedRetirementSchema.safeParse(unspecifiedRetirement);
            if (!UnspecifiedRetirementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UnspecifiedRetirementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.unspecifiedRetirementService.editUnspecifiedRetirement(unspecifiedRetirement);
            return this.responseStatusService.showSuccess(
                'update',
                unspecifiedRetirement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
