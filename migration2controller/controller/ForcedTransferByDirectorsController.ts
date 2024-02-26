import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedTransferByDirectorServices from 'App/Services/ForcedTransferByDirectorServices';
import ForcedTransferByDirectorSchema from 'App/Validators/ForcedTransferByDirectorValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedTransferByDirectorsController extends BaseController {
    constructor(private forcedTransferByDirectorService: ForcedTransferByDirectorServices) {
        super();
    }

    public async getForcedTransferByDirectors({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedTransferByDirectorSchema =
                ForcedTransferByDirectorSchema.safeParse(requestParams);
            if (!forcedTransferByDirectorSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedTransferByDirectorSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedTransferByDirectorService.getForcedTransferByDirectors(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedTransferByDirector({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedTransferByDirectorService.getForcedTransferByDirector,
        );
    }

    public async addForcedTransferByDirector({ request }: HttpContextContract) {
        const forcedTransferByDirector = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedTransferByDirectorValidate =
                ForcedTransferByDirectorSchema.safeParse(forcedTransferByDirector);
            if (!ForcedTransferByDirectorValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedTransferByDirectorValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedTransferByDirectorService.addForcedTransferByDirector(forcedTransferByDirector);
            return this.responseStatusService.showSuccess(
                'create',
                forcedTransferByDirector,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedTransferByDirector({ request }: HttpContextContract) {
        const forcedTransferByDirector = request.body();

        try {
            const ForcedTransferByDirectorValidate =
                ForcedTransferByDirectorSchema.safeParse(forcedTransferByDirector);
            if (!ForcedTransferByDirectorValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedTransferByDirectorValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedTransferByDirectorService.editForcedTransferByDirector(forcedTransferByDirector);
            return this.responseStatusService.showSuccess(
                'update',
                forcedTransferByDirector,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
