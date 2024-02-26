import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GradeServices from 'App/Services/GradeServices';
import GradeSchema from 'App/Validators/GradeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class GradesController extends BaseController {
    constructor(private gradeService: GradeServices) {
        super();
    }

    public async getGrades({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const gradeSchema =
                GradeSchema.safeParse(requestParams);
            if (!gradeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        gradeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.gradeService.getGrades(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getGrade({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.gradeService.getGrade,
        );
    }

    public async addGrade({ request }: HttpContextContract) {
        const grade = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const GradeValidate =
                GradeSchema.safeParse(grade);
            if (!GradeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeService.addGrade(grade);
            return this.responseStatusService.showSuccess(
                'create',
                grade,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editGrade({ request }: HttpContextContract) {
        const grade = request.body();

        try {
            const GradeValidate =
                GradeSchema.safeParse(grade);
            if (!GradeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeService.editGrade(grade);
            return this.responseStatusService.showSuccess(
                'update',
                grade,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
