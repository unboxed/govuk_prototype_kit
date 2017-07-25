/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  var loader = new GOVUK.Loader()
  loader.init({
    container: 'govuk-box'
  })

  var loader2 = new GOVUK.Loader()
  loader2.init({
    container: 'govuk-box-message',
    label: true
  })

  var loader3 = new GOVUK.Loader()
  loader3.init({
    container: 'govuk-box-update-message',
    label: true,
    labelText: 'Loading...'
  })
  // if (loader3.label) {
  //   setTimeout(updateLabelUpload, 5000)
  //   setTimeout(updateLabelCrop, 7000)
  //   setTimeout(loadContent.bind(loader3), 10000)
  // }

  var loader4 = new GOVUK.Loader()
  loader4.init({
    container: 'govuk-box-update-progress',
    label: true,
    progress: true
  })
  var progress = 0
  if (document.getElementById('govuk-box-update-progress')) {
    for (var x = 0; x <= 10; x++) setTimeout(updateProgress, 1000 * x)
    setTimeout(loadContent, 11000)
  }

  var loader5 = new GOVUK.Loader()
  loader5.init({
    container: 'govuk-box-highlight',
    color: '#fff'
  })

  var loader6 = new GOVUK.Loader()
  loader6.init({
    container: 'govuk-box-inverted',
    color: '#fff'
  })

  function updateLabelUpload () {
    loader3.updateMessage('Uploading...')
  }

  function updateLabelCrop () {
    loader3.updateMessage('Cropping...')
  }

  function updateProgress () {
    loader4.updateMessage('Loading... ' + 10 * progress + '%')
    loader4.updateProgress(10 * progress++)
  }

  function loadContent () {
    loader4.stop()
    loader4.updateContainer('Done.')
  }

  // meta=document.createElement('meta')
  // meta.httpEquiv = 'x-ua-compatible'
  // meta.content = 'ie=edge'
  // document.getElementsByTagName('head')[0].appendChild(meta);
})
