import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import LoanServices from 'App/Services/LoanServices';
import LoanSchema from 'App/Validators/LoanValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class LoansController extends BaseController {
    constructor(private loanService: LoanServices) {
        super();
    }

    public async getLoans({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const loanSchema =
                LoanSchema.safeParse(requestParams);
            if (!loanSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        loanSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.loanService.getLoans(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getLoan({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.loanService.getLoan,
        );
    }

    public async addLoan({ request }: HttpContextContract) {
        const loan = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const LoanValidate =
                LoanSchema.safeParse(loan);
            if (!LoanValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        LoanValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.loanService.addLoan(loan);
            return this.responseStatusService.showSuccess(
                'create',
                loan,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editLoan({ request }: HttpContextContract) {
        const loan = request.body();

        try {
            const LoanValidate =
                LoanSchema.safeParse(loan);
            if (!LoanValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        LoanValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.loanService.editLoan(loan);
            return this.responseStatusService.showSuccess(
                'update',
                loan,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
