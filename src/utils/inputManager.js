import keyDict from "./keyDict";
const myInput = {};

export const KeyStatus = {
  none: "none",
  keyDown: "keyDown",
  press: "press",
  keyUp: "keyUp",
};

export class EventFun {
  static axis = { x: 0, y: 0 };
  static getKeyDown(KeyCode) {
    if (myInput[KeyCode] == KeyStatus.keyDown) {
      return true;
    }
    return false;
  }
  static getKey(KeyCode) {
    if (
      myInput[KeyCode] == KeyStatus.keyDown ||
      myInput[KeyCode] == KeyStatus.press
    ) {
      return true;
    }
    return false;
  }
  static getKeyUp(KeyCode) {
    if (myInput[KeyCode] == KeyStatus.keyUp) {
      return true;
    }
    return false;
  }

  static keyUpDate() {
    let axisDir = { x: 0, y: 0 };

    if (this.getKey(keyDict.w)) {
      axisDir.y = 1;
    }

    if (this.getKey(keyDict.s)) {
      axisDir.y = -1;
    }

    if (this.getKey(keyDict.a)) {
      axisDir.x = -1;
    }

    if (this.getKey(keyDict.d)) {
      axisDir.x = 1;
    }
    return axisDir;
  }
}

export class EventManager {
  constructor() {
    this.discardKeyList = [];
    this.isClick = false;

    document.addEventListener("keydown", this.onKeyDown, this);
    document.addEventListener("keyup", this.onKeyUp, this);
    document.addEventListener("keypress", this.onKeyPress, this);
  }

  onKeyDown(e) {
    let keyCode = e.keyCode;
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      keyCode += 48;
    }
    myInput[keyCode] = KeyStatus.keyDown;
  }

  onKeyUp(e) {
    let keyCode = e.keyCode;

    if (e.keyCode >= 48 && e.keyCode <= 57) {
      keyCode += 48;
    }
    myInput[keyCode] = KeyStatus.keyUp;
  }

  onKeyPress(e) {
    let keyCode = e.keyCode;
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      keyCode += 48;
    }
    myInput[keyCode] = KeyStatus.keyUp;
  }
}
