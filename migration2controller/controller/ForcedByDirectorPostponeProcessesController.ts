import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedByDirectorPostponeProcessServices from 'App/Services/ForcedByDirectorPostponeProcessServices';
import ForcedByDirectorPostponeProcessSchema from 'App/Validators/ForcedByDirectorPostponeProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedByDirectorPostponeProcessesController extends BaseController {
    constructor(private forcedByDirectorPostponeProcessService: ForcedByDirectorPostponeProcessServices) {
        super();
    }

    public async getForcedByDirectorPostponeProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedByDirectorPostponeProcessSchema =
                ForcedByDirectorPostponeProcessSchema.safeParse(requestParams);
            if (!forcedByDirectorPostponeProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedByDirectorPostponeProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedByDirectorPostponeProcessService.getForcedByDirectorPostponeProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedByDirectorPostponeProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedByDirectorPostponeProcessService.getForcedByDirectorPostponeProcess,
        );
    }

    public async addForcedByDirectorPostponeProcess({ request }: HttpContextContract) {
        const forcedByDirectorPostponeProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedByDirectorPostponeProcessValidate =
                ForcedByDirectorPostponeProcessSchema.safeParse(forcedByDirectorPostponeProcess);
            if (!ForcedByDirectorPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByDirectorPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByDirectorPostponeProcessService.addForcedByDirectorPostponeProcess(forcedByDirectorPostponeProcess);
            return this.responseStatusService.showSuccess(
                'create',
                forcedByDirectorPostponeProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedByDirectorPostponeProcess({ request }: HttpContextContract) {
        const forcedByDirectorPostponeProcess = request.body();

        try {
            const ForcedByDirectorPostponeProcessValidate =
                ForcedByDirectorPostponeProcessSchema.safeParse(forcedByDirectorPostponeProcess);
            if (!ForcedByDirectorPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByDirectorPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByDirectorPostponeProcessService.editForcedByDirectorPostponeProcess(forcedByDirectorPostponeProcess);
            return this.responseStatusService.showSuccess(
                'update',
                forcedByDirectorPostponeProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
