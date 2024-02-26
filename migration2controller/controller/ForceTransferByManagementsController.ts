import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ForceTransferByManagementServices from 'App/Services/ForceTransferByManagementServices';
import ResponseStatusServices from 'App/Services/ResponseStatusServices';
import ForceTransferByManagementSchema from 'App/Validators/ForceTransferByManagementValidator';
import { inject } from '@adonisjs/core/build/standalone';

@inject()
export default class ForceTransferByManagementsController {
    constructor(
        private forceTransferByManagementService: ForceTransferByManagementServices,
        private responseStatusService: ResponseStatusServices,
    ) {}

    public async getForceTransferByManagements({ request }: HttpContextContract) {
        const requestParams = request.qs();
        try {
            if (
                (await this.forceTransferByManagementService.getForceTransferByManagements(requestParams)) &&
                !(                    'error' in
                    (await this.forceTransferByManagementService.getForceTransferByManagements(requestParams))
                )
            )
                return this.responseStatusService.showSuccess(
                    'read',
                    await this.forceTransferByManagementService.getForceTransferByManagements(requestParams),
                );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getForceTransferByManagement({ request }: HttpContextContract) {
        const forceTransferByManagementId = request.params().id;
        let readForceTransferByManagement;

        try {
            readForceTransferByManagement = this.forceTransferByManagementService.getForceTransferByManagement(forceTransferByManagementId);
            if ((await readForceTransferByManagement) && !('error' in (await readForceTransferByManagement)))
                return this.responseStatusService.showSuccess(
                    'read',
                    await readForceTransferByManagement,
                );
            else if ('error' in (await readForceTransferByManagement)) {
                let errorStatus = (await readForceTransferByManagement).error;
                return this.responseStatusService.showCaughtException({
                    status: errorStatus,
                });
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async addForceTransferByManagement({ request }: HttpContextContract) {
        const forceTransferByManagement = request.body();

        try {
            const ForceTransferByManagementValidate = ForceTransferByManagementSchema.safeParse(forceTransferByManagement);

            if (!ForceTransferByManagementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForceTransferByManagementValidate.error.errors,
                    );

                return errorMessage;
            } else if (ForceTransferByManagementValidate.success) {
                if (await this.forceTransferByManagementService.addForceTransferByManagement(forceTransferByManagement))
                    return this.responseStatusService.showSuccess(
                        'create',
                        forceTransferByManagement,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editForceTransferByManagement({ request }: HttpContextContract) {
        const forceTransferByManagement = request.body();
        const forceTransferByManagementId = request.params().id;

        try {
            const ForceTransferByManagementValidate = ForceTransferByManagementSchema.safeParse(forceTransferByManagement);

            if (!ForceTransferByManagementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ForceTransferByManagementValidate.error.errors,
                    );

                return errorMessage;
            } else if (ForceTransferByManagementValidate.success) {
                if (
                    await this.forceTransferByManagementService.editForceTransferByManagement(
                        forceTransferByManagementId,
                        forceTransferByManagement,
                    )
                )
                    return this.responseStatusService.showSuccess(
                        'update',
                        forceTransferByManagement,
                    );
            }
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}