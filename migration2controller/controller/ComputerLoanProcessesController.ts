import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ComputerLoanProcessServices from 'App/Services/ComputerLoanProcessServices';
import ComputerLoanProcessSchema from 'App/Validators/ComputerLoanProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ComputerLoanProcessesController extends BaseController {
    constructor(private computerLoanProcessService: ComputerLoanProcessServices) {
        super();
    }

    public async getComputerLoanProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const computerLoanProcessSchema =
                ComputerLoanProcessSchema.safeParse(requestParams);
            if (!computerLoanProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        computerLoanProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.computerLoanProcessService.getComputerLoanProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getComputerLoanProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.computerLoanProcessService.getComputerLoanProcess,
        );
    }

    public async addComputerLoanProcess({ request }: HttpContextContract) {
        const computerLoanProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ComputerLoanProcessValidate =
                ComputerLoanProcessSchema.safeParse(computerLoanProcess);
            if (!ComputerLoanProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ComputerLoanProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.computerLoanProcessService.addComputerLoanProcess(computerLoanProcess);
            return this.responseStatusService.showSuccess(
                'create',
                computerLoanProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editComputerLoanProcess({ request }: HttpContextContract) {
        const computerLoanProcess = request.body();

        try {
            const ComputerLoanProcessValidate =
                ComputerLoanProcessSchema.safeParse(computerLoanProcess);
            if (!ComputerLoanProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ComputerLoanProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.computerLoanProcessService.editComputerLoanProcess(computerLoanProcess);
            return this.responseStatusService.showSuccess(
                'update',
                computerLoanProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
