import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SelfTransferServices from 'App/Services/SelfTransferServices';
import SelfTransferSchema from 'App/Validators/SelfTransferValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SelfTransfersController extends BaseController {
    constructor(private selfTransferService: SelfTransferServices) {
        super();
    }

    public async getSelfTransfers({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const selfTransferSchema =
                SelfTransferSchema.safeParse(requestParams);
            if (!selfTransferSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        selfTransferSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.selfTransferService.getSelfTransfers(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSelfTransfer({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.selfTransferService.getSelfTransfer,
        );
    }

    public async addSelfTransfer({ request }: HttpContextContract) {
        const selfTransfer = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SelfTransferValidate =
                SelfTransferSchema.safeParse(selfTransfer);
            if (!SelfTransferValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferService.addSelfTransfer(selfTransfer);
            return this.responseStatusService.showSuccess(
                'create',
                selfTransfer,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSelfTransfer({ request }: HttpContextContract) {
        const selfTransfer = request.body();

        try {
            const SelfTransferValidate =
                SelfTransferSchema.safeParse(selfTransfer);
            if (!SelfTransferValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferService.editSelfTransfer(selfTransfer);
            return this.responseStatusService.showSuccess(
                'update',
                selfTransfer,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
