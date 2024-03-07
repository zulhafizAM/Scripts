const LoansController = () => import('#controllers/employment/loans_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function loanRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [LoansController, 'getLoans'])
                })
                .prefix('loans')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getApplicant'])
                })
                .prefix('applicants')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getApplication'])
                    router.put('edit', [LoansController, 'editApplication'])
                })
                .prefix('applications')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getRelatedRole'])
                    router.put('edit', [LoansController, 'editRelatedRole'])
                })
                .prefix('related_roles')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getApplicantQualification'])
                    router.put('edit', [LoansController, 'editApplicantQualification'])
                })
                .prefix('applicant_qualifications')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getApprovalDetail'])
                    router.put('edit', [LoansController, 'editApprovalDetail'])
                })
                .prefix('approval_details')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getFirstSchedule'])
                    router.put('edit', [LoansController, 'editFirstSchedule'])
                })
                .prefix('first_schedules')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getSecondSchedule'])
                    router.put('edit', [LoansController, 'editSecondSchedule'])
                })
                .prefix('second_schedules')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getOfferLetter'])
                    router.put('edit', [LoansController, 'editOfferLetter'])
                })
                .prefix('offer_letters')
            router
                .group(() => {
                    router.post('get', [LoansController, 'getApprove'])
                    router.put('edit', [LoansController, 'editApprove'])
                })
                .prefix('approves')
        })
        .prefix('loan')
        .use(middleware.auth({ guards: ['api'] }))
}
