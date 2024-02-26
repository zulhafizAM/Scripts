import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import VoluntaryRetirementServices from 'App/Services/VoluntaryRetirementServices';
import VoluntaryRetirementSchema from 'App/Validators/VoluntaryRetirementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class VoluntaryRetirementsController extends BaseController {
    constructor(private voluntaryRetirementService: VoluntaryRetirementServices) {
        super();
    }

    public async getVoluntaryRetirements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const voluntaryRetirementSchema =
                VoluntaryRetirementSchema.safeParse(requestParams);
            if (!voluntaryRetirementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        voluntaryRetirementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.voluntaryRetirementService.getVoluntaryRetirements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getVoluntaryRetirement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.voluntaryRetirementService.getVoluntaryRetirement,
        );
    }

    public async addVoluntaryRetirement({ request }: HttpContextContract) {
        const voluntaryRetirement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const VoluntaryRetirementValidate =
                VoluntaryRetirementSchema.safeParse(voluntaryRetirement);
            if (!VoluntaryRetirementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VoluntaryRetirementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.voluntaryRetirementService.addVoluntaryRetirement(voluntaryRetirement);
            return this.responseStatusService.showSuccess(
                'create',
                voluntaryRetirement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editVoluntaryRetirement({ request }: HttpContextContract) {
        const voluntaryRetirement = request.body();

        try {
            const VoluntaryRetirementValidate =
                VoluntaryRetirementSchema.safeParse(voluntaryRetirement);
            if (!VoluntaryRetirementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VoluntaryRetirementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.voluntaryRetirementService.editVoluntaryRetirement(voluntaryRetirement);
            return this.responseStatusService.showSuccess(
                'update',
                voluntaryRetirement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
