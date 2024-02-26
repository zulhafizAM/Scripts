import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import InternalRelationshipServices from 'App/Services/InternalRelationshipServices';
import InternalRelationshipSchema from 'App/Validators/InternalRelationshipValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class InternalRelationshipsController extends BaseController {
    constructor(private internalRelationshipService: InternalRelationshipServices) {
        super();
    }

    public async getInternalRelationships({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const internalRelationshipSchema =
                InternalRelationshipSchema.safeParse(requestParams);
            if (!internalRelationshipSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        internalRelationshipSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.internalRelationshipService.getInternalRelationships(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getInternalRelationship({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.internalRelationshipService.getInternalRelationship,
        );
    }

    public async addInternalRelationship({ request }: HttpContextContract) {
        const internalRelationship = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const InternalRelationshipValidate =
                InternalRelationshipSchema.safeParse(internalRelationship);
            if (!InternalRelationshipValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        InternalRelationshipValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.internalRelationshipService.addInternalRelationship(internalRelationship);
            return this.responseStatusService.showSuccess(
                'create',
                internalRelationship,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editInternalRelationship({ request }: HttpContextContract) {
        const internalRelationship = request.body();

        try {
            const InternalRelationshipValidate =
                InternalRelationshipSchema.safeParse(internalRelationship);
            if (!InternalRelationshipValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        InternalRelationshipValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.internalRelationshipService.editInternalRelationship(internalRelationship);
            return this.responseStatusService.showSuccess(
                'update',
                internalRelationship,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
