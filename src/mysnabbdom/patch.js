import vnode from './vnode.js'
import createElement from './createElement.js'
import patchVnode from './patchVnode.js'

export default function patch(oldVnode,newVnode) {
    // 判断传入的第一个参数，是DOM节点还是虚拟节点
    if(oldVnode.sel=='' || oldVnode.sel==undefined){
        // 传入的第一个参数是DOM节点，此时要包装为虚拟节点
        oldVnode=vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }

    // 判断oldVnode和newVnode是不是同一个节点
    if(oldVnode.key==newVnode.key && oldVnode.sel == newVnode.sel){
        patchVnode(oldVnode,newVnode)
    }else{
        console.log('不是同一个节点，暴力插入新的，删除旧的')
        console.log(newVnode)
        let newVnodeElm = createElement(newVnode);
        console.log('nnnnn',newVnodeElm)
        // 插入到老节点之前
        if(oldVnode.elm.parentNode && newVnodeElm){
            oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm)
        }
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}