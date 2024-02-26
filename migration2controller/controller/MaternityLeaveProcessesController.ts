import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MaternityLeaveProcessServices from 'App/Services/MaternityLeaveProcessServices';
import MaternityLeaveProcessSchema from 'App/Validators/MaternityLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MaternityLeaveProcessesController extends BaseController {
    constructor(private maternityLeaveProcessService: MaternityLeaveProcessServices) {
        super();
    }

    public async getMaternityLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const maternityLeaveProcessSchema =
                MaternityLeaveProcessSchema.safeParse(requestParams);
            if (!maternityLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        maternityLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.maternityLeaveProcessService.getMaternityLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMaternityLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.maternityLeaveProcessService.getMaternityLeaveProcess,
        );
    }

    public async addMaternityLeaveProcess({ request }: HttpContextContract) {
        const maternityLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MaternityLeaveProcessValidate =
                MaternityLeaveProcessSchema.safeParse(maternityLeaveProcess);
            if (!MaternityLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MaternityLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.maternityLeaveProcessService.addMaternityLeaveProcess(maternityLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                maternityLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMaternityLeaveProcess({ request }: HttpContextContract) {
        const maternityLeaveProcess = request.body();

        try {
            const MaternityLeaveProcessValidate =
                MaternityLeaveProcessSchema.safeParse(maternityLeaveProcess);
            if (!MaternityLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MaternityLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.maternityLeaveProcessService.editMaternityLeaveProcess(maternityLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                maternityLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
