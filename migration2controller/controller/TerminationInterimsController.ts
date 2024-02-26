import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TerminationInterimServices from 'App/Services/TerminationInterimServices';
import TerminationInterimSchema from 'App/Validators/TerminationInterimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class TerminationInterimsController extends BaseController {
    constructor(private terminationInterimService: TerminationInterimServices) {
        super();
    }

    public async getTerminationInterims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const terminationInterimSchema =
                TerminationInterimSchema.safeParse(requestParams);
            if (!terminationInterimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        terminationInterimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.terminationInterimService.getTerminationInterims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getTerminationInterim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.terminationInterimService.getTerminationInterim,
        );
    }

    public async addTerminationInterim({ request }: HttpContextContract) {
        const terminationInterim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const TerminationInterimValidate =
                TerminationInterimSchema.safeParse(terminationInterim);
            if (!TerminationInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        TerminationInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.terminationInterimService.addTerminationInterim(terminationInterim);
            return this.responseStatusService.showSuccess(
                'create',
                terminationInterim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editTerminationInterim({ request }: HttpContextContract) {
        const terminationInterim = request.body();

        try {
            const TerminationInterimValidate =
                TerminationInterimSchema.safeParse(terminationInterim);
            if (!TerminationInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        TerminationInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.terminationInterimService.editTerminationInterim(terminationInterim);
            return this.responseStatusService.showSuccess(
                'update',
                terminationInterim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
