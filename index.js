let appInitted = false;
const createElement = (tag, props, ...children) => {
  console.log('tag', tag);
  if (typeof tag === 'function') {
    if (!appInitted) {
      appInitted = true;
      app = tag;
      console.log('app', app);
    }
    return tag(props, ...children);
  }
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith('on') && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substring(2), value);
    else if (name === 'style') {
      element.setAttribute(
        'style',
        Object.entries(value || {}).reduce((prev, current) => {
          const [key, val] = current;
          return `${prev ? `${prev} ` : prev}${key}: ${val};`;
        }, '')
      );
    } else {
      element.setAttribute(name, value.toString());
    }
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

const createFragment = (__, ...children) => {
  return children;
};

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
const mount = (vnode, container) => {
  container.appendChild(vnode);
};
const replace = (dnode, vnode) => {
  dnode.replaceWith(vnode);
};
const unmount = (vnode) => {
  vnode.parentNode.removeChild(vnode);
};
const getElementChildren = (element) => {
  var childNodes = element.childNodes,
    children = [],
    i = childNodes.length;

  while (i--) {
    if (
      childNodes[i].nodeType === 1 ||
      childNodes[i].nodeType === 2 ||
      childNodes[i].nodeType === 3
    ) {
      children.unshift(childNodes[i]);
    }
  }

  return children;
};
const patch = (ddom, vdom) => {
  if (ddom.nodeType === 3 && vdom.textContent !== ddom.textContent) {
    ddom.textContent = vdom.textContent;
  } else if (ddom.tagName === vdom.tagName) {
    const c1 = getElementChildren(ddom);
    const c2 = getElementChildren(vdom);

    const commonLength = Math.min(c1.length, c2.length);

    // Patch the children both nodes have in common
    for (let i = 0; i < commonLength; i++) {
      patch(c1[i], c2[i]);
    }

    if (c1.length > c2.length) {
      c1.slice(c2.length).forEach((child) => {
        unmount(child);
      });
    }

    // Old children was shorter
    // Add the newly added children
    else if (c2.length > c1.length) {
      c2.slice(c1.length).forEach((child) => {
        mount(child, ddom);
      });
    }

    // Attributes
    for (const attr of vdom.attributes || []) {
      if (attr.name === 'value') {
        ddom.value = attr.value;
      }
      if (attr.name === 'style') {
      }
      ddom.setAttribute(attr.name, attr.value);
    }
  } else {
    replace(ddom, vdom);
  }
};
const appendElementOrFragment = (elementOrArray, container) => {
  if (Array.isArray(elementOrArray)) {
    for (const element of elementOrArray) {
      appendElementOrFragment(element, container);
    }
  } else {
    container.appendChild(elementOrArray || '');
  }
};
const render = () => {
  currentStateKey = -1;
  currentUseEffectKey = -1;
  // /reset
  const rootwrapper = document.createElement('div');
  rootwrapper.setAttribute('id', 'root');
  console.log('rootapp, ', app, createElement(app));
  const createdApp = createElement(app);
  appendElementOrFragment(createdApp, rootwrapper);
  // const vdom = document.createElement('div').appendChild(
  //   // <div id="root">
  //   //   {/* <UsingFragment name="foo" /> */}
  //   //   {app}
  //   // </div>
  //   rootwrapper
  // );
  const vdom = rootwrapper;

  // "?root??"

  patch(root, vdom);
};

// useState
let componentsState = {};
let currentStateKey = -1;
const useState = (defaultState) => {
  currentStateKey += 1;
  const myStateKey = currentStateKey;

  componentsState[currentStateKey] =
    componentsState[currentStateKey] || defaultState;
  return [
    componentsState[currentStateKey],
    (nextState) => {
      componentsState = { ...componentsState, [myStateKey]: nextState };

      render();
    },
  ];
};
// /state

// useEffect
let currentUseEffectKey = -1;
const useEffectCache = {};
const useEffect = (func, dependencies) => {
  currentUseEffectKey += 1;
  const myUseEffectKey = currentUseEffectKey;
  if (!arraysEqual(dependencies, useEffectCache[myUseEffectKey])) {
    useEffectCache[myUseEffectKey] = dependencies;

    setTimeout(() => {
      func();
    });
  }
};
// /useEffect

// createRoot
let root = '';
let app = '';
const renderRoot = (nextApp) => {
  // app = nextApp;

  render();
};

const createRoot = (domNode) => {
  root = domNode;
  return { render: renderRoot };
};
// /createRoot
module.exports = {
  createRoot,
  useState,
  useEffect,
  createElement,
  createFragment,
};
