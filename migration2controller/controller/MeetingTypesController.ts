import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MeetingTypeServices from 'App/Services/MeetingTypeServices';
import MeetingTypeSchema from 'App/Validators/MeetingTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MeetingTypesController extends BaseController {
    constructor(private meetingTypeService: MeetingTypeServices) {
        super();
    }

    public async getMeetingTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const meetingTypeSchema =
                MeetingTypeSchema.safeParse(requestParams);
            if (!meetingTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        meetingTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.meetingTypeService.getMeetingTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMeetingType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.meetingTypeService.getMeetingType,
        );
    }

    public async addMeetingType({ request }: HttpContextContract) {
        const meetingType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MeetingTypeValidate =
                MeetingTypeSchema.safeParse(meetingType);
            if (!MeetingTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MeetingTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.meetingTypeService.addMeetingType(meetingType);
            return this.responseStatusService.showSuccess(
                'create',
                meetingType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMeetingType({ request }: HttpContextContract) {
        const meetingType = request.body();

        try {
            const MeetingTypeValidate =
                MeetingTypeSchema.safeParse(meetingType);
            if (!MeetingTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MeetingTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.meetingTypeService.editMeetingType(meetingType);
            return this.responseStatusService.showSuccess(
                'update',
                meetingType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
