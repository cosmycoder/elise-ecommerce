export const adjustNavbarOpacityOnScroll = (display: string) => {
  if (typeof window !== 'undefined') {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      const navbar = document.getElementById('navbar')!
      if (prevScrollpos < currentScrollPos && display !== 'flex') {
        navbar.style.opacity = '0'
        navbar.style.visibility = 'hidden'
      } else if (prevScrollpos > currentScrollPos) {
        navbar.style.visibility = 'visible'
        navbar.style.opacity = '1'
      }
      prevScrollpos = currentScrollPos
    }
  }
}
