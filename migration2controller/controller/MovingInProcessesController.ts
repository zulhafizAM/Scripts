import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MovingInProcessServices from 'App/Services/MovingInProcessServices';
import MovingInProcessSchema from 'App/Validators/MovingInProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MovingInProcessesController extends BaseController {
    constructor(private movingInProcessService: MovingInProcessServices) {
        super();
    }

    public async getMovingInProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const movingInProcessSchema =
                MovingInProcessSchema.safeParse(requestParams);
            if (!movingInProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        movingInProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.movingInProcessService.getMovingInProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMovingInProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.movingInProcessService.getMovingInProcess,
        );
    }

    public async addMovingInProcess({ request }: HttpContextContract) {
        const movingInProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MovingInProcessValidate =
                MovingInProcessSchema.safeParse(movingInProcess);
            if (!MovingInProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingInProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingInProcessService.addMovingInProcess(movingInProcess);
            return this.responseStatusService.showSuccess(
                'create',
                movingInProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMovingInProcess({ request }: HttpContextContract) {
        const movingInProcess = request.body();

        try {
            const MovingInProcessValidate =
                MovingInProcessSchema.safeParse(movingInProcess);
            if (!MovingInProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingInProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingInProcessService.editMovingInProcess(movingInProcess);
            return this.responseStatusService.showSuccess(
                'update',
                movingInProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
