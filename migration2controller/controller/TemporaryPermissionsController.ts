import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TemporaryPermissionServices from 'App/Services/TemporaryPermissionServices';
import TemporaryPermissionSchema from 'App/Validators/TemporaryPermissionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class TemporaryPermissionsController extends BaseController {
    constructor(private temporaryPermissionService: TemporaryPermissionServices) {
        super();
    }

    public async getTemporaryPermissions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const temporaryPermissionSchema =
                TemporaryPermissionSchema.safeParse(requestParams);
            if (!temporaryPermissionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        temporaryPermissionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.temporaryPermissionService.getTemporaryPermissions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getTemporaryPermission({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.temporaryPermissionService.getTemporaryPermission,
        );
    }

    public async addTemporaryPermission({ request }: HttpContextContract) {
        const temporaryPermission = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const TemporaryPermissionValidate =
                TemporaryPermissionSchema.safeParse(temporaryPermission);
            if (!TemporaryPermissionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        TemporaryPermissionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.temporaryPermissionService.addTemporaryPermission(temporaryPermission);
            return this.responseStatusService.showSuccess(
                'create',
                temporaryPermission,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editTemporaryPermission({ request }: HttpContextContract) {
        const temporaryPermission = request.body();

        try {
            const TemporaryPermissionValidate =
                TemporaryPermissionSchema.safeParse(temporaryPermission);
            if (!TemporaryPermissionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        TemporaryPermissionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.temporaryPermissionService.editTemporaryPermission(temporaryPermission);
            return this.responseStatusService.showSuccess(
                'update',
                temporaryPermission,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
