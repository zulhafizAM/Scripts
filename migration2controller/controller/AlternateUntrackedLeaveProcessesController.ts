import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AlternateUntrackedLeaveProcessServices from 'App/Services/AlternateUntrackedLeaveProcessServices';
import AlternateUntrackedLeaveProcessSchema from 'App/Validators/AlternateUntrackedLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AlternateUntrackedLeaveProcessesController extends BaseController {
    constructor(private alternateUntrackedLeaveProcessService: AlternateUntrackedLeaveProcessServices) {
        super();
    }

    public async getAlternateUntrackedLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const alternateUntrackedLeaveProcessSchema =
                AlternateUntrackedLeaveProcessSchema.safeParse(requestParams);
            if (!alternateUntrackedLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        alternateUntrackedLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.alternateUntrackedLeaveProcessService.getAlternateUntrackedLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAlternateUntrackedLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.alternateUntrackedLeaveProcessService.getAlternateUntrackedLeaveProcess,
        );
    }

    public async addAlternateUntrackedLeaveProcess({ request }: HttpContextContract) {
        const alternateUntrackedLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AlternateUntrackedLeaveProcessValidate =
                AlternateUntrackedLeaveProcessSchema.safeParse(alternateUntrackedLeaveProcess);
            if (!AlternateUntrackedLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AlternateUntrackedLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.alternateUntrackedLeaveProcessService.addAlternateUntrackedLeaveProcess(alternateUntrackedLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                alternateUntrackedLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAlternateUntrackedLeaveProcess({ request }: HttpContextContract) {
        const alternateUntrackedLeaveProcess = request.body();

        try {
            const AlternateUntrackedLeaveProcessValidate =
                AlternateUntrackedLeaveProcessSchema.safeParse(alternateUntrackedLeaveProcess);
            if (!AlternateUntrackedLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AlternateUntrackedLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.alternateUntrackedLeaveProcessService.editAlternateUntrackedLeaveProcess(alternateUntrackedLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                alternateUntrackedLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
