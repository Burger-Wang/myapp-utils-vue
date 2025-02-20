export const moveFun = {
  outMoveStart: (e) => {},
  outMoveing: (e) => {},
  outMoveEnd: (e) => {},
};

export class moveManager {
  constructor() {
    this.discardKeyList = [];
    this.isClick = false;

    document.addEventListener("mousedown", this.onMoveStart, false);
    document.addEventListener("mousemove", this.onMoveing, false);
    document.addEventListener("mouseup", this.onMoveEnd, false);
    document.addEventListener("touchstart", this.onMoveStart, false);
    document.addEventListener("touchmove", this.onMoveing, false);
    document.addEventListener("touchend", this.onMoveEnd, false);
  }

  onMoveStart(e) {
    moveFun.outMoveStart(e);
  }

  onMoveing(e) {
    let touchPos = null;
    if (e.targetTouches) {
      touchPos = { x: e.targetTouches[0].pageX, y: e.targetTouches[0].pageY };
    }
    moveFun.outMoveing(e, touchPos);
  }

  onMoveEnd(e) {
    moveFun.outMoveEnd(e);
  }
}
