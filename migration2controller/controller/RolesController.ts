import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import RoleServices from 'App/Services/RoleServices';
import RoleSchema from 'App/Validators/RoleValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class RolesController extends BaseController {
    constructor(private roleService: RoleServices) {
        super();
    }

    public async getRoles({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const roleSchema =
                RoleSchema.safeParse(requestParams);
            if (!roleSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        roleSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.roleService.getRoles(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getRole({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.roleService.getRole,
        );
    }

    public async addRole({ request }: HttpContextContract) {
        const role = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const RoleValidate =
                RoleSchema.safeParse(role);
            if (!RoleValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RoleValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.roleService.addRole(role);
            return this.responseStatusService.showSuccess(
                'create',
                role,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editRole({ request }: HttpContextContract) {
        const role = request.body();

        try {
            const RoleValidate =
                RoleSchema.safeParse(role);
            if (!RoleValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RoleValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.roleService.editRole(role);
            return this.responseStatusService.showSuccess(
                'update',
                role,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
