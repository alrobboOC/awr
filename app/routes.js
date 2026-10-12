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
    res.redirect('/business-registration/business-registration-signed-out')
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
    res.render('business-registration/business-registration-section', { sectionTitle })
  })
})

const accountSections = {
  'manage-account': 'Manage account',
  messages: 'Messages',
  'help-and-contact': 'Help and contact',
  'add-tax': 'Add a tax, duty or scheme'
}

Object.entries(accountSections).forEach(([key, title]) => {
  router.get([`/business-tax-account/${key}`, `/business-registration/business-tax-account/${key}`], (req, res) => {
    res.render('business-registration/business-tax-account-section', { accountSection: { key, title } })
  })
})

router.post(['/personal-details-do-not-match', '/business-registration/personal-details-do-not-match'], (req, res, next) => {
  req.session.data.useHmrcPersonalDetails = true
  req.session.data.registrationPersonalDetails = {
    name: 'Alex Morgan',
    dateOfBirth: '14 June 1985',
    address: '24 Example Road, Exampleton, AB1 2CD'
  }
  req.session.save((error) => {
    if (error) return next(error)
    res.redirect('/business-registration/registration-summary')
  })
})

router.post(['/change-registration-address', '/business-registration/change-registration-address'], (req, res) => {
  res.redirect('/business-registration/personal-details-do-not-match-addresses')
})

// Compare edited registration details with the fixed HMRC example records.
router.post('/business-registration/change-personal-details', (req, res, next) => {
  const expected = {
    registrationName: 'Alex Morgan',
    registrationDateOfBirth: '14 June 1985',
    registrationAddressLine1: '24 Example Road',
    registrationAddressLine2: '',
    registrationAddressTown: 'Exampleton',
    registrationAddressPostcode: 'AB1 2CD'
  }
  const normalise = (value) => String(value || '').trim().replace(/\s+/g, ' ').toLowerCase()
  const matches = Object.entries(expected).every(([key, value]) => normalise(req.body[key]) === normalise(value))
  Object.keys(expected).forEach((key) => { req.session.data[key] = String(req.body[key] || '').trim() })
  req.session.data.useHmrcPersonalDetails = false
  req.session.save((error) => {
    if (error) return next(error)
    res.redirect(matches
      ? '/business-registration/personal-details-match-earlier-design'
      : '/business-registration/personal-details-do-not-match-tables')
  })
})

// Keep existing bookmarks working after grouping the registration templates.
const registrationPages = ['personal-details-do-not-match-addresses', 'business-registration-summary', 'delete-business-registration', 'personal-details-match-earlier-design', 'change-of-personal-details', 'set-up-a-delegate', 'personal-details-match', 'business-registration-section', 'business-tax-account', 'personal-details-do-not-match', 'personal-details-do-not-match-option-2', 'personal-details-do-not-match-option-3', 'change-registration-address', 'registration-summary', 'business-registration-signed-out', 'business-tax-account-section']

registrationPages.forEach((page) => {
  router.get(`/${page}`, (req, res) => {
    res.redirect(`/business-registration/${page}`)
  })
})

// The generic return-filing journey is the default entry point.
router.get('/filing-a-return', (req, res) => {
  res.redirect('/filing-a-return/business-returns/')
})

router.use('/filing-a-return/business-returns', (req, res, next) => {
  res.locals.serviceName = 'Business Returns Service'
  next()
}, require('./views/filing-a-return/business-returns/routes'))

// Imported CIS prototype: keep its service name and routes within this journey.
router.use('/filing-a-return', (req, res, next) => {
  res.locals.serviceName = 'Construction Industry Scheme'
  next()
}, require('./views/filing-a-return/routes'))
