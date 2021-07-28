const h = (tag, props, children) => {
  return {
    tag,
    props,
    children
  }
}

const mount = (vnode, container) => {
  const el = vnode.el = document.createElement(vnode.tag)

  // 挂载属性
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // mount子元素
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      })
    }
  }

  container.appendChild(el)
}

const patch = (node1, node2) => {
  if (node1.tag !== node2.tag) {
    const node1ParentEl = node1.el.parentElement
    node1ParentEl.remove(node1.el)
    node1ParentEl.appendChild(node2)
  } else {
    const el = node2.el = node1.el

    const oldProps = node1.props || {}
    const newProps = node2.props || {}

    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]

      // 添加新的props
      if (newValue !== oldValue) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), value)
        } else {
          el.setAttribute(key, value)
        }
      }
    }


    for (const key in oldProps) {
      const value = oldProps[key]

      // 删除无用的props
      if (!(key) in newProps) {
        if (key.startsWith('on')) {
          el.removeEventListener(key.slice(2).toLowerCase(), value)
        } else {
          el.removeAttribute(key)
        }
      }
    }


    // 处理children

    const oldChildren = node1.children || []
    const newChildren = node2.children || []
    const minChildLength = Math.min(oldChildren.length, newChildren.length)

    if (typeof newChildren === 'string') {
      // 如果oldChildren也是string，替换textContent就行
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else {
        // 如果oldChildren是数组， 就表示当前el有子元素， 用innerHTML替换

        // 其实我觉得可以一次性用innerHTML替换
        el.innerHTML = newChildren
      }
    } else if (typeof oldChildren === 'string') {
      // newChildren 是数组，
      el.innerHTML = ''
      newChildren.forEach(item => mount(el, item))
    } else {
      // patch oldChildren 和 newChildren 里小的一个
      for (const i in minChildLength) {
        patch(oldChildren[i], newChildren[i])
      }

      // 如果newChildren 多，就添加多的newChildren
      if (newChildren.length > oldChildren.length) {
        const restChildren = newChildren.slice(minChildLength)
        restChildren.forEach(item => mount(item, el))
      }

      // 如果oldChildren多，删除多余的
      if (oldChildren.length > newChildren.length) {
        const restChildren = oldChildren.slice(minChildLength)
        restChildren.forEach(item => el.removeChild(item.el))
      }
    }


  }
}