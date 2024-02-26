import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import RolePermissionServices from 'App/Services/RolePermissionServices';
import RolePermissionSchema from 'App/Validators/RolePermissionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class RolePermissionsController extends BaseController {
    constructor(private rolePermissionService: RolePermissionServices) {
        super();
    }

    public async getRolePermissions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const rolePermissionSchema =
                RolePermissionSchema.safeParse(requestParams);
            if (!rolePermissionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        rolePermissionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.rolePermissionService.getRolePermissions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getRolePermission({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.rolePermissionService.getRolePermission,
        );
    }

    public async addRolePermission({ request }: HttpContextContract) {
        const rolePermission = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const RolePermissionValidate =
                RolePermissionSchema.safeParse(rolePermission);
            if (!RolePermissionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RolePermissionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.rolePermissionService.addRolePermission(rolePermission);
            return this.responseStatusService.showSuccess(
                'create',
                rolePermission,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editRolePermission({ request }: HttpContextContract) {
        const rolePermission = request.body();

        try {
            const RolePermissionValidate =
                RolePermissionSchema.safeParse(rolePermission);
            if (!RolePermissionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RolePermissionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.rolePermissionService.editRolePermission(rolePermission);
            return this.responseStatusService.showSuccess(
                'update',
                rolePermission,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
