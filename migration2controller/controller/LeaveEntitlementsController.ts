import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import LeaveEntitlementServices from 'App/Services/LeaveEntitlementServices';
import LeaveEntitlementSchema from 'App/Validators/LeaveEntitlementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class LeaveEntitlementsController extends BaseController {
    constructor(private leaveEntitlementService: LeaveEntitlementServices) {
        super();
    }

    public async getLeaveEntitlements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const leaveEntitlementSchema =
                LeaveEntitlementSchema.safeParse(requestParams);
            if (!leaveEntitlementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        leaveEntitlementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.leaveEntitlementService.getLeaveEntitlements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getLeaveEntitlement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.leaveEntitlementService.getLeaveEntitlement,
        );
    }

    public async addLeaveEntitlement({ request }: HttpContextContract) {
        const leaveEntitlement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const LeaveEntitlementValidate =
                LeaveEntitlementSchema.safeParse(leaveEntitlement);
            if (!LeaveEntitlementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        LeaveEntitlementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.leaveEntitlementService.addLeaveEntitlement(leaveEntitlement);
            return this.responseStatusService.showSuccess(
                'create',
                leaveEntitlement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editLeaveEntitlement({ request }: HttpContextContract) {
        const leaveEntitlement = request.body();

        try {
            const LeaveEntitlementValidate =
                LeaveEntitlementSchema.safeParse(leaveEntitlement);
            if (!LeaveEntitlementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        LeaveEntitlementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.leaveEntitlementService.editLeaveEntitlement(leaveEntitlement);
            return this.responseStatusService.showSuccess(
                'update',
                leaveEntitlement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
