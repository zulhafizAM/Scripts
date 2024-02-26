import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import FuneralArrangementProcessServices from 'App/Services/FuneralArrangementProcessServices';
import FuneralArrangementProcessSchema from 'App/Validators/FuneralArrangementProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class FuneralArrangementProcessesController extends BaseController {
    constructor(private funeralArrangementProcessService: FuneralArrangementProcessServices) {
        super();
    }

    public async getFuneralArrangementProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const funeralArrangementProcessSchema =
                FuneralArrangementProcessSchema.safeParse(requestParams);
            if (!funeralArrangementProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        funeralArrangementProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.funeralArrangementProcessService.getFuneralArrangementProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getFuneralArrangementProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.funeralArrangementProcessService.getFuneralArrangementProcess,
        );
    }

    public async addFuneralArrangementProcess({ request }: HttpContextContract) {
        const funeralArrangementProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const FuneralArrangementProcessValidate =
                FuneralArrangementProcessSchema.safeParse(funeralArrangementProcess);
            if (!FuneralArrangementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FuneralArrangementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.funeralArrangementProcessService.addFuneralArrangementProcess(funeralArrangementProcess);
            return this.responseStatusService.showSuccess(
                'create',
                funeralArrangementProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editFuneralArrangementProcess({ request }: HttpContextContract) {
        const funeralArrangementProcess = request.body();

        try {
            const FuneralArrangementProcessValidate =
                FuneralArrangementProcessSchema.safeParse(funeralArrangementProcess);
            if (!FuneralArrangementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        FuneralArrangementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.funeralArrangementProcessService.editFuneralArrangementProcess(funeralArrangementProcess);
            return this.responseStatusService.showSuccess(
                'update',
                funeralArrangementProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
