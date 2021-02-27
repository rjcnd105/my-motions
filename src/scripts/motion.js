import { TimelineMax, gsap, Power2 } from 'gsap'

export const ui = {
  box: {
    tween: null,
    init() {
      this.tween = gsap.to(this.$refs.box, {
        paused: true,
        opacity: 0.5,
        borderRadius: '50%',
      })
    },
  },

  navi: {
    tl: null,
    init() {
      this.tl = new TimelineMax({ paused: true }).fromTo(
        this.$refs.content,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.4, ease: Power2.easeOut },
      )
    },
    open() {},
  },
}
