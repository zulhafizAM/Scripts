import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MovingInServices from 'App/Services/MovingInServices';
import MovingInSchema from 'App/Validators/MovingInValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MovingInsController extends BaseController {
    constructor(private movingInService: MovingInServices) {
        super();
    }

    public async getMovingIns({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const movingInSchema =
                MovingInSchema.safeParse(requestParams);
            if (!movingInSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        movingInSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.movingInService.getMovingIns(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMovingIn({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.movingInService.getMovingIn,
        );
    }

    public async addMovingIn({ request }: HttpContextContract) {
        const movingIn = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MovingInValidate =
                MovingInSchema.safeParse(movingIn);
            if (!MovingInValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingInValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingInService.addMovingIn(movingIn);
            return this.responseStatusService.showSuccess(
                'create',
                movingIn,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMovingIn({ request }: HttpContextContract) {
        const movingIn = request.body();

        try {
            const MovingInValidate =
                MovingInSchema.safeParse(movingIn);
            if (!MovingInValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingInValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingInService.editMovingIn(movingIn);
            return this.responseStatusService.showSuccess(
                'update',
                movingIn,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
