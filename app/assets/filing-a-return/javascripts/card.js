// tile variant styles added to original for design iteration:
// .pta-card-body-v1 -- for new look and new hover state
// .pta-card-2 -- for two-column cards
// .pta-card-3 -- for single column cards

var card = (function () {

  // Capture when a user clicks
  $('.pta-card-body,.pta-card-body-v1').on('click', function () {
    var url = $(this).find('a').attr('href')
    if (url !== undefined) {
      window.location.href = url
    }
  })

  // set max height for any collection of elements
  function setMaxheight (ele, maxHeight) {
    $(ele).height(maxHeight)
  }

  function checkSize () {
    var maxHeight = getMaxHeight('.pta-card-body,.pta-card-body-v1')
    setMaxHeight('.pta-card-body,.pta-card-body-v1', maxHeight)
  }

  // get max height for any collection of elements
  function getMaxHeight (ele) {
    var height = []
    $(ele).each(function () {
      height.push($(this).height())
    })
    var maxHeight = height.sort(function (a, b) { return b - a })[0]
    return maxHeight
  }

  // set max height for any collection of elements
  function setMaxHeight (ele, maxHeight) {
    $(ele).height(maxHeight)
  }

  // Check each card. If the card does not contain a .pta-card-action
  // make .pta-card-body full height
  function fullHeight () {
    var cardEle = $('.pta-card,.pta-card-2,.pta-card-3').not(':has(.pta-card-action)')
    cardEle.each(function () {
      var $cardBody = $(this).children('.pta-card-body,.pta-card-body-v1')
      var maxHeight = getMaxHeight('.pta-card,.pta-card-2,.pta-card-3')
      var paddingTop = $cardBody.css('padding-top').replace('px', '')
      var paddingBottom = $cardBody.css('padding-bottom').replace('px', '')
      var totalHeight = maxHeight - paddingTop - paddingBottom
      $cardBody.css('border-bottom', '0')
      setMaxheight($cardBody, totalHeight)
    })
  }

  isNotMobile(checkSize)
  $(window).resize(isNotMobile(checkSize))

  isNotMobile(fullHeight)
  $(window).resize(isNotMobile(fullHeight))

  // get max height for any collection of elements
  function getMaxHeight (ele) {
    var height = []
    $(ele).each(function () {
      height.push($(this).height())
    })
    var maxHeight = height.sort(function (a, b) { return b - a })[0]
    return maxHeight
  }

  // Only run function if the screen size is not mobile.
  function isNotMobile (func) {
    if (navigator.appVersion.indexOf('MSIE 10') === -1) {
      if ($('.pta-card,.pta-card-2,.pta-card-3').css('flex-basis') !== '100%') {
        return func()
      }
    }
  }

  isNotMobile(checkSize)
  isNotMobile(fullHeight)

})()

var doc = document.documentElement
doc.setAttribute('data-useragent', navigator.userAgent)