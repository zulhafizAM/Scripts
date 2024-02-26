import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TerminationInterimProcessServices from 'App/Services/TerminationInterimProcessServices';
import TerminationInterimProcessSchema from 'App/Validators/TerminationInterimProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class TerminationInterimProcessesController extends BaseController {
    constructor(private terminationInterimProcessService: TerminationInterimProcessServices) {
        super();
    }

    public async getTerminationInterimProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const terminationInterimProcessSchema =
                TerminationInterimProcessSchema.safeParse(requestParams);
            if (!terminationInterimProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        terminationInterimProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.terminationInterimProcessService.getTerminationInterimProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getTerminationInterimProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.terminationInterimProcessService.getTerminationInterimProcess,
        );
    }

    public async addTerminationInterimProcess({ request }: HttpContextContract) {
        const terminationInterimProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const TerminationInterimProcessValidate =
                TerminationInterimProcessSchema.safeParse(terminationInterimProcess);
            if (!TerminationInterimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        TerminationInterimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.terminationInterimProcessService.addTerminationInterimProcess(terminationInterimProcess);
            return this.responseStatusService.showSuccess(
                'create',
                terminationInterimProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editTerminationInterimProcess({ request }: HttpContextContract) {
        const terminationInterimProcess = request.body();

        try {
            const TerminationInterimProcessValidate =
                TerminationInterimProcessSchema.safeParse(terminationInterimProcess);
            if (!TerminationInterimProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        TerminationInterimProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.terminationInterimProcessService.editTerminationInterimProcess(terminationInterimProcess);
            return this.responseStatusService.showSuccess(
                'update',
                terminationInterimProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
