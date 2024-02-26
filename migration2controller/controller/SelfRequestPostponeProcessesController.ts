import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SelfRequestPostponeProcessServices from 'App/Services/SelfRequestPostponeProcessServices';
import ResponseStatusServices from 'App/Services/ResponseStatusServices';
import SelfRequestPostponeProcessSchema from 'App/Validators/SelfRequestPostponeProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';

@inject()
export default class SelfRequestPostponeProcessesController {
    constructor(
        private selfRequestPostponeProcessService: SelfRequestPostponeProcessServices,
        private responseStatusService: ResponseStatusServices,
    ) {}

    public async getSelfRequestPostponeProcesses({ request }: HttpContextContract) {
        const requestParams = request.qs();
        try {
            if (
                (await this.selfRequestPostponeProcessService.getSelfRequestPostponeProcesses(requestParams)) &&
                !(                    'error' in
                    (await this.selfRequestPostponeProcessService.getSelfRequestPostponeProcesses(requestParams))
                )
            )
                return this.responseStatusService.showSuccess(
                    'read',
                    await this.selfRequestPostponeProcessService.getSelfRequestPostponeProcesses(requestParams),
                );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSelfRequestPostponeProcess({ request }: HttpContextContract) {
        const selfRequestPostponeProcessId = request.params().id;
        let readSelfRequestPostponeProcess;

        try {
            readSelfRequestPostponeProcess = this.selfRequestPostponeProcessService.getSelfRequestPostponeProcess(selfRequestPostponeProcessId);
            if ((await readSelfRequestPostponeProcess) && !('error' in (await readSelfRequestPostponeProcess)))
                return this.responseStatusService.showSuccess(
                    'read',
                    await readSelfRequestPostponeProcess,
                );
            else if ('error' in (await readSelfRequestPostponeProcess)) {
                let errorStatus = (await readSelfRequestPostponeProcess).error;
                return this.responseStatusService.showCaughtException({
                    status: errorStatus,
                });
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async addSelfRequestPostponeProcess({ request }: HttpContextContract) {
        const selfRequestPostponeProcess = request.body();

        try {
            const SelfRequestPostponeProcessValidate = SelfRequestPostponeProcessSchema.safeParse(selfRequestPostponeProcess);

            if (!SelfRequestPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfRequestPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            } else if (SelfRequestPostponeProcessValidate.success) {
                if (await this.selfRequestPostponeProcessService.addSelfRequestPostponeProcess(selfRequestPostponeProcess))
                    return this.responseStatusService.showSuccess(
                        'create',
                        selfRequestPostponeProcess,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSelfRequestPostponeProcess({ request }: HttpContextContract) {
        const selfRequestPostponeProcess = request.body();
        const selfRequestPostponeProcessId = request.params().id;

        try {
            const SelfRequestPostponeProcessValidate = SelfRequestPostponeProcessSchema.safeParse(selfRequestPostponeProcess);

            if (!SelfRequestPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfRequestPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            } else if (SelfRequestPostponeProcessValidate.success) {
                if (
                    await this.selfRequestPostponeProcessService.editSelfRequestPostponeProcess(
                        selfRequestPostponeProcessId,
                        selfRequestPostponeProcess,
                    )
                )
                    return this.responseStatusService.showSuccess(
                        'update',
                        selfRequestPostponeProcess,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}