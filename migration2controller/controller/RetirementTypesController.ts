import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import RetirementTypeServices from 'App/Services/RetirementTypeServices';
import RetirementTypeSchema from 'App/Validators/RetirementTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class RetirementTypesController extends BaseController {
    constructor(private retirementTypeService: RetirementTypeServices) {
        super();
    }

    public async getRetirementTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const retirementTypeSchema =
                RetirementTypeSchema.safeParse(requestParams);
            if (!retirementTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        retirementTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.retirementTypeService.getRetirementTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getRetirementType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.retirementTypeService.getRetirementType,
        );
    }

    public async addRetirementType({ request }: HttpContextContract) {
        const retirementType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const RetirementTypeValidate =
                RetirementTypeSchema.safeParse(retirementType);
            if (!RetirementTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RetirementTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.retirementTypeService.addRetirementType(retirementType);
            return this.responseStatusService.showSuccess(
                'create',
                retirementType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editRetirementType({ request }: HttpContextContract) {
        const retirementType = request.body();

        try {
            const RetirementTypeValidate =
                RetirementTypeSchema.safeParse(retirementType);
            if (!RetirementTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RetirementTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.retirementTypeService.editRetirementType(retirementType);
            return this.responseStatusService.showSuccess(
                'update',
                retirementType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
