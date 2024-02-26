import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ReplacementAnnualLeavesProcessServices from 'App/Services/ReplacementAnnualLeavesProcessServices';
import ReplacementAnnualLeavesProcessSchema from 'App/Validators/ReplacementAnnualLeavesProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ReplacementAnnualLeavesProcessesController extends BaseController {
    constructor(private replacementAnnualLeavesProcessService: ReplacementAnnualLeavesProcessServices) {
        super();
    }

    public async getReplacementAnnualLeavesProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const replacementAnnualLeavesProcessSchema =
                ReplacementAnnualLeavesProcessSchema.safeParse(requestParams);
            if (!replacementAnnualLeavesProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        replacementAnnualLeavesProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.replacementAnnualLeavesProcessService.getReplacementAnnualLeavesProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getReplacementAnnualLeavesProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.replacementAnnualLeavesProcessService.getReplacementAnnualLeavesProcess,
        );
    }

    public async addReplacementAnnualLeavesProcess({ request }: HttpContextContract) {
        const replacementAnnualLeavesProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ReplacementAnnualLeavesProcessValidate =
                ReplacementAnnualLeavesProcessSchema.safeParse(replacementAnnualLeavesProcess);
            if (!ReplacementAnnualLeavesProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ReplacementAnnualLeavesProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.replacementAnnualLeavesProcessService.addReplacementAnnualLeavesProcess(replacementAnnualLeavesProcess);
            return this.responseStatusService.showSuccess(
                'create',
                replacementAnnualLeavesProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editReplacementAnnualLeavesProcess({ request }: HttpContextContract) {
        const replacementAnnualLeavesProcess = request.body();

        try {
            const ReplacementAnnualLeavesProcessValidate =
                ReplacementAnnualLeavesProcessSchema.safeParse(replacementAnnualLeavesProcess);
            if (!ReplacementAnnualLeavesProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ReplacementAnnualLeavesProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.replacementAnnualLeavesProcessService.editReplacementAnnualLeavesProcess(replacementAnnualLeavesProcess);
            return this.responseStatusService.showSuccess(
                'update',
                replacementAnnualLeavesProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
