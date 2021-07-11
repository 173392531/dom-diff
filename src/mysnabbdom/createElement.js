// 真正创建节点，将vnode创建为dom，插入到pivot这个元素之前
export default function createElement(vnode) {
    console.log('目的是把虚拟节点',vnode,'变为真正的dom')
    let domNode=document.createElement(vnode.sel)
    // 有子节点还是有文本？
    if(vnode.text!=''&& (vnode.children==undefined || vnode.children.length==0)){
        domNode.innerText=vnode.text
    }else if (Array.isArray(vnode.children) && vnode.children.length>0){
        // 它内部是子节点，就要递归创建节点
        for(let i = 0;i<vnode.children.length;i++){
            // 得到当前这个children
            let ch=vnode.children[i]
            console.log(ch)
            // 创建他的dom，一旦调用createElement意味着创建出dom了，并且它的elm属性指向了创建出的DOM，但是还没有上树，是一个孤儿节点。
            let chDOM=createElement(ch);
            // 为主节点创建虚拟子节点 // 上树
            domNode.appendChild(chDOM)
        }
        // 补充elm属性
    }
    // 补充elm属性
    vnode.elm=domNode
    console.log('zzzzzzzzz',vnode.elm)
    // 返回elm，elm属性是一个纯DOM对象
    return vnode.elm;
}