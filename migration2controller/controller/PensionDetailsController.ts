import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PensionDetailServices from 'App/Services/PensionDetailServices';
import PensionDetailSchema from 'App/Validators/PensionDetailValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PensionDetailsController extends BaseController {
    constructor(private pensionDetailService: PensionDetailServices) {
        super();
    }

    public async getPensionDetails({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const pensionDetailSchema =
                PensionDetailSchema.safeParse(requestParams);
            if (!pensionDetailSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        pensionDetailSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.pensionDetailService.getPensionDetails(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPensionDetail({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.pensionDetailService.getPensionDetail,
        );
    }

    public async addPensionDetail({ request }: HttpContextContract) {
        const pensionDetail = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PensionDetailValidate =
                PensionDetailSchema.safeParse(pensionDetail);
            if (!PensionDetailValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PensionDetailValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.pensionDetailService.addPensionDetail(pensionDetail);
            return this.responseStatusService.showSuccess(
                'create',
                pensionDetail,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPensionDetail({ request }: HttpContextContract) {
        const pensionDetail = request.body();

        try {
            const PensionDetailValidate =
                PensionDetailSchema.safeParse(pensionDetail);
            if (!PensionDetailValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PensionDetailValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.pensionDetailService.editPensionDetail(pensionDetail);
            return this.responseStatusService.showSuccess(
                'update',
                pensionDetail,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
