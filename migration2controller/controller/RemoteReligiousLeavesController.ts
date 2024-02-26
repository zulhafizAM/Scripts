import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import RemoteReligiousLeaveServices from 'App/Services/RemoteReligiousLeaveServices';
import RemoteReligiousLeaveSchema from 'App/Validators/RemoteReligiousLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class RemoteReligiousLeavesController extends BaseController {
    constructor(private remoteReligiousLeaveService: RemoteReligiousLeaveServices) {
        super();
    }

    public async getRemoteReligiousLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const remoteReligiousLeaveSchema =
                RemoteReligiousLeaveSchema.safeParse(requestParams);
            if (!remoteReligiousLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        remoteReligiousLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.remoteReligiousLeaveService.getRemoteReligiousLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getRemoteReligiousLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.remoteReligiousLeaveService.getRemoteReligiousLeave,
        );
    }

    public async addRemoteReligiousLeave({ request }: HttpContextContract) {
        const remoteReligiousLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const RemoteReligiousLeaveValidate =
                RemoteReligiousLeaveSchema.safeParse(remoteReligiousLeave);
            if (!RemoteReligiousLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RemoteReligiousLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.remoteReligiousLeaveService.addRemoteReligiousLeave(remoteReligiousLeave);
            return this.responseStatusService.showSuccess(
                'create',
                remoteReligiousLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editRemoteReligiousLeave({ request }: HttpContextContract) {
        const remoteReligiousLeave = request.body();

        try {
            const RemoteReligiousLeaveValidate =
                RemoteReligiousLeaveSchema.safeParse(remoteReligiousLeave);
            if (!RemoteReligiousLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RemoteReligiousLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.remoteReligiousLeaveService.editRemoteReligiousLeave(remoteReligiousLeave);
            return this.responseStatusService.showSuccess(
                'update',
                remoteReligiousLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
