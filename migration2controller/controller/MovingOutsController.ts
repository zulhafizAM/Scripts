import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MovingOutServices from 'App/Services/MovingOutServices';
import MovingOutSchema from 'App/Validators/MovingOutValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MovingOutsController extends BaseController {
    constructor(private movingOutService: MovingOutServices) {
        super();
    }

    public async getMovingOuts({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const movingOutSchema =
                MovingOutSchema.safeParse(requestParams);
            if (!movingOutSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        movingOutSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.movingOutService.getMovingOuts(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMovingOut({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.movingOutService.getMovingOut,
        );
    }

    public async addMovingOut({ request }: HttpContextContract) {
        const movingOut = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MovingOutValidate =
                MovingOutSchema.safeParse(movingOut);
            if (!MovingOutValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingOutValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingOutService.addMovingOut(movingOut);
            return this.responseStatusService.showSuccess(
                'create',
                movingOut,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMovingOut({ request }: HttpContextContract) {
        const movingOut = request.body();

        try {
            const MovingOutValidate =
                MovingOutSchema.safeParse(movingOut);
            if (!MovingOutValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingOutValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingOutService.editMovingOut(movingOut);
            return this.responseStatusService.showSuccess(
                'update',
                movingOut,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
