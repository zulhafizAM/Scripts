import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForceTransferByDirectorServices from 'App/Services/ForceTransferByDirectorServices';
import ResponseStatusServices from 'App/Services/ResponseStatusServices';
import ForceTransferByDirectorSchema from 'App/Validators/ForceTransferByDirectorValidator';
import { inject } from '@adonisjs/core/build/standalone';

@inject()
export default class ForceTransferByDirectorsController {
    constructor(
        private forceTransferByDirectorService: ForceTransferByDirectorServices,
        private responseStatusService: ResponseStatusServices,
    ) {}

    public async getForceTransferByDirectors({ request }: HttpContextContract) {
        const requestParams = request.qs();
        try {
            if (
                (await this.forceTransferByDirectorService.getForceTransferByDirectors(requestParams)) &&
                !(                    'error' in
                    (await this.forceTransferByDirectorService.getForceTransferByDirectors(requestParams))
                )
            )
                return this.responseStatusService.showSuccess(
                    'read',
                    await this.forceTransferByDirectorService.getForceTransferByDirectors(requestParams),
                );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForceTransferByDirector({ request }: HttpContextContract) {
        const forceTransferByDirectorId = request.params().id;
        let readForceTransferByDirector;

        try {
            readForceTransferByDirector = this.forceTransferByDirectorService.getForceTransferByDirector(forceTransferByDirectorId);
            if ((await readForceTransferByDirector) && !('error' in (await readForceTransferByDirector)))
                return this.responseStatusService.showSuccess(
                    'read',
                    await readForceTransferByDirector,
                );
            else if ('error' in (await readForceTransferByDirector)) {
                let errorStatus = (await readForceTransferByDirector).error;
                return this.responseStatusService.showCaughtException({
                    status: errorStatus,
                });
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async addForceTransferByDirector({ request }: HttpContextContract) {
        const forceTransferByDirector = request.body();

        try {
            const ForceTransferByDirectorValidate = ForceTransferByDirectorSchema.safeParse(forceTransferByDirector);

            if (!ForceTransferByDirectorValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForceTransferByDirectorValidate.error.errors,
                    );

                return errorMessage;
            } else if (ForceTransferByDirectorValidate.success) {
                if (await this.forceTransferByDirectorService.addForceTransferByDirector(forceTransferByDirector))
                    return this.responseStatusService.showSuccess(
                        'create',
                        forceTransferByDirector,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForceTransferByDirector({ request }: HttpContextContract) {
        const forceTransferByDirector = request.body();
        const forceTransferByDirectorId = request.params().id;

        try {
            const ForceTransferByDirectorValidate = ForceTransferByDirectorSchema.safeParse(forceTransferByDirector);

            if (!ForceTransferByDirectorValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForceTransferByDirectorValidate.error.errors,
                    );

                return errorMessage;
            } else if (ForceTransferByDirectorValidate.success) {
                if (
                    await this.forceTransferByDirectorService.editForceTransferByDirector(
                        forceTransferByDirectorId,
                        forceTransferByDirector,
                    )
                )
                    return this.responseStatusService.showSuccess(
                        'update',
                        forceTransferByDirector,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}