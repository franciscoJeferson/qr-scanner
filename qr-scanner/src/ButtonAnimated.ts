type ElementData = {
  boxShadowDefault: string,
  boxShadowAfter: string,
  borderRadiusDefault: string,
  borderRadiusAfter: string,
}
class ButtonAnimated {
  elementData: ElementData;
  constructor(els: HTMLElement[]) {
    this.elementData = {
      boxShadowDefault: '',
      boxShadowAfter: '',
      borderRadiusDefault: '',
      borderRadiusAfter: '',
    },
    els.forEach((item: HTMLElement) => {
      item.addEventListener('mouseenter', ( { target }: any ) => {
        this.initAnimation(target)
      })
      item.addEventListener('mousedown', ( { target }: any ) => {
        this.initAnimation(target)
      })
      item.addEventListener('touchstart', ( { target }: any ) => {
        this.initAnimation(target)
      })
      item.addEventListener("mouseup", ( { target }: any ) =>
        this.finishAnimation(target)
      )
      item.addEventListener("mouseleave", ( { target }: any ) =>
        this.finishAnimation(target)
      )
      item.addEventListener("touchend", ( { target }: any ) =>
        this.finishAnimation(target)
      )
      item.addEventListener("click", ( { target }: any ) => {
        this.finishAnimation(target)
      })
    })
  }
  colletDatasFromElement(target: HTMLElement) {
    this.elementData.boxShadowDefault = window
      .getComputedStyle(target)
      .getPropertyValue("--box-shadow-default")
    this.elementData.boxShadowAfter = window
      .getComputedStyle(target)
      .getPropertyValue("--box-shadow-after")
    this.elementData.borderRadiusDefault = window
      .getComputedStyle(target)
      .getPropertyValue("--border-radius-default")
    this.elementData.borderRadiusAfter = window
      .getComputedStyle(target)
      .getPropertyValue("--border-radius-after")
  }
  initAnimation(target: HTMLElement) {
    this.colletDatasFromElement(target)
    target.style.boxShadow = this.elementData.boxShadowAfter
    target.style.borderRadius = this.elementData.borderRadiusAfter
  }
  finishAnimation(target: HTMLElement) {
    this.colletDatasFromElement(target)
    target.style.boxShadow = this.elementData.boxShadowDefault
    target.style.borderRadius = this.elementData.borderRadiusDefault
  }
}
export default document.addEventListener('DOMContentLoaded', () => {
  const buttonsAnimateds: any = document.querySelectorAll<HTMLElement>('.button-animated')!
  new ButtonAnimated(buttonsAnimateds)
})