import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ExamApplicationProcessServices from 'App/Services/ExamApplicationProcessServices';
import ExamApplicationProcessSchema from 'App/Validators/ExamApplicationProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ExamApplicationProcessesController extends BaseController {
    constructor(private examApplicationProcessService: ExamApplicationProcessServices) {
        super();
    }

    public async getExamApplicationProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const examApplicationProcessSchema =
                ExamApplicationProcessSchema.safeParse(requestParams);
            if (!examApplicationProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        examApplicationProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.examApplicationProcessService.getExamApplicationProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getExamApplicationProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.examApplicationProcessService.getExamApplicationProcess,
        );
    }

    public async addExamApplicationProcess({ request }: HttpContextContract) {
        const examApplicationProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ExamApplicationProcessValidate =
                ExamApplicationProcessSchema.safeParse(examApplicationProcess);
            if (!ExamApplicationProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamApplicationProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examApplicationProcessService.addExamApplicationProcess(examApplicationProcess);
            return this.responseStatusService.showSuccess(
                'create',
                examApplicationProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editExamApplicationProcess({ request }: HttpContextContract) {
        const examApplicationProcess = request.body();

        try {
            const ExamApplicationProcessValidate =
                ExamApplicationProcessSchema.safeParse(examApplicationProcess);
            if (!ExamApplicationProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamApplicationProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examApplicationProcessService.editExamApplicationProcess(examApplicationProcess);
            return this.responseStatusService.showSuccess(
                'update',
                examApplicationProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
