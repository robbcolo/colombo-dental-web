"use client";
import {
  createContextScope,
  useCallbackRef,
  useControllableState,
  useEscapeKeydown,
  useLayoutEffect2
} from "./chunk-HEOEQMNJ.js";
import {
  require_jsx_runtime
} from "./chunk-T6PWRRVS.js";
import {
  require_react_dom
} from "./chunk-I2MCD6RR.js";
import {
  require_react
} from "./chunk-E55NSNTN.js";
import {
  __toESM
} from "./chunk-4MBMRILA.js";

// node_modules/@radix-ui/react-toast/dist/index.mjs
var React15 = __toESM(require_react(), 1);
var ReactDOM5 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-slot/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var Slot = React2.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = React2.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
        return React2.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
  }
  return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = React2.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (React2.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    const props2 = mergeProps(slotProps, children.props);
    if (children.type !== React2.Fragment) {
      props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
    }
    return React2.cloneElement(children, props2);
  }
  return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
};
function isSlottable(child) {
  return React2.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-collection/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function createCollection(name) {
  const PROVIDER_NAME2 = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME2);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME2,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react.default.useRef(null);
    const itemMap = import_react.default.useRef(/* @__PURE__ */ new Map()).current;
    return (0, import_jsx_runtime2.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME2;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = import_react.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return (0, import_jsx_runtime2.jsx)(Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = import_react.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = import_react.default.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      import_react.default.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return (0, import_jsx_runtime2.jsx)(Slot, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React7 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers2(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React6 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-slot/dist/index.mjs
var React5 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React4 = __toESM(require_react(), 1);
function setRef2(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs2(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef2(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef2(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs2(...refs) {
  return React4.useCallback(composeRefs2(...refs), refs);
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Slot2 = React5.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = React5.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable2);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React5.Children.count(newElement) > 1) return React5.Children.only(null);
        return React5.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return (0, import_jsx_runtime3.jsx)(SlotClone2, { ...slotProps, ref: forwardedRef, children: React5.isValidElement(newElement) ? React5.cloneElement(newElement, void 0, newChildren) : null });
  }
  return (0, import_jsx_runtime3.jsx)(SlotClone2, { ...slotProps, ref: forwardedRef, children });
});
Slot2.displayName = "Slot";
var SlotClone2 = React5.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (React5.isValidElement(children)) {
    const childrenRef = getElementRef2(children);
    const props2 = mergeProps2(slotProps, children.props);
    if (children.type !== React5.Fragment) {
      props2.ref = forwardedRef ? composeRefs2(forwardedRef, childrenRef) : childrenRef;
    }
    return React5.cloneElement(children, props2);
  }
  return React5.Children.count(children) > 1 ? React5.Children.only(null) : null;
});
SlotClone2.displayName = "SlotClone";
var Slottable2 = ({ children }) => {
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children });
};
function isSlottable2(child) {
  return React5.isValidElement(child) && child.type === Slottable2;
}
function mergeProps2(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef2(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = React6.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime4.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React7.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React7.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React7.useContext(DismissableLayerContext);
    const [node, setNode] = React7.useState(null);
    const ownerDocument = (node == null ? void 0 : node.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const [, force] = React7.useState({});
    const composedRefs = useComposedRefs2(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React7.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React7.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React7.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return (0, import_jsx_runtime5.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers2(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers2(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers2(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React7.forwardRef((props, forwardedRef) => {
  const context = React7.useContext(DismissableLayerContext);
  const ref = React7.useRef(null);
  const composedRefs = useComposedRefs2(forwardedRef, ref);
  React7.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return (0, import_jsx_runtime5.jsx)(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React7.useRef(false);
  const handleClickRef = React7.useRef(() => {
  });
  React7.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React7.useRef(false);
  React7.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React11 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React10 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-slot/dist/index.mjs
var React9 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React8 = __toESM(require_react(), 1);
function setRef3(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs3(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef3(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef3(refs[i], null);
          }
        }
      };
    }
  };
}

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var Slot3 = React9.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = React9.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable3);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React9.Children.count(newElement) > 1) return React9.Children.only(null);
        return React9.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return (0, import_jsx_runtime6.jsx)(SlotClone3, { ...slotProps, ref: forwardedRef, children: React9.isValidElement(newElement) ? React9.cloneElement(newElement, void 0, newChildren) : null });
  }
  return (0, import_jsx_runtime6.jsx)(SlotClone3, { ...slotProps, ref: forwardedRef, children });
});
Slot3.displayName = "Slot";
var SlotClone3 = React9.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (React9.isValidElement(children)) {
    const childrenRef = getElementRef3(children);
    const props2 = mergeProps3(slotProps, children.props);
    if (children.type !== React9.Fragment) {
      props2.ref = forwardedRef ? composeRefs3(forwardedRef, childrenRef) : childrenRef;
    }
    return React9.cloneElement(children, props2);
  }
  return React9.Children.count(children) > 1 ? React9.Children.only(null) : null;
});
SlotClone3.displayName = "SlotClone";
var Slottable3 = ({ children }) => {
  return (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children });
};
function isSlottable3(child) {
  return React9.isValidElement(child) && child.type === Slottable3;
}
function mergeProps3(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef3(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var NODES2 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive2 = NODES2.reduce((primitive, node) => {
  const Node = React10.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot3 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime7.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-portal/dist/index.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var PORTAL_NAME = "Portal";
var Portal = React11.forwardRef((props, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React11.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? import_react_dom.default.createPortal((0, import_jsx_runtime8.jsx)(Primitive2.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-presence/dist/index.mjs
var React22 = __toESM(require_react(), 1);
var React12 = __toESM(require_react(), 1);
function useStateMachine(initialState, machine) {
  return React12.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React22.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef4(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React22.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React22.useState();
  const stylesRef = React22.useRef({});
  const prevPresentRef = React22.useRef(present);
  const prevAnimationNameRef = React22.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React22.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React22.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return (styles == null ? void 0 : styles.animationName) || "none";
}
function getElementRef4(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var ReactDOM4 = __toESM(require_react_dom(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var NODES3 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive3 = NODES3.reduce((primitive, node) => {
  const Node = React13.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime9.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent2(target, event) {
  if (target) ReactDOM4.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React14 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var NAME = "VisuallyHidden";
var VisuallyHidden = React14.forwardRef(
  (props, forwardedRef) => {
    return (0, import_jsx_runtime10.jsx)(
      Primitive3.span,
      {
        ...props,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME;

// node_modules/@radix-ui/react-toast/dist/index.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var PROVIDER_NAME = "ToastProvider";
var [Collection, useCollection, createCollectionScope] = createCollection("Toast");
var [createToastContext, createToastScope] = createContextScope("Toast", [createCollectionScope]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME);
var ToastProvider = (props) => {
  const {
    __scopeToast,
    label = "Notification",
    duration = 5e3,
    swipeDirection = "right",
    swipeThreshold = 50,
    children
  } = props;
  const [viewport, setViewport] = React15.useState(null);
  const [toastCount, setToastCount] = React15.useState(0);
  const isFocusedToastEscapeKeyDownRef = React15.useRef(false);
  const isClosePausedRef = React15.useRef(false);
  if (!label.trim()) {
    console.error(
      `Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`
    );
  }
  return (0, import_jsx_runtime11.jsx)(Collection.Provider, { scope: __scopeToast, children: (0, import_jsx_runtime11.jsx)(
    ToastProviderProvider,
    {
      scope: __scopeToast,
      label,
      duration,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange: setViewport,
      onToastAdd: React15.useCallback(() => setToastCount((prevCount) => prevCount + 1), []),
      onToastRemove: React15.useCallback(() => setToastCount((prevCount) => prevCount - 1), []),
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef,
      children
    }
  ) });
};
ToastProvider.displayName = PROVIDER_NAME;
var VIEWPORT_NAME = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport = React15.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      hotkey = VIEWPORT_DEFAULT_HOTKEY,
      label = "Notifications ({hotkey})",
      ...viewportProps
    } = props;
    const context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
    const getItems = useCollection(__scopeToast);
    const wrapperRef = React15.useRef(null);
    const headFocusProxyRef = React15.useRef(null);
    const tailFocusProxyRef = React15.useRef(null);
    const ref = React15.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    const hasToasts = context.toastCount > 0;
    React15.useEffect(() => {
      const handleKeyDown = (event) => {
        var _a;
        const isHotkeyPressed = hotkey.length !== 0 && hotkey.every((key) => event[key] || event.code === key);
        if (isHotkeyPressed) (_a = ref.current) == null ? void 0 : _a.focus();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]);
    React15.useEffect(() => {
      const wrapper = wrapperRef.current;
      const viewport = ref.current;
      if (hasToasts && wrapper && viewport) {
        const handlePause = () => {
          if (!context.isClosePausedRef.current) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            context.isClosePausedRef.current = true;
          }
        };
        const handleResume = () => {
          if (context.isClosePausedRef.current) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            context.isClosePausedRef.current = false;
          }
        };
        const handleFocusOutResume = (event) => {
          const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
          if (isFocusMovingOutside) handleResume();
        };
        const handlePointerLeaveResume = () => {
          const isFocusInside = wrapper.contains(document.activeElement);
          if (!isFocusInside) handleResume();
        };
        wrapper.addEventListener("focusin", handlePause);
        wrapper.addEventListener("focusout", handleFocusOutResume);
        wrapper.addEventListener("pointermove", handlePause);
        wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
        window.addEventListener("blur", handlePause);
        window.addEventListener("focus", handleResume);
        return () => {
          wrapper.removeEventListener("focusin", handlePause);
          wrapper.removeEventListener("focusout", handleFocusOutResume);
          wrapper.removeEventListener("pointermove", handlePause);
          wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
          window.removeEventListener("blur", handlePause);
          window.removeEventListener("focus", handleResume);
        };
      }
    }, [hasToasts, context.isClosePausedRef]);
    const getSortedTabbableCandidates = React15.useCallback(
      ({ tabbingDirection }) => {
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem) => {
          const toastNode = toastItem.ref.current;
          const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
          return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
      },
      [getItems]
    );
    React15.useEffect(() => {
      const viewport = ref.current;
      if (viewport) {
        const handleKeyDown = (event) => {
          var _a, _b, _c;
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = document.activeElement;
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              (_a = headFocusProxyRef.current) == null ? void 0 : _a.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst(sortedCandidates.slice(index + 1))) {
              event.preventDefault();
            } else {
              isTabbingBackwards ? (_b = headFocusProxyRef.current) == null ? void 0 : _b.focus() : (_c = tailFocusProxyRef.current) == null ? void 0 : _c.focus();
            }
          }
        };
        viewport.addEventListener("keydown", handleKeyDown);
        return () => viewport.removeEventListener("keydown", handleKeyDown);
      }
    }, [getItems, getSortedTabbableCandidates]);
    return (0, import_jsx_runtime11.jsxs)(
      Branch,
      {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace("{hotkey}", hotkeyLabel),
        tabIndex: -1,
        style: { pointerEvents: hasToasts ? void 0 : "none" },
        children: [
          hasToasts && (0, import_jsx_runtime11.jsx)(
            FocusProxy,
            {
              ref: headFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "forwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          ),
          (0, import_jsx_runtime11.jsx)(Collection.Slot, { scope: __scopeToast, children: (0, import_jsx_runtime11.jsx)(Primitive3.ol, { tabIndex: -1, ...viewportProps, ref: composedRefs }) }),
          hasToasts && (0, import_jsx_runtime11.jsx)(
            FocusProxy,
            {
              ref: tailFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "backwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          )
        ]
      }
    );
  }
);
ToastViewport.displayName = VIEWPORT_NAME;
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = React15.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
    const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
    return (0, import_jsx_runtime11.jsx)(
      VisuallyHidden,
      {
        "aria-hidden": true,
        tabIndex: 0,
        ...proxyProps,
        ref: forwardedRef,
        style: { position: "fixed" },
        onFocus: (event) => {
          var _a;
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !((_a = context.viewport) == null ? void 0 : _a.contains(prevFocusedElement));
          if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }
      }
    );
  }
);
FocusProxy.displayName = FOCUS_PROXY_NAME;
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast = React15.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
    const [open = true, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || open, children: (0, import_jsx_runtime11.jsx)(
      ToastImpl,
      {
        open,
        ...toastProps,
        ref: forwardedRef,
        onClose: () => setOpen(false),
        onPause: useCallbackRef(props.onPause),
        onResume: useCallbackRef(props.onResume),
        onSwipeStart: composeEventHandlers(props.onSwipeStart, (event) => {
          event.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: composeEventHandlers(props.onSwipeMove, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "move");
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
        }),
        onSwipeCancel: composeEventHandlers(props.onSwipeCancel, (event) => {
          event.currentTarget.setAttribute("data-swipe", "cancel");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "end");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
          setOpen(false);
        })
      }
    ) });
  }
);
Toast.displayName = TOAST_NAME;
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, {
  onClose() {
  }
});
var ToastImpl = React15.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      type = "foreground",
      duration: durationProp,
      open,
      onClose,
      onEscapeKeyDown,
      onPause,
      onResume,
      onSwipeStart,
      onSwipeMove,
      onSwipeCancel,
      onSwipeEnd,
      ...toastProps
    } = props;
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const [node, setNode] = React15.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const pointerStartRef = React15.useRef(null);
    const swipeDeltaRef = React15.useRef(null);
    const duration = durationProp || context.duration;
    const closeTimerStartTimeRef = React15.useRef(0);
    const closeTimerRemainingTimeRef = React15.useRef(duration);
    const closeTimerRef = React15.useRef(0);
    const { onToastAdd, onToastRemove } = context;
    const handleClose = useCallbackRef(() => {
      var _a;
      const isFocusInToast = node == null ? void 0 : node.contains(document.activeElement);
      if (isFocusInToast) (_a = context.viewport) == null ? void 0 : _a.focus();
      onClose();
    });
    const startTimer = React15.useCallback(
      (duration2) => {
        if (!duration2 || duration2 === Infinity) return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration2);
      },
      [handleClose]
    );
    React15.useEffect(() => {
      const viewport = context.viewport;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.current);
          onResume == null ? void 0 : onResume();
        };
        const handlePause = () => {
          const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
          closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
          window.clearTimeout(closeTimerRef.current);
          onPause == null ? void 0 : onPause();
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    }, [context.viewport, duration, onPause, onResume, startTimer]);
    React15.useEffect(() => {
      if (open && !context.isClosePausedRef.current) startTimer(duration);
    }, [open, duration, context.isClosePausedRef, startTimer]);
    React15.useEffect(() => {
      onToastAdd();
      return () => onToastRemove();
    }, [onToastAdd, onToastRemove]);
    const announceTextContent = React15.useMemo(() => {
      return node ? getAnnounceTextContent(node) : null;
    }, [node]);
    if (!context.viewport) return null;
    return (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      announceTextContent && (0, import_jsx_runtime11.jsx)(
        ToastAnnounce,
        {
          __scopeToast,
          role: "status",
          "aria-live": type === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: announceTextContent
        }
      ),
      (0, import_jsx_runtime11.jsx)(ToastInteractiveProvider, { scope: __scopeToast, onClose: handleClose, children: ReactDOM5.createPortal(
        (0, import_jsx_runtime11.jsx)(Collection.ItemSlot, { scope: __scopeToast, children: (0, import_jsx_runtime11.jsx)(
          Root,
          {
            asChild: true,
            onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, () => {
              if (!context.isFocusedToastEscapeKeyDownRef.current) handleClose();
              context.isFocusedToastEscapeKeyDownRef.current = false;
            }),
            children: (0, import_jsx_runtime11.jsx)(
              Primitive3.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": true,
                tabIndex: 0,
                "data-state": open ? "open" : "closed",
                "data-swipe-direction": context.swipeDirection,
                ...toastProps,
                ref: composedRefs,
                style: { userSelect: "none", touchAction: "none", ...props.style },
                onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                  if (event.key !== "Escape") return;
                  onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event.nativeEvent);
                  if (!event.nativeEvent.defaultPrevented) {
                    context.isFocusedToastEscapeKeyDownRef.current = true;
                    handleClose();
                  }
                }),
                onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
                  if (event.button !== 0) return;
                  pointerStartRef.current = { x: event.clientX, y: event.clientY };
                }),
                onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
                  if (!pointerStartRef.current) return;
                  const x = event.clientX - pointerStartRef.current.x;
                  const y = event.clientY - pointerStartRef.current.y;
                  const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
                  const isHorizontalSwipe = ["left", "right"].includes(context.swipeDirection);
                  const clamp = ["left", "up"].includes(context.swipeDirection) ? Math.min : Math.max;
                  const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
                  const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
                  const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                  const delta = { x: clampedX, y: clampedY };
                  const eventDetail = { originalEvent: event, delta };
                  if (hasSwipeMoveStarted) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent2(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                      discrete: false
                    });
                  } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent2(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                      discrete: false
                    });
                    event.target.setPointerCapture(event.pointerId);
                  } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                    pointerStartRef.current = null;
                  }
                }),
                onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
                  const delta = swipeDeltaRef.current;
                  const target = event.target;
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                  swipeDeltaRef.current = null;
                  pointerStartRef.current = null;
                  if (delta) {
                    const toast = event.currentTarget;
                    const eventDetail = { originalEvent: event, delta };
                    if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                      handleAndDispatchCustomEvent2(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                        discrete: true
                      });
                    } else {
                      handleAndDispatchCustomEvent2(
                        TOAST_SWIPE_CANCEL,
                        onSwipeCancel,
                        eventDetail,
                        {
                          discrete: true
                        }
                      );
                    }
                    toast.addEventListener("click", (event2) => event2.preventDefault(), {
                      once: true
                    });
                  }
                })
              }
            )
          }
        ) }),
        context.viewport
      ) })
    ] });
  }
);
var ToastAnnounce = (props) => {
  const { __scopeToast, children, ...announceProps } = props;
  const context = useToastProviderContext(TOAST_NAME, __scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = React15.useState(false);
  const [isAnnounced, setIsAnnounced] = React15.useState(false);
  useNextFrame(() => setRenderAnnounceText(true));
  React15.useEffect(() => {
    const timer = window.setTimeout(() => setIsAnnounced(true), 1e3);
    return () => window.clearTimeout(timer);
  }, []);
  return isAnnounced ? null : (0, import_jsx_runtime11.jsx)(Portal, { asChild: true, children: (0, import_jsx_runtime11.jsx)(VisuallyHidden, { ...announceProps, children: renderAnnounceText && (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    context.label,
    " ",
    children
  ] }) }) });
};
var TITLE_NAME = "ToastTitle";
var ToastTitle = React15.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...titleProps } = props;
    return (0, import_jsx_runtime11.jsx)(Primitive3.div, { ...titleProps, ref: forwardedRef });
  }
);
ToastTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "ToastDescription";
var ToastDescription = React15.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...descriptionProps } = props;
    return (0, import_jsx_runtime11.jsx)(Primitive3.div, { ...descriptionProps, ref: forwardedRef });
  }
);
ToastDescription.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "ToastAction";
var ToastAction = React15.forwardRef(
  (props, forwardedRef) => {
    const { altText, ...actionProps } = props;
    if (!altText.trim()) {
      console.error(
        `Invalid prop \`altText\` supplied to \`${ACTION_NAME}\`. Expected non-empty \`string\`.`
      );
      return null;
    }
    return (0, import_jsx_runtime11.jsx)(ToastAnnounceExclude, { altText, asChild: true, children: (0, import_jsx_runtime11.jsx)(ToastClose, { ...actionProps, ref: forwardedRef }) });
  }
);
ToastAction.displayName = ACTION_NAME;
var CLOSE_NAME = "ToastClose";
var ToastClose = React15.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...closeProps } = props;
    const interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
    return (0, import_jsx_runtime11.jsx)(ToastAnnounceExclude, { asChild: true, children: (0, import_jsx_runtime11.jsx)(
      Primitive3.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
      }
    ) });
  }
);
ToastClose.displayName = CLOSE_NAME;
var ToastAnnounceExclude = React15.forwardRef((props, forwardedRef) => {
  const { __scopeToast, altText, ...announceExcludeProps } = props;
  return (0, import_jsx_runtime11.jsx)(
    Primitive3.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": altText || void 0,
      ...announceExcludeProps,
      ref: forwardedRef
    }
  );
});
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.radixToastAnnounceExclude === "";
      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt;
          if (altText) textContent.push(altText);
        } else {
          textContent.push(...getAnnounceTextContent(node));
        }
      }
    }
  });
  return textContent;
}
function handleAndDispatchCustomEvent2(name, handler, detail, { discrete }) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, { bubbles: true, cancelable: true, detail });
  if (handler) currentTarget.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent2(currentTarget, event);
  } else {
    currentTarget.dispatchEvent(event);
  }
}
var isDeltaInDirection = (delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right") {
    return isDeltaX && deltaX > threshold;
  } else {
    return !isDeltaX && deltaY > threshold;
  }
};
function useNextFrame(callback = () => {
}) {
  const fn = useCallbackRef(callback);
  useLayoutEffect2(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => raf2 = window.requestAnimationFrame(fn));
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [fn]);
}
function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
var Provider = ToastProvider;
var Viewport = ToastViewport;
var Root2 = Toast;
var Title = ToastTitle;
var Description = ToastDescription;
var Action = ToastAction;
var Close = ToastClose;
export {
  Action,
  Close,
  Description,
  Provider,
  Root2 as Root,
  Title,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Viewport,
  createToastScope
};
//# sourceMappingURL=@radix-ui_react-toast.js.map
