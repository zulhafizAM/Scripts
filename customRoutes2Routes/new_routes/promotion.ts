const PromotionsController = () => import('#controllers/employment/promotions_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function promotionRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'get154s'])
                })
                .prefix('154s')
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getTbk12s'])
                })
                .prefix('tbk12s')
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getMains'])
                })
                .prefix('mains')
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getEmployeeLists'])
                })
                .prefix('employee_lists')
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getCertifications'])
                    router.post('get', [PromotionsController, 'getCertification'])
                    router.put('edit', [PromotionsController, 'editCertification'])
                })
                .prefix('certifications')
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getPlacementMeetings'])
                })
                .prefix('placement_meetings')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getPlacementMeetingDetail'])
                    router.put('edit', [PromotionsController, 'editPlacementMeetingDetail'])
                })
                .prefix('placement_meeting_details')
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getPlacementMeetingSalaryAdjustments'])
                    router.post('get', [PromotionsController, 'getPlacementMeetingSalaryAdjustment'])
                })
                .prefix('placement_meeting_salary_adjustments')
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getEmployeePromotions'])
                    router.post('get', [PromotionsController, 'getEmployeePromotion'])
                    router.put('edit', [PromotionsController, 'editEmployeePromotion'])
                })
                .prefix('employee_promotions')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getDirectorCertify'])
                    router.put('edit', [PromotionsController, 'editDirectorCertify'])
                })
                .prefix('director_certifies')
            router
                .group(() => {
                    router.put('edit', [PromotionsController, 'editApprove'])
                })
                .prefix('approves')
            router
                .group(() => {
                    router.put('edit', [PromotionsController, 'editSupport'])
                })
                .prefix('supports')
        })
        .prefix('promotion')
        .use(middleware.auth({ guards: ['api'] }))
}
