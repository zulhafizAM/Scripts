import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ExamApplicationServices from 'App/Services/ExamApplicationServices';
import ExamApplicationSchema from 'App/Validators/ExamApplicationValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ExamApplicationsController extends BaseController {
    constructor(private examApplicationService: ExamApplicationServices) {
        super();
    }

    public async getExamApplications({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const examApplicationSchema =
                ExamApplicationSchema.safeParse(requestParams);
            if (!examApplicationSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        examApplicationSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.examApplicationService.getExamApplications(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getExamApplication({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.examApplicationService.getExamApplication,
        );
    }

    public async addExamApplication({ request }: HttpContextContract) {
        const examApplication = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ExamApplicationValidate =
                ExamApplicationSchema.safeParse(examApplication);
            if (!ExamApplicationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamApplicationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examApplicationService.addExamApplication(examApplication);
            return this.responseStatusService.showSuccess(
                'create',
                examApplication,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editExamApplication({ request }: HttpContextContract) {
        const examApplication = request.body();

        try {
            const ExamApplicationValidate =
                ExamApplicationSchema.safeParse(examApplication);
            if (!ExamApplicationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamApplicationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examApplicationService.editExamApplication(examApplication);
            return this.responseStatusService.showSuccess(
                'update',
                examApplication,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
