//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/personal-details-do-not-match', (req, res, next) => {
  req.session.data.useHmrcPersonalDetails = true
  req.session.data.registrationPersonalDetails = {
    name: 'Bob Dole',
    dateOfBirth: '1 January 1990',
    address: '30–31 Devonshire Place, Brighton, BN2 1QB'
  }
  req.session.save((error) => {
    if (error) return next(error)
    res.redirect('/registration-summary')
  })
})
