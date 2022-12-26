export const adjustNavbarOpacityOnScroll = (display: string) => {
  if (typeof window !== 'undefined') {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      const navbar = document.getElementById('navbar')!
      if (prevScrollpos < currentScrollPos && display !== 'flex') {
        navbar.style.opacity = '0'
      } else if (prevScrollpos > currentScrollPos) {
        navbar.style.opacity = '1'
      }
      prevScrollpos = currentScrollPos
    }
  }
}
