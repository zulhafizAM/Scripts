import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import OtherLeaveProcessServices from 'App/Services/OtherLeaveProcessServices';
import OtherLeaveProcessSchema from 'App/Validators/OtherLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class OtherLeaveProcessesController extends BaseController {
    constructor(private otherLeaveProcessService: OtherLeaveProcessServices) {
        super();
    }

    public async getOtherLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const otherLeaveProcessSchema =
                OtherLeaveProcessSchema.safeParse(requestParams);
            if (!otherLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        otherLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.otherLeaveProcessService.getOtherLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getOtherLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.otherLeaveProcessService.getOtherLeaveProcess,
        );
    }

    public async addOtherLeaveProcess({ request }: HttpContextContract) {
        const otherLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const OtherLeaveProcessValidate =
                OtherLeaveProcessSchema.safeParse(otherLeaveProcess);
            if (!OtherLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        OtherLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.otherLeaveProcessService.addOtherLeaveProcess(otherLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                otherLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editOtherLeaveProcess({ request }: HttpContextContract) {
        const otherLeaveProcess = request.body();

        try {
            const OtherLeaveProcessValidate =
                OtherLeaveProcessSchema.safeParse(otherLeaveProcess);
            if (!OtherLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        OtherLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.otherLeaveProcessService.editOtherLeaveProcess(otherLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                otherLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
