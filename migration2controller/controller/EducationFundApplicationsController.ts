import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EducationFundApplicationServices from 'App/Services/EducationFundApplicationServices';
import EducationFundApplicationSchema from 'App/Validators/EducationFundApplicationValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EducationFundApplicationsController extends BaseController {
    constructor(private educationFundApplicationService: EducationFundApplicationServices) {
        super();
    }

    public async getEducationFundApplications({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const educationFundApplicationSchema =
                EducationFundApplicationSchema.safeParse(requestParams);
            if (!educationFundApplicationSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        educationFundApplicationSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.educationFundApplicationService.getEducationFundApplications(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEducationFundApplication({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.educationFundApplicationService.getEducationFundApplication,
        );
    }

    public async addEducationFundApplication({ request }: HttpContextContract) {
        const educationFundApplication = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EducationFundApplicationValidate =
                EducationFundApplicationSchema.safeParse(educationFundApplication);
            if (!EducationFundApplicationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EducationFundApplicationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.educationFundApplicationService.addEducationFundApplication(educationFundApplication);
            return this.responseStatusService.showSuccess(
                'create',
                educationFundApplication,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEducationFundApplication({ request }: HttpContextContract) {
        const educationFundApplication = request.body();

        try {
            const EducationFundApplicationValidate =
                EducationFundApplicationSchema.safeParse(educationFundApplication);
            if (!EducationFundApplicationValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EducationFundApplicationValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.educationFundApplicationService.editEducationFundApplication(educationFundApplication);
            return this.responseStatusService.showSuccess(
                'update',
                educationFundApplication,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
