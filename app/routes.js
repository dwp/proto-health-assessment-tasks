//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const justifications = [
  "Preparing food",
  "Taking nutrition",
  "Managing therapy",
  "Washing and bathing",
  "Managing toilet needs",
  "Dressing and undressing",
  "Communicating verbally",
  "Reading and understanding signs, symbols and words",
  "Engaging face to face",
  "Budgeting",
  "Planning and following journeys",
  "Moving around"
]

// Add your routes here

/* utlity route for redirects */
router.use((req, res, next) => {
  if (req.session.data?.redirect) {
    const serviceRedirect = req.session.data.redirect;
    delete req.session.data.redirect;
    console.log(serviceRedirect);

    switch (true) {
      //justifications two -sidenav links
      case serviceRedirect.endsWith("/justifications-two/evidence-addAnother?source=evidence"):
        return res.redirect("/justifications-two/evidence-addAnother?source=evidence")

      case serviceRedirect.endsWith("/justifications-two/consultation-date?source=Consultation date"):
        return res.redirect("/justifications-two/consultation-date?source=Consultation date")

      case serviceRedirect.endsWith("/justifications-two/consent?source=Claimant consent"):
        return res.redirect("/justifications-two/consent?source=Claimant consent")

      case serviceRedirect.endsWith("/justifications-two/verify-id?source=Claimant identity"):
        return res.redirect("/justifications-two/verify-id?source=Claimant identity")

      case serviceRedirect.endsWith("/justifications-two/attendees-none?source=Additional attendees"):
        return res.redirect("/justifications-two/attendees-none?source=Additional attendees")

      case serviceRedirect.endsWith("/justifications-two/attendees-addAnother?source=Additional attendees"):
        return res.redirect("/justifications-two/attendees-addAnother?source=Additional attendees")

      case serviceRedirect.endsWith("/justifications-two/conditions-addAnother?source=Condition history"):
        return res.redirect("/justifications-two/conditions-addAnother?source=Condition history")

      case serviceRedirect.endsWith("/justifications-two/medication-addAnother?source=Medication"):
        return res.redirect("/justifications-two/medication-addAnother?source=Medication")
        
      case serviceRedirect.endsWith("/justifications-two/soch1-additional?source=Social and occupational history"):
        return res.redirect("/justifications-two/soch1-additional?source=Social and occupational history")

      case serviceRedirect.endsWith("/justifications-two/functional-history?source=Functional history"):
        return res.redirect("/justifications-two/functional-history?source=Functional history")
      
      case serviceRedirect.endsWith("/justifications-two/mental-state?source=Mental state observations"):
        return res.redirect("/justifications-two/mental-state?source=Mental state observations")

      case serviceRedirect.endsWith("/justifications-two/physical-state?source=Informal observations"):
        return res.redirect("/justifications-two/physical-state?source=Informal observations")
      
      case serviceRedirect.endsWith("/justifications-two/descriptor?source=Activity descriptors"):
        return res.redirect("/justifications-two/descriptor?source=Activity descriptors")
      
      case serviceRedirect.endsWith("/justifications-two/justification-activity?source=Justifications"):
        return res.redirect("/justifications-two/justification-activity?source=Justifications")

      case serviceRedirect.endsWith("/justifications-two/addToGroup"):
        return res.redirect("/justifications-two/addToGroup")

      case serviceRedirect.endsWith("/justifications-two/dl-qual?source=Daily living qualifying period and prospective test"):
        return res.redirect("/justifications-two/dl-qual?source=Daily living qualifying period and prospective test")

      case serviceRedirect.endsWith("/justifications-two/mobility-qual?source=Mobility qualifying period and prospective test"):
    return res.redirect("/justifications-two/mobility-qual?source=Mobility qualifying period and prospective test")
      
      case serviceRedirect.endsWith("/justifications-two/review?source=Review"):
        return res.redirect("/justifications-two/review?source=Review")
      
      case serviceRedirect.endsWith("/justifications-two/check-answers-new"):
        return res.redirect("/justifications-two/check-answers-new")

       case serviceRedirect.endsWith("/justifications-two/docs-3"):
        return res.redirect("/justifications-two/docs-3")

        //justifications one -sidenav links
      case serviceRedirect.endsWith("/justifications-one/evidence-addAnother?source=evidence"):
        return res.redirect("/justifications-one/evidence-addAnother?source=evidence")

      case serviceRedirect.endsWith("/justifications-one/consultation-date?source=Consultation date"):
        return res.redirect("/justifications-one/consultation-date?source=Consultation date")

      case serviceRedirect.endsWith("/justifications-one/consent?source=Claimant consent"):
        return res.redirect("/justifications-one/consent?source=Claimant consent")

      case serviceRedirect.endsWith("/justifications-one/verify-id?source=Claimant identity"):
        return res.redirect("/justifications-one/verify-id?source=Claimant identity")

      case serviceRedirect.endsWith("/justifications-one/attendees-none?source=Additional attendees"):
        return res.redirect("/justifications-one/attendees-none?source=Additional attendees")

      case serviceRedirect.endsWith("/justifications-one/attendees-addAnother?source=Additional attendees"):
        return res.redirect("/justifications-one/attendees-addAnother?source=Additional attendees")

      case serviceRedirect.endsWith("/justifications-one/conditions-addAnother?source=Condition history"):
        return res.redirect("/justifications-one/conditions-addAnother?source=Condition history")

      case serviceRedirect.endsWith("/justifications-one/medication-addAnother?source=Medication"):
        return res.redirect("/justifications-one/medication-addAnother?source=Medication")
        
      case serviceRedirect.endsWith("/justifications-one/soch1-additional?source=Social and occupational history"):
        return res.redirect("/justifications-one/soch1-additional?source=Social and occupational history")

      case serviceRedirect.endsWith("/justifications-one/functional-history?source=Functional history"):
        return res.redirect("/justifications-one/functional-history?source=Functional history")
      
      case serviceRedirect.endsWith("/justifications-one/mental-state?source=Mental state observations"):
        return res.redirect("/justifications-one/mental-state?source=Mental state observations")

      case serviceRedirect.endsWith("/justifications-one/physical-state?source=Informal observations"):
        return res.redirect("/justifications-one/physical-state?source=Informal observations")
      
      case serviceRedirect.endsWith("/justifications-one/descriptor?source=Activity descriptors"):
        return res.redirect("/justifications-one/descriptor?source=Activity descriptors")
      
      case serviceRedirect.endsWith("/justifications-one/justification-activity?source=Justifications"):
        return res.redirect("/justifications-one/justification-activity?source=Justifications")

      case serviceRedirect.endsWith("/justifications-one/addToGroup"):
        return res.redirect("/justifications-one/addToGroup")

      case serviceRedirect.endsWith("/justifications-one/dl-qual?source=Qualifying period and prospective test"):
        return res.redirect("/justifications-one/dl-qual?source=Qualifying period and prospective test")
      
      case serviceRedirect.endsWith("/justifications-one/review?source=Review"):
        return res.redirect("/justifications-one/review?source=Review")
      
      case serviceRedirect.endsWith("/justifications-one/check-answers-new"):
        return res.redirect("/justifications-one/check-answers-new")

       case serviceRedirect.endsWith("/justifications-one/docs-3"):
        return res.redirect("/justifications-one/docs-3")

        case serviceRedirect.endsWith("/justifications-one/justification-none?source=Descriptor choices and justifications"):
        return res.redirect("/justifications-one/justification-none?source=Descriptor choices and justifications")

         case serviceRedirect.endsWith("/justifications-one/justification-addAnother?source=Descriptor choices and justifications"):
        return res.redirect("/justifications-one/justification-addAnother?source=Descriptor choices and justifications")


        //justification two iterated - sidenav
        case serviceRedirect.endsWith("/justifications-twoIteration/evidence-addAnother?source=evidence"):
        return res.redirect("/justifications-twoIteration/evidence-addAnother?source=evidence")

      case serviceRedirect.endsWith("/justifications-twoIteration/conditions-addAnother?source=Brief summary of clinical details"):
        return res.redirect("/justifications-twoIteration/conditions-addAnother?source=Brief summary of clinical details")

      case serviceRedirect.endsWith("/justifications-twoIteration/medication-addAnother?source=Phone calls"):
        return res.redirect("/justifications-twoIteration/medication-addAnother?source=Phone calls")
        
      
      case serviceRedirect.endsWith("/justifications-twoIteration/descriptor?source=Activity descriptors"):
        return res.redirect("/justifications-twoIteration/descriptor?source=Activity descriptors")
      
      case serviceRedirect.endsWith("/justifications-twoIteration/justification-activity?source=Justifications"):
        return res.redirect("/justifications-twoIteration/justification-activity?source=Justifications")

      case serviceRedirect.endsWith("/justifications-twoIteration/addToGroup"):
        return res.redirect("/justifications-twoIteration/addToGroup")

      case serviceRedirect.endsWith("/justifications-twoIteration/dl-qual?source=Daily living qualifying period and prospective test"):
        return res.redirect("/justifications-twoIteration/dl-qual?source=Daily living qualifying period and prospective test")

      case serviceRedirect.endsWith("/justifications-twoIteration/mobility-qual?source=Mobility qualifying period and prospective test"):
    return res.redirect("/justifications-twoIteration/mobility-qual?source=Mobility qualifying period and prospective test")
      
      case serviceRedirect.endsWith("/justifications-twoIteration/review?source=Review"):
        return res.redirect("/justifications-twoIteration/review?source=Review")
      
      case serviceRedirect.endsWith("/justifications-twoIteration/check-answers-new"):
        return res.redirect("/justifications-twoIteration/check-answers-new")

       case serviceRedirect.endsWith("/justifications-twoIteration/docs-3"):
        return res.redirect("/justifications-twoIteration/docs-3")

        // medication reference 
        case serviceRedirect.endsWith("/prompts-six-one/evidence-none?source=default"):
        return res.redirect("/prompts-six-one/evidence-none?source=default")

        case serviceRedirect.endsWith("/prompts-six-one/evidence-none?source=evidence"):
        return res.redirect("/prompts-six-one/evidence-none?source=evidence")

        case serviceRedirect.endsWith("/prompts-six-one/evidence-addAnother?source=evidence"):
        return res.redirect("/prompts-six-one/evidence-addAnother?source=evidence")

      case serviceRedirect.endsWith("/prompts-six-one/consultation-date?source=Consultation date"):
        return res.redirect("/prompts-six-one/consultation-date?source=Consultation date")

      case serviceRedirect.endsWith("/prompts-six-one/consent?source=Claimant consent"):
        return res.redirect("/prompts-six-one/consent?source=Claimant consent")

      case serviceRedirect.endsWith("/prompts-six-one/verify-id?source=Claimant identity"):
        return res.redirect("/prompts-six-one/verify-id?source=Claimant identity")

      case serviceRedirect.endsWith("/prompts-six-one/attendees-none?source=Additional attendees"):
        return res.redirect("/prompts-six-one/attendees-none?source=Additional attendees")

      case serviceRedirect.endsWith("/prompts-six-one/attendees-addAnother?source=Additional attendees"):
        return res.redirect("/prompts-six-one/attendees-addAnother?source=Additional attendees")

        case serviceRedirect.endsWith("/prompts-six-one/conditions-none?source=Condition history"):
        return res.redirect("/prompts-six-one/conditions-none?source=Condition history")

      case serviceRedirect.endsWith("/prompts-six-one/conditions-addAnother?source=Condition history"):
        return res.redirect("/prompts-six-one/conditions-addAnother?source=Condition history")

        case serviceRedirect.endsWith("/prompts-six-one/medications-none?source=Medication"):
        return res.redirect("/prompts-six-one/medications-none?source=Medication")

      case serviceRedirect.endsWith("/prompts-six-one/medication-addAnother?source=Medication"):
        return res.redirect("/prompts-six-one/medication-addAnother?source=Medication")
        
      case serviceRedirect.endsWith("/prompts-six-one/soch1-additional?source=Social and occupational history"):
        return res.redirect("/prompts-six-one/soch1-additional?source=Social and occupational history")

        case serviceRedirect.endsWith("/prompts-six-one/preparingfood?source=Preparing food"):
        return res.redirect("/prompts-six-one/preparingfood?source=Preparing food")

         case serviceRedirect.endsWith("/prompts-six-one/takingnutrition?source=Taking nutrition"):
        return res.redirect("/prompts-six-one/takingnutrition?source=Taking nutrition")

         case serviceRedirect.endsWith("/prompts-six-one/managingtherapy?source=Managing therapy"):
        return res.redirect("/prompts-six-one/managingtherapy?source=Managing therapy")

          case serviceRedirect.endsWith("/prompts-six-one/washingbathing?source=Washing and bathing"):
        return res.redirect("/prompts-six-one/washingbathing?source=Washing and bathing")

         case serviceRedirect.endsWith("/prompts-six-one/toiletneeds?source=Managing toilet needs"):
        return res.redirect("/prompts-six-one/toiletneeds?source=Managing toilet needs")

           case serviceRedirect.endsWith("/prompts-six-one/dressing?source=Dressing and undressing"):
        return res.redirect("/prompts-six-one/dressing?source=Dressing and undressing")

          case serviceRedirect.endsWith("/prompts-six-one/communicatingverbally?source=Communicating verbally"):
        return res.redirect("/prompts-six-one/communicatingverbally?source=Communicating verbally")

          case serviceRedirect.endsWith("/prompts-six-one/readingunderstanding?source=Reading and understanding signs, symbols and words"):
        return res.redirect("/prompts-six-one/readingunderstanding?source=Reading and understanding signs, symbols and words")

             case serviceRedirect.endsWith("/prompts-six-one/facetoface?source=Engaging face to face"):
        return res.redirect("/prompts-six-one/facetoface?source=Engaging face to face")

      
            case serviceRedirect.endsWith("/prompts-six-one/budgeting?source=Budgeting"):
        return res.redirect("/prompts-six-one/budgeting?source=Budgeting")

           case serviceRedirect.endsWith("/prompts-six-one/journeys?source=Planning and following journeys"):
        return res.redirect("/prompts-six-one/journeys?source=Planning and following journeys")

             case serviceRedirect.endsWith("/movingaround?source=Moving around"):
        return res.redirect("/prompts-six-one/movingaround?source=Moving around")
    
      case serviceRedirect.endsWith("/prompts-six-one/mental-state?source=Mental state observations"):
        return res.redirect("/prompts-six-one/mental-state?source=Mental state observations")

      case serviceRedirect.endsWith("/prompts-six-one/physical-state?source=Informal observations"):
        return res.redirect("/prompts-six-one/physical-state?source=Informal observations")
      
      case serviceRedirect.endsWith("/prompts-six-one/descriptor?source=Activity descriptors"):
        return res.redirect("/prompts-six-one/descriptor?source=Activity descriptors")
      

      case serviceRedirect.endsWith("/prompts-six-one/dl-qual?source=Daily living qualifying period and prospective test"):
        return res.redirect("/prompts-six-one/dl-qual?source=Daily living qualifying period and prospective test")

         case serviceRedirect.endsWith("/prompts-six-one/mobility-qual?source=Mobility qualifying period and prospective test"):
        return res.redirect("/prompts-six-one/mobility-qual?source=Mobility qualifying period and prospective test")
      
      case serviceRedirect.endsWith("/prompts-six-one/review?source=Review"):
        return res.redirect("/prompts-six-one/review?source=Review")
      
      case serviceRedirect.endsWith("/prompts-six-one/check-answers-new"):
        return res.redirect("/prompts-six-one/check-answers-new")

       case serviceRedirect.endsWith("/prompts-six-one/docs-3"):
        return res.redirect("/prompts-six-one/docs-3")


        // prompts version six
        case serviceRedirect.endsWith("/prompts-six/evidence-none?source=default"):
        return res.redirect("/prompts-six/evidence-none?source=default")

        case serviceRedirect.endsWith("/prompts-six/evidence-none?source=evidence"):
        return res.redirect("/prompts-six-/evidence-none?source=evidence")

        case serviceRedirect.endsWith("/prompts-six/evidence-addAnother?source=evidence"):
        return res.redirect("/prompts-six/evidence-addAnother?source=evidence")

      case serviceRedirect.endsWith("/prompts-six/consultation-date?source=Consultation date"):
        return res.redirect("/prompts-six/consultation-date?source=Consultation date")

      case serviceRedirect.endsWith("/prompts-six/consent?source=Claimant consent"):
        return res.redirect("/prompts-six/consent?source=Claimant consent")

      case serviceRedirect.endsWith("/prompts-six/verify-id?source=Claimant identity"):
        return res.redirect("/prompts-six/verify-id?source=Claimant identity")

      case serviceRedirect.endsWith("/prompts-six/attendees-none?source=Additional attendees"):
        return res.redirect("/prompts-six/attendees-none?source=Additional attendees")

      case serviceRedirect.endsWith("/prompts-six/attendees-addAnother?source=Additional attendees"):
        return res.redirect("/prompts-six/attendees-addAnother?source=Additional attendees")

        case serviceRedirect.endsWith("/prompts-six/conditions-none?source=Condition history"):
        return res.redirect("/prompts-six/conditions-none?source=Condition history")

      case serviceRedirect.endsWith("/prompts-six/conditions-addAnother?source=Condition history"):
        return res.redirect("/prompts-six/conditions-addAnother?source=Condition history")

        case serviceRedirect.endsWith("/prompts-six/medications-none?source=Medication"):
        return res.redirect("/prompts-six/medications-none?source=Medication")

      case serviceRedirect.endsWith("/prompts-six/medication-addAnother?source=Medication"):
        return res.redirect("/prompts-six/medication-addAnother?source=Medication")
        
      case serviceRedirect.endsWith("/prompts-six/soch1-additional?source=Social and occupational history"):
        return res.redirect("/prompts-six/soch1-additional?source=Social and occupational history")

        case serviceRedirect.endsWith("/prompts-six/preparingfood?source=Preparing food"):
        return res.redirect("/prompts-six/preparingfood?source=Preparing food")

         case serviceRedirect.endsWith("/prompts-six/takingnutrition?source=Taking nutrition"):
        return res.redirect("/prompts-six/takingnutrition?source=Taking nutrition")

         case serviceRedirect.endsWith("/prompts-six/managingtherapy?source=Managing therapy"):
        return res.redirect("/prompts-six/managingtherapy?source=Managing therapy")

          case serviceRedirect.endsWith("/prompts-six/washingbathing?source=Washing and bathing"):
        return res.redirect("/prompts-six/washingbathing?source=Washing and bathing")

         case serviceRedirect.endsWith("/prompts-six/toiletneeds?source=Managing toilet needs"):
        return res.redirect("/prompts-six/toiletneeds?source=Managing toilet needs")

           case serviceRedirect.endsWith("/prompts-six/dressing?source=Dressing and undressing"):
        return res.redirect("/prompts-six/dressing?source=Dressing and undressing")

          case serviceRedirect.endsWith("/prompts-six/communicatingverbally?source=Communicating verbally"):
        return res.redirect("/prompts-six/communicatingverbally?source=Communicating verbally")

          case serviceRedirect.endsWith("/prompts-six/readingunderstanding?source=Reading and understanding signs, symbols and words"):
        return res.redirect("/prompts-six/readingunderstanding?source=Reading and understanding signs, symbols and words")

             case serviceRedirect.endsWith("/prompts-six/facetoface?source=Engaging face to face"):
        return res.redirect("/prompts-six/facetoface?source=Engaging face to face")

      
            case serviceRedirect.endsWith("/prompts-six/budgeting?source=Budgeting"):
        return res.redirect("/prompts-six/budgeting?source=Budgeting")

           case serviceRedirect.endsWith("/prompts-six/journeys?source=Planning and following journeys"):
        return res.redirect("/prompts-six/journeys?source=Planning and following journeys")

             case serviceRedirect.endsWith("/movingaround?source=Moving around"):
        return res.redirect("/prompts-six/movingaround?source=Moving around")
    
      case serviceRedirect.endsWith("/prompts-six/mental-state?source=Mental state observations"):
        return res.redirect("/prompts-six/mental-state?source=Mental state observations")

      case serviceRedirect.endsWith("/prompts-six/physical-state?source=Informal observations"):
        return res.redirect("/prompts-six/physical-state?source=Informal observations")
      
      case serviceRedirect.endsWith("/prompts-six/descriptor?source=Activity descriptors"):
        return res.redirect("/prompts-six/descriptor?source=Activity descriptors")
      

      case serviceRedirect.endsWith("/prompts-six/dl-qual?source=Daily living qualifying period and prospective test"):
        return res.redirect("/prompts-six/dl-qual?source=Daily living qualifying period and prospective test")

         case serviceRedirect.endsWith("/prompts-six/mobility-qual?source=Mobility qualifying period and prospective test"):
        return res.redirect("/prompts-six/mobility-qual?source=Mobility qualifying period and prospective test")
      
      case serviceRedirect.endsWith("/prompts-six/review?source=Review"):
        return res.redirect("/prompts-six/review?source=Review")
      
      case serviceRedirect.endsWith("/prompts-six/check-answers-new"):
        return res.redirect("/prompts-six/check-answers-new")

       case serviceRedirect.endsWith("/prompts-six/docs-3"):
        return res.redirect("/prompts-six/docs-3")


        // conditions name list
        case serviceRedirect.endsWith("/conditionsNameList/evidence-none?source=default"):
        return res.redirect("/conditionsNameList/evidence-none?source=default")

        case serviceRedirect.endsWith("/conditionsNameList/evidence-none?source=evidence"):
        return res.redirect("/conditionsNameList/evidence-none?source=evidence")

        case serviceRedirect.endsWith("/conditionsNameList/evidence-addAnother?source=evidence"):
        return res.redirect("/conditionsNameList/evidence-addAnother?source=evidence")

      case serviceRedirect.endsWith("/conditionsNameList/consultation-date?source=Consultation date"):
        return res.redirect("/conditionsNameList/consultation-date?source=Consultation date")

      case serviceRedirect.endsWith("/conditionsNameList/consent?source=Claimant consent"):
        return res.redirect("/conditionsNameList/consent?source=Claimant consent")

      case serviceRedirect.endsWith("/conditionsNameList/verify-id?source=Claimant identity"):
        return res.redirect("/conditionsNameList/verify-id?source=Claimant identity")

      case serviceRedirect.endsWith("/conditionsNameList/attendees-none?source=Additional attendees"):
        return res.redirect("/conditionsNameList/attendees-none?source=Additional attendees")

      case serviceRedirect.endsWith("/conditionsNameList/attendees-addAnother?source=Additional attendees"):
        return res.redirect("/conditionsNameList/attendees-addAnother?source=Additional attendees")

        case serviceRedirect.endsWith("/conditionsNameList/conditions-none?source=Condition history"):
        return res.redirect("/conditionsNameList/conditions-none?source=Condition history")

      case serviceRedirect.endsWith("/conditionsNameList/conditions-addAnother?source=Condition history"):
        return res.redirect("/conditionsNameList/conditions-addAnother?source=Condition history")

        case serviceRedirect.endsWith("/conditionsNameList/medications-none?source=Medication"):
        return res.redirect("/conditionsNameList/medications-none?source=Medication")

      case serviceRedirect.endsWith("/conditionsNameList/medication-addAnother?source=Medication"):
        return res.redirect("/conditionsNameList/medication-addAnother?source=Medication")
        
      case serviceRedirect.endsWith("/conditionsNameList/soch1-additional?source=Social and occupational history"):
        return res.redirect("/conditionsNameList/soch1-additional?source=Social and occupational history")

        case serviceRedirect.endsWith("/conditionsNameList/preparingfood?source=Preparing food"):
        return res.redirect("/conditionsNameList/preparingfood?source=Preparing food")

         case serviceRedirect.endsWith("/conditionsNameList/takingnutrition?source=Taking nutrition"):
        return res.redirect("/conditionsNameList/takingnutrition?source=Taking nutrition")

         case serviceRedirect.endsWith("/conditionsNameList/managingtherapy?source=Managing therapy"):
        return res.redirect("/conditionsNameList/managingtherapy?source=Managing therapy")

          case serviceRedirect.endsWith("/conditionsNameList/washingbathing?source=Washing and bathing"):
        return res.redirect("/conditionsNameList/washingbathing?source=Washing and bathing")

         case serviceRedirect.endsWith("/conditionsNameList/toiletneeds?source=Managing toilet needs"):
        return res.redirect("/conditionsNameList/toiletneeds?source=Managing toilet needs")

           case serviceRedirect.endsWith("/conditionsNameList/dressing?source=Dressing and undressing"):
        return res.redirect("/conditionsNameList/dressing?source=Dressing and undressing")

          case serviceRedirect.endsWith("/conditionsNameList/communicatingverbally?source=Communicating verbally"):
        return res.redirect("/conditionsNameList/communicatingverbally?source=Communicating verbally")

          case serviceRedirect.endsWith("/conditionsNameList/readingunderstanding?source=Reading and understanding signs, symbols and words"):
        return res.redirect("/conditionsNameList/readingunderstanding?source=Reading and understanding signs, symbols and words")

             case serviceRedirect.endsWith("/conditionsNameList/facetoface?source=Engaging face to face"):
        return res.redirect("/conditionsNameList/facetoface?source=Engaging face to face")

      
            case serviceRedirect.endsWith("/conditionsNameList/budgeting?source=Budgeting"):
        return res.redirect("/conditionsNameList/budgeting?source=Budgeting")

           case serviceRedirect.endsWith("/conditionsNameList/journeys?source=Planning and following journeys"):
        return res.redirect("/conditionsNameList/journeys?source=Planning and following journeys")

             case serviceRedirect.endsWith("conditionsNameList/movingaround?source=Moving around"):
        return res.redirect("/conditionsNameList/movingaround?source=Moving around")
    
      case serviceRedirect.endsWith("/conditionsNameList/mental-state?source=Mental state observations"):
        return res.redirect("/conditionsNameList/mental-state?source=Mental state observations")

      case serviceRedirect.endsWith("/conditionsNameList/physical-state?source=Informal observations"):
        return res.redirect("/conditionsNameList/physical-state?source=Informal observations")
      
      case serviceRedirect.endsWith("/conditionsNameList/descriptor?source=Activity descriptors"):
        return res.redirect("/conditionsNameList/descriptor?source=Activity descriptors")
      

      case serviceRedirect.endsWith("/conditionsNameList/dl-qual?source=Daily living qualifying period and prospective test"):
        return res.redirect("/conditionsNameList/dl-qual?source=Daily living qualifying period and prospective test")

         case serviceRedirect.endsWith("/conditionsNameList/mobility-qual?source=Mobility qualifying period and prospective test"):
        return res.redirect("/conditionsNameList/mobility-qual?source=Mobility qualifying period and prospective test")
      
      case serviceRedirect.endsWith("/conditionsNameList/review?source=Review"):
        return res.redirect("/conditionsNameList/review?source=Review")
      
      case serviceRedirect.endsWith("/conditionsNameList/check-answers-new"):
        return res.redirect("/conditionsNameList/check-answers-new")

       case serviceRedirect.endsWith("/conditionsNameList/docs-3"):
        return res.redirect("/conditionsNameList/docs-3")


          // conditions name list
        case serviceRedirect.endsWith("/conditionsNameList-test/evidence-none?source=default"):
        return res.redirect("/conditionsNameList-test/evidence-none?source=default")

        case serviceRedirect.endsWith("/conditionsNameList-test/evidence-none?source=evidence"):
        return res.redirect("/conditionsNameList-test/evidence-none?source=evidence")

        case serviceRedirect.endsWith("/conditionsNameList-test/evidence-addAnother?source=evidence"):
        return res.redirect("/conditionsNameList-test/evidence-addAnother?source=evidence")

      case serviceRedirect.endsWith("/conditionsNameList-test/consultation-date?source=Consultation date"):
        return res.redirect("/conditionsNameList-test/consultation-date?source=Consultation date")

      case serviceRedirect.endsWith("/conditionsNameList-test/consent?source=Claimant consent"):
        return res.redirect("/conditionsNameList-test/consent?source=Claimant consent")

      case serviceRedirect.endsWith("/conditionsNameList-test/verify-id?source=Claimant identity"):
        return res.redirect("/conditionsNameList-test/verify-id?source=Claimant identity")

      case serviceRedirect.endsWith("/conditionsNameList-test/attendees-none?source=Additional attendees"):
        return res.redirect("/conditionsNameList-test/attendees-none?source=Additional attendees")

      case serviceRedirect.endsWith("/conditionsNameList-test/attendees-addAnother?source=Additional attendees"):
        return res.redirect("/conditionsNameList-test/attendees-addAnother?source=Additional attendees")

        case serviceRedirect.endsWith("/conditionsNameList-test/conditions-none?source=Condition history"):
        return res.redirect("/conditionsNameList-test/conditions-none?source=Condition history")

      case serviceRedirect.endsWith("/conditionsNameList-test/conditions-addAnother?source=Condition history"):
        return res.redirect("/conditionsNameList-test/conditions-addAnother?source=Condition history")

        case serviceRedirect.endsWith("/conditionsNameList-test/medications-none?source=Medication"):
        return res.redirect("/conditionsNameList-test/medications-none?source=Medication")

      case serviceRedirect.endsWith("/conditionsNameList-test/medication-addAnother?source=Medication"):
        return res.redirect("/conditionsNameList-test/medication-addAnother?source=Medication")
        
      case serviceRedirect.endsWith("/conditionsNameList-test/soch1-additional?source=Social and occupational history"):
        return res.redirect("/conditionsNameList-test/soch1-additional?source=Social and occupational history")

        case serviceRedirect.endsWith("/conditionsNameList-test/preparingfood?source=Preparing food"):
        return res.redirect("/conditionsNameList-test/preparingfood?source=Preparing food")

         case serviceRedirect.endsWith("/conditionsNameList-test/takingnutrition?source=Taking nutrition"):
        return res.redirect("/conditionsNameList-test/takingnutrition?source=Taking nutrition")

         case serviceRedirect.endsWith("/conditionsNameList-test/managingtherapy?source=Managing therapy"):
        return res.redirect("/conditionsNameList-test/managingtherapy?source=Managing therapy")

          case serviceRedirect.endsWith("/conditionsNameList-test/washingbathing?source=Washing and bathing"):
        return res.redirect("/conditionsNameList-test/washingbathing?source=Washing and bathing")

         case serviceRedirect.endsWith("/conditionsNameList-test/toiletneeds?source=Managing toilet needs"):
        return res.redirect("/conditionsNameList-test/toiletneeds?source=Managing toilet needs")

           case serviceRedirect.endsWith("/conditionsNameList-test/dressing?source=Dressing and undressing"):
        return res.redirect("/conditionsNameList-test/dressing?source=Dressing and undressing")

          case serviceRedirect.endsWith("/conditionsNameList-test/communicatingverbally?source=Communicating verbally"):
        return res.redirect("/conditionsNameList-test/communicatingverbally?source=Communicating verbally")

          case serviceRedirect.endsWith("/conditionsNameList-test/readingunderstanding?source=Reading and understanding signs, symbols and words"):
        return res.redirect("/conditionsNameList-test/readingunderstanding?source=Reading and understanding signs, symbols and words")

             case serviceRedirect.endsWith("/conditionsNameList-test/facetoface?source=Engaging face to face"):
        return res.redirect("/conditionsNameList-test/facetoface?source=Engaging face to face")

      
            case serviceRedirect.endsWith("/conditionsNameList-test/budgeting?source=Budgeting"):
        return res.redirect("/conditionsNameList-test/budgeting?source=Budgeting")

           case serviceRedirect.endsWith("/conditionsNameList-test/journeys?source=Planning and following journeys"):
        return res.redirect("/conditionsNameList-test/journeys?source=Planning and following journeys")

             case serviceRedirect.endsWith("conditionsNameList-test/movingaround?source=Moving around"):
        return res.redirect("/conditionsNameList-test/movingaround?source=Moving around")
    
      case serviceRedirect.endsWith("/conditionsNameList-test/mental-state?source=Mental state observations"):
        return res.redirect("/conditionsNameList-test/mental-state?source=Mental state observations")

      case serviceRedirect.endsWith("/conditionsNameList-test/physical-state?source=Informal observations"):
        return res.redirect("/conditionsNameList-test/physical-state?source=Informal observations")
      
      case serviceRedirect.endsWith("/conditionsNameList-test/descriptor?source=Activity descriptors"):
        return res.redirect("/conditionsNameList-test/descriptor?source=Activity descriptors")
      

      case serviceRedirect.endsWith("/conditionsNameList-test/dl-qual?source=Daily living qualifying period and prospective test"):
        return res.redirect("/conditionsNameList-test/dl-qual?source=Daily living qualifying period and prospective test")

         case serviceRedirect.endsWith("/conditionsNameList-test/mobility-qual?source=Mobility qualifying period and prospective test"):
        return res.redirect("/conditionsNameList-test/mobility-qual?source=Mobility qualifying period and prospective test")
      
      case serviceRedirect.endsWith("/conditionsNameList-test/review?source=Review"):
        return res.redirect("/conditionsNameList-test/review?source=Review")
      
      case serviceRedirect.endsWith("/conditionsNameList-test/check-answers-new"):
        return res.redirect("/conditionsNameList-test/check-answers-new")

       case serviceRedirect.endsWith("/conditionsNameList-test/docs-3"):
        return res.redirect("/conditionsNameList-test/docs-3")


      default:
        return res.redirect("/")
    }
  } else {
    next();
  }
})

// TA V1 routes //

router.get(/claimantAvailable/, function (req, res) {
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

router.get(/unavailableWhy/, function (req, res) {
  if (req.query.radioGroup === "unwell") {
    res.redirect('abandon') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('fta')
  }
})

router.get(/idVerify/, function (req, res) {
  if (req.query.radioGroupId === "pass") {
    res.redirect('consent') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('id-fail')
  }
})

router.get(/getConsent/, function (req, res) {
  if (req.query.radioGroupConsent === "yes") {
    res.redirect('attendees') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('fta')
  }
})

router.get(/attendeeInfo/, function (req, res) {
  if (req.query.radioGroupAttendees === "yes") {
    res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('hoc-additional')
  }
})

router.get(/attendeeInfoTwo/, function (req, res) {
  if (req.query.radioGroup === "yes") {
    res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('hoc-additional')
  }
})

router.get(/callAttendees/, function (req, res) {
  if (req.query.radioGroup === "yes") {
    res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-treatment-additional')
  }
})

router.get(/fourAttendeeInfo/, function (req, res) {
  if (req.query.radioGroup === "yes") {
    res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-treatment-additional')
  }
})

router.get(/medsTreatment/, function (req, res) {
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

router.get(/conditionAddAnother/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('ta-task-list3')
  }
})

router.get(/medsAddAnother/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('meds') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('treatment')
  }
})

router.get(/treatmentAddAnother/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('treatment') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('ta-task-list3-5')
  }
})

router.get(/twoCallAttendees/, function (req, res) {
  if (req.query.radioGroup === "yes") {
    res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('conditions-additional')
  }
})

router.get(/fiveAttendeeInfo/, function (req, res) {
  if (req.query.radioGroup === "yes") {
    res.redirect('attendee-details') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-additional')
  }
})

router.get(/callConditions/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-additional')
  }
})
router.get(/callMeds/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('meds') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('treatment-additional')
  }
})

router.get(/callTreatment/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('soch1-additional')
  }
})




// IT 3 ROUTES //

router.get(/conditionAddAnother/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('ta-task-list3')
  }
})

router.post('/ta-3/conditions', function (req, res) {

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

router.post('/ta-3/meds-treatment2', function (req, res) {
  if (req.session.data['another-med'] == "Yes") {
    res.redirect('/ta-3/meds')
  } else {
    res.redirect('/ta-3/ta-task-list3-5')
  }
})

router.post('/ta-3/meds', function (req, res) {

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

router.post('/ta-3/meds2', function (req, res) {

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

router.post('/ta-3/treatment22', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-3/treatment-additional')
})

router.post('/ta-3/treatment', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-3/treatment2')
})

router.post('/ta-3/daily-living', function (req, res) {

  res.redirect('/ta-3/ta-task-list6')
})

router.post('/ta-3/mobility', function (req, res) {

  res.redirect('/ta-3/ta-task-list7')
})

router.post('/ta-3/daily-living/preparingfood', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/takingnutrition', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/managingtherapy', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/washingbathing', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/toiletneeds', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/dressing', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/communicatingverbally', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/readingunderstanding', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/facetoface', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/daily-living/budgeting', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/journeys', function (req, res) {

  res.redirect('/ta-3/mobility')
})

router.post('/ta-3/movingaround', function (req, res) {

  res.redirect('/ta-3/mobility')
})

router.post('/ta-3/daily-living-justification', function (req, res) {

  res.redirect('/ta-3/daily-living2')
})

router.post('/ta-3/dl-qual', function (req, res) {

  res.redirect('/ta-3/mobility-qual')
})

// mobility qualiffying period
router.post('/ta-3/mobility-qual', function (req, res) {

  res.redirect('/ta-3/ta-task-list9')
})

// Review period route
router.post('/ta-3/review', function (req, res) {

  res.redirect('/ta-3/ta-task-list10')
})

router.post('/ta-3/ta-task-list10', function (req, res) {

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

router.post('/ta-3/treatment2', function (req, res) {
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

router.post('/ta-3/attendees', function (req, res) {
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

router.post('/ta-3/another-attendee', function (req, res) {
  if (req.session.data['another-attendee'] == "yes") {
    res.redirect('/ta-3/attendee-details')
  } else {
    res.redirect('/ta-3/conditions-additional')
  }
})

router.get(/callConditions/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-additional')
  }
})

router.post('/ta-3/conditions-additional', function (req, res) {
  if (req.session.data['add-another-condition'] == "Yes") {
    res.redirect('/ta-3/conditions2')
  } else {
    res.redirect('/ta-3/meds-additional')
  }
})

router.post('/ta-3/appointee-answers', function (req, res) {
  if (req.session.data['add-another-attendee'] == "Yes") {
    res.redirect('/ta-3/attendee-details')
  } else {
    res.redirect('/ta-3/conditions-additional')
  }
})

router.post('/ta-3/meds-additional', function (req, res) {
  if (req.session.data['add-another-med'] == "Yes") {
    res.redirect('/ta-3/meds2')
  } else {
    res.redirect('/ta-3/treatment-additional')
  }
})

router.post('/ta-3/treatment-additional', function (req, res) {
  if (req.session.data['add-treatment'] == "Yes") {
    res.redirect('/ta-3/treatment22')
  } else {
    res.redirect('/ta-3/soch1-additional')
  }
})

router.post('/ta-3/conditions2', function (req, res) {
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

router.post('/ta-3/evidence', function (req, res) {
  const documentDate = req.session.data['document-date']
  const evidenceType = req.session.data['evidenceusedpip']

  const evidence = req.session.data.evidence || []
  evidence.push({ documentDate, evidenceType })
  req.session.data.evidence = evidence

  req.session.data.evidence[req.session.data.evidence.length - 1].action

  res.redirect('/ta-3/ta-task-list2')

})

router.post('/ta-3/attendee-details', function (req, res) {
  const name = req.session.data['attendee-name']
  const relationshipToClaimant = req.session.data['attendee-relationship']

  const queriesAttendee = req.session.data.queriesAttendee || []
  queriesAttendee.push({ name, relationshipToClaimant })
  req.session.data.queriesAttendee = queriesAttendee

  req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

  res.redirect('/ta-3/appointee-answers')

})
router.get(/callMeds/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('treatment-additional')
  }
})

router.get(/callTreatment/, function (req, res) {
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

router.post('/ta-4/conditions', function (req, res) {

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

router.post('/ta-4/meds-treatment2', function (req, res) {
  if (req.session.data['another-med'] == "Yes") {
    res.redirect('/ta-4/meds')
  } else {
    res.redirect('/ta-4/ta-task-list')
  }
})

router.post('/ta-4/meds', function (req, res) {

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

router.post('/ta-4/meds2', function (req, res) {

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

router.post('/ta-4/treatment22', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-4/treatment-additional')
})

router.post('/ta-4/treatment', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-4/treatment2')
})

router.post('/ta-4/daily-living', function (req, res) {

  res.redirect('/ta-4/ta-task-list6')
})

router.post('/ta-4/mobility', function (req, res) {

  res.redirect('/ta-4/ta-task-list7')
})

router.post('/ta-4/daily-living/preparingfood', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/takingnutrition', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/managingtherapy', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/washingbathing', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/toiletneeds', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/dressing', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/communicatingverbally', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/readingunderstanding', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/facetoface', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/daily-living/budgeting', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/journeys', function (req, res) {

  res.redirect('/ta-4/mobility')
})

router.post('/ta-4/movingaround', function (req, res) {

  res.redirect('/ta-4/mobility')
})

router.post('/ta-4/daily-living-justification', function (req, res) {

  res.redirect('/ta-4/daily-living2')
})

router.post('/ta-4/dl-qual', function (req, res) {

  res.redirect('/ta-4/mobility-qual')
})

// mobility qualiffying period
router.post('/ta-4/mobility-qual', function (req, res) {

  res.redirect('/ta-4/ta-task-list9')
})

// Review period route
router.post('/ta-4/review', function (req, res) {

  res.redirect('/ta-4/ta-task-list10')
})

router.post('/ta-4/ta-task-list10', function (req, res) {

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

router.post('/ta-4/treatment2', function (req, res) {
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

router.post('/ta-4/attendees', function (req, res) {
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

router.post('/ta-4/another-attendee', function (req, res) {
  if (req.session.data['another-attendee'] == "yes") {
    res.redirect('/ta-4/attendee-details')
  } else {
    res.redirect('/ta-4/conditions-additional')
  }
})

router.get(/callConditions/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-additional')
  }
})

router.post('/ta-4/conditions-additional', function (req, res) {
  if (req.session.data['add-another-condition'] == "Yes") {
    res.redirect('/ta-4/conditions2')
  } else {
    res.redirect('/ta-4/meds-additional')
  }
})

router.post('/ta-4/appointee-answers', function (req, res) {
  if (req.session.data['add-another-attendee'] == "Yes") {
    res.redirect('/ta-4/attendee-details')
  } else {
    res.redirect('/ta-4/conditions-additional')
  }
})

router.post('/ta-4/meds-additional', function (req, res) {
  if (req.session.data['add-another-med'] == "Yes") {
    res.redirect('/ta-4/meds2')
  } else {
    res.redirect('/ta-4/treatment-additional')
  }
})

router.post('/ta-4/treatment-additional', function (req, res) {
  if (req.session.data['add-treatment'] == "Yes") {
    res.redirect('/ta-4/treatment22')
  } else {
    res.redirect('/ta-4/soch1-additional')
  }
})

router.post('/ta-4/conditions2', function (req, res) {
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

router.post('/ta-4/evidence', function (req, res) {
  const documentDate = req.session.data['document-date']
  const evidenceType = req.session.data['evidenceusedpip']

  const evidence = req.session.data.evidence || []
  evidence.push({ documentDate, evidenceType })
  req.session.data.evidence = evidence

  req.session.data.evidence[req.session.data.evidence.length - 1].action

  res.redirect('/ta-4/ta-task-list')

})

router.post('/ta-4/attendee-details', function (req, res) {
  const name = req.session.data['attendee-name']
  const relationshipToClaimant = req.session.data['attendee-relationship']

  const queriesAttendee = req.session.data.queriesAttendee || []
  queriesAttendee.push({ name, relationshipToClaimant })
  req.session.data.queriesAttendee = queriesAttendee

  req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

  res.redirect('/ta-4/appointee-answers')

})
router.get(/callMeds/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('treatment-additional')
  }
})

router.get(/callTreatment/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('soch1-additional')
  }
})

router.post('/ta-4/consent', function (req, res) {
  if (req.session.data['consent'] == "no") {
    res.redirect('/ta-4/no-consent')

  } else {
    res.redirect('/ta-4/attendees')
  }

})

router.post('/ta-4/verify-id', function (req, res) {
  if (req.session.data['verify'] == "pass") {
    res.redirect('/ta-4/consent')

  } else {
    res.redirect('/ta-4/not-verified')
  }

})

router.post('/ta-4/end-why', function (req, res) {
  if (req.session.data['abandon'] == "Complete the assessment without a full consultation") {
    res.redirect('/ta-4/assessment-without-consultation')

  } else if (req.session.data['abandon'] == "Book another consultation for this claimant") {
    res.redirect('/ta-4/book-another')

  } else if (req.session.data['abandon'] == "Mark as assessment not completed") {
    res.redirect('/ta-4/not-complete')

  } else if (req.session.data['abandon'] == "Record unacceptable claimant behaviour") {
    res.redirect('/ta-4/unacceptable-behaviour')
  }
})

router.post('/ta-4/claimant-available', function (req, res) {
  if (req.session.data['take-call'] == "unavailable-evidence") {
    res.redirect('/ta-4/verify-id')

  } else if (req.session.data['take-call'] == "answerNo") {
    res.redirect('/ta-4/not-taken-call')

  } else if (req.session.data['take-call'] == "failed-attend") {
    res.redirect('/ta-4/no-answer-after-three')
  }
})


router.post('/ta-4/not-taken-call', function (req, res) {
  if (req.session.data['assessment'] == "unavailable-evidence") {
    res.redirect('/ta-4/assessment-without-consultation')
  } else if (req.session.data['assessment'] == "book-consultation") {
    res.redirect('/ta-4/consultation-to-be-booked')
  } else if (req.session.data['assessment'] == "failed-attend") {
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

router.post('/ta-5/conditions', function (req, res) {

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

router.post('/ta-5/meds-treatment2', function (req, res) {
  if (req.session.data['another-med'] == "Yes") {
    res.redirect('/ta-5/meds')
  } else {
    res.redirect('/ta-5/ta-task-list')
  }
})

router.post('/ta-5/meds', function (req, res) {

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

router.post('/ta-5/meds2', function (req, res) {

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

router.post('/ta-5/treatment22', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-5/treatment-additional')
})

router.post('/ta-5/treatment', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-5/treatment2')
})

router.post('/ta-5/daily-living', function (req, res) {

  res.redirect('/ta-5/ta-task-list6')
})

router.post('/ta-5/mobility', function (req, res) {

  res.redirect('/ta-5/ta-task-list7')
})

router.post('/ta-5/daily-living/preparingfood', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/takingnutrition', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/managingtherapy', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/washingbathing', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/toiletneeds', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/dressing', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/communicatingverbally', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/readingunderstanding', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/facetoface', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/daily-living/budgeting', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/journeys', function (req, res) {

  res.redirect('/ta-5/mobility')
})

router.post('/ta-5/movingaround', function (req, res) {

  res.redirect('/ta-5/mobility')
})

router.post('/ta-5/daily-living-justification', function (req, res) {

  res.redirect('/ta-5/daily-living2')
})

router.post('/ta-5/dl-qual', function (req, res) {

  res.redirect('/ta-5/mobility-qual')
})

// mobility qualiffying period
router.post('/ta-5/mobility-qual', function (req, res) {

  res.redirect('/ta-5/ta-task-list9')
})

// Review period route
router.post('/ta-5/review', function (req, res) {

  res.redirect('/ta-5/ta-task-list10')
})

router.post('/ta-5/ta-task-list10', function (req, res) {

  res.redirect('/ta-5/report')
})

router.post('/ta-5/treatment2', function (req, res) {
  if (req.session.data['another-treatment'] == "Yes") {
    res.redirect('/ta-5/treatment')
  } else {
    res.redirect('/ta-5/ta-task-list')
  }
})


router.post('/ta-5/attendees', function (req, res) {
  if (req.session.data['appointee'] == "yes") {
    res.redirect('/ta-5/attendee-details')
  } else {
    res.redirect('/ta-5/conditions-additional')
  }
})



router.post('/ta-5/another-attendee', function (req, res) {
  if (req.session.data['another-attendee'] == "yes") {
    res.redirect('/ta-5/attendee-details')
  } else {
    res.redirect('/ta-5/conditions-additional')
  }
})

router.get(/callConditions/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-additional')
  }
})

router.post('/ta-5/conditions-additional', function (req, res) {
  if (req.session.data['add-another-condition'] == "Yes") {
    res.redirect('/ta-5/conditions2')
  } else {
    res.redirect('/ta-5/meds-additional')
  }
})

router.post('/ta-5/appointee-answers', function (req, res) {
  if (req.session.data['add-another-attendee'] == "Yes") {
    res.redirect('/ta-5/attendee-details')
  } else {
    res.redirect('/ta-5/conditions-additional')
  }
})

router.post('/ta-5/meds-additional', function (req, res) {
  if (req.session.data['add-another-med'] == "Yes") {
    res.redirect('/ta-5/meds2')
  } else {
    res.redirect('/ta-5/treatment-additional')
  }
})

router.post('/ta-5/treatment-additional', function (req, res) {
  if (req.session.data['add-treatment'] == "Yes") {
    res.redirect('/ta-5/treatment22')
  } else {
    res.redirect('/ta-5/soch1-additional')
  }
})

router.post('/ta-5/conditions2', function (req, res) {
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

router.post('/ta-5/evidence', function (req, res) {
  const documentDate = req.session.data['document-date']
  const evidenceType = req.session.data['evidenceusedpip']

  const evidence = req.session.data.evidence || []
  evidence.push({ documentDate, evidenceType })
  req.session.data.evidence = evidence

  req.session.data.evidence[req.session.data.evidence.length - 1].action

  res.redirect('/ta-5/ta-task-list')

})

router.post('/ta-5/attendee-details', function (req, res) {
  const name = req.session.data['attendee-name']
  const relationshipToClaimant = req.session.data['attendee-relationship']

  const queriesAttendee = req.session.data.queriesAttendee || []
  queriesAttendee.push({ name, relationshipToClaimant })
  req.session.data.queriesAttendee = queriesAttendee

  req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

  res.redirect('/ta-5/appointee-answers')

})
router.get(/callMeds/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('treatment-additional')
  }
})

router.get(/callTreatment/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('soch1-additional')
  }
})

router.post('/ta-5/consent', function (req, res) {
  if (req.session.data['consent'] == "no") {
    res.redirect('/ta-5/no-consent')

  } else {
    res.redirect('/ta-5/attendees')
  }

})

router.post('/ta-5/verify-id', function (req, res) {
  if (req.session.data['verify'] == "pass") {
    res.redirect('/ta-5/consent')

  } else {
    res.redirect('/ta-5/not-verified')
  }

})

router.post('/ta-5/end-why', function (req, res) {
  if (req.session.data['abandon'] == "Complete the assessment with available evidence") {
    res.redirect('/ta-5/consultation-abandoned')

  } else if (req.session.data['abandon'] == "Send to admin") {
    res.redirect('/ta-5/book-another')

  } else if (req.session.data['abandon'] == "Book another") {
    res.redirect('/ta-5/book-assessment')

  } else if (req.session.data['abandon'] == "Mark as assessment not completed") {
    res.redirect('/ta-5/not-complete')

  } else if (req.session.data['abandon'] == "Record unacceptable claimant behaviour") {
    res.redirect('/ta-5/unacceptable-behaviour')
  }

  else if (req.session.data['abandon'] == "answerNoClaim") {
    res.redirect('/ta-5/no-longer-required')
  }
})

router.post('/ta-5/consultation-abandoned', function (req, res) {
  res.redirect('/ta-5/mental-state-abandon')
})

router.post('/ta-5/mental-state-abandon', function (req, res) {
  res.redirect('/ta-5/check-consultation-notes')
})

router.post('/ta-5/claimant-available', function (req, res) {
  if (req.session.data['take-call'] == "unavailable-evidence") {
    res.redirect('/ta-5/verify-id')

  } else if (req.session.data['take-call'] == "answerNo") {
    res.redirect('/ta-5/claimant-aware')

  } else if (req.session.data['take-call'] == "failed-attend") {
    res.redirect('/ta-5/no-answer-after-three')

  } else if (req.session.data['take-call'] == "answerNoClaim") {
    res.redirect('/ta-5/no-longer-required')
  }


})

router.post('/ta-5/claimant-aware', function (req, res) {
  if (req.session.data['take-call'] == "answerYes") {
    res.redirect('/ta-5/failed-to-attend')

  } else if (req.session.data['take-call'] == "answerNo") {
    res.redirect('/ta-5/claimant-not-aware')

  }
})

router.post('/ta-5/not-taken-call', function (req, res) {
  if (req.session.data['assessment'] == "unavailable-evidence") {
    res.redirect('/ta-5/assessment-without-consultation')
  } else if (req.session.data['assessment'] == "book-consultation") {
    res.redirect('/ta-5/consultation-to-be-booked')
  } else if (req.session.data['assessment'] == "failed-attend") {
    res.redirect('/ta-5/failed-to-attend')
  }
})


// IT 6 ROUTES //

router.post('/ta-6/add-condition', function (req, res) {
  if (req.session.data['anotherCondition'] == "Yes") {
    res.redirect('/ta-6/conditions')
  } else {
    res.redirect('/ta-6/ta-task-list')
  }
})

router.post('/ta-6/conditions', function (req, res) {

  const condition = req.session.data['condition-name']
  const conditionLength = req.session.data['condition-length']
  const conditionSymptoms = req.session.data['symptoms']
  const conditionVariability = req.session.data['variability']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/ta-6/add-condition')
})

router.post('/ta-6/meds-treatment2', function (req, res) {
  if (req.session.data['another-med'] == "Yes") {
    res.redirect('/ta-6/meds')
  } else {
    res.redirect('/ta-6/ta-task-list')
  }
})

router.post('/ta-6/meds', function (req, res) {

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

  res.redirect('/ta-6/meds-treatment2')
})

router.post('/ta-6/meds2', function (req, res) {

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

  res.redirect('/ta-6/meds-additional')
})

router.post('/ta-6/treatment22', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-6/treatment-additional')
})

router.post('/ta-6/treatment', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/ta-6/treatment2')
})

router.post('/ta-6/daily-living', function (req, res) {

  res.redirect('/ta-6/ta-task-list6')
})

router.post('/ta-6/mobility', function (req, res) {

  res.redirect('/ta-6/ta-task-list7')
})

router.post('/ta-6/daily-living/preparingfood', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/takingnutrition', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/managingtherapy', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/washingbathing', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/toiletneeds', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/dressing', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/communicatingverbally', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/readingunderstanding', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/facetoface', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/daily-living/budgeting', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/journeys', function (req, res) {

  res.redirect('/ta-6/mobility')
})

router.post('/ta-6/movingaround', function (req, res) {

  res.redirect('/ta-6/mobility')
})

router.post('/ta-6/daily-living-justification', function (req, res) {

  res.redirect('/ta-6/daily-living2')
})

router.post('/ta-6/dl-qual', function (req, res) {

  res.redirect('/ta-6/mobility-qual')
})

// mobility qualiffying period
router.post('/ta-6/mobility-qual', function (req, res) {

  res.redirect('/ta-6/ta-task-list9')
})

// Review period route
router.post('/ta-6/review', function (req, res) {

  res.redirect('/ta-6/ta-task-list10')
})

router.post('/ta-6/ta-task-list10', function (req, res) {

  res.redirect('/ta-6/report')
})

router.post('/ta-6/treatment2', function (req, res) {
  if (req.session.data['another-treatment'] == "Yes") {
    res.redirect('/ta-6/treatment')
  } else {
    res.redirect('/ta-6/ta-task-list')
  }
})


router.post('/ta-6/attendees', function (req, res) {
  if (req.session.data['appointee'] == "yes") {
    res.redirect('/ta-6/attendee-details')
  } else {
    res.redirect('/ta-6/conditions-additional')
  }
})



router.post('/ta-6/another-attendee', function (req, res) {
  if (req.session.data['another-attendee'] == "yes") {
    res.redirect('/ta-6/attendee-details')
  } else {
    res.redirect('/ta-6/conditions-additional')
  }
})

router.get(/callConditions/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-additional')
  }
})

router.post('/ta-6/conditions-additional', function (req, res) {
  if (req.session.data['add-another-condition'] == "Yes") {
    res.redirect('/ta-6/conditions2')
  } else {
    res.redirect('/ta-6/meds-additional')
  }
})

router.post('/ta-6/appointee-answers', function (req, res) {
  if (req.session.data['add-another-attendee'] == "Yes") {
    res.redirect('/ta-6/attendee-details')
  } else {
    res.redirect('/ta-6/conditions-additional')
  }
})

router.post('/ta-6/meds-additional', function (req, res) {
  if (req.session.data['add-another-med'] == "Yes") {
    res.redirect('/ta-6/meds2')
  } else {
    res.redirect('/ta-6/treatment-additional')
  }
})

router.post('/ta-6/treatment-additional', function (req, res) {
  if (req.session.data['add-treatment'] == "Yes") {
    res.redirect('/ta-6/treatment22')
  } else {
    res.redirect('/ta-6/soch1-additional')
  }
})

router.post('/ta-6/conditions2', function (req, res) {
  const condition = req.session.data['condition-name']
  const conditionLength = req.session.data['condition-length']
  const conditionSymptoms = req.session.data['symptoms']
  const conditionVariability = req.session.data['variability']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/ta-6/conditions-additional')

})

router.post('/ta-6/evidence', function (req, res) {
  const documentDate = req.session.data['document-date']
  const evidenceType = req.session.data['evidenceusedpip']

  const evidence = req.session.data.evidence || []
  evidence.push({ documentDate, evidenceType })
  req.session.data.evidence = evidence

  req.session.data.evidence[req.session.data.evidence.length - 1].action

  res.redirect('/ta-6/ta-task-list')

})

router.post('/ta-6/attendee-details', function (req, res) {
  const name = req.session.data['attendee-name']
  const relationshipToClaimant = req.session.data['attendee-relationship']

  const queriesAttendee = req.session.data.queriesAttendee || []
  queriesAttendee.push({ name, relationshipToClaimant })
  req.session.data.queriesAttendee = queriesAttendee

  req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

  res.redirect('/ta-6/appointee-answers')

})
router.get(/callMeds/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('treatment-additional')
  }
})

router.get(/callTreatment/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('soch1-additional')
  }
})

router.post('/ta-6/consent', function (req, res) {
  if (req.session.data['consent'] == "no") {
    res.redirect('/ta-6/no-consent')

  } else {
    res.redirect('/ta-6/attendees')
  }

})

router.post('/ta-6/verify-id', function (req, res) {
  if (req.session.data['verify'] == "pass") {
    res.redirect('/ta-6/consent')

  } else {
    res.redirect('/ta-6/not-verified')
  }

})

router.post('/ta-6/end-why', function (req, res) {
  if (req.session.data['abandon'] == "Complete the assessment with available evidence") {
    res.redirect('/ta-6/assessment-without-consultation')

  } else if (req.session.data['abandon'] == "Send to admin") {
    res.redirect('/ta-6/book-another')

  } else if (req.session.data['abandon'] == "Mark as assessment not completed") {
    res.redirect('/ta-6/not-complete')

  } else if (req.session.data['abandon'] == "Record unacceptable claimant behaviour") {
    res.redirect('/ta-6/unacceptable-behaviour')
  }

  else if (req.session.data['abandon'] == "answerNoClaim") {
    res.redirect('/ta-6/no-longer-required')
  }
})

router.post('/ta-6/claimant-available', function (req, res) {
  if (req.session.data['take-call'] == "unavailable-evidence") {
    res.redirect('/ta-6/verify-id')

  } else if (req.session.data['take-call'] == "answerNo") {
    res.redirect('/ta-6/status-failed-to-attend')

  } else if (req.session.data['take-call'] == "failed-attend") {
    res.redirect('/ta-6/no-answer-after-three')

  } else if (req.session.data['take-call'] == "answerNoClaim") {
    res.redirect('/ta-6/no-longer-required')
  }

})


router.post('/ta-6/not-taken-call', function (req, res) {
  if (req.session.data['assessment'] == "unavailable-evidence") {
    res.redirect('/ta-6/assessment-without-consultation')
  } else if (req.session.data['assessment'] == "book-consultation") {
    res.redirect('/ta-6/consultation-to-be-booked')
  } else if (req.session.data['assessment'] == "failed-attend") {
    res.redirect('/ta-6/failed-to-attend')
  }
})

// start of v7 routes // 

router.post('/ta-7/conditions', function (req, res) {

  res.redirect('/ta-7/soch1-additional')
})

router.post('/ta-7/soch1-additional', function (req, res) {

  res.redirect('/ta-7/preparingfood')
})

router.post('/ta-7/attendees', function (req, res) {

  res.redirect('/ta-7/conditions')
})

router.post('/ta-7/evidence', function (req, res) {

  const documentDate = req.session.data['document-date']
  const evidenceType = req.session.data['evidenceusedpip']
  const section = req.session.data.source

  const evidence = req.session.data.evidence || []
  evidence.push({ documentDate, evidenceType, section })
  req.session.data.evidence = evidence




  req.session.data.evidence[req.session.data.evidence.length - 1].action

  res.redirect('/ta-7/verify-id')

})

router.post('/ta-7/consent', function (req, res) {
  if (req.session.data['consent'] == "no") {
    res.redirect('/ta-7/no-consent')

  } else {
    res.redirect('/ta-7/attendees')
  }

})

router.post('/ta-7/verify-id', function (req, res) {
  if (req.session.data['verify'] == "pass") {
    res.redirect('/ta-7/consent')

  } else {
    res.redirect('/ta-7/not-verified')
  }

})
// Telephone assessment v7 - side nav design activities //

router.post('/ta-7/preparingfood', function (req, res) {

  res.redirect('/ta-7/takingnutrition')

})

router.post('/ta-7/takingnutrition', function (req, res) {

  res.redirect('/ta-7/managingtherapy')
})

router.post('/ta-7/managingtherapy', function (req, res) {

  res.redirect('/ta-7/washingbathing')
})

router.post('/ta-7/washingbathing', function (req, res) {

  res.redirect('/ta-7/toiletneeds')
})

router.post('/ta-7/toiletneeds', function (req, res) {

  res.redirect('/ta-7/dressing')
})

router.post('/ta-7/dressing', function (req, res) {

  res.redirect('/ta-7/communicatingverbally')
})

router.post('/ta-7/communicatingverbally', function (req, res) {

  res.redirect('/ta-7/readingunderstanding')
})

router.post('/ta-7/readingunderstanding', function (req, res) {

  res.redirect('/ta-7/facetoface')
})

router.post('/ta-7/facetoface', function (req, res) {

  res.redirect('/ta-7/budgeting')
})

router.post('/ta-7/budgeting', function (req, res) {

  res.redirect('/ta-7/journeys')
})

router.post('/ta-7/journeys', function (req, res) {

  res.redirect('/ta-7/movingaround')
})

router.post('/ta-7/movingaround', function (req, res) {

  res.redirect('/ta-7/mental-state')
})

router.post('/ta-7/mental-state', function (req, res) {

  res.redirect('/ta-7/physical-state')
})

router.post('/ta-7/physical-state', function (req, res) {

  res.redirect('/ta-7/dl-qual')
})

router.post('/ta-7/dl-qual', function (req, res) {

  res.redirect('/ta-7/daily-living')
})

router.post('/ta-7/daily-living', function (req, res) {

  res.redirect('/ta-7/mobility-qual')
})

router.post('/ta-7/mobility-qual', function (req, res) {

  res.redirect('/ta-7/mobility')
})

router.post('/ta-7/mobility', function (req, res) {

  res.redirect('/ta-7/review')
})

router.post('/ta-7/review', function (req, res) {

  res.redirect('/ta-7/report')
})

// start of v8 routes // 

router.post('/ta-8/conditions', function (req, res) {

  res.redirect('/ta-8/soch1-additional')
})

router.post('/ta-8/soch1-additional', function (req, res) {

  res.redirect('/ta-8/preparingfood')
})

router.post('/ta-8/attendees', function (req, res) {

  res.redirect('/ta-8/conditions')
})

router.post('/ta-8/evidence', function (req, res) {

  const documentDate = req.session.data['document-date']
  const evidenceType = req.session.data['evidenceusedpip']
  const section = req.session.data.source

  const evidence = req.session.data.evidence || []
  evidence.push({ documentDate, evidenceType, section })
  req.session.data.evidence = evidence




  req.session.data.evidence[req.session.data.evidence.length - 1].action

  res.redirect('/ta-8/verify-id')

})

router.post('/ta-8/consent', function (req, res) {
  if (req.session.data['consent'] == "no") {
    res.redirect('/ta-8/no-consent')

  } else {
    res.redirect('/ta-8/attendees')
  }

})

router.post('/ta-8/verify-id', function (req, res) {
  if (req.session.data['verify'] == "pass") {
    res.redirect('/ta-8/consent')

  } else {
    res.redirect('/ta-8/not-verified')
  }

})
// Telephone assessment v8 - side nav design activities //

router.post('/ta-8/preparingfood', function (req, res) {

  res.redirect('/ta-8/takingnutrition')

})

router.post('/ta-8/takingnutrition', function (req, res) {

  res.redirect('/ta-8/managingtherapy')
})

router.post('/ta-8/managingtherapy', function (req, res) {

  res.redirect('/ta-8/washingbathing')
})

router.post('/ta-8/washingbathing', function (req, res) {

  res.redirect('/ta-8/toiletneeds')
})

router.post('/ta-8/toiletneeds', function (req, res) {

  res.redirect('/ta-8/dressing')
})

router.post('/ta-8/dressing', function (req, res) {

  res.redirect('/ta-8/communicatingverbally')
})

router.post('/ta-8/communicatingverbally', function (req, res) {

  res.redirect('/ta-8/readingunderstanding')
})

router.post('/ta-8/readingunderstanding', function (req, res) {

  res.redirect('/ta-8/facetoface')
})

router.post('/ta-8/facetoface', function (req, res) {

  res.redirect('/ta-8/budgeting')
})

router.post('/ta-8/budgeting', function (req, res) {

  res.redirect('/ta-8/journeys')
})

router.post('/ta-8/journeys', function (req, res) {

  res.redirect('/ta-8/movingaround')
})

router.post('/ta-8/movingaround', function (req, res) {

  res.redirect('/ta-8/mental-state')
})

router.post('/ta-8/mental-state', function (req, res) {

  res.redirect('/ta-8/physical-state')
})

router.post('/ta-8/physical-state', function (req, res) {

  res.redirect('/ta-8/dl-qual')
})

router.post('/ta-8/dl-qual', function (req, res) {

  res.redirect('/ta-8/daily-living')
})

router.post('/ta-8/daily-living', function (req, res) {

  res.redirect('/ta-8/mobility-qual')
})

router.post('/ta-8/mobility-qual', function (req, res) {

  res.redirect('/ta-8/mobility')
})

router.post('/ta-8/mobility', function (req, res) {

  res.redirect('/ta-8/review')
})

router.post('/ta-8/review', function (req, res) {

  res.redirect('/ta-8/report')
})


// Versioning routes //

// evidence
router.post('/audit-versioning/evidence-used', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// medical conditions, medications and treatments
router.post('/audit-versioning/conditions-medications-treatments', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// variability
router.post('/audit-versioning/variability', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// functional history
router.post('/audit-versioning/functional-history', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// social history
router.post('/audit-versioning/social-history', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// descriptor choices
router.post('/audit-versioning/descriptor-choices', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// justifications
router.post('/audit-versioning/justifications', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})


// observations
router.post('/audit-versioning/observations', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// review period
router.post('/audit-versioning/review-period', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})

// audit outcome
router.post('/audit-versioning/audit-outcome', function (req, res) {
  res.redirect('/audit-versioning/task-list')
})




// SREL routes

//Evidence
router.post('/SREL/evidence', function (req, res) {
  res.redirect('/SREL/tasklist')
})

// Conditions
router.post('/SREL/conditions', function (req, res) {

  const condition = req.session.data['condition-name']
  const harmfulInfo = req.session.data['harmful']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, harmfulInfo })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/SREL/add-condition')
})

router.post('/SREL/add-condition', function (req, res) {
  if (req.session.data['anotherCondition'] == "Yes") {
    res.redirect('/SREL/conditions')
  } else {
    res.redirect('/SREL/tasklist')
  }
})

//Special rules
router.post('/SREL/special-rules', function (req, res) {
  if (req.session.data['specialRules'] == "Yes") {
    res.redirect('/SREL/special-rules-date')
  } else {
    res.redirect('/SREL/justification')
  }
})

router.post('/SREL/special-rules-date', function (req, res) {
  res.redirect('/SREL/mobility')
})

router.post('/SREL/mobility', function (req, res) {
  res.redirect('/SREL/tasklist')
})

//Shortcall
router.post('/SREL/shortcall', function (req, res) {
  res.redirect('/SREL/tasklist')
})

// Mobility descriptors
router.post('/SREL/journeys', function (req, res) {
  res.redirect('/SREL/mobility')
})

router.post('/SREL/moving-around', function (req, res) {
  res.redirect('/SREL/mobility')
})

//Justification
router.post('/SREL/justification', function (req, res) {
  res.redirect('/SREL/tasklist')
})

//Report
router.post('/SREL/report', function (req, res) {
  res.redirect('/SREL/submit')
})


// SREL-2 routes //

//Evidence
router.post('/SREL-2/evidence', function (req, res) {
  res.redirect('/SREL-2/short-call')
})

// Conditions
router.post('/SREL-2/conditions', function (req, res) {

  const condition = req.session.data['condition-name']
  const harmfulInfo = req.session.data['harmful']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, harmfulInfo })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/SREL-2/add-condition')
})

router.post('/SREL-2/add-condition', function (req, res) {
  if (req.session.data['anotherCondition'] == "Yes") {
    res.redirect('/SREL-2/conditions')
  } else {
    res.redirect('/SREL-2/special-rules')
  }
})

//Special rules
router.post('/SREL-2/special-rules', function (req, res) {
  if (req.session.data['specialRules'] == "Yes") {
    res.redirect('/SREL-2/special-rules-yes')
  } else {
    res.redirect('/SREL-2/justification')
  }
})

router.post('/SREL-2/special-rules-yes', function (req, res) {
  res.redirect('/SREL-2/special-rules-date')
})

router.post('/SREL-2/special-rules-date', function (req, res) {
  res.redirect('/SREL-2/mobility')
})

router.post('/SREL-2/mobility', function (req, res) {
  res.redirect('/SREL-2/mobility-justification')
})

router.post('/SREL-2/mobility-justification', function (req, res) {
  res.redirect('/SREL-2/report')
})

router.post('/SREL-2/report', function (req, res) {
  res.redirect('/SREL-2/report-two')
})

//Shortcall
router.post('/SREL-2/short-call', function (req, res) {
  if (req.session.data['short-call'] == "Yes") {
    res.redirect('/SREL-2/shortcall')
  } else {
    res.redirect('/SREL-2/conditions')
  }
})

router.post('/SREL-2/shortcall', function (req, res) {
  res.redirect('/SREL-2/conditions')
})

// Mobility descriptors
router.post('/SREL-2/journeys', function (req, res) {
  res.redirect('/SREL-2/mobility')
})

router.post('/SREL-2/moving-around', function (req, res) {
  res.redirect('/SREL-2/mobility')
})

//Justification
router.post('/SREL-2/justification', function (req, res) {
  res.redirect('/SREL-2/report')
})

//Report
router.post('/SREL-2/report-two', function (req, res) {
  res.redirect('/SREL-2/submit')
})

// SREL-2-1 routes //

//Evidence
router.post('/SREL-2-1/evidence', function (req, res) {
  res.redirect('/SREL-2-1/short-call')
})

// Conditions
router.post('/SREL-2-1/conditions', function (req, res) {

  const condition = req.session.data['condition-name']
  const harmfulInfo = req.session.data['harmful']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, harmfulInfo })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/SREL-2-1/add-condition')
})

router.post('/SREL-2-1/add-condition', function (req, res) {
  if (req.session.data['anotherCondition'] == "Yes") {
    res.redirect('/SREL-2-1/conditions')
  } else {
    res.redirect('/SREL-2-1/special-rules')
  }
})

//Special rules
router.post('/SREL-2-1/special-rules', function (req, res) {
  if (req.session.data['specialRules'] == "Yes") {
    res.redirect('/SREL-2-1/special-rules-yes')
  } else {
    res.redirect('/SREL-2-1/justification')
  }
})

router.post('/SREL-2-1/special-rules-yes', function (req, res) {
  res.redirect('/SREL-2-1/special-rules-date')
})

router.post('/SREL-2-1/special-rules-date', function (req, res) {
  res.redirect('/SREL-2-1/mobility')
})

router.post('/SREL-2-1/mobility', function (req, res) {
  res.redirect('/SREL-2-1/mobility-justification')
})

router.post('/SREL-2-1/mobility-justification', function (req, res) {
  res.redirect('/SREL-2-1/report')
})

router.post('/SREL-2-1/report', function (req, res) {
  res.redirect('/SREL-2-1/submit')
})

//Shortcall
router.post('/SREL-2-1/short-call', function (req, res) {
  if (req.session.data['shortCall'] == "Yes") {
    res.redirect('/SREL-2-1/shortcall')
  } else {
    res.redirect('/SREL-2-1/conditions')
  }
})

router.post('/SREL-2-1/shortcall', function (req, res) {
  res.redirect('/SREL-2-1/conditions')
})

// Mobility descriptors
router.post('/SREL-2-1/journeys', function (req, res) {
  res.redirect('/SREL-2-1/mobility')
})

router.post('/SREL-2-1/moving-around', function (req, res) {
  res.redirect('/SREL-2-1/mobility')
})

//Justification
router.post('/SREL-2-1/justification', function (req, res) {
  res.redirect('/SREL-2-1/report')
})


// SREL-3 routes //

router.post('/SREL-3/evidence', function (req, res) {
  res.redirect('/SREL-3/short-call')
})

// Conditions
router.post('/SREL-3/conditions', function (req, res) {

  const condition = req.session.data['condition-name']
  const harmfulInfo = req.session.data['harmful']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, harmfulInfo })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/SREL-3/add-condition')
})

router.post('/SREL-3/add-condition', function (req, res) {
  if (req.session.data['anotherCondition'] == "Yes") {
    res.redirect('/SREL-3/conditions')
  } else {
    res.redirect('/SREL-3/special-rules')
  }
})

// Shortcalls
router.post('/SREL-3/shortcall', function (req, res) {

  const callName = req.session.data['short-call-name']
  const consultationNotes = req.session.data['consultation-notes']

  const queriesShortcall = req.session.data.queriesShortcall || []
  queriesShortcall.push({ callName, consultationNotes })
  req.session.data.queriesShortcall = queriesShortcall

  req.session.data.queriesShortcall[req.session.data.queriesShortcall.length - 1].action

  res.redirect('/SREL-3/add-shortcall')
})

router.post('/SREL-3/add-shortcall', function (req, res) {
  if (req.session.data['anotherShortcall'] == "Yes") {
    res.redirect('/SREL-3/shortcall')
  } else {
    res.redirect('/SREL-3/diagnosis')
  }
})

//Special rules
router.post('/SREL-3/special-rules', function (req, res) {
  if (req.session.data['specialRules'] == "Yes") {
    res.redirect('/SREL-3/special-rules-yes')
  } else {
    res.redirect('/SREL-3/justification')
  }
})

router.post('/SREL-3/special-rules-yes', function (req, res) {
  res.redirect('/SREL-3/special-rules-date')
})

router.post('/SREL-3/special-rules-date', function (req, res) {
  res.redirect('/SREL-3/mobility-eleven')
})

// mobility descriptors
router.post('/SREL-3/mobility-eleven', function (req, res) {
  res.redirect('/SREL-3/mobility-twelve')
})

router.post('/SREL-3/mobility-twelve', function (req, res) {
  if (req.session.data['diagnosis'] === "Yes" && req.session.data['prognosis'] === "Yes") {
    res.redirect('/SREL-3/report-cleanFull')
  } else {
    res.redirect('/SREL-3/report-h')
  }
})

router.post('/SREL-3/mobility-justification', function (req, res) {
  res.redirect('/SREL-3/report')
})

router.post('/SREL-3/report', function (req, res) {
  res.redirect('/SREL-3/submit')
})

//Shortcall
router.post('/SREL-3/short-call', function (req, res) {
  if (req.session.data['shortCall'] == "Yes") {
    res.redirect('/SREL-3/shortcall')
  } else {
    res.redirect('/SREL-3/diagnosis')
  }
})

router.post('/SREL-3/shortcall', function (req, res) {
  res.redirect('/SREL-3/add-shortcall')
})

router.post('/SREL-3/add-shortcall', function (req, res) {
  res.redirect('/SREL-3/conditions')
})

// diagnosis - prognosis

router.post('/SREL-3/diagnosis', function (req, res) {
  if (req.session.data['diagnosis'] == "Yes") {
    res.redirect('/SREL-3/prognosis')
  } else {
    res.redirect('/SREL-3/prognosis')
  }
})

router.post('/SREL-3/prognosis', function (req, res) {
  if (req.session.data['prognosis'] == "Yes") {
    res.redirect('/SREL-3/conditions')
  } else {
    res.redirect('/SREL-3/conditions')
  }
})

//Justification
router.post('/SREL-3/report-h', function (req, res) {
  res.redirect('/SREL-3/assessment-report')
})

router.post('/SREL-3/justification', function (req, res) {
  res.redirect('/SREL-3/assessment-report')
})

router.post('/SREL-3/assessment-report', function (req, res) {
  res.redirect('/SREL-3/submit')
})

router.post('/SREL-3/report-cleanFull', function (req, res) {
  res.redirect('/SREL-3/submit')
})


// SREL-4 routes //

router.post('/SREL-4/evidence', function (req, res) {
  res.redirect('/SREL-4/short-call')
})

// Conditions
router.post('/SREL-4/conditions', function (req, res) {

  const condition = req.session.data['condition-name']
  const harmfulInfo = req.session.data['harmful']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, harmfulInfo })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/SREL-4/add-condition')
})

router.post('/SREL-4/add-condition', function (req, res) {
  if (req.session.data['anotherCondition'] == "Yes") {
    res.redirect('/SREL-4/conditions')
  } else {
    res.redirect('/SREL-4/special-rules')
  }
})

router.post('/SREL-4/remove-condition', function (req, res) {
  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/SREL-4/add-condition')
  } else {
    res.redirect('/SREL-4/add-condition')
  }
})

// Shortcalls
router.post('/SREL-4/shortcall', function (req, res) {

  const callName = req.session.data['short-call-name']
  const consultationNotes = req.session.data['consultation-notes']

  const queriesShortcall = req.session.data.queriesShortcall || []
  queriesShortcall.push({ callName, consultationNotes })
  req.session.data.queriesShortcall = queriesShortcall

  req.session.data.queriesShortcall[req.session.data.queriesShortcall.length - 1].action

  res.redirect('/SREL-4/add-shortcall')
})

router.post('/SREL-4/add-shortcall', function (req, res) {
  if (req.session.data['anotherShortcall'] == "Yes") {
    res.redirect('/SREL-4/shortcall')
  } else {
    res.redirect('/SREL-4/diagnosis')
  }
})

//Special rules
router.post('/SREL-4/special-rules', function (req, res) {
  if (req.session.data['specialRules'] == "Yes") {
    res.redirect('/SREL-4/special-rules-yes')
  } else {
    res.redirect('/SREL-4/justification')
  }
})

router.post('/SREL-4/special-rules-yes', function (req, res) {
  res.redirect('/SREL-4/special-rules-date')
})

router.post('/SREL-4/special-rules-date', function (req, res) {
  res.redirect('/SREL-4/mobility-eleven')
})

// mobility descriptors
router.post('/SREL-4/mobility-eleven', function (req, res) {
  res.redirect('/SREL-4/mobility-twelve')
})

router.post('/SREL-4/mobility-twelve', function (req, res) {
  if (req.session.data['diagnosis'] === "Yes" && req.session.data['prognosis'] === "Yes") {
    res.redirect('/SREL-4/report-cleanFull')
  } else {
    res.redirect('/SREL-4/report-h')
  }
})

router.post('/SREL-4/mobility-justification', function (req, res) {
  res.redirect('/SREL-4/report')
})

router.post('/SREL-4/report', function (req, res) {
  res.redirect('/SREL-4/submit')
})

//Shortcall
router.post('/SREL-4/short-call', function (req, res) {
  if (req.session.data['shortCall'] == "Yes") {
    res.redirect('/SREL-4/shortcall')
  } else {
    res.redirect('/SREL-4/diagnosis')
  }
})

router.post('/SREL-4/shortcall', function (req, res) {
  res.redirect('/SREL-4/add-shortcall')
})

router.post('/SREL-4/add-shortcall', function (req, res) {
  res.redirect('/SREL-4/conditions')
})

// diagnosis - prognosis

router.post('/SREL-4/diagnosis', function (req, res) {
  if (req.session.data['diagnosis'] == "Yes") {
    res.redirect('/SREL-4/prognosis')
  } else {
    res.redirect('/SREL-4/prognosis')
  }
})

router.post('/SREL-4/prognosis', function (req, res) {
  if (req.session.data['prognosis'] == "Yes") {
    res.redirect('/SREL-4/conditions')
  } else {
    res.redirect('/SREL-4/conditions')
  }
})

//Justification
router.post('/SREL-4/report-h', function (req, res) {
  res.redirect('/SREL-4/assessment-report')
})

router.post('/SREL-4/justification', function (req, res) {
  res.redirect('/SREL-4/assessment-report')
})

router.post('/SREL-4/assessment-report', function (req, res) {
  res.redirect('/SREL-4/submit')
})

router.post('/SREL-4/report-cleanFull', function (req, res) {
  res.redirect('/SREL-4/submit')
})




// PBR Routes

router.post('/pbr/add-condition', function (req, res) {
  if (req.session.data['anotherCondition'] == "Yes") {
    res.redirect('/pbr/conditions')
  } else {
    res.redirect('/pbr/ta-task-list')
  }
})

router.post('/pbr/conditions', function (req, res) {

  const condition = req.session.data['condition-name']
  const conditionLength = req.session.data['condition-length']
  const conditionSymptoms = req.session.data['symptoms']
  const conditionVariability = req.session.data['variability']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/pbr/add-condition')
})

router.post('/pbr/meds-treatment2', function (req, res) {
  if (req.session.data['another-med'] == "Yes") {
    res.redirect('/pbr/meds')
  } else {
    res.redirect('/pbr/ta-task-list')
  }
})

router.post('/pbr/meds', function (req, res) {

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

  res.redirect('/pbr/meds-treatment2')
})

router.post('/pbr/meds2', function (req, res) {

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

  res.redirect('/pbr/meds-additional')
})

router.post('/pbr/treatment22', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/pbr/treatment-additional')
})

router.post('/pbr/treatment', function (req, res) {

  const treatmentType = req.session.data['treatment-type']
  const treatmentFrequency = req.session.data['frequency']
  const additionalInfo = req.session.data['addInfo']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatmentType, treatmentFrequency, additionalInfo })
  req.session.data.queriesTreatment = queriesTreatment

  req.session.data.queriesTreatment[req.session.data.queriesTreatment.length - 1].action

  res.redirect('/pbr/treatment2')
})

router.post('/pbr/daily-living', function (req, res) {

  res.redirect('/pbr/ta-task-list6')
})

router.post('/pbr/mobility', function (req, res) {

  res.redirect('/pbr/ta-task-list7')
})

router.post('/pbr/daily-living/preparingfood', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/takingnutrition', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/managingtherapy', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/washingbathing', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/toiletneeds', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/dressing', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/communicatingverbally', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/readingunderstanding', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/facetoface', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/daily-living/budgeting', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/journeys', function (req, res) {

  res.redirect('/pbr/mobility')
})

router.post('/pbr/movingaround', function (req, res) {

  res.redirect('/pbr/mobility')
})

router.post('/pbr/daily-living-justification', function (req, res) {

  res.redirect('/pbr/daily-living2')
})

router.post('/pbr/dl-qual', function (req, res) {

  res.redirect('/pbr/mobility-qual')
})

// mobility qualiffying period
router.post('/pbr/mobility-qual', function (req, res) {

  res.redirect('/pbr/ta-task-list9')
})

// Review period route
router.post('/pbr/review', function (req, res) {

  res.redirect('/pbr/ta-task-list10')
})

router.post('/pbr/ta-task-list10', function (req, res) {

  res.redirect('/pbr/report')
})

router.post('/pbr/treatment2', function (req, res) {
  if (req.session.data['another-treatment'] == "Yes") {
    res.redirect('/pbr/treatment')
  } else {
    res.redirect('/pbr/ta-task-list')
  }
})


router.post('/pbr/attendees', function (req, res) {
  if (req.session.data['appointee'] == "yes") {
    res.redirect('/pbr/attendee-details')
  } else {
    res.redirect('/pbr/conditions-additional')
  }
})



router.post('/pbr/another-attendee', function (req, res) {
  if (req.session.data['another-attendee'] == "yes") {
    res.redirect('/pbr/attendee-details')
  } else {
    res.redirect('/pbr/conditions-additional')
  }
})

router.get(/callConditions/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('conditions') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('meds-additional')
  }
})

router.post('/pbr/conditions-additional', function (req, res) {
  if (req.session.data['add-another-condition'] == "Yes") {
    res.redirect('/pbr/conditions2')
  } else {
    res.redirect('/pbr/meds-additional')
  }
})

router.post('/pbr/appointee-answers', function (req, res) {
  if (req.session.data['add-another-attendee'] == "Yes") {
    res.redirect('/pbr/attendee-details')
  } else {
    res.redirect('/pbr/conditions-additional')
  }
})

router.post('/pbr/meds-additional', function (req, res) {
  if (req.session.data['add-another-med'] == "Yes") {
    res.redirect('/pbr/meds2')
  } else {
    res.redirect('/pbr/treatment-additional')
  }
})

router.post('/pbr/treatment-additional', function (req, res) {
  if (req.session.data['add-treatment'] == "Yes") {
    res.redirect('/pbr/treatment22')
  } else {
    res.redirect('/pbr/soch1-additional')
  }
})

router.post('/pbr/conditions2', function (req, res) {
  const condition = req.session.data['condition-name']
  const conditionLength = req.session.data['condition-length']
  const conditionSymptoms = req.session.data['symptoms']
  const conditionVariability = req.session.data['variability']

  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, conditionLength, conditionSymptoms, conditionVariability })
  req.session.data.queriesCondition = queriesCondition

  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

  res.redirect('/pbr/conditions-additional')

})

router.post('/pbr/evidence', function (req, res) {
  const documentDate = req.session.data['document-date']
  const evidenceType = req.session.data['evidenceusedpip']

  const evidence = req.session.data.evidence || []
  evidence.push({ documentDate, evidenceType })
  req.session.data.evidence = evidence

  req.session.data.evidence[req.session.data.evidence.length - 1].action

  res.redirect('/pbr/ta-task-list')

})

router.post('/ta-6/attendee-details', function (req, res) {
  const name = req.session.data['attendee-name']
  const relationshipToClaimant = req.session.data['attendee-relationship']

  const queriesAttendee = req.session.data.queriesAttendee || []
  queriesAttendee.push({ name, relationshipToClaimant })
  req.session.data.queriesAttendee = queriesAttendee

  req.session.data.queriesAttendee[req.session.data.queriesAttendee.length - 1].action

  res.redirect('/ta-6/appointee-answers')

})
router.get(/callMeds/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('meds-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('treatment-additional')
  }
})

router.get(/callTreatment/, function (req, res) {
  if (req.query.radioGroup === "Yes") {
    res.redirect('treatment-additional-add') // in input value is "yes" = redirect to 'page-name' //
  }
  else {
    res.redirect('soch1-additional')
  }
})

router.post('/ta-6/consent', function (req, res) {
  if (req.session.data['consent'] == "no") {
    res.redirect('/ta-6/no-consent')

  } else {
    res.redirect('/ta-6/attendees')
  }

})

router.post('/ta-6/verify-id', function (req, res) {
  if (req.session.data['verify'] == "pass") {
    res.redirect('/ta-6/consent')

  } else {
    res.redirect('/ta-6/not-verified')
  }

})

router.post('/ta-6/end-why', function (req, res) {
  if (req.session.data['abandon'] == "Complete the assessment with available evidence") {
    res.redirect('/ta-6/assessment-without-consultation')

  } else if (req.session.data['abandon'] == "Send to admin") {
    res.redirect('/ta-6/book-another')

  } else if (req.session.data['abandon'] == "Mark as assessment not completed") {
    res.redirect('/ta-6/not-complete')

  } else if (req.session.data['abandon'] == "Record unacceptable claimant behaviour") {
    res.redirect('/ta-6/unacceptable-behaviour')
  }

  else if (req.session.data['abandon'] == "answerNoClaim") {
    res.redirect('/ta-6/no-longer-required')
  }
})

router.post('/ta-6/claimant-available', function (req, res) {
  if (req.session.data['take-call'] == "unavailable-evidence") {
    res.redirect('/ta-6/verify-id')

  } else if (req.session.data['take-call'] == "answerNo") {
    res.redirect('/ta-6/status-failed-to-attend')

  } else if (req.session.data['take-call'] == "failed-attend") {
    res.redirect('/ta-6/no-answer-after-three')

  } else if (req.session.data['take-call'] == "answerNoClaim") {
    res.redirect('/ta-6/no-longer-required')
  }


})


router.post('/ta-6/not-taken-call', function (req, res) {
  if (req.session.data['assessment'] == "unavailable-evidence") {
    res.redirect('/ta-6/assessment-without-consultation')
  } else if (req.session.data['assessment'] == "book-consultation") {
    res.redirect('/ta-6/consultation-to-be-booked')
  } else if (req.session.data['assessment'] == "failed-attend") {
    res.redirect('/ta-6/failed-to-attend')
  }
})
router.use((req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl, //URL of page
    data: req.session.data //all data held
  }
  
 console.log(JSON.stringify(log, null, 2)) // show all data as a dump in terminal
  next() // continue to next action

})

// Prompts routes

//Routes for adding first condition only
router.post('/prompts/conditions', function (req, res) {

  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const hospital = req.session.data['hospital-admission']
  const hospitalCheck = req.session.data['hospital-admission-check']
  const conditionSymptoms = req.session.data['symptoms']
  const conditionVariability = req.session.data['variability']
  const conditionVariabilityCheck = req.session.data['variability-check']
  const mentalHealth = req.session.data['mental-health-description']
  const mentalHealthCheck = req.session.data['mental-health-check']
  const functionalRestriction = req.session.data['functional-restriction']

  const firstConditionAdded = req.session.data.firstCondition || []
  firstConditionAdded.push({ conditionName, conditionLength, diagnosis, medicalcareTreatments, conditionSymptoms, hospital, hospitalCheck, conditionVariability, conditionVariabilityCheck, mentalHealth, mentalHealthCheck, functionalRestriction })
  req.session.data.firstConditionAdded = firstConditionAdded

  req.session.data.firstConditionAdded[req.session.data.firstConditionAdded.length - 1].action

  res.redirect('/prompts/conditions-add')
})

router.post('/prompts/conditions-addAnother', function (req, res) {
  res.redirect('/prompts/conditions-add')
})

// Routes for adding another condition
router.post('/prompts/conditions-add', function (req, res) {
  const conditionAnother = req.session.data['condition-name-add']
  const conditionLengthAnother = req.session.data['condition-start-add']
  const diagnosisAnother = req.session.data['diagnosis-add']
  const medicalcareTreatmentsAnother = req.session.data['meds-care-treatments-add']
  const hospitalAnother = req.session.data['hospital-admission-add']
  const hospitalCheckbox = req.session.data['hospital-admission-check-add']
  const conditionSymptomsAnother = req.session.data['symptoms-add']
  const conditionVariabilityCheck = req.session.data['variability-check']
  const conditionVariabilityAnother = req.session.data['variability-add']
  const mentalHealthAnother = req.session.data['mental-health-description-add']
  const mentalHealthBox = req.session.data['mental-health-check']
  const functionalRestrictionAnother = req.session.data['functional-restriction-add']

  const OtherConditions = req.session.data.OtherConditions || []
  OtherConditions.push({ conditionAnother, conditionLengthAnother, diagnosisAnother, conditionSymptomsAnother, medicalcareTreatmentsAnother, hospitalAnother, hospitalCheckbox, conditionVariabilityAnother, conditionVariabilityCheck, mentalHealthAnother, mentalHealthBox, functionalRestrictionAnother })
  req.session.data.OtherConditions = OtherConditions

  req.session.data.OtherConditions[req.session.data.OtherConditions.length - 1].action

  res.redirect('/prompts/conditions-addAnother')
})


// Routes for prompts iteration two //

// Routes for adding another condition
router.post('/prompts-two/conditions-none', function (req, res) {

  res.redirect('/prompts-two/conditions')
})

// Routes for adding another condition //
router.post('/prompts-two/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const hospital = req.session.data['hospitalAdmission']
  const hospitalTextbox = req.session.data['hospitalYes']
  const conditionSymptoms = req.session.data['symptoms']
  const conditionVariability = req.session.data['variability']
  const conditionVariabilityCheck = req.session.data['variability-check']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const mentalHealthTextbox = req.session.data['mentalHealthYes']
  const functionalRestriction = req.session.data['functional-restriction']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, conditionSymptoms, hospital, hospitalTextbox, conditionVariability, conditionVariabilityCheck, mentalHealth, mentalHealthTextbox, functionalRestriction })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/prompts-two/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/prompts-two/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const hospital = req.session.data['mentalHealthCondition']
  const hospitalTextbox = req.session.data['mentalHealthYes']
  const conditionSymptoms = req.session.data['symptoms']
  const conditionVariability = req.session.data['variability']
  const conditionVariabilityCheck = req.session.data['variability-check']
  const mentalHealth = req.session.data['mental-health-description']
  const mentalHealthCheck = req.session.data['mental-health-check']
  const functionalRestriction = req.session.data['functional-restriction']
  const conditionNo = req.session.data['index']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, conditionSymptoms, hospital, hospitalTextbox, conditionVariability, conditionVariabilityCheck, mentalHealth, mentalHealthCheck, functionalRestriction })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/prompts-two/conditions-addAnother')
})

router.post('/prompts-two/conditions-addAnother', function (req, res) {

  res.redirect('/prompts-two/conditions')
})

// Routes for adding another medication
router.post('/prompts-two/medications-none', function (req, res) {

  res.redirect('/prompts-two/medication')
})


// Routes for adding another medication //
router.post('/prompts-two/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/prompts-two/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/prompts-two/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/prompts-two/medication-addAnother')
})

router.post('/prompts-two/medication-addAnother', function (req, res) {

  res.redirect('/prompts-two/medication')
})

// Routes for adding another treatment
router.post('/prompts-two/treatments-none', function (req, res) {

  res.redirect('/prompts-two/treatment')
})


// Routes for adding another treatment //
router.post('/prompts-two/treatment', function (req, res) {
  const treatmentName = req.session.data['treatments-name']
  const treatmentFrequency = req.session.data['treatments-frequency']
  const treatmentReason = req.session.data['treatments-reason']
  const treatmentEffectiveness = req.session.data['treatments-efficacy']
  const treatmentLocation = req.session.data['treatments-location']

  const treatmentAdded = req.session.data.treatmentAdded || []
  treatmentAdded.push({ treatmentName, treatmentFrequency, treatmentReason, treatmentEffectiveness, treatmentLocation })
  req.session.data.treatmentAdded = treatmentAdded

  req.session.data.treatmentAdded[req.session.data.treatmentAdded.length - 1].action

  res.redirect('/prompts-two/treatment-addAnother')
})

// Routes for adding another treatment //
router.post('/prompts-two/treatment-change', function (req, res) {
  const treatmentName = req.session.data['treatments-name']
  const treatmentFrequency = req.session.data['treatments-frequency']
  const treatmentReason = req.session.data['treatments-reason']
  const treatmentEffectiveness = req.session.data['treatments-efficacy']
  const treatmentLocation = req.session.data['treatments-location']
  const treatmentNo = req.session.data['indexTreat']

  const treatmentAdded = req.session.data.treatmentAdded || []
  treatmentAdded.splice(treatmentNo, 1);
  treatmentAdded.push({ treatmentNo, treatmentName, treatmentFrequency, treatmentReason, treatmentEffectiveness, treatmentLocation })
  req.session.data.treatmentAdded = treatmentAdded

  req.session.data.treatmentAdded[req.session.data.treatmentAdded.length - 1].action

  res.redirect('/prompts-two/treatment-addAnother')
})

router.post('/prompts-two/treatment-addAnother', function (req, res) {

  res.redirect('/prompts-two/treatment')
})


// Routes for prompts iteration three //

// Routes for adding another condition
router.post('/prompts-three/conditions-none', function (req, res) {

  res.redirect('/prompts-three/conditions')
})

// Routes for adding another condition //
router.post('/prompts-three/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/prompts-three/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/prompts-three/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/prompts-three/conditions-addAnother')
})

router.post('/prompts-three/conditions-addAnother', function (req, res) {

  res.redirect('/prompts-three/conditions')
})

// Routes for adding another medication
router.post('/prompts-three/medications-none', function (req, res) {

  res.redirect('/prompts-three/medication')
})


// Routes for adding another medication //
router.post('/prompts-three/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/prompts-three/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/prompts-three/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/prompts-three/medication-addAnother')
})

router.post('/prompts-three/medication-addAnother', function (req, res) {

  res.redirect('/prompts-three/medication')
})

// Routes for adding another treatment
router.post('/prompts-three/treatments-none', function (req, res) {

  res.redirect('/prompts-three/treatment')
})


// Routes for adding another treatment //
router.post('/prompts-three/treatment', function (req, res) {
  const treatmentName = req.session.data['treatments-name']
  const treatmentFrequency = req.session.data['treatments-frequency']
  const treatmentReason = req.session.data['treatments-reason']
  const treatmentEffectiveness = req.session.data['treatments-efficacy']
  const treatmentLocation = req.session.data['treatments-location']

  const treatmentAdded = req.session.data.treatmentAdded || []
  treatmentAdded.push({ treatmentName, treatmentFrequency, treatmentReason, treatmentEffectiveness, treatmentLocation })
  req.session.data.treatmentAdded = treatmentAdded

  req.session.data.treatmentAdded[req.session.data.treatmentAdded.length - 1].action

  res.redirect('/prompts-three/treatment-addAnother')
})

// Routes for adding another treatment //
router.post('/prompts-three/treatment-change', function (req, res) {
  const treatmentName = req.session.data['treatments-name']
  const treatmentFrequency = req.session.data['treatments-frequency']
  const treatmentReason = req.session.data['treatments-reason']
  const treatmentEffectiveness = req.session.data['treatments-efficacy']
  const treatmentLocation = req.session.data['treatments-location']
  const treatmentNo = req.session.data['indexTreat']

  const treatmentAdded = req.session.data.treatmentAdded || []
  treatmentAdded.splice(treatmentNo, 1);
  treatmentAdded.push({ treatmentNo, treatmentName, treatmentFrequency, treatmentReason, treatmentEffectiveness, treatmentLocation })
  req.session.data.treatmentAdded = treatmentAdded

  req.session.data.treatmentAdded[req.session.data.treatmentAdded.length - 1].action

  res.redirect('/prompts-three/treatment-addAnother')
})

router.post('/prompts-three/treatment-addAnother', function (req, res) {

  res.redirect('/prompts-three/treatment')
})


// Routes for prompts iteration four //

// Routes for adding another condition
router.post('/prompts-four/conditions-none', function (req, res) {

  res.redirect('/prompts-four/conditions')
})

// Routes for adding another condition //
router.post('/prompts-four/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/prompts-four/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/prompts-four/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/prompts-four/conditions-addAnother')
})

router.post('/prompts-four/conditions-addAnother', function (req, res) {

  res.redirect('/prompts-four/conditions')
})

// Routes for adding another medication
router.post('/prompts-four/medications-none', function (req, res) {

  res.redirect('/prompts-four/medication')
})


// Routes for adding another medication //
router.post('/prompts-four/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/prompts-four/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/prompts-four/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/prompts-four/medication-addAnother')
})

router.post('/prompts-four/medication-addAnother', function (req, res) {

  res.redirect('/prompts-four/medication')
})

// Routes for adding another attendee //
router.post('/prompts-four/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/prompts-four/attendees-addAnother')
})

router.post('/prompts-four/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/prompts-four/attendees-addAnother')
})

router.post('/prompts-four/attendees-addAnother', function (req, res) {

  res.redirect('/prompts-four/attendees')
})

router.post('/prompts-four/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/prompts-four/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/prompts-four/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////




router.post('/prompts-four/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/prompts-four/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/prompts-four/conditions-addAnother')
  }

})

router.post('/prompts-four/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/prompts-four/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/prompts-four/medication-addAnother')
  }

})

router.post('/prompts-four/attendees-none', function (req, res) {

  res.redirect('/prompts-four/attendees')
})

// Routes for prompts iteration five //

// Routes for adding another condition
router.post('/prompts-five/conditions-none', function (req, res) {

  res.redirect('/prompts-five/conditions')
})

// Routes for adding another condition //
router.post('/prompts-five/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/prompts-five/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/prompts-five/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/prompts-five/conditions-addAnother')
})

router.post('/prompts-five/conditions-addAnother', function (req, res) {

  res.redirect('/prompts-five/conditions')
})

// Routes for adding another medication
router.post('/prompts-five/medications-none', function (req, res) {

  res.redirect('/prompts-five/medication')
})


// Routes for adding another medication //
router.post('/prompts-five/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/prompts-five/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/prompts-five/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/prompts-five/medication-addAnother')
})

router.post('/prompts-five/medication-addAnother', function (req, res) {

  res.redirect('/prompts-five/medication')
})

// Routes for adding another attendee //
router.post('/prompts-five/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/prompts-five/attendees-addAnother')
})

router.post('/prompts-five/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/prompts-five/attendees-addAnother')
})

router.post('/prompts-five/attendees-addAnother', function (req, res) {

  res.redirect('/prompts-five/attendees')
})

router.post('/prompts-five/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/prompts-five/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/prompts-five/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////


router.post('/prompts-five/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/prompts-five/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/prompts-five/conditions-addAnother')
  }

})

router.post('/prompts-five/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/prompts-five/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/prompts-five/medication-addAnother')
  }

})

router.post('/prompts-five/attendees-none', function (req, res) {

  res.redirect('/prompts-five/attendees')
})

// Routes for prompts iteration five-one //

// Routes for adding another condition
router.post('/prompts-five-one/conditions-none', function (req, res) {

  res.redirect('/prompts-five-one/conditions')
})

// Routes for adding another condition //
router.post('/prompts-five-one/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/prompts-five-one/conditions-addAnother?source=Condition history')
})

// Routes for adding another condition //\
router.post('/prompts-five-one/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/prompts-five-one/conditions-addAnother')
})

router.post('/prompts-five-one/conditions-addAnother', function (req, res) {

  res.redirect('/prompts-five-one/conditions')
})

// Routes for adding another medication
router.post('/prompts-five-one/medications-none', function (req, res) {

  res.redirect('/prompts-five-one/medication')
})


// Routes for adding another medication //
router.post('/prompts-five-one/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/prompts-five-one/medication-addAnother?source=Medication')
})

// Routes for adding another medication //\
router.post('/prompts-five-one/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/prompts-five-one/medication-addAnother')
})

router.post('/prompts-five-one/medication-addAnother', function (req, res) {

  res.redirect('/prompts-five-one/medication')
})

// Routes for adding another attendee //
router.post('/prompts-five-one/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/prompts-five-one/attendees-addAnother')
})

router.post('/prompts-five-one/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/prompts-five-one/attendees-addAnother')
})

router.post('/prompts-five-one/attendees-addAnother', function (req, res) {

  res.redirect('/prompts-five-one/attendees')
})

router.post('/prompts-five-one/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/prompts-five/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/prompts-five/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////


router.post('/prompts-five-one/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/prompts-five-one/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/prompts-five-one/conditions-addAnother')
  }

})

router.post('/prompts-five-one/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/prompts-five-one/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/prompts-five-one/medication-addAnother')
  }

})

router.post('/prompts-five-one/attendees-none', function (req, res) {

  res.redirect('/prompts-five-one/attendees')
})

// Routes for prompts iteration six //

// Routes for adding another condition
router.post('/prompts-six/conditions-none', function (req, res) {

  res.redirect('/prompts-six/conditions')
})

// Routes for adding another condition //
router.post('/prompts-six/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/prompts-six/conditions-addAnother?source=Condition history')
})

// Routes for adding another condition //\
router.post('/prompts-six/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/prompts-six/conditions-addAnother')
})

router.post('/prompts-six/conditions-addAnother', function (req, res) {

  res.redirect('/prompts-six/conditions')
})

// Routes for adding another medication
router.post('/prompts-six/medications-none', function (req, res) {

  res.redirect('/prompts-six/medication')
})


// Routes for adding another medication //
router.post('/prompts-six/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/prompts-six/medication-addAnother?source=Medication')
})

// Routes for adding another medication //\
router.post('/prompts-six/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/prompts-six/medication-addAnother')
})

router.post('/prompts-six/medication-addAnother', function (req, res) {

  res.redirect('/prompts-six/medication')
})

// Routes for adding another attendee //
router.post('/prompts-six/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/prompts-six/attendees-addAnother')
})

router.post('/prompts-six/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/prompts-six/attendees-addAnother')
})

router.post('/prompts-six/attendees-addAnother', function (req, res) {

  res.redirect('/prompts-six/attendees')
})

router.post('/prompts-six/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/prompts-six/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/prompts-six/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////


router.post('/prompts-six/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/prompts-six/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/prompts-six/conditions-addAnother')
  }

})

router.post('/prompts-six/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/prompts-six/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/prompts-six/medication-addAnother')
  }

})

router.post('/prompts-six/attendees-none', function (req, res) {

  res.redirect('/prompts-six/attendees')
})

// Routes for justifications one //

router.post('/justifications-one/evidence-none', function (req, res) {

  res.redirect('/justifications-one/evidence')
})

// Routes for adding more evidence //
router.post('/justifications-one/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const coreEvidence = req.session.data['dwp-evidence']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, coreEvidence })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/justifications-one/evidence-addAnother')
})

router.post('/justifications-one/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-one/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/justifications-one/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/justifications-one/evidence-addAnother', function (req, res) {

  res.redirect('/justifications-one/evidence')
})

// Routes for adding another condition
router.post('/justifications-one/conditions-none', function (req, res) {

  res.redirect('/justifications-one/conditions')
})

// Routes for adding another condition //
router.post('/justifications-one/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/justifications-one/conditions-addAnother?source=Condition history')
})

// Routes for adding another condition //\
router.post('/justifications-one/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/justifications-one/conditions-addAnother')
})

router.post('/justifications-one/conditions-addAnother', function (req, res) {

  res.redirect('/justifications-one/conditions')
})


// Routes for adding another medication
router.post('/justifications-one/evidence-med', function (req, res) {

  const evidenceNo = req.session.data['index']
  const evidenceMedName = req.session.data['document-Medname']


  const evidenceMedAdded = req.session.data.evidenceMedAdded || []
  evidenceMedAdded.push({ evidenceMedName })
  req.session.data.evidenceMedAdded = evidenceMedAdded

  const last = req.session.data.evidenceMedAdded[req.session.data.evidenceMedAdded.length - 1];


  res.redirect('/justifications-one/medication-addAnother')
})

// Routes for adding another medication
router.post('/justifications-one/medications-none', function (req, res) {

  res.redirect('/justifications-one/medication')
})


// Routes for adding another medication //
router.post('/justifications-one/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/justifications-one/medication-addAnother?source=Medication')
})



// Routes for adding another medication //\
router.post('/justifications-one/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/justifications-one/medication-addAnother')
})

router.post('/justifications-one/medication-addAnother', function (req, res) {

  res.redirect('/justifications-one/medication')
})

// Routes for adding another attendee //
router.post('/justifications-one/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/justifications-one/attendees-addAnother')
})

router.post('/justifications-one/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/justifications-one/attendees-addAnother')
})

router.post('/justifications-one/attendees-addAnother', function (req, res) {

  res.redirect('/justifications-one/attendees')
})

router.post('/justifications-one/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/justifications-one/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/justifications-one/attendees-addAnother')
  }

})

// Routes for adding a justification

router.post('/justifications-one/justification', function (req, res) {
  const activityName = req.session.data['justificationDCheck']
  const justificationText = req.session.data['groupJustify']
  const activityHide = req.session.data['hiddenActivity']
  const problemCheck = req.session.data['noProblemActivity']

  const justificationAdded = req.session.data.justificationAdded || []
  justificationAdded.push({ activityName, justificationText, activityHide, problemCheck })
  req.session.data.justificationAdded = justificationAdded

  req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  res.redirect('/justifications-one/justification-addAnother?source=Descriptor choices and justifications')
})

router.post('/justifications-one/justification-addAnother', function (req, res) {

  res.redirect('/justifications-one/justification')
})

router.post('/justifications-one/preparingfood', function (req, res) {
  res.redirect('/justifications-one/justification')
})

router.post('/justifications-one/takingnutrition', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/managingtherapy', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/washingbathing', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/toiletneeds', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/dressing', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/communicatingverbally', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/readingunderstanding', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/facetoface', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/budgeting', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/journeys', function (req, res) {
  res.redirect('/justifications-one/justification')
})
router.post('/justifications-one/movingaround', function (req, res) {
  res.redirect('/justifications-one/justification')
})

router.post('/justifications-one/justification-none', function (req, res) {

  res.redirect('/justifications-one/justification')
})

/////////////////////////////////////////////////////////////////////////////////


router.post('/justifications-one/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/justifications-one/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-one/conditions-addAnother')
  }

})

router.post('/justifications-one/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/justifications-one/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/justifications-one/medication-addAnother')
  }

})

router.post('/justifications-one/attendees-none', function (req, res) {

  res.redirect('/justifications-one/attendees')
})


// Routes for justifications oneTwo//

router.post('/justifications-oneTwo/evidence-none', function (req, res) {

  res.redirect('/justifications-oneTwo/evidence')
})

// Routes for adding more evidence //
router.post('/justifications-oneTwo/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const coreEvidence = req.session.data['dwp-evidence']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, coreEvidence })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/justifications-oneTwo/evidence-addAnother')
})

router.post('/justifications-oneTwo/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-oneTwo/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/justifications-oneTwo/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/justifications-oneTwo/evidence-addAnother', function (req, res) {

  res.redirect('/justifications-oneTwo/evidence')
})

// Routes for adding another condition
router.post('/justifications-oneTwo/conditions-none', function (req, res) {

  res.redirect('/justifications-oneTwo/conditions')
})

// Routes for adding another condition //
router.post('/justifications-oneTwo/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/justifications-oneTwo/conditions-addAnother?source=Condition history')
})

// Routes for adding another condition //\
router.post('/justifications-oneTwo/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/justifications-oneTwo/conditions-addAnother')
})

router.post('/justifications-oneTwo/conditions-addAnother', function (req, res) {

  res.redirect('/justifications-oneTwo/conditions')
})


// Routes for adding another medication
router.post('/justifications-oneTwo/evidence-med', function (req, res) {

  const evidenceNo = req.session.data['index']
  const evidenceMedName = req.session.data['document-Medname']


  const evidenceMedAdded = req.session.data.evidenceMedAdded || []
  evidenceMedAdded.push({ evidenceMedName })
  req.session.data.evidenceMedAdded = evidenceMedAdded

  const last = req.session.data.evidenceMedAdded[req.session.data.evidenceMedAdded.length - 1];


  res.redirect('/justifications-oneTwo/medication-addAnother')
})

// Routes for adding another medication
router.post('/justifications-oneTwo/medications-none', function (req, res) {

  res.redirect('/justifications-oneTwo/medication')
})


// Routes for adding another medication //
router.post('/justifications-oneTwo/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/justifications-oneTwo/medication-addAnother?source=Medication')
})



// Routes for adding another medication //\
router.post('/justifications-oneTwo/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/justifications-oneTwo/medication-addAnother')
})

router.post('/justifications-oneTwo/medication-addAnother', function (req, res) {

  res.redirect('/justifications-oneTwo/medication')
})

// Routes for adding another attendee //
router.post('/justifications-oneTwo/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/justifications-oneTwo/attendees-addAnother')
})

router.post('/justifications-oneTwo/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/justifications-oneTwo/attendees-addAnother')
})

router.post('/justifications-oneTwo/attendees-addAnother', function (req, res) {

  res.redirect('/justifications-oneTwo/attendees')
})

router.post('/justifications-oneTwo/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/justifications-oneTwo/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/justifications-oneTwo/attendees-addAnother')
  }

})

// Routes for adding a justification

router.post('/justifications-oneTwo/justification', function (req, res) {
  const activityName = req.session.data['justificationDCheck']
  const justificationText = req.session.data['groupJustify']
  const activityHide = req.session.data['hiddenActivity']
  const problemCheck = req.session.data['noProblemActivity']

  const justificationAdded = req.session.data.justificationAdded || []
  justificationAdded.push({ activityName, justificationText, activityHide, problemCheck })
  req.session.data.justificationAdded = justificationAdded

  req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  res.redirect('/justifications-oneTwo/justification-addAnother?source=Descriptor choices and justifications')
})

router.post('/justifications-oneTwo/justification-addAnother', function (req, res) {

  res.redirect('/justifications-oneTwo/justification')
})

router.post('/justifications-oneTwo/preparingfood', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})

router.post('/justifications-oneTwo/takingnutrition', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/managingtherapy', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/washingbathing', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/toiletneeds', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/dressing', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/communicatingverbally', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/readingunderstanding', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/facetoface', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/budgeting', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/journeys', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})
router.post('/justifications-oneTwo/movingaround', function (req, res) {
  res.redirect('/justifications-oneTwo/justification-activity')
})

router.post('/justifications-oneTwo/justification-none', function (req, res) {

  res.redirect('/justifications-oneTwo/justification')
})

/////////////////////////////////////////////////////////////////////////////////


router.post('/justifications-oneTwo/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/justifications-oneTwo/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-oneTwo/conditions-addAnother')
  }

})

router.post('/justifications-oneTwo/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/justifications-oneTwo/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/justifications-oneTwo/medication-addAnother')
  }

})

router.post('/justifications-oneTwo/attendees-none', function (req, res) {

  res.redirect('/justifications-oneTwo/attendees')
})


// Routes for justifications iteration two//

router.post('/justifications-two/evidence-none', function (req, res) {

  res.redirect('/justifications-two/evidence')
})

// Routes for adding more evidence //
router.post('/justifications-two/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const coreEvidence = req.session.data['dwp-evidence']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, coreEvidence })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/justifications-two/evidence-addAnother')
})

router.post('/justifications-two/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-two/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/justifications-two/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/justifications-two/evidence-addAnother', function (req, res) {

  res.redirect('/justifications-two/evidence')
})

// Routes for adding another condition
router.post('/justifications-two/conditions-none', function (req, res) {

  res.redirect('/justifications-two/conditions')
})

// Routes for adding another condition //
router.post('/justifications-two/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/justifications-two/conditions-addAnother?source=Condition history')
})

// Routes for adding another condition //\
router.post('/justifications-two/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/justifications-two/conditions-addAnother')
})

router.post('/justifications-two/conditions-addAnother', function (req, res) {

  res.redirect('/justifications-two/conditions')
})


// Routes for adding another medication
router.post('/justifications-two/evidence-med', function (req, res) {

  const evidenceNo = req.session.data['index']
  const evidenceMedName = req.session.data['document-Medname']


  const evidenceMedAdded = req.session.data.evidenceMedAdded || []
  evidenceMedAdded.push({ evidenceMedName })
  req.session.data.evidenceMedAdded = evidenceMedAdded

  const last = req.session.data.evidenceMedAdded[req.session.data.evidenceMedAdded.length - 1];


  res.redirect('/justifications-two/medication-addAnother')
})

// Routes for adding another medication
router.post('/justifications-two/medications-none', function (req, res) {

  res.redirect('/justifications-two/medication')
})


// Routes for adding another medication //
router.post('/justifications-two/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/justifications-two/medication-addAnother?source=Medication')
})



// Routes for adding another medication //\
router.post('/justifications-two/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/justifications-two/medication-addAnother')
})

router.post('/justifications-two/medication-addAnother', function (req, res) {

  res.redirect('/justifications-two/medication')
})

// Routes for adding another attendee //
router.post('/justifications-two/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/justifications-two/attendees-addAnother')
})

router.post('/justifications-two/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/justifications-two/attendees-addAnother')
})

router.post('/justifications-two/attendees-addAnother', function (req, res) {

  res.redirect('/justifications-two/attendees')
})

router.post('/justifications-two/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/justifications-two/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/justifications-two/attendees-addAnother')
  }

})

// Routes for adding a justification - iteration two continued

router.post('/justifications-two/justification', function (req, res) {
  const groupName = req.session.data['groupName']
  const activityName = req.session.data['justificationDCheck']
  const justificationText = req.session.data['groupJustify']
  const activityHide = req.session.data['hiddenActivity']
  const problemCheck = req.session.data['noProblemActivity']

  const justificationAdded = req.session.data.justificationAdded || []
  justificationAdded.push({ groupName, activityName, justificationText, activityHide, problemCheck })
  req.session.data.justificationAdded = justificationAdded

  req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  res.redirect('/justifications-two/justification-addAnother?source=Descriptor choices and justifications')
})

router.post('/justifications-two/justification-activity', function (req, res) {

  const activityName = req.session.data['justificationDCheck']
  const justificationText = req.session.data['groupJustify']
  const justificationTextTwo = req.session.data['groupJustifyTwo']
  const justificationTextThree = req.session.data['groupJustifyThree']
  const justificationTextFour = req.session.data['groupJustifyFour']
  const justificationTextFive = req.session.data['groupJustifyFive']
  const justificationTextSix = req.session.data['groupJustifySix']
  const justificationTextSeven = req.session.data['groupJustifySeven']
  const justificationTextEight = req.session.data['groupJustifyEight']
  const justificationTextNine = req.session.data['groupJustifyNine']
  const justificationTextTen = req.session.data['groupJustifyTen']
  const justificationTextEleven = req.session.data['groupJustifyEleven']
  const justificationTextTwelve = req.session.data['groupJustifyTwelve']
  const justificationTextThirteen = req.session.data['groupJustifyThirteen']
  const justificationTextFourteen = req.session.data['groupJustifyFourteen']
  const justificationTextFithteen = req.session.data['groupJustifyFithteen']
  const justificationTextSixteen = req.session.data['groupJustifySixteen']
  const justificationTextSeventeen = req.session.data['groupJustifySeventeen']
  const justificationTextEighteen = req.session.data['groupJustifyEighteen']
  const justificationTextNineteen = req.session.data['groupJustifyNineteen']
  const justificationTextTwenty = req.session.data['groupJustifyTwenty']
  const activityHide = req.session.data['hiddenActivity']
  const problemCheck = req.session.data['noProblemActivity']
  const prepfoodNumber = req.session.data['numOne']


  const justificationAdded = req.session.data.justificationAdded || []

  justificationAdded.push({ activityName, justificationText, justificationTextTwo, justificationTextThree, justificationTextFour, justificationTextFive, justificationTextSix, justificationTextSeven, justificationTextEight, justificationTextNine, justificationTextTen, justificationTextEleven, justificationTextTwelve, justificationTextThirteen, justificationTextFourteen, justificationTextFithteen, justificationTextSixteen, justificationTextSeventeen, justificationTextEighteen, justificationTextNineteen, justificationTextTwenty, activityHide, problemCheck, prepfoodNumber })
  req.session.data.justificationAdded = justificationAdded
  req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  //   if (req.session.data['removeLink'] == req.session.data['removeLink']) {
  //    const aID = req.session.data['id']

  //   const justificationAdded = req.session.data.justificationAdded || []
  //   justificationAdded.aID.splice(aID, 1);
  //   req.session.data['hiddenActivity'].splice(aID, 1)

  // } else {

  // }

  req.session.data.justificationAdded = req.session.data.justificationAdded?.map(({ activityName, activityHide }) => ({
    activityName,
    activityHide,
    groupName: activityName.map((e) => justifications.indexOf(e) + 1).join(", ").replace(/,(?=[^,]*$)/, " and")
  }))

  res.redirect('/justifications-two/justification-activity?source=Justifications')
})

router.post('/justifications-two/addToGroup', function (req, res) {

  const activityName = req.session.data['justificationDCheck'].split(/,(?! )/)
  const actNo = req.session.data['radioID']

  const justificationAdded = req.session.data.justificationAdded || []
  justificationAdded[actNo - 1]?.activityName.push(...activityName)
  req.session.data['hiddenActivity'].push(...activityName)
  delete req.session.data['justificationDCheck']
  // justificationAdded.splice(1, 0, ({activityName:[ activityName ]}));
  //req.session.data.justificationAdded = justificationAdded
  // req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  res.redirect('/justifications-two/justification-activity')
})

router.post('/justifications-two/justification-addAnother', function (req, res) {

  res.redirect('/justifications-two/justification')
})

router.post('/justifications-two/preparingfood', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})

router.post('/justifications-two/takingnutrition', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/managingtherapy', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/washingbathing', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/toiletneeds', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/dressing', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/communicatingverbally', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/readingunderstanding', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/facetoface', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/budgeting', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/journeys', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})
router.post('/justifications-two/movingaround', function (req, res) {
  res.redirect('/justifications-two/descriptor')
})

router.post('/justifications-two/justification-none', function (req, res) {

  res.redirect('/justifications-two/justification')
})

/////////////////////////////////////////////////////////////////////////////////


router.post('/justifications-two/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/justifications-two/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-two/conditions-addAnother')
  }

})

router.post('/justifications-two/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/justifications-two/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/justifications-two/medication-addAnother')
  }

})

router.post('/justifications-two/attendees-none', function (req, res) {

  res.redirect('/justifications-two/attendees')
})


// Routes for justifications two iterated//

router.post('/justifications-twoIteration/evidence-none', function (req, res) {

  res.redirect('/justifications-twoIteration/evidence')
})

// Routes for adding more evidence //
router.post('/justifications-twoIteration/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const coreEvidence = req.session.data['dwp-evidence']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, coreEvidence })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/justifications-twoIteration/evidence-addAnother')
})

router.post('/justifications-twoIteration/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-twoIteration/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/justifications-twoIteration/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/justifications-twoIteration/evidence-addAnother', function (req, res) {

  res.redirect('/justifications-twoIteration/evidence')
})

// Routes for adding another condition
router.post('/justifications-twoIteration/conditions-none', function (req, res) {

  res.redirect('/justifications-twoIteration/conditions')
})

// Routes for adding another condition //
router.post('/justifications-twoIteration/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/justifications-twoIteration/conditions-addAnother?source=Condition history')
})

// Routes for adding another condition //\
router.post('/justifications-twoIteration/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/justifications-twoIteration/conditions-addAnother')
})

router.post('/justifications-twoIteration/conditions-addAnother', function (req, res) {

  res.redirect('/justifications-twoIteration/conditions')
})


// Routes for adding another medication
router.post('/justifications-twoIteration/evidence-med', function (req, res) {

  const evidenceNo = req.session.data['index']
  const evidenceMedName = req.session.data['document-Medname']


  const evidenceMedAdded = req.session.data.evidenceMedAdded || []
  evidenceMedAdded.push({ evidenceMedName })
  req.session.data.evidenceMedAdded = evidenceMedAdded

  const last = req.session.data.evidenceMedAdded[req.session.data.evidenceMedAdded.length - 1];


  res.redirect('/justifications-twoIteration/medication-addAnother')
})

// Routes for adding another medication
router.post('/justifications-twoIteration/medications-none', function (req, res) {

  res.redirect('/justifications-twoIteration/medication')
})


// Routes for adding another medication //
router.post('/justifications-twoIteration/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/justifications-twoIteration/medication-addAnother?source=Medication')
})



// Routes for adding another medication //\
router.post('/justifications-twoIteration/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/justifications-twoIteration/medication-addAnother')
})

router.post('/justifications-twoIteration/medication-addAnother', function (req, res) {

  res.redirect('/justifications-twoIteration/medication')
})

// Routes for adding another attendee //
router.post('/justifications-twoIteration/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/justifications-twoIteration/attendees-addAnother')
})

router.post('/justifications-twoIteration/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/justifications-twoIteration/attendees-addAnother')
})

router.post('/justifications-twoIteration/attendees-addAnother', function (req, res) {

  res.redirect('/justifications-twoIteration/attendees')
})

router.post('/justifications-two/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/justifications-twoIteration/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/justifications-twoIteration/attendees-addAnother')
  }

})

// Routes for adding a justification - iteration two continued

router.post('/justifications-twoIteration/justification', function (req, res) {
  const groupName = req.session.data['groupName']
  const activityName = req.session.data['justificationDCheck']
  const justificationText = req.session.data['groupJustify']
  const activityHide = req.session.data['hiddenActivity']
  const problemCheck = req.session.data['noProblemActivity']

  const justificationAdded = req.session.data.justificationAdded || []
  justificationAdded.push({ groupName, activityName, justificationText, activityHide, problemCheck })
  req.session.data.justificationAdded = justificationAdded

  req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  res.redirect('/justifications-twoIteration/justification-addAnother?source=Descriptor choices and justifications')
})

router.post('/justifications-twoIteration/justification-activity', function (req, res) {

  const activityName = req.session.data['justificationDCheck']
  const justificationText = req.session.data['groupJustify']
  const justificationTextTwo = req.session.data['groupJustifyTwo']
  const justificationTextThree = req.session.data['groupJustifyThree']
  const justificationTextFour = req.session.data['groupJustifyFour']
  const justificationTextFive = req.session.data['groupJustifyFive']
  const justificationTextSix = req.session.data['groupJustifySix']
  const justificationTextSeven = req.session.data['groupJustifySeven']
  const justificationTextEight = req.session.data['groupJustifyEight']
  const justificationTextNine = req.session.data['groupJustifyNine']
  const justificationTextTen = req.session.data['groupJustifyTen']
  const justificationTextEleven = req.session.data['groupJustifyEleven']
  const justificationTextTwelve = req.session.data['groupJustifyTwelve']
  const justificationTextThirteen = req.session.data['groupJustifyThirteen']
  const justificationTextFourteen = req.session.data['groupJustifyFourteen']
  const justificationTextFithteen = req.session.data['groupJustifyFithteen']
  const justificationTextSixteen = req.session.data['groupJustifySixteen']
  const justificationTextSeventeen = req.session.data['groupJustifySeventeen']
  const justificationTextEighteen = req.session.data['groupJustifyEighteen']
  const justificationTextNineteen = req.session.data['groupJustifyNineteen']
  const justificationTextTwenty = req.session.data['groupJustifyTwenty']
  const activityHide = req.session.data['hiddenActivity']
  const problemCheck = req.session.data['noProblemActivity']
  const prepfoodNumber = req.session.data['numOne']


  const justificationAdded = req.session.data.justificationAdded || []

  justificationAdded.push({ activityName, justificationText, justificationTextTwo, justificationTextThree, justificationTextFour, justificationTextFive, justificationTextSix, justificationTextSeven, justificationTextEight, justificationTextNine, justificationTextTen, justificationTextEleven, justificationTextTwelve, justificationTextThirteen, justificationTextFourteen, justificationTextFithteen, justificationTextSixteen, justificationTextSeventeen, justificationTextEighteen, justificationTextNineteen, justificationTextTwenty, activityHide, problemCheck, prepfoodNumber })
  req.session.data.justificationAdded = justificationAdded
  req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  //   if (req.session.data['removeLink'] == req.session.data['removeLink']) {
  //    const aID = req.session.data['id']

  //   const justificationAdded = req.session.data.justificationAdded || []
  //   justificationAdded.aID.splice(aID, 1);
  //   req.session.data['hiddenActivity'].splice(aID, 1)

  // } else {

  // }

  req.session.data.justificationAdded = req.session.data.justificationAdded?.map(({ activityName, activityHide }) => ({
    activityName,
    activityHide,
    groupName: activityName.map((e) => justifications.indexOf(e) + 1).join(", ").replace(/,(?=[^,]*$)/, " and")
  }))

  res.redirect('/justifications-twoIteration/writeJustification')
})

router.post('/justifications-twoIteration/writeJustification', function (req, res) {

  const seperateJustifications = req.session.data['seperateJustification']

  const numberOfJustificationAdded = req.session.data.numberOfJustificationAdded || []
  numberOfJustificationAdded.push({ seperateJustifications })
  req.session.data.numberOfJustificationAdded = numberOfJustificationAdded
  req.session.data.numberOfJustificationAdded[req.session.data.numberOfJustificationAdded.length - 1].action

   res.redirect('/justifications-twoIteration/justification-activity?source=Justifications')
})

router.post('/justifications-twoIteration/addToGroup', function (req, res) {

  const activityName = req.session.data['justificationDCheck'].split(/,(?! )/)
  const actNo = req.session.data['radioID']

  const justificationAdded = req.session.data.justificationAdded || []
  justificationAdded[actNo - 1]?.activityName.push(...activityName)
  req.session.data['hiddenActivity'].push(...activityName)
  delete req.session.data['justificationDCheck']
  // justificationAdded.splice(1, 0, ({activityName:[ activityName ]}));
  //req.session.data.justificationAdded = justificationAdded
  // req.session.data.justificationAdded[req.session.data.justificationAdded.length - 1].action

  res.redirect('/justifications-twoIteration/justification-activity')
})

router.post('/justifications-twoIteration/justification-addAnother', function (req, res) {

  res.redirect('/justifications-twoIteration/justification')
})

router.post('/justifications-twoIteration/preparingfood', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})

router.post('/justifications-twoIteration/takingnutrition', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/managingtherapy', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/washingbathing', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/toiletneeds', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/dressing', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/communicatingverbally', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/readingunderstanding', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/facetoface', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/budgeting', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/journeys', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})
router.post('/justifications-twoIteration/movingaround', function (req, res) {
  res.redirect('/justifications-twoIteration/descriptor')
})

router.post('/justifications-twoIteration/justification-none', function (req, res) {

  res.redirect('/justifications-twoIteration/justification')
})

/////////////////////////////////////////////////////////////////////////////////


router.post('/justifications-twoIteration/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/justifications-twoIteration/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/justifications-twoIteration/conditions-addAnother')
  }

})

router.post('/justifications-twoIteration/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/justifications-twoIteration/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/justifications-twoIteration/medication-addAnother')
  }

})

router.post('/justifications-twoIteration/attendees-none', function (req, res) {

  res.redirect('/justifications-twoIteration/attendees')
})


//Conditions name list

router.post('/conditionsNameList/evidence-none', function (req, res) {

  res.redirect('/conditionsNameList/evidence')
})


router.post('/conditionsNameList/evidence-none', function (req, res) {

  res.redirect('/conditionsNameList/evidence')
})

router.post('/conditionsNameList/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const evidenceDate = req.session.data['date-of-evidence']
  const coreEvidence = req.session.data['dwp-evidence']
  const coreEvidenceDate = req.session.data['coreEvidenceDate']
  const evidenceLink = req.session.data['evidenceURL']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, evidenceDate, coreEvidence, evidenceLink, coreEvidenceDate })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/conditionsNameList/evidence-addAnother?source=evidence')
})

router.post('/conditionsNameList/evidence-addAnother', function (req, res) {

  res.redirect('/conditionsNameList/evidence')
})

router.post('/conditionsNameList/conditions-none', function (req, res) {

  res.redirect('/conditionsNameList/conditions')
})

router.post('/conditionsNameList/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action

  res.redirect('/conditionsNameList/conditions-addAnother')
})

router.post('/conditionsNameList/conditions-addAnother', function (req, res) {

  res.redirect('/conditionsNameList/conditions')
})

router.post('/conditionsNameList/conditions-change', function (req, res) {
const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

   res.redirect('/conditionsNameList/conditions-addAnother')
})


//Conditions name list -- test

router.post('/conditionsNameList-test/evidence-none', function (req, res) {

  res.redirect('/conditionsNameList-test/evidence')
})


router.post('/conditionsNameList-test/evidence-none', function (req, res) {

  res.redirect('/conditionsNameList-test/evidence')
})

router.post('/conditionsNameList-test/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const evidenceDate = req.session.data['date-of-evidence']
  const coreEvidence = req.session.data['dwp-evidence']
  const coreEvidenceDate = req.session.data['coreEvidenceDate']
  const evidenceLink = req.session.data['evidenceURL']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, evidenceDate, coreEvidence, evidenceLink, coreEvidenceDate })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/conditionsNameList-test/evidence-addAnother?source=evidence')
})

router.post('/conditionsNameList-test/evidence-addAnother', function (req, res) {

  res.redirect('/conditionsNameList-test/evidence')
})

router.post('/conditionsNameList-test/conditions-none', function (req, res) {

  res.redirect('/conditionsNameList-test/conditions')
})

router.post('/conditionsNameList-test/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action

  res.redirect('/conditionsNameList-test/conditions-addAnother')
})


router.post('/conditionsNameList-test/conditions-addAnother', function (req, res) {

  res.redirect('/conditionsNameList-test/conditions')
})

router.post('/conditionsNameList-test/conditions-change', function (req, res) {
const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

   res.redirect('/conditionsNameList-test/conditions-addAnother')
})

// Routes for prompts iteration six-one //

router.post('/prompts-six-one/evidence-none', function (req, res) {

  res.redirect('/prompts-six-one/evidence')
})

// Routes for adding more evidence //
router.post('/prompts-six-one/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const coreEvidence = req.session.data['dwp-evidence']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, coreEvidence })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/prompts-six-one/evidence-addAnother')
})

router.post('/prompts-six-one/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/prompts-six-one/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/prompts-six-one/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/prompts-six-one/evidence-addAnother', function (req, res) {

  res.redirect('/prompts-six-one/evidence')
})

// Routes for adding another condition
router.post('/prompts-six-one/conditions-none', function (req, res) {

  res.redirect('/prompts-six-one/conditions')
})

// Routes for adding another condition
router.post('/prompts-six-one/conditions-none', function (req, res) {

  res.redirect('/prompts-six-one/conditions')
})

// Routes for adding another condition //
router.post('/prompts-six-one/conditions', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/prompts-six-one/conditions-addAnother?source=Condition history')
})

// Routes for adding another condition //\
router.post('/prompts-six-one/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const conditionHistory = req.session.data['condition-history']
  const mentalHealthQuestion = req.session.data['mentalHealthQ']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['indexCond']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionName, conditionLength, conditionHistory, mentalHealthQuestion, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/prompts-six-one/conditions-addAnother')
})

router.post('/prompts-six-one/conditions-addAnother', function (req, res) {

  res.redirect('/prompts-six-one/conditions')
})


// Routes for adding another medication
router.post('/prompts-six-one/evidence-med', function (req, res) {

  const evidenceNo = req.session.data['index']
  const evidenceMedName = req.session.data['document-Medname']


  const evidenceMedAdded = req.session.data.evidenceMedAdded || []
  evidenceMedAdded.push({ evidenceMedName })
  req.session.data.evidenceMedAdded = evidenceMedAdded

  const last = req.session.data.evidenceMedAdded[req.session.data.evidenceMedAdded.length - 1];


  res.redirect('/prompts-six-one/medication-addAnother')
})

// Routes for adding another medication
router.post('/prompts-six-one/medications-none', function (req, res) {

  res.redirect('/prompts-six-one/medication')
})


// Routes for adding another medication //
router.post('/prompts-six-one/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDoseFreq, medicationReason, medicationSideEffect, medicationEffectiveness, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/prompts-six-one/medication-addAnother?source=Medication')
})



// Routes for adding another medication //\
router.post('/prompts-six-one/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDoseFreq = req.session.data['medications-dose']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medicationAdditionalNotes = req.session.data['medications-additional-notes']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medicationName, medicationDoseFreq, medicationReason, medicationEffectiveness, medicationSideEffect, medicationAdditionalNotes })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/prompts-six-one/medication-addAnother')
})

router.post('/prompts-six-one/medication-addAnother', function (req, res) {

  res.redirect('/prompts-six-one/medication')
})

// Routes for adding another attendee //
router.post('/prompts-six-one/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/prompts-six-one/attendees-addAnother')
})

router.post('/prompts-six-one/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/prompts-six-one/attendees-addAnother')
})

router.post('/prompts-six-one/attendees-addAnother', function (req, res) {

  res.redirect('/prompts-six-one/attendees')
})

router.post('/prompts-six-one/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/prompts-six-one/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/prompts-six-one/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////


router.post('/prompts-six-one/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/prompts-six-one/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/prompts-six-one/conditions-addAnother')
  }

})

router.post('/prompts-six-one/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/prompts-six-one/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/prompts-six-one/medication-addAnother')
  }

})

router.post('/prompts-six-one/attendees-none', function (req, res) {

  res.redirect('/prompts-six-one/attendees')
})


// Routes for validation //

// Routes for adding another condition
router.post('/validation/conditions-none', function (req, res) {

  res.redirect('/validation/conditions')
})

// Routes for adding another condition //
router.post('/validation/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/validation/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/validation/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/validation/conditions-addAnother')
})

router.post('/validation/conditions-addAnother', function (req, res) {

  res.redirect('/validation/conditions')
})

// Routes for adding another medication
router.post('/validation/medications-none', function (req, res) {

  res.redirect('/validation/medication')
})


// Routes for adding another medication //
router.post('/validation/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/validation/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/validation/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/validation/medication-addAnother')
})

router.post('/validation/medication-addAnother', function (req, res) {

  res.redirect('/validation/medication')
})

// Routes for adding another attendee //

router.post('/validation/attendees-error', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action
  res.redirect('/validation/attendees-addAnother?source=Additional attendees')
})

router.post('/validation/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/validation/attendees-addAnother')
})

router.post('/validation/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/validation/attendees-addAnother')
})

router.post('/validation/attendees-addAnother', function (req, res) {

  res.redirect('/validation/attendees')
})

router.post('/validation/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/validation/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/validation/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////

router.post('/validation/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/validation/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/validation/conditions-addAnother')
  }

})

router.post('/validation/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/validation/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/validation/medication-addAnother')
  }

})

router.post('/validation/attendees-none', function (req, res) {

  res.redirect('/validation/attendees')
})

router.post('/validation/report', function (req, res) {

  res.redirect('/validation/report-error')
})


// Routes for validation omissions //

// Routes for adding another condition
router.post('/validation-omissions/conditions-none', function (req, res) {

  res.redirect('/validation-omissions/conditions')
})

// Routes for adding another condition //
router.post('/validation-omissions/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/validation-omissions/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/validation-omissions/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']

  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/validation-omissions/conditions-addAnother')
})

router.post('/validation-omissions/conditions-addAnother', function (req, res) {

  res.redirect('/validation-omissions/conditions')
})

// Routes for adding another medication
router.post('/validation-omissions/medications-none', function (req, res) {

  res.redirect('/validation-omissions/medication')
})


// Routes for adding another medication //
router.post('/validation-omissions/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/validation-omissions/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/validation-omissions/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/validation-omissions/medication-addAnother')
})

router.post('/validation-omissions/medication-change-error', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/validation-omissions/medication-single?source=Medication')
})

router.post('/validation-omissions/attendees-change-error', function (req, res) {

  res.redirect('/validation-omissions/attendees-addAnother?Additional attendees')
})

router.post('/validation-omissions/medication-single-error', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/validation-omissions/medication-single?source=Medication')
})

router.post('/validation-omissions/medication-view', function (req, res) {

  res.redirect('/validation-omissions/medication-single')
})

// Routes for adding another attendee //

router.post('/validation-omissions/attendees-error', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action
  res.redirect('/validation-omissions/attendees-addAnother?source=Additional attendees')
})

router.post('/validation-omissions/attendees', function (req, res) {

  res.redirect('/validation-omissions/attendees-addAnother')
})

router.post('/validation-omissions/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/validation-omissions/attendees-addAnother')
})

router.post('/validation-omissions/attendees-addAnother', function (req, res) {

  res.redirect('/validation-omissions/attendees')
})

router.post('/validation-omissions/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/validation-omissions/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/validation-omissions/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////

router.post('/validation-omissions/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/validation-omissions/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/validation-omissions/conditions-addAnother')
  }

})

router.post('/validation-omissions/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/validation-omissions/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/validation-omissions/medication-addAnother')
  }

})

router.post('/validation-omissions/attendees-none', function (req, res) {

  res.redirect('/validation-omissions/attendees')
})

router.post('/validation-omissions/report', function (req, res) {

  res.redirect('/validation-omissions/report-error')
})


// Routes for evidenceDesign work //

// Routes for evidence none //
router.post('/evidenceDesign/evidence-none', function (req, res) {

  res.redirect('/evidenceDesign/evidence')
})

// Routes for adding more evidence //
router.post('/evidenceDesign/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const evidenceDate = req.session.data['date-of-evidence']
  const coreEvidence = req.session.data['dwp-evidence']
  const coreEvidenceDate = req.session.data['coreEvidenceDate']
  const evidenceLink = req.session.data['evidenceURL']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, evidenceDate, coreEvidence, evidenceLink, coreEvidenceDate })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/evidenceDesign/evidence-addAnother')
})

router.post('/evidenceDesign/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/evidenceDesign/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/evidenceDesign/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/evidenceDesign/evidence-addAnother', function (req, res) {

  res.redirect('/evidenceDesign/evidence')
})

// Routes for adding another condition
router.post('/evidenceDesign/conditions-none', function (req, res) {

  res.redirect('/evidenceDesign/conditions')
})

// Routes for adding another condition //
router.post('/evidenceDesign/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/evidenceDesign/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/evidenceDesign/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']


  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/evidenceDesign/conditions-addAnother')
})

router.post('/evidenceDesign/conditions-addAnother', function (req, res) {

  res.redirect('/evidenceDesign/conditions')
})

// Routes for adding another medication
router.post('/evidenceDesign/medications-none', function (req, res) {

  res.redirect('/evidenceDesign/medication')
})


// Routes for adding another medication //
router.post('/evidenceDesign/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/evidenceDesign/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/evidenceDesign/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/evidenceDesign/medication-addAnother')
})

router.post('/evidenceDesign/medication-addAnother', function (req, res) {

  res.redirect('/evidenceDesign/medication')
})

// Routes for adding another attendee //
router.post('/evidenceDesign/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/evidenceDesign/attendees-addAnother')
})

router.post('/evidenceDesign/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/evidenceDesign/attendees-addAnother')
})

router.post('/evidenceDesign/attendees-addAnother', function (req, res) {

  res.redirect('/evidenceDesign/attendees')
})

router.post('/evidenceDesign/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/evidenceDesign/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/evidenceDesign/attendees-addAnother')
  }

})

// evidence-iterationOne routes //////////////////////////////////////////////////

// Routes for evidenceDesign work //

// Routes for evidence none //
router.post('/evidenceDesign-iterationOne/evidence-none', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/evidence')
})

router.post('/evidenceDesign-iterationOne/evidence-update', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/evidence')
})

// Routes for adding more evidence //
router.post('/evidenceDesign-iterationOne/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['document-name']
  const evidenceDate = req.session.data['date-of-evidence']
  const coreEvidence = req.session.data['dwp-evidence']
  const coreEvidenceDate = req.session.data['coreEvidenceDate']
  const evidenceLink = req.session.data['evidenceURL']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName, evidenceDate, coreEvidence, evidenceLink, coreEvidenceDate })
  req.session.data.evidenceAdded = evidenceAdded

  const last = req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1];


  res.redirect('/evidenceDesign-iterationOne/evidence-addAnother')
})

router.post('/evidenceDesign-iterationOne/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/evidenceDesign-iterationOne/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/evidenceDesign-iterationOne/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/evidenceDesign-iterationOne/evidence-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/evidence')
})

// Routes for adding another condition
router.post('/evidenceDesign-iterationOne/conditions-none', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/conditions')
})

// Routes for adding another condition //
router.post('/evidenceDesign-iterationOne/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/evidenceDesign-iterationOne/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/evidenceDesign-iterationOne/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']


  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/evidenceDesign-iterationOne/conditions-addAnother')
})

router.post('/evidenceDesign-iterationOne/conditions-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/conditions')
})

// Routes for adding another medication
router.post('/evidenceDesign-iterationOne/medications-none', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/medication')
})


// Routes for adding another medication //
router.post('/evidenceDesign-iterationOne/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/evidenceDesign-iterationOne/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/evidenceDesign-iterationOne/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/evidenceDesign-iterationOne/medication-addAnother')
})

router.post('/evidenceDesign-iterationOne/medication-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/medication')
})

// Routes for adding another attendee //
router.post('/evidenceDesign-iterationOne/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/evidenceDesign-iterationOne/attendees-addAnother')
})

router.post('/evidenceDesign-iterationOne/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/evidenceDesign-iterationOne/attendees-addAnother')
})

router.post('/evidenceDesign-iterationOne/attendees-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-iterationOne/attendees')
})

router.post('/evidenceDesign-iterationOne/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/evidenceDesign/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/evidenceDesign/attendees-addAnother')
  }

})

// end of evidence-iterationOne routes

/////////////////////////////////////////////////////////////////////////////////


router.post('/evidenceDesign/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/evidenceDesign/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/evidenceDesign/conditions-addAnother')
  }

})

router.post('/evidenceDesign/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/evidenceDesign/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/evidenceDesign/medication-addAnother')
  }

})

router.post('/evidenceDesign/attendees-none', function (req, res) {

  res.redirect('/evidenceDesign/attendees')
})

// Routes for evidenceDesign-one work //

// Routes for evidence none //
router.post('/evidenceDesign-one/evidence-none', function (req, res) {

  res.redirect('/evidenceDesign-one/evidence')
})

// Routes for adding more evidence //
router.post('/evidenceDesign-one/evidence', function (req, res) {
  const evidenceNo = req.session.data['index']
  const evidenceName = req.session.data['x']

  const evidenceAdded = req.session.data.evidenceAdded || []
  evidenceAdded.push({ evidenceNo, evidenceName })
  req.session.data.evidenceAdded = evidenceAdded

  req.session.data.evidenceAdded[req.session.data.evidenceAdded.length - 1].action
  res.redirect('/evidenceDesign-one/evidence-addAnother')

})

router.post('/evidenceDesign-one/remove-evidence', function (req, res) {
  const evidenceNo = req.session.data['indexEvidence']
  const evidenceName = req.session.data['evidence']
  const evNo = "2-0";

  if (req.session.data['removeCondition'] == "No") {
    res.redirect('/evidenceDesign-one/evidence-addAnother')

  } else if (req.session.data['removeCondition'] == "Yes") {

    const evidenceAdded = req.session.data.evidenceAdded || []
    evidenceAdded.splice(evidenceNo, 1); // 2nd parameter means remove one item only
    req.session.data.evidenceAdded = evidenceAdded

    res.redirect('/evidenceDesign-one/evidence-addAnother')
  }
})

// Adding another peice of evidence //
router.post('/evidenceDesign-one/evidence-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-one/evidence')
})

// Routes for adding another condition
router.post('/evidenceDesign-one/conditions-none', function (req, res) {

  res.redirect('/evidenceDesign-one/conditions')
})

// Routes for adding another condition //
router.post('/evidenceDesign-one/conditions', function (req, res) {
  const conditionNo = req.session.data['loop.index0']
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']

  const conditionAdded = req.session.data.conditionAdded || []
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  req.session.data.conditionAdded[req.session.data.conditionAdded.length - 1].action


  res.redirect('/evidenceDesign-one/conditions-addAnother')
})

// Routes for adding another condition //\
router.post('/evidenceDesign-one/conditions-change', function (req, res) {
  const conditionName = req.session.data['condition-name-first']
  const conditionLength = req.session.data['condition-start']
  const diagnosis = req.session.data['diagnosis']
  const medicalcareTreatments = req.session.data['meds-care-treatments']
  const homeTherapy = req.session.data['home-therapies']
  const mentalHealth = req.session.data['mentalHealthCondition']
  const conditionNo = req.session.data['index']


  const conditionAdded = req.session.data.conditionAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  conditionAdded.splice(conditionNo, 1);
  conditionAdded.push({ conditionNo, conditionName, conditionLength, diagnosis, medicalcareTreatments, homeTherapy, mentalHealth })
  req.session.data.conditionAdded = conditionAdded

  res.redirect('/evidenceDesign-one/conditions-addAnother')
})

router.post('/evidenceDesign-one/conditions-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-one/conditions')
})

// Routes for adding another medication
router.post('/evidenceDesign-one/medications-none', function (req, res) {

  res.redirect('/evidenceDesign-one/medication')
})


// Routes for adding another medication //
router.post('/evidenceDesign-one/medication', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationSideEffect, medicationEffectiveness })
  req.session.data.medicationAdded = medicationAdded

  req.session.data.medicationAdded[req.session.data.medicationAdded.length - 1].action

  res.redirect('/evidenceDesign-one/medication-addAnother')
})

// Routes for adding another medication //\
router.post('/evidenceDesign-one/medication-change', function (req, res) {
  const medicationName = req.session.data['medications-name']
  const medicationDose = req.session.data['medications-dose']
  const medicationFrequency = req.session.data['medications-frequency']
  const medicationReason = req.session.data['medications-reason']
  const medicationEffectiveness = req.session.data['medications-efficacy']
  const medicationSideEffect = req.session.data['medications-side-effects']
  const medNo = req.session.data['indexMed']

  const medicationAdded = req.session.data.medicationAdded || []
  medicationAdded.splice(medNo, 1);
  medicationAdded.push({ medNo, medicationName, medicationDose, medicationFrequency, medicationReason, medicationEffectiveness, medicationSideEffect })
  req.session.data.medicationAdded = medicationAdded

  res.redirect('/evidenceDesign-one/medication-addAnother')
})

router.post('/evidenceDesign-one/medication-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-one/medication')
})

// Routes for adding another attendee //
router.post('/evidenceDesign-one/attendees', function (req, res) {
  const attendeeNo = req.session.data['loop.index0']
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']

  const attendeeAdded = req.session.data.attendeeAdded || []
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  req.session.data.attendeeAdded[req.session.data.attendeeAdded.length - 1].action

  res.redirect('/evidenceDesign-one/attendees-addAnother')
})

router.post('/evidenceDesign-one/attendees-change', function (req, res) {
  const attendeeName = req.session.data['attendee-name']
  const relation = req.session.data['relationshipToClaimant']
  const attendeeNo = req.session.data['index']

  const attendeeAdded = req.session.data.attendeeAdded || []
  // const conditionNo1 = conditionAdded.findIndex(p => p.id === conditionNo.id);
  attendeeAdded.splice(attendeeNo, 1);
  attendeeAdded.push({ attendeeNo, attendeeName, relation })
  req.session.data.attendeeAdded = attendeeAdded

  res.redirect('/evidenceDesign-one/attendees-addAnother')
})

router.post('/evidenceDesign-one/attendees-addAnother', function (req, res) {

  res.redirect('/evidenceDesign-one/attendees')
})

router.post('/evidenceDesign-one/remove-attendee', function (req, res) {

  if (req.session.data['removeAttendee'] == "Yes") {
    res.redirect('/evidenceDesign-one/attendees-addAnother')
  } else if (req.session.data['removeAttendee'] == "No") {
    res.redirect('/evidenceDesign-one/attendees-addAnother')
  }

})

/////////////////////////////////////////////////////////////////////////////////


router.post('/evidenceDesign-one/remove-condition', function (req, res) {

  if (req.session.data['removeCondition'] == "Yes") {
    res.redirect('/evidenceDesign-one/conditions-addAnother')
  } else if (req.session.data['removeCondition'] == "No") {
    res.redirect('/evidenceDesign-one/conditions-addAnother')
  }

})

router.post('/evidenceDesign-one/remove-medication', function (req, res) {

  if (req.session.data['removeMedication'] == "Yes") {
    res.redirect('/evidenceDesign-one/medication-addAnother')
  } else if (req.session.data['removeMedication'] == "No") {
    res.redirect('/evidenceDesign-one/medication-addAnother')
  }

})

router.post('/evidenceDesign-one/attendees-none', function (req, res) {

  res.redirect('/evidenceDesign-one/attendees')
})

// Routes for paperbased assessment work //

// Routes for adding another phonecall //\
router.post('/paperbased-assessment/phonecall', function (req, res) {
  const phonecallDay = req.session.data['phone-day']
  const phonecallMonth = req.session.data['phone-month']
  const phonecallYear = req.session.data['phone-year']
  const phonecallName = req.session.data['shortcallName']
  const relationship = req.session.data['relation']
  const phonecallIdentity = req.session.data['claimantIdentity']
  const phonecallIdentityYes = req.session.data['yesWhy']
  const phonecallIdentityNo = req.session.data['noWhy']
  const phonecallConsent = req.session.data['consentPBR']
  const phonecallNotes = req.session.data['phonecallNotes']
  const phonecallNo = req.session.data['index']

  const phoneAdded = req.session.data.phoneAdded || []
  phoneAdded.push({ phonecallNo, phonecallDay, phonecallMonth, phonecallYear, phonecallName, relationship, phonecallIdentity, phonecallIdentityYes, phonecallIdentityNo, phonecallConsent, phonecallNotes })
  req.session.data.phoneAdded = phoneAdded

  res.redirect('/paperbased-assessment/phonecall-addAnother')
})

router.post('/paperbased-assessment/phonecall-change', function (req, res) {
  const phonecallDay = req.session.data['phone-day']
  const phonecallMonth = req.session.data['phone-month']
  const phonecallYear = req.session.data['phone-year']
  const phonecallName = req.session.data['shortcallName']
  const relationship = req.session.data['relation']
  const phonecallIdentity = req.session.data['claimantIdentity']
  const phonecallIdentityYes = req.session.data['yesWhy']
  const phonecallIdentityNo = req.session.data['noWhy']
  const phonecallConsent = req.session.data['consentPBR']
  const phonecallNotes = req.session.data['phonecallNotes']
  const phonecallNo = req.session.data['index']

  const phoneAdded = req.session.data.phoneAdded || []
  phoneAdded.splice(phonecallNo, 1);
  phoneAdded.push({ phonecallNo, phonecallDay, phonecallMonth, phonecallYear, phonecallName, relationship, phonecallIdentity, phonecallIdentityYes, phonecallIdentityNo, phonecallConsent, phonecallNotes })
  req.session.data.phoneAdded = phoneAdded

  res.redirect('/paperbased-assessment/phonecall-result')
})

router.post('/paperbased-assessment/phonecall-addAnother', function (req, res) {
  const phonecallDay = req.session.data['phone-day']
  const phonecallMonth = req.session.data['phone-month']
  const phonecallYear = req.session.data['phone-year']
  const phonecallName = req.session.data['shortcallName']
  const relationship = req.session.data['relation']
  const phonecallIdentity = req.session.data['claimantIdentity']
  const phonecallIdentityYes = req.session.data['yesWhy']
  const phonecallIdentityNo = req.session.data['noWhy']
  const phonecallConsent = req.session.data['consentPBR']
  const phonecallNotes = req.session.data['phonecallNotes']
  const phonecallNo = req.session.data['index']

  const phoneAdded = req.session.data.phoneAdded || []
  phoneAdded.push({ phonecallNo, phonecallDay, phonecallMonth, phonecallYear, phonecallName, relationship, phonecallIdentity, phonecallIdentityYes, phonecallIdentityNo, phonecallConsent, phonecallNotes })
  req.session.data.phoneAdded = phoneAdded

  res.redirect('/paperbased-assessment/phonecall-result')
})

router.post('/paperbased-assessment/phonecall-result', function (req, res) {

  res.redirect('/paperbased-assessment/phonecall-addAnother')
})



/////////////////////////////////////////////////////////////////////////////////


// Routes for paperbased assessment work - iteration two //

router.post('/paperbased-assessment-two/shortcall-none', function (req, res) {

  res.redirect('/paperbased-assessment-two/phonecall-add')
})

// Routes for adding another phonecall //\
router.post('/paperbased-assessment-two/phonecall-add', function (req, res) {
  const phonecallDay = req.session.data['phone-day']
  const phonecallMonth = req.session.data['phone-month']
  const phonecallYear = req.session.data['phone-year']
  const phonecallName = req.session.data['phoneCallName']
  const relationship = req.session.data['relation']
  const phonecallIdentity = req.session.data['claimantIdentity']
  const phonecallIdentityYes = req.session.data['yesWhy']
  const phonecallIdentityNo = req.session.data['noWhy']
  const phonecallConsent = req.session.data['consentPBR']
  const phonecallNotes = req.session.data['phonecallNotes']
  const phonecallNo = req.session.data['index']

  const phoneAdded = req.session.data.phoneAdded || []
  phoneAdded.push({ phonecallNo, phonecallDay, phonecallMonth, phonecallYear, phonecallName, relationship, phonecallIdentity, phonecallIdentityYes, phonecallIdentityNo, phonecallConsent, phonecallNotes })
  req.session.data.phoneAdded = phoneAdded

  res.redirect('/paperbased-assessment-two/phonecall-result')
})

router.post('/paperbased-assessment-two/phonecall-change', function (req, res) {
  const phonecallDay = req.session.data['phone-day']
  const phonecallMonth = req.session.data['phone-month']
  const phonecallYear = req.session.data['phone-year']
  const phonecallName = req.session.data['phoneCallName']
  const relationship = req.session.data['relation']
  const phonecallIdentity = req.session.data['claimantIdentity']
  const phonecallIdentityYes = req.session.data['yesWhy']
  const phonecallIdentityNo = req.session.data['noWhy']
  const phonecallConsent = req.session.data['consentPBR']
  const phonecallNotes = req.session.data['phonecallNotes']
  const phonecallNo = req.session.data['index']

  const phoneAdded = req.session.data.phoneAdded || []
  phoneAdded.splice(phonecallNo, 1);
  phoneAdded.push({ phonecallNo, phonecallDay, phonecallMonth, phonecallYear, phonecallName, relationship, phonecallIdentity, phonecallIdentityYes, phonecallIdentityNo, phonecallConsent, phonecallNotes })
  req.session.data.phoneAdded = phoneAdded

  res.redirect('/paperbased-assessment-two/phonecall-result')
})

router.post('/paperbased-assessment-two/phonecall-addAnother', function (req, res) {
  const phonecallDay = req.session.data['phone-day']
  const phonecallMonth = req.session.data['phone-month']
  const phonecallYear = req.session.data['phone-year']
  const phonecallName = req.session.data['phoneCallName']
  const relationship = req.session.data['relation']
  const phonecallIdentity = req.session.data['claimantIdentity']
  const phonecallIdentityYes = req.session.data['yesWhy']
  const phonecallIdentityNo = req.session.data['noWhy']
  const phonecallConsent = req.session.data['consentPBR']
  const phonecallNotes = req.session.data['phonecallNotes']
  const phonecallNo = req.session.data['index']

  const phoneAdded = req.session.data.phoneAdded || []
  phoneAdded.push({ phonecallNo, phonecallDay, phonecallMonth, phonecallYear, phonecallName, relationship, phonecallIdentity, phonecallIdentityYes, phonecallIdentityNo, phonecallConsent, phonecallNotes })
  req.session.data.phoneAdded = phoneAdded

  res.redirect('/paperbased-assessment-two/phonecall-result')
})

router.post('/paperbased-assessment-two/phonecall-result', function (req, res) {

  res.redirect('/paperbased-assessment-two/phonecall-addAnother')
})


