import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PositionServices from 'App/Services/PositionServices';
import PositionSchema from 'App/Validators/PositionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PositionsController extends BaseController {
    constructor(private positionService: PositionServices) {
        super();
    }

    public async getPositions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const positionSchema =
                PositionSchema.safeParse(requestParams);
            if (!positionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        positionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.positionService.getPositions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPosition({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.positionService.getPosition,
        );
    }

    public async addPosition({ request }: HttpContextContract) {
        const position = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PositionValidate =
                PositionSchema.safeParse(position);
            if (!PositionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PositionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.positionService.addPosition(position);
            return this.responseStatusService.showSuccess(
                'create',
                position,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPosition({ request }: HttpContextContract) {
        const position = request.body();

        try {
            const PositionValidate =
                PositionSchema.safeParse(position);
            if (!PositionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PositionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.positionService.editPosition(position);
            return this.responseStatusService.showSuccess(
                'update',
                position,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
