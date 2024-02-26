import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedByManagementProcessServices from 'App/Services/ForcedByManagementProcessServices';
import ForcedByManagementProcessSchema from 'App/Validators/ForcedByManagementProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedByManagementProcessesController extends BaseController {
    constructor(private forcedByManagementProcessService: ForcedByManagementProcessServices) {
        super();
    }

    public async getForcedByManagementProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedByManagementProcessSchema =
                ForcedByManagementProcessSchema.safeParse(requestParams);
            if (!forcedByManagementProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedByManagementProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedByManagementProcessService.getForcedByManagementProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedByManagementProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedByManagementProcessService.getForcedByManagementProcess,
        );
    }

    public async addForcedByManagementProcess({ request }: HttpContextContract) {
        const forcedByManagementProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedByManagementProcessValidate =
                ForcedByManagementProcessSchema.safeParse(forcedByManagementProcess);
            if (!ForcedByManagementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByManagementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByManagementProcessService.addForcedByManagementProcess(forcedByManagementProcess);
            return this.responseStatusService.showSuccess(
                'create',
                forcedByManagementProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedByManagementProcess({ request }: HttpContextContract) {
        const forcedByManagementProcess = request.body();

        try {
            const ForcedByManagementProcessValidate =
                ForcedByManagementProcessSchema.safeParse(forcedByManagementProcess);
            if (!ForcedByManagementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedByManagementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedByManagementProcessService.editForcedByManagementProcess(forcedByManagementProcess);
            return this.responseStatusService.showSuccess(
                'update',
                forcedByManagementProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
