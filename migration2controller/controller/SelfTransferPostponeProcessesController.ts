import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SelfTransferPostponeProcessServices from 'App/Services/SelfTransferPostponeProcessServices';
import SelfTransferPostponeProcessSchema from 'App/Validators/SelfTransferPostponeProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SelfTransferPostponeProcessesController extends BaseController {
    constructor(private selfTransferPostponeProcessService: SelfTransferPostponeProcessServices) {
        super();
    }

    public async getSelfTransferPostponeProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const selfTransferPostponeProcessSchema =
                SelfTransferPostponeProcessSchema.safeParse(requestParams);
            if (!selfTransferPostponeProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        selfTransferPostponeProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.selfTransferPostponeProcessService.getSelfTransferPostponeProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSelfTransferPostponeProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.selfTransferPostponeProcessService.getSelfTransferPostponeProcess,
        );
    }

    public async addSelfTransferPostponeProcess({ request }: HttpContextContract) {
        const selfTransferPostponeProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SelfTransferPostponeProcessValidate =
                SelfTransferPostponeProcessSchema.safeParse(selfTransferPostponeProcess);
            if (!SelfTransferPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferPostponeProcessService.addSelfTransferPostponeProcess(selfTransferPostponeProcess);
            return this.responseStatusService.showSuccess(
                'create',
                selfTransferPostponeProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSelfTransferPostponeProcess({ request }: HttpContextContract) {
        const selfTransferPostponeProcess = request.body();

        try {
            const SelfTransferPostponeProcessValidate =
                SelfTransferPostponeProcessSchema.safeParse(selfTransferPostponeProcess);
            if (!SelfTransferPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferPostponeProcessService.editSelfTransferPostponeProcess(selfTransferPostponeProcess);
            return this.responseStatusService.showSuccess(
                'update',
                selfTransferPostponeProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
