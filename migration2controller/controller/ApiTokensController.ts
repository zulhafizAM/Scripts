import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ApiTokenServices from 'App/Services/ApiTokenServices';
import ApiTokenSchema from 'App/Validators/ApiTokenValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ApiTokensController extends BaseController {
    constructor(private apiTokenService: ApiTokenServices) {
        super();
    }

    public async getApiTokens({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const apiTokenSchema =
                ApiTokenSchema.safeParse(requestParams);
            if (!apiTokenSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        apiTokenSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.apiTokenService.getApiTokens(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getApiToken({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.apiTokenService.getApiToken,
        );
    }

    public async addApiToken({ request }: HttpContextContract) {
        const apiToken = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ApiTokenValidate =
                ApiTokenSchema.safeParse(apiToken);
            if (!ApiTokenValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ApiTokenValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.apiTokenService.addApiToken(apiToken);
            return this.responseStatusService.showSuccess(
                'create',
                apiToken,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editApiToken({ request }: HttpContextContract) {
        const apiToken = request.body();

        try {
            const ApiTokenValidate =
                ApiTokenSchema.safeParse(apiToken);
            if (!ApiTokenValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ApiTokenValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.apiTokenService.editApiToken(apiToken);
            return this.responseStatusService.showSuccess(
                'update',
                apiToken,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
