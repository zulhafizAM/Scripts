import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import StateVisitAllowanceProcessServices from 'App/Services/StateVisitAllowanceProcessServices';
import StateVisitAllowanceProcessSchema from 'App/Validators/StateVisitAllowanceProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class StateVisitAllowanceProcessesController extends BaseController {
    constructor(private stateVisitAllowanceProcessService: StateVisitAllowanceProcessServices) {
        super();
    }

    public async getStateVisitAllowanceProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const stateVisitAllowanceProcessSchema =
                StateVisitAllowanceProcessSchema.safeParse(requestParams);
            if (!stateVisitAllowanceProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        stateVisitAllowanceProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.stateVisitAllowanceProcessService.getStateVisitAllowanceProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getStateVisitAllowanceProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.stateVisitAllowanceProcessService.getStateVisitAllowanceProcess,
        );
    }

    public async addStateVisitAllowanceProcess({ request }: HttpContextContract) {
        const stateVisitAllowanceProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const StateVisitAllowanceProcessValidate =
                StateVisitAllowanceProcessSchema.safeParse(stateVisitAllowanceProcess);
            if (!StateVisitAllowanceProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        StateVisitAllowanceProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.stateVisitAllowanceProcessService.addStateVisitAllowanceProcess(stateVisitAllowanceProcess);
            return this.responseStatusService.showSuccess(
                'create',
                stateVisitAllowanceProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editStateVisitAllowanceProcess({ request }: HttpContextContract) {
        const stateVisitAllowanceProcess = request.body();

        try {
            const StateVisitAllowanceProcessValidate =
                StateVisitAllowanceProcessSchema.safeParse(stateVisitAllowanceProcess);
            if (!StateVisitAllowanceProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        StateVisitAllowanceProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.stateVisitAllowanceProcessService.editStateVisitAllowanceProcess(stateVisitAllowanceProcess);
            return this.responseStatusService.showSuccess(
                'update',
                stateVisitAllowanceProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
