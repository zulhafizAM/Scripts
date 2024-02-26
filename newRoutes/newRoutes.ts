            router
                .group(() => {
                    router.get('', [LookupController, 'getCountries'])
                    router.post('filter', [LookupController, 'filterCountries'])
                    router.post('add', [LookupController, 'addCountry'])
                    router.put('edit', [LookupController, 'editCountry'])
                })
                .prefix('countries')
            router
                .group(() => {
                    router.get('', [LookupController, 'getDistricts'])
                    router.post('filter', [LookupController, 'filterDistricts'])
                    router.post('add', [LookupController, 'addDistrict'])
                    router.put('edit', [LookupController, 'editDistrict'])
                })
                .prefix('districts')
            router
                .group(() => {
                    router.get('', [LookupController, 'getEthnics'])
                    router.post('filter', [LookupController, 'filterEthnics'])
                    router.post('add', [LookupController, 'addEthnic'])
                    router.put('edit', [LookupController, 'editEthnic'])
                })
                .prefix('ethnics')
            router
                .group(() => {
                    router.get('', [LookupController, 'getAllowanceTypes'])
                    router.post('filter', [LookupController, 'filterAllowanceTypes'])
                    router.post('add', [LookupController, 'addAllowanceType'])
                    router.put('edit', [LookupController, 'editAllowanceType'])
                })
                .prefix('allowance_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getCandidateTypes'])
                    router.post('filter', [LookupController, 'filterCandidateTypes'])
                    router.post('add', [LookupController, 'addCandidateType'])
                    router.put('edit', [LookupController, 'editCandidateType'])
                })
                .prefix('candidate_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getExamTypes'])
                    router.post('filter', [LookupController, 'filterExamTypes'])
                    router.post('add', [LookupController, 'addExamType'])
                    router.put('edit', [LookupController, 'editExamType'])
                })
                .prefix('exam_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getGenders'])
                    router.post('filter', [LookupController, 'filterGenders'])
                    router.post('add', [LookupController, 'addGender'])
                    router.put('edit', [LookupController, 'editGender'])
                })
                .prefix('genders')
            router
                .group(() => {
                    router.get('', [LookupController, 'getHighestEducations'])
                    router.post('filter', [LookupController, 'filterHighestEducations'])
                    router.post('add', [LookupController, 'addHighestEducation'])
                    router.put('edit', [LookupController, 'editHighestEducation'])
                })
                .prefix('highest_educations')
            router
                .group(() => {
                    router.get('', [LookupController, 'getInstitutions'])
                    router.post('filter', [LookupController, 'filterInstitutions'])
                    router.post('add', [LookupController, 'addInstitution'])
                    router.put('edit', [LookupController, 'editInstitution'])
                })
                .prefix('institutions')
            router
                .group(() => {
                    router.get('', [LookupController, 'getMajorMinors'])
                    router.post('filter', [LookupController, 'filterMajorMinors'])
                    router.post('add', [LookupController, 'addMajorMinor'])
                    router.put('edit', [LookupController, 'editMajorMinor'])
                })
                .prefix('major_minors')
            router
                .group(() => {
                    router.get('', [LookupController, 'getMaritals'])
                    router.post('filter', [LookupController, 'filterMaritals'])
                    router.post('add', [LookupController, 'addMarital'])
                    router.put('edit', [LookupController, 'editMarital'])
                })
                .prefix('maritals')
            router
                .group(() => {
                    router.get('', [LookupController, 'getMeetingTypes'])
                    router.post('filter', [LookupController, 'filterMeetingTypes'])
                    router.post('add', [LookupController, 'addMeetingType'])
                    router.put('edit', [LookupController, 'editMeetingType'])
                })
                .prefix('meeting_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getNationalities'])
                    router.post('filter', [LookupController, 'filterNationalities'])
                    router.post('add', [LookupController, 'addNationality'])
                    router.put('edit', [LookupController, 'editNationality'])
                })
                .prefix('nationalities')
            router
                .group(() => {
                    router.get('', [LookupController, 'getPenaltyTypes'])
                    router.post('filter', [LookupController, 'filterPenaltyTypes'])
                    router.post('add', [LookupController, 'addPenaltyType'])
                    router.put('edit', [LookupController, 'editPenaltyType'])
                })
                .prefix('penalty_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getPropertyDeclarations'])
                    router.post('filter', [LookupController, 'filterPropertyDeclarations'])
                    router.post('add', [LookupController, 'addPropertyDeclaration'])
                    router.put('edit', [LookupController, 'editPropertyDeclaration'])
                })
                .prefix('property_declarations')
            router
                .group(() => {
                    router.get('', [LookupController, 'getRaces'])
                    router.post('filter', [LookupController, 'filterRaces'])
                    router.post('add', [LookupController, 'addRace'])
                    router.put('edit', [LookupController, 'editRace'])
                })
                .prefix('races')
            router
                .group(() => {
                    router.get('', [LookupController, 'getRelationships'])
                    router.post('filter', [LookupController, 'filterRelationships'])
                    router.post('add', [LookupController, 'addRelationship'])
                    router.put('edit', [LookupController, 'editRelationship'])
                })
                .prefix('relationships')
            router
                .group(() => {
                    router.get('', [LookupController, 'getReligions'])
                    router.post('filter', [LookupController, 'filterReligions'])
                    router.post('add', [LookupController, 'addReligion'])
                    router.put('edit', [LookupController, 'editReligion'])
                })
                .prefix('religions')
            router
                .group(() => {
                    router.get('', [LookupController, 'getRetirementTypes'])
                    router.post('filter', [LookupController, 'filterRetirementTypes'])
                    router.post('add', [LookupController, 'addRetirementType'])
                    router.put('edit', [LookupController, 'editRetirementType'])
                })
                .prefix('retirement_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getSentenceTypes'])
                    router.post('filter', [LookupController, 'filterSentenceTypes'])
                    router.post('add', [LookupController, 'addSentenceType'])
                    router.put('edit', [LookupController, 'editSentenceType'])
                })
                .prefix('sentence_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getSponsorships'])
                    router.post('filter', [LookupController, 'filterSponsorships'])
                    router.post('add', [LookupController, 'addSponsorship'])
                    router.put('edit', [LookupController, 'editSponsorship'])
                })
                .prefix('sponsorships')
            router
                .group(() => {
                    router.get('', [LookupController, 'getStates'])
                    router.post('filter', [LookupController, 'filterStates'])
                    router.post('add', [LookupController, 'addState'])
                    router.put('edit', [LookupController, 'editState'])
                })
                .prefix('states')
            router
                .group(() => {
                    router.get('', [LookupController, 'getStatuses'])
                    router.post('filter', [LookupController, 'filterStatuses'])
                    router.post('add', [LookupController, 'addStatuse'])
                    router.put('edit', [LookupController, 'editStatuse'])
                })
                .prefix('statuses')
            router
                .group(() => {
                    router.get('', [LookupController, 'getTitles'])
                    router.post('filter', [LookupController, 'filterTitles'])
                    router.post('add', [LookupController, 'addTitle'])
                    router.put('edit', [LookupController, 'editTitle'])
                })
                .prefix('titles')
            router
                .group(() => {
                    router.get('', [LookupController, 'getIcTypes'])
                    router.post('filter', [LookupController, 'filterIcTypes'])
                    router.post('add', [LookupController, 'addIcType'])
                    router.put('edit', [LookupController, 'editIcType'])
                })
                .prefix('ic_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getBanks'])
                    router.post('filter', [LookupController, 'filterBanks'])
                    router.post('add', [LookupController, 'addBank'])
                    router.put('edit', [LookupController, 'editBank'])
                })
                .prefix('banks')
            router
                .group(() => {
                    router.get('', [LookupController, 'getExamResults'])
                    router.post('filter', [LookupController, 'filterExamResults'])
                    router.post('add', [LookupController, 'addExamResult'])
                    router.put('edit', [LookupController, 'editExamResult'])
                })
                .prefix('exam_results')
            router
                .group(() => {
                    router.get('', [LookupController, 'getLeaveTypes'])
                    router.post('filter', [LookupController, 'filterLeaveTypes'])
                    router.post('add', [LookupController, 'addLeaveType'])
                    router.put('edit', [LookupController, 'editLeaveType'])
                })
                .prefix('leave_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getDurationComputers'])
                    router.post('filter', [LookupController, 'filterDurationComputers'])
                    router.post('add', [LookupController, 'addDurationComputer'])
                    router.put('edit', [LookupController, 'editDurationComputer'])
                })
                .prefix('duration_computers')
            router
                .group(() => {
                    router.get('', [LookupController, 'getDurationVehicles'])
                    router.post('filter', [LookupController, 'filterDurationVehicles'])
                    router.post('add', [LookupController, 'addDurationVehicle'])
                    router.put('edit', [LookupController, 'editDurationVehicle'])
                })
                .prefix('duration_vehicles')
            router
                .group(() => {
                    router.get('', [LookupController, 'getProceedingTypes'])
                    router.post('filter', [LookupController, 'filterProceedingTypes'])
                    router.post('add', [LookupController, 'addProceedingType'])
                    router.put('edit', [LookupController, 'editProceedingType'])
                })
                .prefix('proceeding_types')
            router
                .group(() => {
                    router.get('', [LookupController, 'getRefundMethods'])
                    router.post('filter', [LookupController, 'filterRefundMethods'])
                    router.post('add', [LookupController, 'addRefundMethod'])
                    router.put('edit', [LookupController, 'editRefundMethod'])
                })
                .prefix('refund_methods')
            router
                .group(() => {
                    router.get('', [LookupController, 'getRefundPeriods'])
                    router.post('filter', [LookupController, 'filterRefundPeriods'])
                    router.post('add', [LookupController, 'addRefundPeriod'])
                    router.put('edit', [LookupController, 'editRefundPeriod'])
                })
                .prefix('refund_periods')
            router
                .group(() => {
                    router.get('', [LookupController, 'getSalaryMovementMonths'])
                    router.post('filter', [LookupController, 'filterSalaryMovementMonths'])
                    router.post('add', [LookupController, 'addSalaryMovementMonth'])
                    router.put('edit', [LookupController, 'editSalaryMovementMonth'])
                })
                .prefix('salary_movement_months')