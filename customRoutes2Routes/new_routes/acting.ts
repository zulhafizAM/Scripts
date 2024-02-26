const ActingsController = () => import('#controllers/employment/actings_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function actingRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [ActingsController, 'get154s'])
                })
                .prefix('154s')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getFlexi41s'])
                })
                .prefix('flexi41s')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getMains'])
                })
                .prefix('mains')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getEmployeeLists'])
                })
                .prefix('employee_lists')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getChosenEmployeeLists'])
                    router.post('add', [ActingsController, 'addChosenEmployeeList'])
                })
                .prefix('chosen_employee_lists')
            router
                .group(() => {
                    router.put('edit', [ActingsController, 'editCandidateSelectionMeeting'])
                })
                .prefix('candidate_selection_meetings')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getInterviewInfos'])
                    router.put('edit', [ActingsController, 'editInterviewInfo'])
                })
                .prefix('interview_infos')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getInterviewResults'])
                })
                .prefix('interview_results')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getInterviewResultMarks'])
                    router.put('edit', [ActingsController, 'editInterviewResultMark'])
                })
                .prefix('interview_result_marks')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getPromotionMeetingResults'])
                    router.post('add', [ActingsController, 'addPromotionMeetingResult'])
                    router.put('edit', [ActingsController, 'editPromotionMeetingResult'])
                })
                .prefix('promotion_meeting_results')
            router
                .group(() => {
                    router.post('get', [ActingsController, 'getPromotionMeetingResultDetail'])
                    router.put('edit', [ActingsController, 'editPromotionMeetingResultDetail'])
                })
                .prefix('promotion_meeting_result_details')
            router
                .group(() => {
                    router.post('add', [ActingsController, 'addPromotionMeetingPlacement'])
                    router.put('edit', [ActingsController, 'editPromotionMeetingPlacement'])
                })
                .prefix('promotion_meeting_placements')
            router
                .group(() => {
                    router.put('edit', [ActingsController, 'editPromotionMeetingPlacementDetail'])
                })
                .prefix('promotion_meeting_placement_details')
            router
                .group(() => {
                    router.post('get', [ActingsController, 'getEmployee'])
                })
                .prefix('employees')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getPostpones'])
                    router.post('get', [ActingsController, 'getPostpone'])
                    router.put('edit', [ActingsController, 'editPostpone'])
                })
                .prefix('postpones')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getPostponeResults'])
                })
                .prefix('postpone_results')
            router
                .group(() => {
                    router.put('edit', [ActingsController, 'editActingResult'])
                })
                .prefix('acting_results')
            router
                .group(() => {
                    router.post('list', [ActingsController, 'getActingConfirmations'])
                    router.post('get', [ActingsController, 'getActingConfirmation'])
                })
                .prefix('acting_confirmations')
            router
                .group(() => {
                    router.post('get', [ActingsController, 'getDirectorCertify'])
                    router.put('edit', [ActingsController, 'editDirectorCertify'])
                })
                .prefix('director_certifies')
            router
                .group(() => {
                    router.put('edit', [ActingsController, 'editApprove'])
                })
                .prefix('approves')
            router
                .group(() => {
                    router.put('edit', [ActingsController, 'editSupport'])
                })
                .prefix('supports')
        })
        .prefix('acting')
        .use(middleware.auth({ guards: ['api'] }))
}
