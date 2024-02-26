import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedByDirectorProcessServices from 'App/Services/ForcedByDirectorProcessServices';
import ForcedByDirectorProcessSchema from 'App/Validators/ForcedByDirectorProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedByDirectorProcessesController extends BaseController {
    constructor(private forcedByDirectorProcessService: ForcedByDirectorProcessServices) {
        super();
    }

    public async getForcedByDirectorProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedByDirectorProcessSchema =
                ForcedByDirectorProcessSchema.safeParse(requestParams);
            if (!forcedByDirectorProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedByDirectorProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedByDirectorProcessService.getForcedByDirectorProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedByDirectorProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedByDirectorProcessService.getForcedByDirectorProcess,
        );
    }

    public async addForcedByDirectorProcess({ request }: HttpContextContract) {
        const forcedByDirectorProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedByDirectorProcessValidate =
                ForcedByDirectorProcessSchema.safeParse(forcedByDirectorProcess);
            if (!ForcedByDirectorProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByDirectorProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByDirectorProcessService.addForcedByDirectorProcess(forcedByDirectorProcess);
            return this.responseStatusService.showSuccess(
                'create',
                forcedByDirectorProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedByDirectorProcess({ request }: HttpContextContract) {
        const forcedByDirectorProcess = request.body();

        try {
            const ForcedByDirectorProcessValidate =
                ForcedByDirectorProcessSchema.safeParse(forcedByDirectorProcess);
            if (!ForcedByDirectorProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByDirectorProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByDirectorProcessService.editForcedByDirectorProcess(forcedByDirectorProcess);
            return this.responseStatusService.showSuccess(
                'update',
                forcedByDirectorProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
