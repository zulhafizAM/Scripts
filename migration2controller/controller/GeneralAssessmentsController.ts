import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GeneralAssessmentServices from 'App/Services/GeneralAssessmentServices';
import GeneralAssessmentSchema from 'App/Validators/GeneralAssessmentValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class GeneralAssessmentsController extends BaseController {
    constructor(private generalAssessmentService: GeneralAssessmentServices) {
        super();
    }

    public async getGeneralAssessments({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const generalAssessmentSchema =
                GeneralAssessmentSchema.safeParse(requestParams);
            if (!generalAssessmentSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        generalAssessmentSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.generalAssessmentService.getGeneralAssessments(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getGeneralAssessment({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.generalAssessmentService.getGeneralAssessment,
        );
    }

    public async addGeneralAssessment({ request }: HttpContextContract) {
        const generalAssessment = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const GeneralAssessmentValidate =
                GeneralAssessmentSchema.safeParse(generalAssessment);
            if (!GeneralAssessmentValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GeneralAssessmentValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.generalAssessmentService.addGeneralAssessment(generalAssessment);
            return this.responseStatusService.showSuccess(
                'create',
                generalAssessment,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editGeneralAssessment({ request }: HttpContextContract) {
        const generalAssessment = request.body();

        try {
            const GeneralAssessmentValidate =
                GeneralAssessmentSchema.safeParse(generalAssessment);
            if (!GeneralAssessmentValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GeneralAssessmentValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.generalAssessmentService.editGeneralAssessment(generalAssessment);
            return this.responseStatusService.showSuccess(
                'update',
                generalAssessment,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
