import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EducationServices from 'App/Services/EducationServices';
import EducationSchema from 'App/Validators/EducationValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EducationsController extends BaseController {
    constructor(private educationService: EducationServices) {
        super();
    }

    public async getEducations({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const educationSchema =
                EducationSchema.safeParse(requestParams);
            if (!educationSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        educationSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.educationService.getEducations(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEducation({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.educationService.getEducation,
        );
    }

    public async addEducation({ request }: HttpContextContract) {
        const education = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EducationValidate =
                EducationSchema.safeParse(education);
            if (!EducationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EducationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.educationService.addEducation(education);
            return this.responseStatusService.showSuccess(
                'create',
                education,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEducation({ request }: HttpContextContract) {
        const education = request.body();

        try {
            const EducationValidate =
                EducationSchema.safeParse(education);
            if (!EducationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EducationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.educationService.editEducation(education);
            return this.responseStatusService.showSuccess(
                'update',
                education,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
