import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PermissionServices from 'App/Services/PermissionServices';
import PermissionSchema from 'App/Validators/PermissionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PermissionsController extends BaseController {
    constructor(private permissionService: PermissionServices) {
        super();
    }

    public async getPermissions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const permissionSchema =
                PermissionSchema.safeParse(requestParams);
            if (!permissionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        permissionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.permissionService.getPermissions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPermission({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.permissionService.getPermission,
        );
    }

    public async addPermission({ request }: HttpContextContract) {
        const permission = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PermissionValidate =
                PermissionSchema.safeParse(permission);
            if (!PermissionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PermissionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.permissionService.addPermission(permission);
            return this.responseStatusService.showSuccess(
                'create',
                permission,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPermission({ request }: HttpContextContract) {
        const permission = request.body();

        try {
            const PermissionValidate =
                PermissionSchema.safeParse(permission);
            if (!PermissionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PermissionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.permissionService.editPermission(permission);
            return this.responseStatusService.showSuccess(
                'update',
                permission,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
