import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DivisionServices from 'App/Services/DivisionServices';
import DivisionSchema from 'App/Validators/DivisionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class DivisionsController extends BaseController {
    constructor(private divisionService: DivisionServices) {
        super();
    }

    public async getDivisions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const divisionSchema =
                DivisionSchema.safeParse(requestParams);
            if (!divisionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        divisionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.divisionService.getDivisions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getDivision({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.divisionService.getDivision,
        );
    }

    public async addDivision({ request }: HttpContextContract) {
        const division = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const DivisionValidate =
                DivisionSchema.safeParse(division);
            if (!DivisionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DivisionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.divisionService.addDivision(division);
            return this.responseStatusService.showSuccess(
                'create',
                division,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editDivision({ request }: HttpContextContract) {
        const division = request.body();

        try {
            const DivisionValidate =
                DivisionSchema.safeParse(division);
            if (!DivisionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DivisionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.divisionService.editDivision(division);
            return this.responseStatusService.showSuccess(
                'update',
                division,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
