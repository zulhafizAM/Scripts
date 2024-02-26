import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NewHiredProcessServices from 'App/Services/NewHiredProcessServices';
import NewHiredProcessSchema from 'App/Validators/NewHiredProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class NewHiredProcessesController extends BaseController {
    constructor(private newHiredProcessService: NewHiredProcessServices) {
        super();
    }

    public async getNewHiredProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const newHiredProcessSchema =
                NewHiredProcessSchema.safeParse(requestParams);
            if (!newHiredProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        newHiredProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.newHiredProcessService.getNewHiredProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getNewHiredProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.newHiredProcessService.getNewHiredProcess,
        );
    }

    public async addNewHiredProcess({ request }: HttpContextContract) {
        const newHiredProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const NewHiredProcessValidate =
                NewHiredProcessSchema.safeParse(newHiredProcess);
            if (!NewHiredProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewHiredProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newHiredProcessService.addNewHiredProcess(newHiredProcess);
            return this.responseStatusService.showSuccess(
                'create',
                newHiredProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editNewHiredProcess({ request }: HttpContextContract) {
        const newHiredProcess = request.body();

        try {
            const NewHiredProcessValidate =
                NewHiredProcessSchema.safeParse(newHiredProcess);
            if (!NewHiredProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewHiredProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newHiredProcessService.editNewHiredProcess(newHiredProcess);
            return this.responseStatusService.showSuccess(
                'update',
                newHiredProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
