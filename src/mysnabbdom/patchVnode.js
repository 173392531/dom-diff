import createElement from "./createElement";
import updateChildren from './updateChildren.js'
export default function patchVnode(oldVnode,newVnode){
    console.log('是同一个节点');
        // 判断新旧vnode是否是同一个对象
        if(oldVnode === newVnode)return 
        // 判断新vnode有没有text属性
        // 没有子节点的情况，直接复制值
        if(newVnode.text != undefined && (newVnode.children==undefined || newVnode.children.length==0)){
            // 它内部是文字
            if(newVnode.text!=oldVnode.text){
                oldVnode.elm.innerText=vnode.text
            }
        }else{ //新元素有子节点
            if(oldVnode.children!=undefined && oldVnode.children.length>0){
                updateChildren(oldVnode.elm,oldVnode.children,newVnode.children)
            }else{
                // 老的没有children,新的有children
                // 先清空老节点的内容
                oldVnode.elm.innerText='';
                for(let i =0;i<newVnode.children.length;i++){
                    let dom = createElement(newVnode.children[i])
                    console.log('oooooooo',oldVnode.elm)
                    oldVnode.elm.appendChild(dom)
                }
            }
        }
}