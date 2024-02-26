import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UserAccountServices from 'App/Services/UserAccountServices';
import UserAccountSchema from 'App/Validators/UserAccountValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class UserAccountsController extends BaseController {
    constructor(private userAccountService: UserAccountServices) {
        super();
    }

    public async getUserAccounts({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const userAccountSchema =
                UserAccountSchema.safeParse(requestParams);
            if (!userAccountSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        userAccountSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.userAccountService.getUserAccounts(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getUserAccount({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.userAccountService.getUserAccount,
        );
    }

    public async addUserAccount({ request }: HttpContextContract) {
        const userAccount = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const UserAccountValidate =
                UserAccountSchema.safeParse(userAccount);
            if (!UserAccountValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UserAccountValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.userAccountService.addUserAccount(userAccount);
            return this.responseStatusService.showSuccess(
                'create',
                userAccount,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editUserAccount({ request }: HttpContextContract) {
        const userAccount = request.body();

        try {
            const UserAccountValidate =
                UserAccountSchema.safeParse(userAccount);
            if (!UserAccountValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UserAccountValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.userAccountService.editUserAccount(userAccount);
            return this.responseStatusService.showSuccess(
                'update',
                userAccount,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
