const MovingInsController = () => import('#controllers/employment/moving_ins_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function moving_inRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [MovingInsController, 'getMovingIns'])
                })
                .prefix('moving_ins')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getApplicantType'])
                    router.put('edit', [MovingInsController, 'editApplicantType'])
                })
                .prefix('applicant_types')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getPersonalDetail'])
                })
                .prefix('personal_details')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getPartnerDetail'])
                })
                .prefix('partner_details')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getServiceDetail'])
                })
                .prefix('service_details')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getConfirmation'])
                    router.put('edit', [MovingInsController, 'editConfirmation'])
                })
                .prefix('confirmations')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getSecretaryApproval'])
                    router.put('edit', [MovingInsController, 'editSecretaryApproval'])
                })
                .prefix('secretary_approvals')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getQualification'])
                })
                .prefix('qualifications')
            router
                .group(() => {
                    router.post('get', [MovingInsController, 'getOffer'])
                    router.put('edit', [MovingInsController, 'editOffer'])
                })
                .prefix('offers')
        })
        .prefix('moving_in')
        .use(middleware.auth({ guards: ['api'] }))
}
