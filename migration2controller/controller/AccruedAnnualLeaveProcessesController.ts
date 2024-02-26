import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AccruedAnnualLeaveProcessServices from 'App/Services/AccruedAnnualLeaveProcessServices';
import AccruedAnnualLeaveProcessSchema from 'App/Validators/AccruedAnnualLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AccruedAnnualLeaveProcessesController extends BaseController {
    constructor(private accruedAnnualLeaveProcessService: AccruedAnnualLeaveProcessServices) {
        super();
    }

    public async getAccruedAnnualLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const accruedAnnualLeaveProcessSchema =
                AccruedAnnualLeaveProcessSchema.safeParse(requestParams);
            if (!accruedAnnualLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        accruedAnnualLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.accruedAnnualLeaveProcessService.getAccruedAnnualLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAccruedAnnualLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.accruedAnnualLeaveProcessService.getAccruedAnnualLeaveProcess,
        );
    }

    public async addAccruedAnnualLeaveProcess({ request }: HttpContextContract) {
        const accruedAnnualLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AccruedAnnualLeaveProcessValidate =
                AccruedAnnualLeaveProcessSchema.safeParse(accruedAnnualLeaveProcess);
            if (!AccruedAnnualLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AccruedAnnualLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.accruedAnnualLeaveProcessService.addAccruedAnnualLeaveProcess(accruedAnnualLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                accruedAnnualLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAccruedAnnualLeaveProcess({ request }: HttpContextContract) {
        const accruedAnnualLeaveProcess = request.body();

        try {
            const AccruedAnnualLeaveProcessValidate =
                AccruedAnnualLeaveProcessSchema.safeParse(accruedAnnualLeaveProcess);
            if (!AccruedAnnualLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AccruedAnnualLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.accruedAnnualLeaveProcessService.editAccruedAnnualLeaveProcess(accruedAnnualLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                accruedAnnualLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
