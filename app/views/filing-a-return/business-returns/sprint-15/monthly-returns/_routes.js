
const e = require('express');
const express = require('express')
const router = express.Router()

// Add your routes here

router.post('/nil-monthly-return/mr-02-b-enter-tax-month-and-year', function(request, response) {

    request.session.data['areYouSubmittingAnInactivityRequest'] = '';
    request.session.data['mty-month'] = '';
    request.session.data['mty-year'] = '';
    request.session.data['emailConfirmation'] = '';
    request.session.data['email'] = '';
    request.session.data['final-declaration'] = '';
        
    response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/nil-monthly-return/mr-02-b-enter-tax-month-and-year");
})

router.post('/nil-monthly-return/mr-03-08-d-submit-inactivity-request-nil-return', function(request, response) {
    const checkMonth = request.session.data['mty-month'];
    const checkYear = request.session.data['mty-year'];
    if (checkMonth == "" || checkYear == ""){
        // display error message
        response.redirect('back');
    } else {
    response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/nil-monthly-return/mr-03-08-d-submit-inactivity-request-nil-return");
    }
})

router.post('/nil-monthly-return/mr-03-08-g-check-your-answers-submitting-nil-return', function(request, response) {
    response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/nil-monthly-return/mr-03-08-g-check-your-answers-submitting-nil-return");
})

router.post('/nil-monthly-return/mr-03-08-2f-do-you-want-email-confirmation', function(request, response) {
    response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/nil-monthly-return/mr-03-08-2f-do-you-want-email-confirmation");
})

router.post('/nil-monthly-return/mr-03-08-f-enter-email-address', function(request, response) {
    const emailConfirmation = request.session.data['emailConfirmation'];
    if (emailConfirmation == "Yes"){
    response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/nil-monthly-return/mr-03-08-f-enter-email-address");
    } else {
            response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/nil-monthly-return/mr-02-c-declaration-no-payments");
    }

})

router.post('/nil-monthly-return/mr-03-08-g-check-your-answers-submitting-nil-return', function(request, response) {
    const checkDeclaration = request.session.data['final-declaration'];
    if (checkDeclaration != ""){
        response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/nil-monthly-return/mr-03-08-g-check-your-answers-submitting-nil-return");
    } else {
        // display error message
        response.redirect('back');
    }

})

// Delete monthly return routes


// router.post('/delete-monthly-return/mr-monthly-return-landing', function(request, response) {
//     request.session.data['deleteNilReturn'] = '';
//     request.session.data['deleteAmendedReturn'] = '';
//     request.session.data['deleteReturn'] = '';
//     request.session.data['deleteAmendedReturn'] = '';
//     response.redirect("/filing-a-return/business-returns/sprint-15/monthly-returns/delete-monthly-return/mr-monthly-return-landing");
// })



module.exports = router;