import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedByManagementPostponeProcessesServices from 'App/Services/ForcedByManagementPostponeProcessesServices';
import ForcedByManagementPostponeProcessesSchema from 'App/Validators/ForcedByManagementPostponeProcessesValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedByManagementPostponeProcessesController extends BaseController {
    constructor(private forcedByManagementPostponeProcessesService: ForcedByManagementPostponeProcessesServices) {
        super();
    }

    public async getForcedByManagementPostponeProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedByManagementPostponeProcessesSchema =
                ForcedByManagementPostponeProcessesSchema.safeParse(requestParams);
            if (!forcedByManagementPostponeProcessesSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedByManagementPostponeProcessesSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedByManagementPostponeProcessesService.getForcedByManagementPostponeProcessess(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedByManagementPostponeProcesses({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedByManagementPostponeProcessesService.getForcedByManagementPostponeProcesses,
        );
    }

    public async addForcedByManagementPostponeProcesses({ request }: HttpContextContract) {
        const forcedByManagementPostponeProcesses = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedByManagementPostponeProcessesValidate =
                ForcedByManagementPostponeProcessesSchema.safeParse(forcedByManagementPostponeProcesses);
            if (!ForcedByManagementPostponeProcessesValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByManagementPostponeProcessesValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByManagementPostponeProcessesService.addForcedByManagementPostponeProcesses(forcedByManagementPostponeProcesses);
            return this.responseStatusService.showSuccess(
                'create',
                forcedByManagementPostponeProcesses,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedByManagementPostponeProcesses({ request }: HttpContextContract) {
        const forcedByManagementPostponeProcesses = request.body();

        try {
            const ForcedByManagementPostponeProcessesValidate =
                ForcedByManagementPostponeProcessesSchema.safeParse(forcedByManagementPostponeProcesses);
            if (!ForcedByManagementPostponeProcessesValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByManagementPostponeProcessesValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByManagementPostponeProcessesService.editForcedByManagementPostponeProcesses(forcedByManagementPostponeProcesses);
            return this.responseStatusService.showSuccess(
                'update',
                forcedByManagementPostponeProcesses,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
