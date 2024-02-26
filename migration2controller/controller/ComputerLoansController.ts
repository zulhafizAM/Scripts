import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ComputerLoanServices from 'App/Services/ComputerLoanServices';
import ComputerLoanSchema from 'App/Validators/ComputerLoanValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ComputerLoansController extends BaseController {
    constructor(private computerLoanService: ComputerLoanServices) {
        super();
    }

    public async getComputerLoans({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const computerLoanSchema =
                ComputerLoanSchema.safeParse(requestParams);
            if (!computerLoanSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        computerLoanSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.computerLoanService.getComputerLoans(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getComputerLoan({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.computerLoanService.getComputerLoan,
        );
    }

    public async addComputerLoan({ request }: HttpContextContract) {
        const computerLoan = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ComputerLoanValidate =
                ComputerLoanSchema.safeParse(computerLoan);
            if (!ComputerLoanValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ComputerLoanValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.computerLoanService.addComputerLoan(computerLoan);
            return this.responseStatusService.showSuccess(
                'create',
                computerLoan,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editComputerLoan({ request }: HttpContextContract) {
        const computerLoan = request.body();

        try {
            const ComputerLoanValidate =
                ComputerLoanSchema.safeParse(computerLoan);
            if (!ComputerLoanValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ComputerLoanValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.computerLoanService.editComputerLoan(computerLoan);
            return this.responseStatusService.showSuccess(
                'update',
                computerLoan,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
