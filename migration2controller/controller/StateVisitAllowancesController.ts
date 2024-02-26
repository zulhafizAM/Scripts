import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import StateVisitAllowanceServices from 'App/Services/StateVisitAllowanceServices';
import StateVisitAllowanceSchema from 'App/Validators/StateVisitAllowanceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class StateVisitAllowancesController extends BaseController {
    constructor(private stateVisitAllowanceService: StateVisitAllowanceServices) {
        super();
    }

    public async getStateVisitAllowances({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const stateVisitAllowanceSchema =
                StateVisitAllowanceSchema.safeParse(requestParams);
            if (!stateVisitAllowanceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        stateVisitAllowanceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.stateVisitAllowanceService.getStateVisitAllowances(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getStateVisitAllowance({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.stateVisitAllowanceService.getStateVisitAllowance,
        );
    }

    public async addStateVisitAllowance({ request }: HttpContextContract) {
        const stateVisitAllowance = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const StateVisitAllowanceValidate =
                StateVisitAllowanceSchema.safeParse(stateVisitAllowance);
            if (!StateVisitAllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        StateVisitAllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.stateVisitAllowanceService.addStateVisitAllowance(stateVisitAllowance);
            return this.responseStatusService.showSuccess(
                'create',
                stateVisitAllowance,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editStateVisitAllowance({ request }: HttpContextContract) {
        const stateVisitAllowance = request.body();

        try {
            const StateVisitAllowanceValidate =
                StateVisitAllowanceSchema.safeParse(stateVisitAllowance);
            if (!StateVisitAllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        StateVisitAllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.stateVisitAllowanceService.editStateVisitAllowance(stateVisitAllowance);
            return this.responseStatusService.showSuccess(
                'update',
                stateVisitAllowance,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
