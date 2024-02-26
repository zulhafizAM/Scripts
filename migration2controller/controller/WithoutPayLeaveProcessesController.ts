import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import WithoutPayLeaveProcessServices from 'App/Services/WithoutPayLeaveProcessServices';
import WithoutPayLeaveProcessSchema from 'App/Validators/WithoutPayLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class WithoutPayLeaveProcessesController extends BaseController {
    constructor(private withoutPayLeaveProcessService: WithoutPayLeaveProcessServices) {
        super();
    }

    public async getWithoutPayLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const withoutPayLeaveProcessSchema =
                WithoutPayLeaveProcessSchema.safeParse(requestParams);
            if (!withoutPayLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        withoutPayLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.withoutPayLeaveProcessService.getWithoutPayLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getWithoutPayLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.withoutPayLeaveProcessService.getWithoutPayLeaveProcess,
        );
    }

    public async addWithoutPayLeaveProcess({ request }: HttpContextContract) {
        const withoutPayLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const WithoutPayLeaveProcessValidate =
                WithoutPayLeaveProcessSchema.safeParse(withoutPayLeaveProcess);
            if (!WithoutPayLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithoutPayLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withoutPayLeaveProcessService.addWithoutPayLeaveProcess(withoutPayLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                withoutPayLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editWithoutPayLeaveProcess({ request }: HttpContextContract) {
        const withoutPayLeaveProcess = request.body();

        try {
            const WithoutPayLeaveProcessValidate =
                WithoutPayLeaveProcessSchema.safeParse(withoutPayLeaveProcess);
            if (!WithoutPayLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithoutPayLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withoutPayLeaveProcessService.editWithoutPayLeaveProcess(withoutPayLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                withoutPayLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
