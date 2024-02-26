import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MeetingServices from 'App/Services/MeetingServices';
import MeetingSchema from 'App/Validators/MeetingValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MeetingsController extends BaseController {
    constructor(private meetingService: MeetingServices) {
        super();
    }

    public async getMeetings({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const meetingSchema =
                MeetingSchema.safeParse(requestParams);
            if (!meetingSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        meetingSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.meetingService.getMeetings(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMeeting({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.meetingService.getMeeting,
        );
    }

    public async addMeeting({ request }: HttpContextContract) {
        const meeting = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MeetingValidate =
                MeetingSchema.safeParse(meeting);
            if (!MeetingValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MeetingValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.meetingService.addMeeting(meeting);
            return this.responseStatusService.showSuccess(
                'create',
                meeting,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMeeting({ request }: HttpContextContract) {
        const meeting = request.body();

        try {
            const MeetingValidate =
                MeetingSchema.safeParse(meeting);
            if (!MeetingValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MeetingValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.meetingService.editMeeting(meeting);
            return this.responseStatusService.showSuccess(
                'update',
                meeting,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
