import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import StateServices from 'App/Services/StateServices';
import StateSchema from 'App/Validators/StateValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class StatesController extends BaseController {
    constructor(private stateService: StateServices) {
        super();
    }

    public async getStates({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const stateSchema =
                StateSchema.safeParse(requestParams);
            if (!stateSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        stateSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.stateService.getStates(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getState({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.stateService.getState,
        );
    }

    public async addState({ request }: HttpContextContract) {
        const state = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const StateValidate =
                StateSchema.safeParse(state);
            if (!StateValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        StateValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.stateService.addState(state);
            return this.responseStatusService.showSuccess(
                'create',
                state,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editState({ request }: HttpContextContract) {
        const state = request.body();

        try {
            const StateValidate =
                StateSchema.safeParse(state);
            if (!StateValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        StateValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.stateService.editState(state);
            return this.responseStatusService.showSuccess(
                'update',
                state,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
