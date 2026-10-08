//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = require('express').Router()

// Add your routes here


// adding routes here
router.use('/v12/monthly-returns', require('./v12/monthly-returns/\_routes'));
router.use('/sprint-13/monthly-returns', require('./sprint-13/monthly-returns/\_routes'));
router.use('/sprint-14/monthly-returns', require('./sprint-14/monthly-returns/\_routes'));
router.use('/sprint-15/monthly-returns', require('./sprint-15/monthly-returns/\_routes'));
router.use('/sprint-16/monthly-returns', require('./sprint-16/monthly-returns/\_routes'));
router.use('/sprint-16', require('./sprint-16/\_routes'));






router.post('/delete-monthly-return', function(request, response) {
        
    console.log (request.session.data['mrEndPeriod'])
    response.redirect("/filing-a-return/business-returns/sprint-14/monthly-returns/delete-monthly-return");
})

router.post('/delete-monthly-return', function(request, response) {
        
    console.log (request.session.data['mrEndPeriod'])
    response.redirect("/filing-a-return/business-returns/sprint-14/monthly-returns/delete-monthly-return");
})



module.exports = router;

router.post(/\/select-individual-names$/, function (req, res) {
  const selected = [].concat(req.body.individualNames || []);

  req.session.data.individualNames = selected;

  if (selected.includes('worker_name')) {
    return res.redirect('individual-name-AS-I1-SL0201A-ptn');
  }

  if (selected.includes('trading_name')) {
    return res.redirect('individual-tradingname-AS-I1-SL0201D-ptn');
  }

  // No selection: return to the selection page.
  return res.redirect(req.originalUrl.replace(/select-individual-names$/, 'individual-has-tradingname-SL0201E-ptn'));
});