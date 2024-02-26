import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PlacementServices from 'App/Services/PlacementServices';
import PlacementSchema from 'App/Validators/PlacementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PlacementsController extends BaseController {
    constructor(private placementService: PlacementServices) {
        super();
    }

    public async getPlacements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const placementSchema =
                PlacementSchema.safeParse(requestParams);
            if (!placementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        placementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.placementService.getPlacements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPlacement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.placementService.getPlacement,
        );
    }

    public async addPlacement({ request }: HttpContextContract) {
        const placement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PlacementValidate =
                PlacementSchema.safeParse(placement);
            if (!PlacementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PlacementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.placementService.addPlacement(placement);
            return this.responseStatusService.showSuccess(
                'create',
                placement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPlacement({ request }: HttpContextContract) {
        const placement = request.body();

        try {
            const PlacementValidate =
                PlacementSchema.safeParse(placement);
            if (!PlacementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PlacementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.placementService.editPlacement(placement);
            return this.responseStatusService.showSuccess(
                'update',
                placement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
