import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MovingOutProcessServices from 'App/Services/MovingOutProcessServices';
import MovingOutProcessSchema from 'App/Validators/MovingOutProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MovingOutProcessesController extends BaseController {
    constructor(private movingOutProcessService: MovingOutProcessServices) {
        super();
    }

    public async getMovingOutProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const movingOutProcessSchema =
                MovingOutProcessSchema.safeParse(requestParams);
            if (!movingOutProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        movingOutProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.movingOutProcessService.getMovingOutProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMovingOutProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.movingOutProcessService.getMovingOutProcess,
        );
    }

    public async addMovingOutProcess({ request }: HttpContextContract) {
        const movingOutProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MovingOutProcessValidate =
                MovingOutProcessSchema.safeParse(movingOutProcess);
            if (!MovingOutProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingOutProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingOutProcessService.addMovingOutProcess(movingOutProcess);
            return this.responseStatusService.showSuccess(
                'create',
                movingOutProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMovingOutProcess({ request }: HttpContextContract) {
        const movingOutProcess = request.body();

        try {
            const MovingOutProcessValidate =
                MovingOutProcessSchema.safeParse(movingOutProcess);
            if (!MovingOutProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MovingOutProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.movingOutProcessService.editMovingOutProcess(movingOutProcess);
            return this.responseStatusService.showSuccess(
                'update',
                movingOutProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
