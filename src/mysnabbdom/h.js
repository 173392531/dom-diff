import vnode from "./vnode.js";
// console.log(vnode('div',2,3,4,5))
// 调用的时候必须是如下三种形态之一
// 形态1：h('div',{},'文字')
// 形态2：h('div',{},[])
// 形态3：h('div',{},h())

export default function (sel, data, c) {
  // 检查参数个数
  if (arguments.length != 3) {
    throw new Error("必须传入三个参数");
  }
  // 检查参数c的类型
  if (typeof c == "string" || typeof c == "number") {
    // 形态1
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    // 形态2
    let children = [];
    // 遍历c
    for (let i = 0; i < c.length; i++) {
      // h('div',{},[
      // h('p',...)
      // ])
      if (!(typeof c[i] == "object" && c[i].hasOwnProperty("sel"))) {
        throw new Error("传入的数组参数中有项不是h函数");
      }
      // 此时只需收集好就行了
      children.push(c[i]);
    }
    // 循环结束，就说明children收集完毕，可以返回虚拟节点了
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c == "object" && c.hasOwnProperty("sel")) {
    // 传入的c是唯一的children，不用执行
    let children = [c];
    return vnode = (sel, data, children, undefined, undefined);
  } else {
    throw new Error("传入的第三个参数类型不对");
  }
}
