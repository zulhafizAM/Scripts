import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ExperienceServices from 'App/Services/ExperienceServices';
import ExperienceSchema from 'App/Validators/ExperienceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ExperiencesController extends BaseController {
    constructor(private experienceService: ExperienceServices) {
        super();
    }

    public async getExperiences({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const experienceSchema =
                ExperienceSchema.safeParse(requestParams);
            if (!experienceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        experienceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.experienceService.getExperiences(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getExperience({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.experienceService.getExperience,
        );
    }

    public async addExperience({ request }: HttpContextContract) {
        const experience = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ExperienceValidate =
                ExperienceSchema.safeParse(experience);
            if (!ExperienceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExperienceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.experienceService.addExperience(experience);
            return this.responseStatusService.showSuccess(
                'create',
                experience,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editExperience({ request }: HttpContextContract) {
        const experience = request.body();

        try {
            const ExperienceValidate =
                ExperienceSchema.safeParse(experience);
            if (!ExperienceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExperienceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.experienceService.editExperience(experience);
            return this.responseStatusService.showSuccess(
                'update',
                experience,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
