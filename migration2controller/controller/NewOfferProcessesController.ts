import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NewOfferProcessServices from 'App/Services/NewOfferProcessServices';
import NewOfferProcessSchema from 'App/Validators/NewOfferProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class NewOfferProcessesController extends BaseController {
    constructor(private newOfferProcessService: NewOfferProcessServices) {
        super();
    }

    public async getNewOfferProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const newOfferProcessSchema =
                NewOfferProcessSchema.safeParse(requestParams);
            if (!newOfferProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        newOfferProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.newOfferProcessService.getNewOfferProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getNewOfferProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.newOfferProcessService.getNewOfferProcess,
        );
    }

    public async addNewOfferProcess({ request }: HttpContextContract) {
        const newOfferProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const NewOfferProcessValidate =
                NewOfferProcessSchema.safeParse(newOfferProcess);
            if (!NewOfferProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewOfferProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newOfferProcessService.addNewOfferProcess(newOfferProcess);
            return this.responseStatusService.showSuccess(
                'create',
                newOfferProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editNewOfferProcess({ request }: HttpContextContract) {
        const newOfferProcess = request.body();

        try {
            const NewOfferProcessValidate =
                NewOfferProcessSchema.safeParse(newOfferProcess);
            if (!NewOfferProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewOfferProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newOfferProcessService.editNewOfferProcess(newOfferProcess);
            return this.responseStatusService.showSuccess(
                'update',
                newOfferProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
