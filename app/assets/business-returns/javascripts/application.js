//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  console.log('accordion hash script running')

  const openAccordionFromHash = () => {
    const hash = window.location.hash

    if (!hash) return

    const target = document.querySelector(hash)

    if (!target) return

    const section = target.classList.contains('govuk-accordion__section')
      ? target
      : target.closest('.govuk-accordion__section')

    if (!section) return

    const button = section.querySelector('.govuk-accordion__section-button')

    if (button) {
      const isExpanded = section.classList.contains('govuk-accordion__section--expanded')

      if (!isExpanded) {
        button.click()
      }

      section.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      })
    }
  }

  // Wait a moment so the GOV.UK accordion JS has finished setting itself up
  setTimeout(openAccordionFromHash, 100)

  // Also handle hash changes
  window.addEventListener('hashchange', openAccordionFromHash)
})