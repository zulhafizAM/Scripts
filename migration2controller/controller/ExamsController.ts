import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ExamServices from 'App/Services/ExamServices';
import ExamSchema from 'App/Validators/ExamValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ExamsController extends BaseController {
    constructor(private examService: ExamServices) {
        super();
    }

    public async getExams({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const examSchema =
                ExamSchema.safeParse(requestParams);
            if (!examSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        examSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.examService.getExams(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getExam({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.examService.getExam,
        );
    }

    public async addExam({ request }: HttpContextContract) {
        const exam = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ExamValidate =
                ExamSchema.safeParse(exam);
            if (!ExamValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examService.addExam(exam);
            return this.responseStatusService.showSuccess(
                'create',
                exam,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editExam({ request }: HttpContextContract) {
        const exam = request.body();

        try {
            const ExamValidate =
                ExamSchema.safeParse(exam);
            if (!ExamValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examService.editExam(exam);
            return this.responseStatusService.showSuccess(
                'update',
                exam,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
