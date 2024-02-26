import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DisciplinaryActionTypeServices from 'App/Services/DisciplinaryActionTypeServices';
import DisciplinaryActionTypeSchema from 'App/Validators/DisciplinaryActionTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class DisciplinaryActionTypesController extends BaseController {
    constructor(private disciplinaryActionTypeService: DisciplinaryActionTypeServices) {
        super();
    }

    public async getDisciplinaryActionTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const disciplinaryActionTypeSchema =
                DisciplinaryActionTypeSchema.safeParse(requestParams);
            if (!disciplinaryActionTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        disciplinaryActionTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.disciplinaryActionTypeService.getDisciplinaryActionTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getDisciplinaryActionType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.disciplinaryActionTypeService.getDisciplinaryActionType,
        );
    }

    public async addDisciplinaryActionType({ request }: HttpContextContract) {
        const disciplinaryActionType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const DisciplinaryActionTypeValidate =
                DisciplinaryActionTypeSchema.safeParse(disciplinaryActionType);
            if (!DisciplinaryActionTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DisciplinaryActionTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.disciplinaryActionTypeService.addDisciplinaryActionType(disciplinaryActionType);
            return this.responseStatusService.showSuccess(
                'create',
                disciplinaryActionType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editDisciplinaryActionType({ request }: HttpContextContract) {
        const disciplinaryActionType = request.body();

        try {
            const DisciplinaryActionTypeValidate =
                DisciplinaryActionTypeSchema.safeParse(disciplinaryActionType);
            if (!DisciplinaryActionTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DisciplinaryActionTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.disciplinaryActionTypeService.editDisciplinaryActionType(disciplinaryActionType);
            return this.responseStatusService.showSuccess(
                'update',
                disciplinaryActionType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
