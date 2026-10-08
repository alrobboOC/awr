
const e = require('express');
const express = require('express')
const router = express.Router()

// Add your routes here

router.post('/prototype-journey/mr-02-a-file-monthly-return', function(request, response) {
        
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-02-a-file-monthly-return");
})
router.post('/prototype-journey/mr-02-b-tax-month-and-year', function(request, response) {
    request.session.data['subcontractors'] = "";
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-02-b-tax-month-and-year");
})
router.post('/prototype-journey/mr-03-02-a-subcontractors-to-include', function(request, response) {
        
    console.log(request.session.data['subcontractors'])
    const checkMonth = request.session.data['mty-month'];
    const checkYear = request.session.data['mty-year'];
    request.session.data['total-payments'] = '';
    request.session.data['materials-cost'] = '';
    request.session.data['tax-deducted'] = '';
    request.session.data['total-payments'] = '';
    request.session.data['materials-cost'] = '';
    request.session.data['tax-deducted'] = '';
    request.session.data['whichSubcontractorDeetails'] = '';
    request.session.data['subcontractors'] = '';
    if (checkMonth == "" || checkYear == ""){
        // display error message
        response.redirect('back');
    }
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-02-a-subcontractors-to-include");
})

router.post('/prototype-journey/mr-03-03-c-enter-total-payments', function(request, response) {

    var SubcontractorName = request.session.data['subcontractors']
    if (SubcontractorName === '' || SubcontractorName == undefined){
        response.redirect('back');
    }
    else if (request.session.data['add-another']=="" || request.session.data['add-another'] == undefined){
        response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-03-c-enter-total-payments");
    } else {
        response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04-d-add-subcontractor-details");
    }

})

router.post('/prototype-journey/mr-03-03-d-enter-material-costs', function(request, response) {
        
    console.log(request.session.data['subcontractors'])
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-03-d-enter-material-costs");
})

router.post('/prototype-journey/mr-03-03-e-enter-tax-deducted', function(request, response) {
        
    console.log(request.session.data['subcontractors'])
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-03-e-enter-tax-deducted");
})

router.post('/prototype-journey/mr-03-04-a-check-your-answer', function(request, response) {
        
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04-a-check-your-answer");
})

router.post('/prototype-journey/mr-03-04c-subcontractor-details-added', function(request, response) {
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/subcontractor-details-added");
    const addAnotherSC = request.session.data['add-another'];
    if (addAnotherSC === "Yes") {
        response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04-d-which-subcontractor-details-tobe-added");
    } else {
        response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04c-subcontractor-details-added");
    }
})

router.post('/prototype-journey/mr-03-04e-summary-subcontractor-payments', function(request, response) {
    const addAnotherSC = request.session.data['add-another'];
    const totalSubcontractors = request.session.data['subcontractors'].length;
    console.log("Total subcontractors added: " + totalSubcontractors);
    if (addAnotherSC === "No") {
        if (totalSubcontractors > 1) {
        response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04-d-add-subcontractor-details");
        } else {
        response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-02-a-subcontractors-to-include");
    } } else {
        response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04e-summary-subcontractor-payments");
    }
})

router.post('/prototype-journey/mr-03-04-b-payment-details-confirmation', function(request, response) {

    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04-b-payment-details-confirmation");
})

router.post('/prototype-journey/add-another-subcontractor-payment-details', function(request, response) {

    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-03-c-enter-total-payments");
})


router.post('/prototype-journey/mr-03-08-b-employment-status-declaration', function(request, response) {

    if (request.session.data['confirmInformation'] === "no") {
     response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-04-c-subcontractor-details-added");
    } else {
          response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-08-b-employment-status-declaration");
 
    }
})


router.post('/prototype-journey/are-you-submiting-inactivit-report', function(request, response) {

    if (request.session.data['areYouSubmittingAnInactivityRequest'] === "yes") {
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-08e-inactivity-request-warning");
    } else {
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-08-2f-email-address-confirmation");
    }
})



router.post('/prototype-journey/mr-03-08-2f-email-address-confirmation', function(request, response) {
response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-08-2f-email-address-confirmation");
})

router.post('/prototype-journey/mr-03-08f-enter-email-address', function(request, response) {

    if (request.session.data['emailConfirmation'] === "yes") {
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-08f-enter-email-address");
    } else {
    response.redirect("/filing-a-return/v12/monthly-returns/prototype-journey/mr-03-08-g-declaration-final");
    }
})



module.exports = router;