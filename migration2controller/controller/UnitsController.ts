import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UnitServices from 'App/Services/UnitServices';
import UnitSchema from 'App/Validators/UnitValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class UnitsController extends BaseController {
    constructor(private unitService: UnitServices) {
        super();
    }

    public async getUnits({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const unitSchema =
                UnitSchema.safeParse(requestParams);
            if (!unitSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        unitSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.unitService.getUnits(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getUnit({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.unitService.getUnit,
        );
    }

    public async addUnit({ request }: HttpContextContract) {
        const unit = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const UnitValidate =
                UnitSchema.safeParse(unit);
            if (!UnitValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UnitValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.unitService.addUnit(unit);
            return this.responseStatusService.showSuccess(
                'create',
                unit,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editUnit({ request }: HttpContextContract) {
        const unit = request.body();

        try {
            const UnitValidate =
                UnitSchema.safeParse(unit);
            if (!UnitValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UnitValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.unitService.editUnit(unit);
            return this.responseStatusService.showSuccess(
                'update',
                unit,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
