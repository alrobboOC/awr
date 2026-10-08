
const e = require('express');
const express = require('express')
const router = express.Router()



// "Amend return" route - handles both initial amend and add-more-subcontractors
router.post ('/amend-submitted-return/mr-ar-04-subcontractor-details-added', function (req, res) {

    var whatToDo = req.session.data['whatDoYouWantToDo'];
    var addAnother = req.session.data['add-another'];

    // First check if this is the add-another question
    if (addAnother) {
        if(addAnother == "Yes") {
            res.redirect('/filing-a-return/sprint-16/amend-submitted-return/mr-ar-05-which-subcontractor-do-you-want-select');
        } else {
            res.redirect('/filing-a-return/sprint-16/amend-submitted-return/mr-ar-03-04e-summary-subcontractor-payments');
        }
    } 
    // Otherwise check whatDoYouWantToDo
    else if (whatToDo == "Amend") {
        res.redirect('/filing-a-return/sprint-16/amend-submitted-return/mr-ar-04-subcontractor-details-added');
    } else if (whatToDo == "nil") {
        res.redirect('/filing-a-return/sprint-16/amend-submitted-return/mr-ar-09-are-you-sure-nil');
    } else {
        // Default fallback
        res.redirect('/filing-a-return/sprint-16/amend-submitted-return/mr-ar-04-subcontractor-details-added');
    }
})


// "Amend nil are you sure" route
router.post ('/amend-submitted-return/mr-ar-09-are-you-sure-nil', function (req, res) {

    var whatToDo = req.session.data['AreYouSureNil'];

    if( whatToDo == "Yes") {
        res.redirect('/filing-a-return/sprint-16/amend-submitted-return/mr-ar-07-declaration-nil-monthly-return');
    } else {
        res.redirect('/filing-a-return/sprint-16/amend-submitted-return/mr-ar-06-what-do-you-want-to-do');
    }
})


module.exports = router;