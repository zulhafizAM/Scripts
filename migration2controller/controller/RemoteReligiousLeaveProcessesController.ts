import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import RemoteReligiousLeaveProcessServices from 'App/Services/RemoteReligiousLeaveProcessServices';
import RemoteReligiousLeaveProcessSchema from 'App/Validators/RemoteReligiousLeaveProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class RemoteReligiousLeaveProcessesController extends BaseController {
    constructor(private remoteReligiousLeaveProcessService: RemoteReligiousLeaveProcessServices) {
        super();
    }

    public async getRemoteReligiousLeaveProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const remoteReligiousLeaveProcessSchema =
                RemoteReligiousLeaveProcessSchema.safeParse(requestParams);
            if (!remoteReligiousLeaveProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        remoteReligiousLeaveProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.remoteReligiousLeaveProcessService.getRemoteReligiousLeaveProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getRemoteReligiousLeaveProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.remoteReligiousLeaveProcessService.getRemoteReligiousLeaveProcess,
        );
    }

    public async addRemoteReligiousLeaveProcess({ request }: HttpContextContract) {
        const remoteReligiousLeaveProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const RemoteReligiousLeaveProcessValidate =
                RemoteReligiousLeaveProcessSchema.safeParse(remoteReligiousLeaveProcess);
            if (!RemoteReligiousLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RemoteReligiousLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.remoteReligiousLeaveProcessService.addRemoteReligiousLeaveProcess(remoteReligiousLeaveProcess);
            return this.responseStatusService.showSuccess(
                'create',
                remoteReligiousLeaveProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editRemoteReligiousLeaveProcess({ request }: HttpContextContract) {
        const remoteReligiousLeaveProcess = request.body();

        try {
            const RemoteReligiousLeaveProcessValidate =
                RemoteReligiousLeaveProcessSchema.safeParse(remoteReligiousLeaveProcess);
            if (!RemoteReligiousLeaveProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RemoteReligiousLeaveProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.remoteReligiousLeaveProcessService.editRemoteReligiousLeaveProcess(remoteReligiousLeaveProcess);
            return this.responseStatusService.showSuccess(
                'update',
                remoteReligiousLeaveProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
