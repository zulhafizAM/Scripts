import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SectionServices from 'App/Services/SectionServices';
import SectionSchema from 'App/Validators/SectionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SectionsController extends BaseController {
    constructor(private sectionService: SectionServices) {
        super();
    }

    public async getSections({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const sectionSchema =
                SectionSchema.safeParse(requestParams);
            if (!sectionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        sectionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.sectionService.getSections(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSection({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.sectionService.getSection,
        );
    }

    public async addSection({ request }: HttpContextContract) {
        const section = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SectionValidate =
                SectionSchema.safeParse(section);
            if (!SectionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SectionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.sectionService.addSection(section);
            return this.responseStatusService.showSuccess(
                'create',
                section,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSection({ request }: HttpContextContract) {
        const section = request.body();

        try {
            const SectionValidate =
                SectionSchema.safeParse(section);
            if (!SectionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SectionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.sectionService.editSection(section);
            return this.responseStatusService.showSuccess(
                'update',
                section,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
