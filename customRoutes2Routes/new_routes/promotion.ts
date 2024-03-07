const PromotionsController = () => import('#controllers/employment/promotions_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function promotionRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [PromotionsController, 'getPromotions'])
                })
                .prefix('promotions')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getApplicant'])
                })
                .prefix('applicants')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getApplication'])
                    router.put('edit', [PromotionsController, 'editApplication'])
                })
                .prefix('applications')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getRelatedRole'])
                    router.put('edit', [PromotionsController, 'editRelatedRole'])
                })
                .prefix('related_roles')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getApplicantQualification'])
                    router.put('edit', [PromotionsController, 'editApplicantQualification'])
                })
                .prefix('applicant_qualifications')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getApprovalDetail'])
                    router.put('edit', [PromotionsController, 'editApprovalDetail'])
                })
                .prefix('approval_details')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getFirstSchedule'])
                    router.put('edit', [PromotionsController, 'editFirstSchedule'])
                })
                .prefix('first_schedules')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getSecondSchedule'])
                    router.put('edit', [PromotionsController, 'editSecondSchedule'])
                })
                .prefix('second_schedules')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getOfferLetter'])
                    router.put('edit', [PromotionsController, 'editOfferLetter'])
                })
                .prefix('offer_letters')
            router
                .group(() => {
                    router.post('get', [PromotionsController, 'getApprove'])
                    router.put('edit', [PromotionsController, 'editApprove'])
                })
                .prefix('approves')
        })
        .prefix('promotion')
        .use(middleware.auth({ guards: ['api'] }))
}
