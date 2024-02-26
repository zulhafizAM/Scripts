import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SelfRequestServices from 'App/Services/SelfRequestServices';
import ResponseStatusServices from 'App/Services/ResponseStatusServices';
import SelfRequestSchema from 'App/Validators/SelfRequestValidator';
import { inject } from '@adonisjs/core/build/standalone';

@inject()
export default class SelfRequestsController {
    constructor(
        private selfRequestService: SelfRequestServices,
        private responseStatusService: ResponseStatusServices,
    ) {}

    public async getSelfRequests({ request }: HttpContextContract) {
        const requestParams = request.qs();
        try {
            if (
                (await this.selfRequestService.getSelfRequests(requestParams)) &&
                !(                    'error' in
                    (await this.selfRequestService.getSelfRequests(requestParams))
                )
            )
                return this.responseStatusService.showSuccess(
                    'read',
                    await this.selfRequestService.getSelfRequests(requestParams),
                );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSelfRequest({ request }: HttpContextContract) {
        const selfRequestId = request.params().id;
        let readSelfRequest;

        try {
            readSelfRequest = this.selfRequestService.getSelfRequest(selfRequestId);
            if ((await readSelfRequest) && !('error' in (await readSelfRequest)))
                return this.responseStatusService.showSuccess(
                    'read',
                    await readSelfRequest,
                );
            else if ('error' in (await readSelfRequest)) {
                let errorStatus = (await readSelfRequest).error;
                return this.responseStatusService.showCaughtException({
                    status: errorStatus,
                });
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async addSelfRequest({ request }: HttpContextContract) {
        const selfRequest = request.body();

        try {
            const SelfRequestValidate = SelfRequestSchema.safeParse(selfRequest);

            if (!SelfRequestValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfRequestValidate.error.errors,
                    );

                return errorMessage;
            } else if (SelfRequestValidate.success) {
                if (await this.selfRequestService.addSelfRequest(selfRequest))
                    return this.responseStatusService.showSuccess(
                        'create',
                        selfRequest,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSelfRequest({ request }: HttpContextContract) {
        const selfRequest = request.body();
        const selfRequestId = request.params().id;

        try {
            const SelfRequestValidate = SelfRequestSchema.safeParse(selfRequest);

            if (!SelfRequestValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfRequestValidate.error.errors,
                    );

                return errorMessage;
            } else if (SelfRequestValidate.success) {
                if (
                    await this.selfRequestService.editSelfRequest(
                        selfRequestId,
                        selfRequest,
                    )
                )
                    return this.responseStatusService.showSuccess(
                        'update',
                        selfRequest,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}