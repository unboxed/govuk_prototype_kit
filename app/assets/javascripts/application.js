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

  if (document.getElementById('govuk-box')) {
    var loader = new GOVUK.Loader()
    loader.init({
      container: 'govuk-box'
    })
  }

  if (document.getElementById('govuk-box-message')) {
    var loader2 = new GOVUK.Loader()
    loader2.init({
      container: 'govuk-box-message',
      label: true
    })
  }

  if (document.getElementById('govuk-box-update-message')) {
    var loader3 = new GOVUK.Loader()
    loader3.init({
      container: 'govuk-box-update-message',
      label: true,
      labelText: 'Loading...'
    })
    setTimeout(function () { updateLabelUpload(loader3) }, 5000)
    setTimeout(function () { updateLabelCrop(loader3) }, 7000)
    setTimeout(function () { loadContent(loader3) }, 10000)
  }

  if (document.getElementById('govuk-box-update-progress')) {
    var loader4 = new GOVUK.Loader()
    loader4.init({
      container: 'govuk-box-update-progress',
      label: true,
      progress: true
    })
    var progress = 0
    for (var x = 0; x <= 10; x++) setTimeout(function () { updateProgress(loader4) }, 1000 * x)
    setTimeout(function () { loadContent(loader4) }, 11000)
  }

  if (document.getElementById('govuk-box-highlight')) {
    var loader5 = new GOVUK.Loader()
    loader5.init({
      container: 'govuk-box-highlight',
      color: '#fff'
    })
  }

  if (document.getElementById('govuk-box-inverted')) {
    var loader6 = new GOVUK.Loader()
    loader6.init({
      container: 'govuk-box-inverted',
      color: '#fff'
    })
  }

  function updateLabelUpload (l) {
    l.updateMessage('Uploading...')
  }

  function updateLabelCrop (l) {
    l.updateMessage('Cropping...')
  }

  function updateProgress (l) {
    l.updateMessage('Loading... ' + 10 * progress + '%')
    l.updateProgress(10 * progress++)
  }

  function loadContent (l) {
    l.stop()
    l.updateContainer('Done.')
  }

  // meta=document.createElement('meta')
  // meta.httpEquiv = 'x-ua-compatible'
  // meta.content = 'ie=edge'
  // document.getElementsByTagName('head')[0].appendChild(meta);
})
