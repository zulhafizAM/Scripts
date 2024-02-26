import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForcedTransferByManagementServices from 'App/Services/ForcedTransferByManagementServices';
import ForcedTransferByManagementSchema from 'App/Validators/ForcedTransferByManagementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ForcedTransferByManagementsController extends BaseController {
    constructor(private forcedTransferByManagementService: ForcedTransferByManagementServices) {
        super();
    }

    public async getForcedTransferByManagements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const forcedTransferByManagementSchema =
                ForcedTransferByManagementSchema.safeParse(requestParams);
            if (!forcedTransferByManagementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        forcedTransferByManagementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.forcedTransferByManagementService.getForcedTransferByManagements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForcedTransferByManagement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.forcedTransferByManagementService.getForcedTransferByManagement,
        );
    }

    public async addForcedTransferByManagement({ request }: HttpContextContract) {
        const forcedTransferByManagement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ForcedTransferByManagementValidate =
                ForcedTransferByManagementSchema.safeParse(forcedTransferByManagement);
            if (!ForcedTransferByManagementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedTransferByManagementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedTransferByManagementService.addForcedTransferByManagement(forcedTransferByManagement);
            return this.responseStatusService.showSuccess(
                'create',
                forcedTransferByManagement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForcedTransferByManagement({ request }: HttpContextContract) {
        const forcedTransferByManagement = request.body();

        try {
            const ForcedTransferByManagementValidate =
                ForcedTransferByManagementSchema.safeParse(forcedTransferByManagement);
            if (!ForcedTransferByManagementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForcedTransferByManagementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.forcedTransferByManagementService.editForcedTransferByManagement(forcedTransferByManagement);
            return this.responseStatusService.showSuccess(
                'update',
                forcedTransferByManagement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
