import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GradePromotionTypeServices from 'App/Services/GradePromotionTypeServices';
import GradePromotionTypeSchema from 'App/Validators/GradePromotionTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class GradePromotionTypesController extends BaseController {
    constructor(private gradePromotionTypeService: GradePromotionTypeServices) {
        super();
    }

    public async getGradePromotionTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const gradePromotionTypeSchema =
                GradePromotionTypeSchema.safeParse(requestParams);
            if (!gradePromotionTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        gradePromotionTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.gradePromotionTypeService.getGradePromotionTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getGradePromotionType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.gradePromotionTypeService.getGradePromotionType,
        );
    }

    public async addGradePromotionType({ request }: HttpContextContract) {
        const gradePromotionType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const GradePromotionTypeValidate =
                GradePromotionTypeSchema.safeParse(gradePromotionType);
            if (!GradePromotionTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradePromotionTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradePromotionTypeService.addGradePromotionType(gradePromotionType);
            return this.responseStatusService.showSuccess(
                'create',
                gradePromotionType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editGradePromotionType({ request }: HttpContextContract) {
        const gradePromotionType = request.body();

        try {
            const GradePromotionTypeValidate =
                GradePromotionTypeSchema.safeParse(gradePromotionType);
            if (!GradePromotionTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradePromotionTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradePromotionTypeService.editGradePromotionType(gradePromotionType);
            return this.responseStatusService.showSuccess(
                'update',
                gradePromotionType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
