import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SelfTransferProcessServices from 'App/Services/SelfTransferProcessServices';
import SelfTransferProcessSchema from 'App/Validators/SelfTransferProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SelfTransferProcessesController extends BaseController {
    constructor(private selfTransferProcessService: SelfTransferProcessServices) {
        super();
    }

    public async getSelfTransferProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const selfTransferProcessSchema =
                SelfTransferProcessSchema.safeParse(requestParams);
            if (!selfTransferProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        selfTransferProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.selfTransferProcessService.getSelfTransferProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSelfTransferProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.selfTransferProcessService.getSelfTransferProcess,
        );
    }

    public async addSelfTransferProcess({ request }: HttpContextContract) {
        const selfTransferProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SelfTransferProcessValidate =
                SelfTransferProcessSchema.safeParse(selfTransferProcess);
            if (!SelfTransferProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferProcessService.addSelfTransferProcess(selfTransferProcess);
            return this.responseStatusService.showSuccess(
                'create',
                selfTransferProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSelfTransferProcess({ request }: HttpContextContract) {
        const selfTransferProcess = request.body();

        try {
            const SelfTransferProcessValidate =
                SelfTransferProcessSchema.safeParse(selfTransferProcess);
            if (!SelfTransferProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferProcessService.editSelfTransferProcess(selfTransferProcess);
            return this.responseStatusService.showSuccess(
                'update',
                selfTransferProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
