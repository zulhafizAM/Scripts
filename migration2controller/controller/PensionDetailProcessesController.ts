import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PensionDetailProcessServices from 'App/Services/PensionDetailProcessServices';
import PensionDetailProcessSchema from 'App/Validators/PensionDetailProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PensionDetailProcessesController extends BaseController {
    constructor(private pensionDetailProcessService: PensionDetailProcessServices) {
        super();
    }

    public async getPensionDetailProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const pensionDetailProcessSchema =
                PensionDetailProcessSchema.safeParse(requestParams);
            if (!pensionDetailProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        pensionDetailProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.pensionDetailProcessService.getPensionDetailProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPensionDetailProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.pensionDetailProcessService.getPensionDetailProcess,
        );
    }

    public async addPensionDetailProcess({ request }: HttpContextContract) {
        const pensionDetailProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PensionDetailProcessValidate =
                PensionDetailProcessSchema.safeParse(pensionDetailProcess);
            if (!PensionDetailProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PensionDetailProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.pensionDetailProcessService.addPensionDetailProcess(pensionDetailProcess);
            return this.responseStatusService.showSuccess(
                'create',
                pensionDetailProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPensionDetailProcess({ request }: HttpContextContract) {
        const pensionDetailProcess = request.body();

        try {
            const PensionDetailProcessValidate =
                PensionDetailProcessSchema.safeParse(pensionDetailProcess);
            if (!PensionDetailProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PensionDetailProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.pensionDetailProcessService.editPensionDetailProcess(pensionDetailProcess);
            return this.responseStatusService.showSuccess(
                'update',
                pensionDetailProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
