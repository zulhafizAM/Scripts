import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedRetirementProcessServices from 'App/Services/ForcedRetirementProcessServices';
import ForcedRetirementProcessSchema from 'App/Validators/ForcedRetirementProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedRetirementProcessesController extends BaseController {
    constructor(private forcedRetirementProcessService: ForcedRetirementProcessServices) {
        super();
    }

    public async getForcedRetirementProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedRetirementProcessSchema =
                ForcedRetirementProcessSchema.safeParse(requestParams);
            if (!forcedRetirementProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedRetirementProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedRetirementProcessService.getForcedRetirementProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedRetirementProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedRetirementProcessService.getForcedRetirementProcess,
        );
    }

    public async addForcedRetirementProcess({ request }: HttpContextContract) {
        const forcedRetirementProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedRetirementProcessValidate =
                ForcedRetirementProcessSchema.safeParse(forcedRetirementProcess);
            if (!ForcedRetirementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedRetirementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedRetirementProcessService.addForcedRetirementProcess(forcedRetirementProcess);
            return this.responseStatusService.showSuccess(
                'create',
                forcedRetirementProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedRetirementProcess({ request }: HttpContextContract) {
        const forcedRetirementProcess = request.body();

        try {
            const ForcedRetirementProcessValidate =
                ForcedRetirementProcessSchema.safeParse(forcedRetirementProcess);
            if (!ForcedRetirementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedRetirementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedRetirementProcessService.editForcedRetirementProcess(forcedRetirementProcess);
            return this.responseStatusService.showSuccess(
                'update',
                forcedRetirementProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
