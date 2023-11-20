//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// TA V1 routes //

router.get(/claimantAvailable/ , function (req, res) {
    if (req.query.radioGroup === "yes") {
        res.redirect('verify-id') // in input value is "yes" = redirect to 'page-name' //
    }
    else if (req.query.radioGroup === "answerNo") {
        res.redirect('unavailable-why')
    }
    else {
        res.redirect('fta')
    }
})

router.get(/unavailableWhy/ , function (req, res) {
    if (req.query.radioGroup === "unwell") {
        res.redirect('abandon') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('fta')
    }
})

router.get(/idVerify/ , function (req, res) {
    if (req.query.radioGroupId === "pass") {
        res.redirect('consent') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('id-fail')
    }
})

router.get(/getConsent/ , function (req, res) {
    if (req.query.radioGroupConsent === "yes") {
        res.redirect('attendees') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('fta')
    }
})

router.get(/attendeeInfo/ , function (req, res) {
    if (req.query.radioGroupAttendees === "yes") {
        res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('hoc-additional')
    }
})

router.get(/attendeeInfoTwo/ , function (req, res) {
    if (req.query.radioGroup === "yes") {
        res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('hoc-additional')
    }
})

router.get(/callAttendees/ , function (req, res) {
    if (req.query.radioGroup === "yes") {
        res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('meds-treatment-additional')
    }
})

router.get(/fourAttendeeInfo/ , function (req, res) {
    if (req.query.radioGroup === "yes") {
        res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('meds-treatment-additional')
    }
})

router.get(/medsTreatment/ , function (req, res) {
    if (req.query.radioGroup === "meds") {
        res.redirect('meds') // in input value is "yes" = redirect to 'page-name' //
    }
    else if (req.query.radioGroup === "treatment") {
        res.redirect('treatment')
    }
    else {
        res.redirect('histories')
    }
})

// IT 2 ROUTES //

router.get(/conditionAddAnother/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('ta-task-list3')
    }
})

router.get(/medsAddAnother/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('meds') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('treatment')
    }
})

router.get(/treatmentAddAnother/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('treatment') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('ta-task-list3-5')
    }
})

router.get(/twoCallAttendees/ , function (req, res) {
    if (req.query.radioGroup === "yes") {
        res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('conditions-additional')
    }
})

router.get(/fiveAttendeeInfo/ , function (req, res) {
    if (req.query.radioGroup === "yes") {
        res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('meds-additional')
    }
})

router.get(/callConditions/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('conditions-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('meds-additional')
    }
})
router.get(/callMeds/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('meds') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('treatment-additional')
    }
})

router.get(/callTreatment/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('soch1-additional')
    }
})




// IT 3 ROUTES //

router.get(/conditionAddAnother/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('ta-task-list3')
    }
})

router.post('/ta-3/conditions', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const conditionLength = req.session.data['condition-length']
    const conditionSymptoms = req.session.data['symptoms']
    const conditionVariability = req.session.data['variability']

    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
    req.session.data.queriesCondition = queriesCondition
  
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action
  
   res.redirect('/ta-3/add-condition')
  })


// router.get(/medsAddAnother/ , function (req, res) {
//     if (req.query.radioGroup === "Yes") {
//         res.redirect('meds') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('ta-tasklist3-5')
//     }
// })

router.post('/ta-3/meds-treatment2' , function (req, res) {
    if (req.session.data['another-med'] == "Yes") {
        res.redirect('/ta-3/meds')
      } else {
        res.redirect('/ta-3/ta-task-list3-5')
      }
})

router.post('/ta-3/meds', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const medicationName = req.session.data['meds-name']
    const medicationDose = req.session.data['meds-dose']
    const medicationFrequency = req.session.data['meds-frequency']
    const medicationEfficacy = req.session.data['meds-efficacy']
    const medSideEffect = req.session.data['meds-side-effects']
    const additonalInfo = req.session.data['addInfo']

    const queriesMedication = req.session.data.queriesMedication || []
    queriesMedication.push({ medicationName, medicationDose, medicationFrequency, medicationEfficacy, medSideEffect, additonalInfo })
    req.session.data.queriesMedication = queriesMedication
  
    req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action
  
   res.redirect('/ta-3/meds-treatment2')
  })

  router.post('/ta-3/meds2', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const medicationName = req.session.data['meds-name']
    const medicationDose = req.session.data['meds-dose']
    const medicationFrequency = req.session.data['meds-frequency']
    const medicationEfficacy = req.session.data['meds-efficacy']
    const medSideEffect = req.session.data['side-effects']
    const medicationSideEffects = req.session.data['side-effects-detail']
    const additonalInfo = req.session.data['additional-info']

    const queriesMedication = req.session.data.queriesMedication || []
    queriesMedication.push({ medicationName, medicationDose, medicationFrequency, medicationEfficacy, medicationSideEffects, medSideEffect, additonalInfo })
    req.session.data.queriesMedication = queriesMedication
  
    req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action
  
   res.redirect('/ta-3/meds-additional')
  })

  router.post('/ta-3/treatment22', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const treatmentType = req.session.data['treatment-type']
    const treatmentFrequency = req.session.data['frequency']
    const additionalInfo = req.session.data['addInfo']

    const queriesTreatment = req.session.data.queriesTreatment || []
    queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
    req.session.data.queriesTreatment = queriesTreatment
  
    req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action
  
   res.redirect('/ta-3/treatment-additional')
  })

  router.post('/ta-3/treatment', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const treatmentType = req.session.data['treatment-type']
    const treatmentFrequency = req.session.data['frequency']
    const additionalInfo = req.session.data['addInfo']

    const queriesTreatment = req.session.data.queriesTreatment || []
    queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
    req.session.data.queriesTreatment = queriesTreatment
  
    req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action
  
   res.redirect('/ta-3/treatment2')
  })

  router.post('/ta-3/daily-living', function(req, res) {
    
    res.redirect('/ta-3/ta-task-list6')
   })

   router.post('/ta-3/mobility', function(req, res) {
    
    res.redirect('/ta-3/ta-task-list7')
   })

  router.post('/ta-3/daily-living/preparingfood', function(req, res) {
    
   res.redirect('/ta-3/daily-living2')
  })
  
  router.post('/ta-3/daily-living/takingnutrition', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/managingtherapy', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/washingbathing', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/toiletneeds', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/dressing', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/communicatingverbally', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/readingunderstanding', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/facetoface', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/daily-living/budgeting', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/journeys', function(req, res) {
    
    res.redirect('/ta-3/mobility')
   })

   router.post('/ta-3/movingaround', function(req, res) {
    
    res.redirect('/ta-3/mobility')
   })
   
   router.post('/ta-3/daily-living-justification', function(req, res) {
    
    res.redirect('/ta-3/daily-living2')
   })

   router.post('/ta-3/dl-qual', function(req, res) {
    
    res.redirect('/ta-3/mobility-qual')
   })

   // mobility qualiffying period
   router.post('/ta-3/mobility-qual', function(req, res) {
    
    res.redirect('/ta-3/ta-task-list9')
   })

   // Review period route
   router.post('/ta-3/review', function(req, res) {
    
    res.redirect('/ta-3/ta-task-list10')
   })

    router.post('/ta-3/ta-task-list10', function(req, res) {
    
        res.redirect('/ta-3/report')
       })
// router.get(/treatmentAddAnother/ , function (req, res) {
//     if (req.query.radioGroup === "Yes") {
//         res.redirect('treatment') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('ta-task-list3-5')
//     }
// })

router.post('/ta-3/treatment2' , function (req, res) {
    if (req.session.data['another-treatment'] == "Yes") {
        res.redirect('/ta-3/treatment')
      } else {
        res.redirect('/ta-3/ta-task-list4')
      }
})

// router.get(/twoCallAttendees/ , function (req, res) {
//     if (req.query.radioGroup === "yes") {
//         res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('meds-addtional')
//     }
// })

router.post('/ta-3/attendees' , function (req, res) {
    if (req.session.data['appointee'] == "yes") {
        res.redirect('/ta-3/attendee-details')
      } else {
        res.redirect('/ta-3/conditions-additional')
      }
})

// router.get(/fiveAttendeeInfo/ , function (req, res) {
//     if (req.query.radioGroup === "yes") {
//         res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('meds-additional')
//     }
// })

router.post('/ta-3/another-attendee' , function (req, res) {
    if (req.session.data['another-attendee'] == "yes") {
        res.redirect('/ta-3/attendee-details')
      } else {
        res.redirect('/ta-3/conditions-additional')
      }
})

router.get(/callConditions/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('meds-additional')
    }
})

router.post('/ta-3/conditions-additional' , function (req, res) {
    if (req.session.data['add-another-condition'] == "Yes") {
        res.redirect('/ta-3/conditions2')
      } else {
        res.redirect('/ta-3/meds-additional')
      }
})

router.post('/ta-3/appointee-answers' , function (req, res) {
    if (req.session.data['add-another-attendee'] == "Yes") {
        res.redirect('/ta-3/attendee-details')
      } else {
        res.redirect('/ta-3/conditions-additional')
      }
})

router.post('/ta-3/meds-additional' , function (req, res) {
    if (req.session.data['add-another-med'] == "Yes") {
        res.redirect('/ta-3/meds2')
      } else {
        res.redirect('/ta-3/treatment-additional')
      }
})

router.post('/ta-3/treatment-additional' , function (req, res) {
    if (req.session.data['add-treatment'] == "Yes") {
        res.redirect('/ta-3/treatment22')
      } else {
        res.redirect('/ta-3/soch1-additional')
      }
})

router.post('/ta-3/conditions2' , function (req, res) {
    const condition = req.session.data['condition-name']
    const conditionLength = req.session.data['condition-length']
    const conditionSymptoms = req.session.data['symptoms']
    const conditionVariability = req.session.data['variability']

    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
    req.session.data.queriesCondition = queriesCondition
  
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

   res.redirect('/ta-3/conditions-additional')

})

router.post('/ta-3/evidence' , function (req, res) {
    const documentDate = req.session.data['document-date']
    const evidenceType = req.session.data['evidenceusedpip']

    const evidence = req.session.data.evidence || []
    evidence.push({ documentDate, evidenceType })
    req.session.data.evidence = evidence
  
    req.session.data.evidence[req.session.data.evidence.length - 1].action

   res.redirect('/ta-3/ta-task-list2')

})

router.post('/ta-3/attendee-details' , function (req, res) {
    const name = req.session.data['attendee-name']
    const relationshipToClaimant = req.session.data['attendee-relationship']

    const queriesAttendee = req.session.data.queriesAttendee || []
    queriesAttendee.push({ name, relationshipToClaimant })
    req.session.data.queriesAttendee = queriesAttendee
  
    req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

   res.redirect('/ta-3/appointee-answers')

})
router.get(/callMeds/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('treatment-additional')
    }
})

router.get(/callTreatment/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('soch1-additional')
    }
})


// IT 4 ROUTES //

router.post('/ta-4/add-condition', function (req, res) {
    if (req.session.data['anotherCondition'] == "Yes") {
        res.redirect('/ta-4/conditions')
      } else {
        res.redirect('/ta-4/ta-task-list')
      }
})

router.post('/ta-4/conditions', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const conditionLength = req.session.data['condition-length']
    const conditionSymptoms = req.session.data['symptoms']
    const conditionVariability = req.session.data['variability']

    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
    req.session.data.queriesCondition = queriesCondition
  
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action
  
   res.redirect('/ta-4/add-condition')
  })


// router.get(/medsAddAnother/ , function (req, res) {
//     if (req.query.radioGroup === "Yes") {
//         res.redirect('meds') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('ta-tasklist3-5')
//     }
// })

router.post('/ta-4/meds-treatment2' , function (req, res) {
    if (req.session.data['another-med'] == "Yes") {
        res.redirect('/ta-4/meds')
      } else {
        res.redirect('/ta-4/ta-task-list')
      }
})

router.post('/ta-4/meds', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const medicationName = req.session.data['meds-name']
    const medicationDose = req.session.data['meds-dose']
    const medicationFrequency = req.session.data['meds-frequency']
    const medicationEfficacy = req.session.data['meds-efficacy']
    const medSideEffect = req.session.data['meds-side-effects']
    const additonalInfo = req.session.data['addInfo']

    const queriesMedication = req.session.data.queriesMedication || []
    queriesMedication.push({ medicationName, medicationDose, medicationFrequency, medicationEfficacy, medSideEffect, additonalInfo })
    req.session.data.queriesMedication = queriesMedication
  
    req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action
  
   res.redirect('/ta-4/meds-treatment2')
  })

  router.post('/ta-4/meds2', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const medicationName = req.session.data['meds-name']
    const medicationDose = req.session.data['meds-dose']
    const medicationFrequency = req.session.data['meds-frequency']
    const medicationEfficacy = req.session.data['meds-efficacy']
    const medSideEffect = req.session.data['side-effects']
    const medicationSideEffects = req.session.data['side-effects-detail']
    const additonalInfo = req.session.data['additional-info']

    const queriesMedication = req.session.data.queriesMedication || []
    queriesMedication.push({ medicationName, medicationDose, medicationFrequency, medicationEfficacy, medicationSideEffects, medSideEffect, additonalInfo })
    req.session.data.queriesMedication = queriesMedication
  
    req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action
  
   res.redirect('/ta-4/meds-additional')
  })

  router.post('/ta-4/treatment22', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const treatmentType = req.session.data['treatment-type']
    const treatmentFrequency = req.session.data['frequency']
    const additionalInfo = req.session.data['addInfo']

    const queriesTreatment = req.session.data.queriesTreatment || []
    queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
    req.session.data.queriesTreatment = queriesTreatment
  
    req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action
  
   res.redirect('/ta-4/treatment-additional')
  })

  router.post('/ta-4/treatment', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const treatmentType = req.session.data['treatment-type']
    const treatmentFrequency = req.session.data['frequency']
    const additionalInfo = req.session.data['addInfo']

    const queriesTreatment = req.session.data.queriesTreatment || []
    queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
    req.session.data.queriesTreatment = queriesTreatment
  
    req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action
  
   res.redirect('/ta-4/treatment2')
  })

  router.post('/ta-4/daily-living', function(req, res) {
    
    res.redirect('/ta-4/ta-task-list6')
   })

   router.post('/ta-4/mobility', function(req, res) {
    
    res.redirect('/ta-4/ta-task-list7')
   })

  router.post('/ta-4/daily-living/preparingfood', function(req, res) {
    
   res.redirect('/ta-4/daily-living2')
  })
  
  router.post('/ta-4/daily-living/takingnutrition', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/managingtherapy', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/washingbathing', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/toiletneeds', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/dressing', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/communicatingverbally', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/readingunderstanding', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/facetoface', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/daily-living/budgeting', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/journeys', function(req, res) {
    
    res.redirect('/ta-4/mobility')
   })

   router.post('/ta-4/movingaround', function(req, res) {
    
    res.redirect('/ta-4/mobility')
   })
   
   router.post('/ta-4/daily-living-justification', function(req, res) {
    
    res.redirect('/ta-4/daily-living2')
   })

   router.post('/ta-4/dl-qual', function(req, res) {
    
    res.redirect('/ta-4/mobility-qual')
   })

   // mobility qualiffying period
   router.post('/ta-4/mobility-qual', function(req, res) {
    
    res.redirect('/ta-4/ta-task-list9')
   })

   // Review period route
   router.post('/ta-4/review', function(req, res) {
    
    res.redirect('/ta-4/ta-task-list10')
   })

    router.post('/ta-4/ta-task-list10', function(req, res) {
    
        res.redirect('/ta-4/report')
       })
// router.get(/treatmentAddAnother/ , function (req, res) {
//     if (req.query.radioGroup === "Yes") {
//         res.redirect('treatment') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('ta-task-list3-5')
//     }
// })

router.post('/ta-4/treatment2' , function (req, res) {
    if (req.session.data['another-treatment'] == "Yes") {
        res.redirect('/ta-4/treatment')
      } else {
        res.redirect('/ta-4/ta-task-list')
      }
})

// router.get(/twoCallAttendees/ , function (req, res) {
//     if (req.query.radioGroup === "yes") {
//         res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('meds-addtional')
//     }
// })

router.post('/ta-4/attendees' , function (req, res) {
    if (req.session.data['appointee'] == "yes") {
        res.redirect('/ta-4/attendee-details')
      } else {
        res.redirect('/ta-4/conditions-additional')
      }
})

// router.get(/fiveAttendeeInfo/ , function (req, res) {
//     if (req.query.radioGroup === "yes") {
//         res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
//     }
//     else {
//         res.redirect('meds-additional')
//     }
// })

router.post('/ta-4/another-attendee' , function (req, res) {
    if (req.session.data['another-attendee'] == "yes") {
        res.redirect('/ta-4/attendee-details')
      } else {
        res.redirect('/ta-4/conditions-additional')
      }
})

router.get(/callConditions/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('meds-additional')
    }
})

router.post('/ta-4/conditions-additional' , function (req, res) {
    if (req.session.data['add-another-condition'] == "Yes") {
        res.redirect('/ta-4/conditions2')
      } else {
        res.redirect('/ta-4/meds-additional')
      }
})

router.post('/ta-4/appointee-answers' , function (req, res) {
    if (req.session.data['add-another-attendee'] == "Yes") {
        res.redirect('/ta-4/attendee-details')
      } else {
        res.redirect('/ta-4/conditions-additional')
      }
})

router.post('/ta-4/meds-additional' , function (req, res) {
    if (req.session.data['add-another-med'] == "Yes") {
        res.redirect('/ta-4/meds2')
      } else {
        res.redirect('/ta-4/treatment-additional')
      }
})

router.post('/ta-4/treatment-additional' , function (req, res) {
    if (req.session.data['add-treatment'] == "Yes") {
        res.redirect('/ta-4/treatment22')
      } else {
        res.redirect('/ta-4/soch1-additional')
      }
})

router.post('/ta-4/conditions2' , function (req, res) {
    const condition = req.session.data['condition-name']
    const conditionLength = req.session.data['condition-length']
    const conditionSymptoms = req.session.data['symptoms']
    const conditionVariability = req.session.data['variability']

    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
    req.session.data.queriesCondition = queriesCondition
  
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

   res.redirect('/ta-4/conditions-additional')

})

router.post('/ta-4/evidence' , function (req, res) {
    const documentDate = req.session.data['document-date']
    const evidenceType = req.session.data['evidenceusedpip']

    const evidence = req.session.data.evidence || []
    evidence.push({ documentDate, evidenceType })
    req.session.data.evidence = evidence
  
    req.session.data.evidence[req.session.data.evidence.length - 1].action

   res.redirect('/ta-4/ta-task-list')

})

router.post('/ta-4/attendee-details' , function (req, res) {
    const name = req.session.data['attendee-name']
    const relationshipToClaimant = req.session.data['attendee-relationship']

    const queriesAttendee = req.session.data.queriesAttendee || []
    queriesAttendee.push({ name, relationshipToClaimant })
    req.session.data.queriesAttendee = queriesAttendee
  
    req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

   res.redirect('/ta-4/appointee-answers')

})
router.get(/callMeds/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('treatment-additional')
    }
})

router.get(/callTreatment/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('soch1-additional')
    }
})

router.post('/ta-4/consent' , function (req, res) {
    if (req.session.data['consent'] == "no") {
        res.redirect('/ta-4/no-consent')

      } else {
        res.redirect('/ta-4/attendees')
      }
      
})

router.post('/ta-4/verify-id' , function (req, res) {
    if (req.session.data['verify'] == "pass") {
        res.redirect('/ta-4/consent')

      } else {
        res.redirect('/ta-4/not-verified')
      }
      
})

router.post('/ta-4/end-why' , function (req, res) {
    if (req.session.data['abandon'] == "Complete the assessment without a full consultation") {
        res.redirect('/ta-4/assessment-without-consultation')

      } else  if (req.session.data['abandon'] == "Book another consultation for this claimant") {
        res.redirect('/ta-4/book-another')

      } else  if (req.session.data['abandon'] == "Mark as assessment not completed") {
        res.redirect('/ta-4/not-complete')

      }  else  if (req.session.data['abandon'] == "Record unacceptable claimant behaviour") {
        res.redirect('/ta-4/unacceptable-behaviour')
      }
})

router.post('/ta-4/claimant-available' , function (req, res) {
    if (req.session.data['take-call'] == "unavailable-evidence") {
        res.redirect('/ta-4/verify-id')

      } else  if (req.session.data['take-call'] == "answerNo") {
        res.redirect('/ta-4/not-taken-call')

      } else  if (req.session.data['take-call'] == "failed-attend") {
        res.redirect('/ta-4/no-answer-after-three')
      }
})


router.post('/ta-4/not-taken-call' , function (req, res) {
    if (req.session.data['assessment'] == "unavailable-evidence") {
        res.redirect('/ta-4/assessment-without-consultation')
      } else  if (req.session.data['assessment'] == "book-consultation") {
        res.redirect('/ta-4/consultation-to-be-booked')
      } else  if (req.session.data['assessment'] == "failed-attend") {
        res.redirect('/ta-4/failed-to-attend')
      }
})


// IT 5 ROUTES //

router.post('/ta-5/add-condition', function (req, res) {
    if (req.session.data['anotherCondition'] == "Yes") {
        res.redirect('/ta-5/conditions')
      } else {
        res.redirect('/ta-5/ta-task-list')
      }
})

router.post('/ta-5/conditions', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const conditionLength = req.session.data['condition-length']
    const conditionSymptoms = req.session.data['symptoms']
    const conditionVariability = req.session.data['variability']

    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
    req.session.data.queriesCondition = queriesCondition
  
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action
  
   res.redirect('/ta-5/add-condition')
  })

router.post('/ta-5/meds-treatment2' , function (req, res) {
    if (req.session.data['another-med'] == "Yes") {
        res.redirect('/ta-5/meds')
      } else {
        res.redirect('/ta-5/ta-task-list')
      }
})

router.post('/ta-5/meds', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const medicationName = req.session.data['meds-name']
    const medicationDose = req.session.data['meds-dose']
    const medicationFrequency = req.session.data['meds-frequency']
    const medicationEfficacy = req.session.data['meds-efficacy']
    const medSideEffect = req.session.data['meds-side-effects']
    const additonalInfo = req.session.data['addInfo']

    const queriesMedication = req.session.data.queriesMedication || []
    queriesMedication.push({ medicationName, medicationDose, medicationFrequency, medicationEfficacy, medSideEffect, additonalInfo })
    req.session.data.queriesMedication = queriesMedication
  
    req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action
  
   res.redirect('/ta-5/meds-treatment2')
  })

  router.post('/ta-5/meds2', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const medicationName = req.session.data['meds-name']
    const medicationDose = req.session.data['meds-dose']
    const medicationFrequency = req.session.data['meds-frequency']
    const medicationEfficacy = req.session.data['meds-efficacy']
    const medSideEffect = req.session.data['side-effects']
    const medicationSideEffects = req.session.data['side-effects-detail']
    const additonalInfo = req.session.data['additional-info']

    const queriesMedication = req.session.data.queriesMedication || []
    queriesMedication.push({ medicationName, medicationDose, medicationFrequency, medicationEfficacy, medicationSideEffects, medSideEffect, additonalInfo })
    req.session.data.queriesMedication = queriesMedication
  
    req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action
  
   res.redirect('/ta-5/meds-additional')
  })

  router.post('/ta-5/treatment22', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const treatmentType = req.session.data['treatment-type']
    const treatmentFrequency = req.session.data['frequency']
    const additionalInfo = req.session.data['addInfo']

    const queriesTreatment = req.session.data.queriesTreatment || []
    queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
    req.session.data.queriesTreatment = queriesTreatment
  
    req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action
  
   res.redirect('/ta-5/treatment-additional')
  })

  router.post('/ta-5/treatment', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const treatmentType = req.session.data['treatment-type']
    const treatmentFrequency = req.session.data['frequency']
    const additionalInfo = req.session.data['addInfo']

    const queriesTreatment = req.session.data.queriesTreatment || []
    queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
    req.session.data.queriesTreatment = queriesTreatment
  
    req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action
  
   res.redirect('/ta-5/treatment2')
  })

  router.post('/ta-5/daily-living', function(req, res) {
    
    res.redirect('/ta-5/ta-task-list6')
   })

   router.post('/ta-5/mobility', function(req, res) {
    
    res.redirect('/ta-5/ta-task-list7')
   })

  router.post('/ta-5/daily-living/preparingfood', function(req, res) {
    
   res.redirect('/ta-5/daily-living2')
  })
  
  router.post('/ta-5/daily-living/takingnutrition', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/managingtherapy', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/washingbathing', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/toiletneeds', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/dressing', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/communicatingverbally', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/readingunderstanding', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/facetoface', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/daily-living/budgeting', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/journeys', function(req, res) {
    
    res.redirect('/ta-5/mobility')
   })

   router.post('/ta-5/movingaround', function(req, res) {
    
    res.redirect('/ta-5/mobility')
   })
   
   router.post('/ta-5/daily-living-justification', function(req, res) {
    
    res.redirect('/ta-5/daily-living2')
   })

   router.post('/ta-5/dl-qual', function(req, res) {
    
    res.redirect('/ta-5/mobility-qual')
   })

   // mobility qualiffying period
   router.post('/ta-5/mobility-qual', function(req, res) {
    
    res.redirect('/ta-5/ta-task-list9')
   })

   // Review period route
   router.post('/ta-5/review', function(req, res) {
    
    res.redirect('/ta-5/ta-task-list10')
   })

    router.post('/ta-5/ta-task-list10', function(req, res) {
    
        res.redirect('/ta-5/report')
       })

router.post('/ta-5/treatment2' , function (req, res) {
    if (req.session.data['another-treatment'] == "Yes") {
        res.redirect('/ta-5/treatment')
      } else {
        res.redirect('/ta-5/ta-task-list')
      }
})


router.post('/ta-5/attendees' , function (req, res) {
    if (req.session.data['appointee'] == "yes") {
        res.redirect('/ta-5/attendee-details')
      } else {
        res.redirect('/ta-5/conditions-additional')
      }
})



router.post('/ta-5/another-attendee' , function (req, res) {
    if (req.session.data['another-attendee'] == "yes") {
        res.redirect('/ta-5/attendee-details')
      } else {
        res.redirect('/ta-5/conditions-additional')
      }
})

router.get(/callConditions/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('meds-additional')
    }
})

router.post('/ta-5/conditions-additional' , function (req, res) {
    if (req.session.data['add-another-condition'] == "Yes") {
        res.redirect('/ta-4/conditions2')
      } else {
        res.redirect('/ta-4/meds-additional')
      }
})

router.post('/ta-5/appointee-answers' , function (req, res) {
    if (req.session.data['add-another-attendee'] == "Yes") {
        res.redirect('/ta-5/attendee-details')
      } else {
        res.redirect('/ta-5/conditions-additional')
      }
})

router.post('/ta-5/meds-additional' , function (req, res) {
    if (req.session.data['add-another-med'] == "Yes") {
        res.redirect('/ta-5/meds2')
      } else {
        res.redirect('/ta-5/treatment-additional')
      }
})

router.post('/ta-5/treatment-additional' , function (req, res) {
    if (req.session.data['add-treatment'] == "Yes") {
        res.redirect('/ta-5/treatment22')
      } else {
        res.redirect('/ta-5/soch1-additional')
      }
})

router.post('/ta-5/conditions2' , function (req, res) {
    const condition = req.session.data['condition-name']
    const conditionLength = req.session.data['condition-length']
    const conditionSymptoms = req.session.data['symptoms']
    const conditionVariability = req.session.data['variability']

    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
    req.session.data.queriesCondition = queriesCondition
  
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

   res.redirect('/ta-5/conditions-additional')

})

router.post('/ta-5/evidence' , function (req, res) {
    const documentDate = req.session.data['document-date']
    const evidenceType = req.session.data['evidenceusedpip']

    const evidence = req.session.data.evidence || []
    evidence.push({ documentDate, evidenceType })
    req.session.data.evidence = evidence
  
    req.session.data.evidence[req.session.data.evidence.length - 1].action

   res.redirect('/ta-5/ta-task-list')

})

router.post('/ta-5/attendee-details' , function (req, res) {
    const name = req.session.data['attendee-name']
    const relationshipToClaimant = req.session.data['attendee-relationship']

    const queriesAttendee = req.session.data.queriesAttendee || []
    queriesAttendee.push({ name, relationshipToClaimant })
    req.session.data.queriesAttendee = queriesAttendee
  
    req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

   res.redirect('/ta-5/appointee-answers')

})
router.get(/callMeds/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('treatment-additional')
    }
})

router.get(/callTreatment/ , function (req, res) {
    if (req.query.radioGroup === "Yes") {
        res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
    }
    else {
        res.redirect('soch1-additional')
    }
})

router.post('/ta-5/consent' , function (req, res) {
    if (req.session.data['consent'] == "no") {
        res.redirect('/ta-5/no-consent')

      } else {
        res.redirect('/ta-5/attendees')
      }
      
})

router.post('/ta-5/verify-id' , function (req, res) {
    if (req.session.data['verify'] == "pass") {
        res.redirect('/ta-5/consent')

      } else {
        res.redirect('/ta-5/not-verified')
      }
      
})

router.post('/ta-5/end-why' , function (req, res) {
    if (req.session.data['abandon'] == "Complete the assessment with available evidence") {
        res.redirect('/ta-5/assessment-without-consultation')

      } else  if (req.session.data['abandon'] == "Send to admin") {
        res.redirect('/ta-5/book-another')

      } else  if (req.session.data['abandon'] == "Mark as assessment not completed") {
        res.redirect('/ta-5/not-complete')

      }  else  if (req.session.data['abandon'] == "Record unacceptable claimant behaviour") {
        res.redirect('/ta-5/unacceptable-behaviour')
      }
})

router.post('/ta-5/claimant-available' , function (req, res) {
    if (req.session.data['take-call'] == "unavailable-evidence") {
        res.redirect('/ta-5/verify-id')

      } else  if (req.session.data['take-call'] == "answerNo") {
        res.redirect('/ta-5/status-failed-to-attend')

      } else  if (req.session.data['take-call'] == "failed-attend") {
        res.redirect('/ta-5/status-failed-to-attend')
      }
})


router.post('/ta-5/not-taken-call' , function (req, res) {
    if (req.session.data['assessment'] == "unavailable-evidence") {
        res.redirect('/ta-5/assessment-without-consultation')
      } else  if (req.session.data['assessment'] == "book-consultation") {
        res.redirect('/ta-5/consultation-to-be-booked')
      } else  if (req.session.data['assessment'] == "failed-attend") {
        res.redirect('/ta-5/failed-to-attend')
      }
})