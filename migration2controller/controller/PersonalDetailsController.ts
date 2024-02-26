import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PersonalDetailServices from 'App/Services/PersonalDetailServices';
import PersonalDetailSchema from 'App/Validators/PersonalDetailValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PersonalDetailsController extends BaseController {
    constructor(private personalDetailService: PersonalDetailServices) {
        super();
    }

    public async getPersonalDetails({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const personalDetailSchema =
                PersonalDetailSchema.safeParse(requestParams);
            if (!personalDetailSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        personalDetailSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.personalDetailService.getPersonalDetails(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPersonalDetail({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.personalDetailService.getPersonalDetail,
        );
    }

    public async addPersonalDetail({ request }: HttpContextContract) {
        const personalDetail = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PersonalDetailValidate =
                PersonalDetailSchema.safeParse(personalDetail);
            if (!PersonalDetailValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PersonalDetailValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.personalDetailService.addPersonalDetail(personalDetail);
            return this.responseStatusService.showSuccess(
                'create',
                personalDetail,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPersonalDetail({ request }: HttpContextContract) {
        const personalDetail = request.body();

        try {
            const PersonalDetailValidate =
                PersonalDetailSchema.safeParse(personalDetail);
            if (!PersonalDetailValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PersonalDetailValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.personalDetailService.editPersonalDetail(personalDetail);
            return this.responseStatusService.showSuccess(
                'update',
                personalDetail,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
