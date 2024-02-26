import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PenaltyTypeServices from 'App/Services/PenaltyTypeServices';
import PenaltyTypeSchema from 'App/Validators/PenaltyTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PenaltyTypesController extends BaseController {
    constructor(private penaltyTypeService: PenaltyTypeServices) {
        super();
    }

    public async getPenaltyTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const penaltyTypeSchema =
                PenaltyTypeSchema.safeParse(requestParams);
            if (!penaltyTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        penaltyTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.penaltyTypeService.getPenaltyTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPenaltyType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.penaltyTypeService.getPenaltyType,
        );
    }

    public async addPenaltyType({ request }: HttpContextContract) {
        const penaltyType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PenaltyTypeValidate =
                PenaltyTypeSchema.safeParse(penaltyType);
            if (!PenaltyTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PenaltyTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.penaltyTypeService.addPenaltyType(penaltyType);
            return this.responseStatusService.showSuccess(
                'create',
                penaltyType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPenaltyType({ request }: HttpContextContract) {
        const penaltyType = request.body();

        try {
            const PenaltyTypeValidate =
                PenaltyTypeSchema.safeParse(penaltyType);
            if (!PenaltyTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PenaltyTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.penaltyTypeService.editPenaltyType(penaltyType);
            return this.responseStatusService.showSuccess(
                'update',
                penaltyType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
