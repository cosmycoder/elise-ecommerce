export const adjustNavbarOpacityOnScroll = (display: string) => {
  if (typeof window !== 'undefined') {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos < currentScrollPos && display !== 'flex') {
        document.getElementById('navbar')!.style.opacity = '0'
      } else if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar')!.style.opacity = '1'
      }
      prevScrollpos = currentScrollPos
    }
  }
}
