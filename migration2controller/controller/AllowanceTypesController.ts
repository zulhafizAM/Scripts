import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AllowanceTypeServices from 'App/Services/AllowanceTypeServices';
import AllowanceTypeSchema from 'App/Validators/AllowanceTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AllowanceTypesController extends BaseController {
    constructor(private allowanceTypeService: AllowanceTypeServices) {
        super();
    }

    public async getAllowanceTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const allowanceTypeSchema =
                AllowanceTypeSchema.safeParse(requestParams);
            if (!allowanceTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        allowanceTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.allowanceTypeService.getAllowanceTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAllowanceType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.allowanceTypeService.getAllowanceType,
        );
    }

    public async addAllowanceType({ request }: HttpContextContract) {
        const allowanceType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AllowanceTypeValidate =
                AllowanceTypeSchema.safeParse(allowanceType);
            if (!AllowanceTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AllowanceTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.allowanceTypeService.addAllowanceType(allowanceType);
            return this.responseStatusService.showSuccess(
                'create',
                allowanceType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAllowanceType({ request }: HttpContextContract) {
        const allowanceType = request.body();

        try {
            const AllowanceTypeValidate =
                AllowanceTypeSchema.safeParse(allowanceType);
            if (!AllowanceTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AllowanceTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.allowanceTypeService.editAllowanceType(allowanceType);
            return this.responseStatusService.showSuccess(
                'update',
                allowanceType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
