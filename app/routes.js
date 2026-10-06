//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/business-registration/sign-out', (req, res, next) => {
  req.session.destroy((error) => {
    if (error) return next(error)
    res.redirect('/business-registration-signed-out')
  })
})

const registrationSections = {
  'contact-details': 'Your contact details',
  'business-details': 'Business details',
  'business-address': 'Business address',
  'business-contact-details': 'Business contact details'
}

Object.entries(registrationSections).forEach(([key, sectionTitle]) => {
  router.get(`/business-registration/${key}`, (req, res) => {
    res.render('business-registration-section', { sectionTitle })
  })
})

const accountSections = {
  'manage-account': 'Manage account',
  messages: 'Messages',
  'help-and-contact': 'Help and contact',
  'add-tax': 'Add a tax, duty or scheme'
}

Object.entries(accountSections).forEach(([key, title]) => {
  router.get(`/business-tax-account/${key}`, (req, res) => {
    res.render('business-tax-account-section', { accountSection: { key, title } })
  })
})

router.post('/personal-details-do-not-match', (req, res, next) => {
  req.session.data.useHmrcPersonalDetails = true
  req.session.data.registrationPersonalDetails = {
    name: 'Alex Morgan',
    dateOfBirth: '14 June 1985',
    address: '24 Example Road, Exampleton, AB1 2CD'
  }
  req.session.save((error) => {
    if (error) return next(error)
    res.redirect('/registration-summary')
  })
})

router.post('/change-registration-address', (req, res) => {
  res.redirect('/personal-details-do-not-match-addresses')
})
