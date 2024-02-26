import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UnspecifiedRetirementGroupServices from 'App/Services/UnspecifiedRetirementGroupServices';
import UnspecifiedRetirementGroupSchema from 'App/Validators/UnspecifiedRetirementGroupValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class UnspecifiedRetirementGroupsController extends BaseController {
    constructor(private unspecifiedRetirementGroupService: UnspecifiedRetirementGroupServices) {
        super();
    }

    public async getUnspecifiedRetirementGroups({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const unspecifiedRetirementGroupSchema =
                UnspecifiedRetirementGroupSchema.safeParse(requestParams);
            if (!unspecifiedRetirementGroupSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        unspecifiedRetirementGroupSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.unspecifiedRetirementGroupService.getUnspecifiedRetirementGroups(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getUnspecifiedRetirementGroup({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.unspecifiedRetirementGroupService.getUnspecifiedRetirementGroup,
        );
    }

    public async addUnspecifiedRetirementGroup({ request }: HttpContextContract) {
        const unspecifiedRetirementGroup = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const UnspecifiedRetirementGroupValidate =
                UnspecifiedRetirementGroupSchema.safeParse(unspecifiedRetirementGroup);
            if (!UnspecifiedRetirementGroupValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UnspecifiedRetirementGroupValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.unspecifiedRetirementGroupService.addUnspecifiedRetirementGroup(unspecifiedRetirementGroup);
            return this.responseStatusService.showSuccess(
                'create',
                unspecifiedRetirementGroup,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editUnspecifiedRetirementGroup({ request }: HttpContextContract) {
        const unspecifiedRetirementGroup = request.body();

        try {
            const UnspecifiedRetirementGroupValidate =
                UnspecifiedRetirementGroupSchema.safeParse(unspecifiedRetirementGroup);
            if (!UnspecifiedRetirementGroupValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        UnspecifiedRetirementGroupValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.unspecifiedRetirementGroupService.editUnspecifiedRetirementGroup(unspecifiedRetirementGroup);
            return this.responseStatusService.showSuccess(
                'update',
                unspecifiedRetirementGroup,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
