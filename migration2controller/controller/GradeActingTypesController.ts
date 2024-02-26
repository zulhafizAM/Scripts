import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GradeActingTypeServices from 'App/Services/GradeActingTypeServices';
import GradeActingTypeSchema from 'App/Validators/GradeActingTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class GradeActingTypesController extends BaseController {
    constructor(private gradeActingTypeService: GradeActingTypeServices) {
        super();
    }

    public async getGradeActingTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const gradeActingTypeSchema =
                GradeActingTypeSchema.safeParse(requestParams);
            if (!gradeActingTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        gradeActingTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.gradeActingTypeService.getGradeActingTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getGradeActingType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.gradeActingTypeService.getGradeActingType,
        );
    }

    public async addGradeActingType({ request }: HttpContextContract) {
        const gradeActingType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const GradeActingTypeValidate =
                GradeActingTypeSchema.safeParse(gradeActingType);
            if (!GradeActingTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeActingTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeActingTypeService.addGradeActingType(gradeActingType);
            return this.responseStatusService.showSuccess(
                'create',
                gradeActingType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editGradeActingType({ request }: HttpContextContract) {
        const gradeActingType = request.body();

        try {
            const GradeActingTypeValidate =
                GradeActingTypeSchema.safeParse(gradeActingType);
            if (!GradeActingTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeActingTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeActingTypeService.editGradeActingType(gradeActingType);
            return this.responseStatusService.showSuccess(
                'update',
                gradeActingType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
