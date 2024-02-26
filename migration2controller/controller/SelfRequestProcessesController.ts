import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SelfRequestProcessServices from 'App/Services/SelfRequestProcessServices';
import ResponseStatusServices from 'App/Services/ResponseStatusServices';
import SelfRequestProcessSchema from 'App/Validators/SelfRequestProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';

@inject()
export default class SelfRequestProcessesController {
    constructor(
        private selfRequestProcessService: SelfRequestProcessServices,
        private responseStatusService: ResponseStatusServices,
    ) {}

    public async getSelfRequestProcesses({ request }: HttpContextContract) {
        const requestParams = request.qs();
        try {
            if (
                (await this.selfRequestProcessService.getSelfRequestProcesses(requestParams)) &&
                !(                    'error' in
                    (await this.selfRequestProcessService.getSelfRequestProcesses(requestParams))
                )
            )
                return this.responseStatusService.showSuccess(
                    'read',
                    await this.selfRequestProcessService.getSelfRequestProcesses(requestParams),
                );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSelfRequestProcess({ request }: HttpContextContract) {
        const selfRequestProcessId = request.params().id;
        let readSelfRequestProcess;

        try {
            readSelfRequestProcess = this.selfRequestProcessService.getSelfRequestProcess(selfRequestProcessId);
            if ((await readSelfRequestProcess) && !('error' in (await readSelfRequestProcess)))
                return this.responseStatusService.showSuccess(
                    'read',
                    await readSelfRequestProcess,
                );
            else if ('error' in (await readSelfRequestProcess)) {
                let errorStatus = (await readSelfRequestProcess).error;
                return this.responseStatusService.showCaughtException({
                    status: errorStatus,
                });
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async addSelfRequestProcess({ request }: HttpContextContract) {
        const selfRequestProcess = request.body();

        try {
            const SelfRequestProcessValidate = SelfRequestProcessSchema.safeParse(selfRequestProcess);

            if (!SelfRequestProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfRequestProcessValidate.error.errors,
                    );

                return errorMessage;
            } else if (SelfRequestProcessValidate.success) {
                if (await this.selfRequestProcessService.addSelfRequestProcess(selfRequestProcess))
                    return this.responseStatusService.showSuccess(
                        'create',
                        selfRequestProcess,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSelfRequestProcess({ request }: HttpContextContract) {
        const selfRequestProcess = request.body();
        const selfRequestProcessId = request.params().id;

        try {
            const SelfRequestProcessValidate = SelfRequestProcessSchema.safeParse(selfRequestProcess);

            if (!SelfRequestProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfRequestProcessValidate.error.errors,
                    );

                return errorMessage;
            } else if (SelfRequestProcessValidate.success) {
                if (
                    await this.selfRequestProcessService.editSelfRequestProcess(
                        selfRequestProcessId,
                        selfRequestProcess,
                    )
                )
                    return this.responseStatusService.showSuccess(
                        'update',
                        selfRequestProcess,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}