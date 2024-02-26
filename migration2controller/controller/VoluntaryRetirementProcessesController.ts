import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import VoluntaryRetirementProcessServices from 'App/Services/VoluntaryRetirementProcessServices';
import VoluntaryRetirementProcessSchema from 'App/Validators/VoluntaryRetirementProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class VoluntaryRetirementProcessesController extends BaseController {
    constructor(private voluntaryRetirementProcessService: VoluntaryRetirementProcessServices) {
        super();
    }

    public async getVoluntaryRetirementProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const voluntaryRetirementProcessSchema =
                VoluntaryRetirementProcessSchema.safeParse(requestParams);
            if (!voluntaryRetirementProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        voluntaryRetirementProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.voluntaryRetirementProcessService.getVoluntaryRetirementProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getVoluntaryRetirementProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.voluntaryRetirementProcessService.getVoluntaryRetirementProcess,
        );
    }

    public async addVoluntaryRetirementProcess({ request }: HttpContextContract) {
        const voluntaryRetirementProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const VoluntaryRetirementProcessValidate =
                VoluntaryRetirementProcessSchema.safeParse(voluntaryRetirementProcess);
            if (!VoluntaryRetirementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VoluntaryRetirementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.voluntaryRetirementProcessService.addVoluntaryRetirementProcess(voluntaryRetirementProcess);
            return this.responseStatusService.showSuccess(
                'create',
                voluntaryRetirementProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editVoluntaryRetirementProcess({ request }: HttpContextContract) {
        const voluntaryRetirementProcess = request.body();

        try {
            const VoluntaryRetirementProcessValidate =
                VoluntaryRetirementProcessSchema.safeParse(voluntaryRetirementProcess);
            if (!VoluntaryRetirementProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VoluntaryRetirementProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.voluntaryRetirementProcessService.editVoluntaryRetirementProcess(voluntaryRetirementProcess);
            return this.responseStatusService.showSuccess(
                'update',
                voluntaryRetirementProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
