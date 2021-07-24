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

    const oldProps = node1.props
    const newProps = node2.props

    // props
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]

      if (newValue !== oldValue) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), value)
        } else {
          el.setAttribute(key, value)
        }
      }
    }

    // 删除旧的props
    for (const key in oldProps) {
      const value = newProps[key]
      if (key.startsWith('on')) {
        el.removeEventListener(key.slice(2).toLowerCase(), value)
      } else {
        if (!(key) in newProps) {
          el.removeAttribute(key)
        }
      }
    }
  }
}