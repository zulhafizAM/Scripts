import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import HalfPayLeaveProcessServices from 'App/Services/HalfPayLeaveProcessServices';
import HalfPayLeaveProcessSchema from 'App/Validators/HalfPayLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class HalfPayLeaveProcessesController extends BaseController {
    constructor(private halfPayLeaveProcessService: HalfPayLeaveProcessServices) {
        super();
    }

    public async getHalfPayLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const halfPayLeaveProcessSchema =
                HalfPayLeaveProcessSchema.safeParse(requestParams);
            if (!halfPayLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        halfPayLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.halfPayLeaveProcessService.getHalfPayLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getHalfPayLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.halfPayLeaveProcessService.getHalfPayLeaveProcess,
        );
    }

    public async addHalfPayLeaveProcess({ request }: HttpContextContract) {
        const halfPayLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const HalfPayLeaveProcessValidate =
                HalfPayLeaveProcessSchema.safeParse(halfPayLeaveProcess);
            if (!HalfPayLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HalfPayLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.halfPayLeaveProcessService.addHalfPayLeaveProcess(halfPayLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                halfPayLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editHalfPayLeaveProcess({ request }: HttpContextContract) {
        const halfPayLeaveProcess = request.body();

        try {
            const HalfPayLeaveProcessValidate =
                HalfPayLeaveProcessSchema.safeParse(halfPayLeaveProcess);
            if (!HalfPayLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HalfPayLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.halfPayLeaveProcessService.editHalfPayLeaveProcess(halfPayLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                halfPayLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
