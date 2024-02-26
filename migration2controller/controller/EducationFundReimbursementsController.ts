import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EducationFundReimbursementServices from 'App/Services/EducationFundReimbursementServices';
import EducationFundReimbursementSchema from 'App/Validators/EducationFundReimbursementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class EducationFundReimbursementsController extends BaseController {
    constructor(private educationFundReimbursementService: EducationFundReimbursementServices) {
        super();
    }

    public async getEducationFundReimbursements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const educationFundReimbursementSchema =
                EducationFundReimbursementSchema.safeParse(requestParams);
            if (!educationFundReimbursementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        educationFundReimbursementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.educationFundReimbursementService.getEducationFundReimbursements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getEducationFundReimbursement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.educationFundReimbursementService.getEducationFundReimbursement,
        );
    }

    public async addEducationFundReimbursement({ request }: HttpContextContract) {
        const educationFundReimbursement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const EducationFundReimbursementValidate =
                EducationFundReimbursementSchema.safeParse(educationFundReimbursement);
            if (!EducationFundReimbursementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EducationFundReimbursementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.educationFundReimbursementService.addEducationFundReimbursement(educationFundReimbursement);
            return this.responseStatusService.showSuccess(
                'create',
                educationFundReimbursement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editEducationFundReimbursement({ request }: HttpContextContract) {
        const educationFundReimbursement = request.body();

        try {
            const EducationFundReimbursementValidate =
                EducationFundReimbursementSchema.safeParse(educationFundReimbursement);
            if (!EducationFundReimbursementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        EducationFundReimbursementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.educationFundReimbursementService.editEducationFundReimbursement(educationFundReimbursement);
            return this.responseStatusService.showSuccess(
                'update',
                educationFundReimbursement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
