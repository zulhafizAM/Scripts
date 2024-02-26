import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SelfTransferReasonServices from 'App/Services/SelfTransferReasonServices';
import SelfTransferReasonSchema from 'App/Validators/SelfTransferReasonValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SelfTransferReasonsController extends BaseController {
    constructor(private selfTransferReasonService: SelfTransferReasonServices) {
        super();
    }

    public async getSelfTransferReasons({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const selfTransferReasonSchema =
                SelfTransferReasonSchema.safeParse(requestParams);
            if (!selfTransferReasonSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        selfTransferReasonSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.selfTransferReasonService.getSelfTransferReasons(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSelfTransferReason({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.selfTransferReasonService.getSelfTransferReason,
        );
    }

    public async addSelfTransferReason({ request }: HttpContextContract) {
        const selfTransferReason = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SelfTransferReasonValidate =
                SelfTransferReasonSchema.safeParse(selfTransferReason);
            if (!SelfTransferReasonValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferReasonValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferReasonService.addSelfTransferReason(selfTransferReason);
            return this.responseStatusService.showSuccess(
                'create',
                selfTransferReason,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSelfTransferReason({ request }: HttpContextContract) {
        const selfTransferReason = request.body();

        try {
            const SelfTransferReasonValidate =
                SelfTransferReasonSchema.safeParse(selfTransferReason);
            if (!SelfTransferReasonValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SelfTransferReasonValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.selfTransferReasonService.editSelfTransferReason(selfTransferReason);
            return this.responseStatusService.showSuccess(
                'update',
                selfTransferReason,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
