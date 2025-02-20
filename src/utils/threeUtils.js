import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
let font,
  fontName = "droid_sans", // 字体名称
  fontWeight = "regular", // 字体粗细
  loader = new GLTFLoader(),
  dracoLoader = new DRACOLoader();

// 画布自适应
export const onWindowResize = (camera, renderer) => {
  if (renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
};

// 获取图片Texture
export const getTexture = async (path) => {
  const textureLoader = new THREE.TextureLoader();
  let texture = await textureLoader.loadAsync(path);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  return texture;
};

export const getModel = async (name, fun) => {
  dracoLoader.setDecoderPath("draco/");
  loader = !loader ? new GLTFLoader() : loader;
  if (name.indexOf(".fbx") != -1) loader = new FBXLoader();
  loader.setDRACOLoader(dracoLoader);
  await loader.load(`static/${name}`, (model) => {
    fun(model);
  });
};

// 获取字体
export const getTextGeometry = async (str) => {
  str += "";
  if (!font) {
    const loader = new FontLoader();
    const path = `/fonts/${fontName}_${fontWeight}.typeface.json`;
    font = await loader.loadAsync(path);
    return new TextGeometry(str, { font, size: 0.3, height: 0 });
  } else {
    return new TextGeometry(str, { font, size: 0.3, height: 0 });
  }
};

// 清除组
export const clearGroup = (group) => {
  const clearCache = (item) => {
    item.geometry && item.geometry.dispose();
    if (item.material) {
      if (item.material.length > 0) {
        item.material.map((v) => v.dispose());
      } else {
        item.material.dispose();
      }
    }
  };

  const removeObj = (obj) => {
    let arr = obj.children.filter((x) => x);
    arr.forEach((item) => {
      if (item.children.length) {
        removeObj(item);
      } else {
        clearCache(item);
        item.clear();
      }
    });
    obj.clear();
    arr = null;
  };

  removeObj(group);
};

// 更新文字
export const upDateTextPos = async (obj) => {
  const geometry = await getTextGeometry(obj.startTroops + "");
  obj.children[0].children[0].geometry = geometry;
  let fontMesh = obj.children[0].children[0];
  let bgMesh = fontMesh.parent;
  const size = getPos(fontMesh, "size");
  fontMesh.position.set(bgMesh.centerPos.x, bgMesh.centerPos.y, 0.1);
  fontMesh.translateX(-(size.x / 1.7));
  fontMesh.translateY(-(size.y / 2.2));
};

// 获取对象大小/中心点
export const getPos = (Mesh, type) => {
  const box = new THREE.Box3().setFromObject(Mesh);
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();
  box.getCenter(center);
  box.getSize(size);
  return type == "size" ? size : center;
};

// 获取鼠标/触摸事件屏幕坐标点
export const getOnPos = (event) => {
  let Pos = {};
  let posX = event?.clientX;
  let posY = event?.clientY;
  if (event.targetTouches) {
    posX = event.targetTouches[0].clientX;
    posY = event.targetTouches[0].clientY;
  }
  Pos.x = (posX / window.innerWidth) * 2 - 1;
  Pos.y = -(posY / window.innerHeight) * 2 + 1;
  return Pos;
};

export const getMapPos = (pos, num) => {
  const { x, z } = pos;
  return [
    { x: x - num, y: z + num },
    { x: x, y: z + num },
    { x: x + num, y: z + num },
    { x: x - num, y: z },
    { x, y: z },
    { x: x + num, y: z },
    { x: x - num, y: z - num },
    { x, y: z - num },
    { x: x + num, y: z - num },
  ];
};

export const mreageMapList = (list, mapList) => {
  let arr = [...mapList, ...list, ...list];
  // arr = arr.concat(mapList).concat(list).concat(list);
  let delArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i].x == arr[j].x && arr[i].y == arr[j].y) {
        num++;
      }
    }
    if (num <= 1) {
      delArr.push(arr[i]);
    }
  }
  return { delArr, list };
};

export const sleep = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, num);
  });
};

// export const getObjInfo = (obj, info) {

// }
