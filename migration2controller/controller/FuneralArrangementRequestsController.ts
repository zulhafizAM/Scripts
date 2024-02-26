import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import FuneralArrangementRequestServices from 'App/Services/FuneralArrangementRequestServices';
import FuneralArrangementRequestSchema from 'App/Validators/FuneralArrangementRequestValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class FuneralArrangementRequestsController extends BaseController {
    constructor(private funeralArrangementRequestService: FuneralArrangementRequestServices) {
        super();
    }

    public async getFuneralArrangementRequests({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const funeralArrangementRequestSchema =
                FuneralArrangementRequestSchema.safeParse(requestParams);
            if (!funeralArrangementRequestSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        funeralArrangementRequestSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.funeralArrangementRequestService.getFuneralArrangementRequests(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getFuneralArrangementRequest({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.funeralArrangementRequestService.getFuneralArrangementRequest,
        );
    }

    public async addFuneralArrangementRequest({ request }: HttpContextContract) {
        const funeralArrangementRequest = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const FuneralArrangementRequestValidate =
                FuneralArrangementRequestSchema.safeParse(funeralArrangementRequest);
            if (!FuneralArrangementRequestValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FuneralArrangementRequestValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.funeralArrangementRequestService.addFuneralArrangementRequest(funeralArrangementRequest);
            return this.responseStatusService.showSuccess(
                'create',
                funeralArrangementRequest,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editFuneralArrangementRequest({ request }: HttpContextContract) {
        const funeralArrangementRequest = request.body();

        try {
            const FuneralArrangementRequestValidate =
                FuneralArrangementRequestSchema.safeParse(funeralArrangementRequest);
            if (!FuneralArrangementRequestValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FuneralArrangementRequestValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.funeralArrangementRequestService.editFuneralArrangementRequest(funeralArrangementRequest);
            return this.responseStatusService.showSuccess(
                'update',
                funeralArrangementRequest,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
