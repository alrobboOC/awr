
const e = require('express');
const express = require('express')
const router = express.Router()

// Add your routes here

router.post('/prototype-journey/mr-02-a-file-monthly-return', function(request, response) {
        
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-02-a-file-monthly-return");
})
router.post('/prototype-journey/mr-02-b-tax-month-and-year', function(request, response) {
    request.session.data['total-payments'] = '';
    request.session.data['materials-cost'] = '';
    request.session.data['tax-deducted'] = '';
    request.session.data['total-payments'] = '';
    request.session.data['materials-cost'] = '';
    request.session.data['tax-deducted'] = '';
    request.session.data['whichWorkerDeetails'] = '';
    request.session.data['workers'] = '';
    request.session.data['add-another'] = '';
    request.session.data['areYouSubmittingAnInactivityRequest'] = '';
    request.session.data['emailConfirmation'] = '';
    request.session.data['email'] = '';
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-02-b-tax-month-and-year");
    console.log(request.session.data['add-another'].length);
    console.log("Rahul");
})
router.post('/prototype-journey/mr-03-02-a-workers-to-include', function(request, response) {
        
    console.log(request.session.data['workers'])
    const checkMonth = request.session.data['mty-month'];
    const checkYear = request.session.data['mty-year'];
    request.session.data['total-payments'] = '';
    request.session.data['materials-cost'] = '';
    request.session.data['tax-deducted'] = '';
    request.session.data['total-payments'] = '';
    request.session.data['materials-cost'] = '';
    request.session.data['tax-deducted'] = '';
    request.session.data['whichWorkerDeetails'] = '';
    request.session.data['workers'] = '';
    if (checkMonth == "" || checkYear == ""){
        // display error message
        response.redirect('back');
    }
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-02-a-workers-to-include");
    console.log(request.session.data['add-another']);
})

router.post('/prototype-journey/mr-03-03-c-enter-total-payments', function(request, response) {

    var WorkerName = request.session.data['workers'];
    var checkAddAnother = request.session.data['add-another'].length;
    if (WorkerName == '' || WorkerName == undefined){
        response.redirect('back');
    } else if(checkAddAnother > 0){
        console.log(checkAddAnother)
        response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04-d-add-worker-details");
    } else {
        console.log(checkAddAnother)
        response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-03-c-enter-total-payments");
    }

})



router.post('/prototype-journey/mr-03-03-d-enter-material-costs', function(request, response) {
        
    console.log(request.session.data['workers'])
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-03-d-enter-material-costs");
})

router.post('/prototype-journey/mr-03-03-e-enter-tax-deducted', function(request, response) {
        
    console.log(request.session.data['workers'])
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-03-e-enter-tax-deducted");
})

router.post('/prototype-journey/mr-03-04-a-check-your-answer', function(request, response) {
        
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04-a-check-your-answer");
})

router.post('/prototype-journey/mr-03-04c-worker-details-added', function(request, response) {
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/worker-details-added");
    const addAnotherSC = request.session.data['add-another'];
    if (addAnotherSC === "Yes") {
        response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04-d-which-worker-details-tobe-added");
    } else {
        response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04c-worker-details-added");
    }
})

router.post('/prototype-journey/mr-03-04e-summary-worker-payments', function(request, response) {
    const addAnotherSC = request.session.data['add-another'];
    const totalWorkers = request.session.data['workers'].length;
    console.log("Total workers added: " + totalWorkers);
    if (addAnotherSC === "No") {
        if (totalWorkers > 1) {
        response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04-d-add-worker-details");
        } else {
        response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-02-a-workers-to-include");
    } } else {
        response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04e-summary-worker-payments");
    }
})

router.post('/prototype-journey/mr-03-04-b-payment-details-confirmation', function(request, response) {

    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04-b-payment-details-confirmation");
})

router.post('/prototype-journey/add-another-worker-payment-details', function(request, response) {

    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-03-c-enter-total-payments");
})


router.post('/prototype-journey/mr-03-08-b-employment-status-declaration', function(request, response) {

    if (request.session.data['confirmInformation'] === "No") {
     response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-04-c-worker-details-added");
    } else {
          response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-08-b-employment-status-declaration");
 
    }
})


router.post('/prototype-journey/are-you-submiting-inactivit-report', function(request, response) {

    if (request.session.data['areYouSubmittingAnInactivityRequest'] === "Yes") {
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-08e-inactivity-request-warning");
    } else {
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-08-2f-email-address-confirmation");
    }
})



router.post('/prototype-journey/mr-03-08-2f-email-address-confirmation', function(request, response) {
response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-08-2f-email-address-confirmation");
})

router.post('/prototype-journey/mr-03-08f-enter-email-address', function(request, response) {

    if (request.session.data['emailConfirmation'] === "Yes") {
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-03-08f-enter-email-address");
    } else {
    response.redirect("/filing-a-return/business-returns/sprint-13/monthly-returns/prototype-journey/mr-check-your-answers-submitting-return");
    }
})



module.exports = router;