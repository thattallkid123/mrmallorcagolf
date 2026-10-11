'use client'

// Same behaviour as PageLayout's ScrollToTopOnRouteChange: top of the page on a
// route change, or the #section when the URL has one. This used to scroll to 0
// unconditionally, which overrode every #section link on the site.
export { default } from '../components/ScrollToTopOnRouteChange'
