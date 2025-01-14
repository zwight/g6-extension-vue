"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePropSingle = exports.updateProps = exports.bindShapeEvent = void 0;
let zIndexWarningShowed = false;
const Z_INDEX_WARNING = `ReactG: You are using "zIndex" attribute for an element.
react-g may get confused with ordering. Just define correct order of elements in your render function of a component.
`;
const isEvent = (key) => key.slice(0, 2) === "on";
const getEventName = (key) => key.substring(2).toLowerCase();
const bindShapeEvent = (newProps, instance) => {
    Object.keys(newProps).forEach((propKey) => {
        if (isEvent(propKey)) {
            instance.addEventListener(getEventName(propKey), newProps[propKey]);
        }
    });
};
exports.bindShapeEvent = bindShapeEvent;
const updateProps = (instance, newProps, oldProps = {}) => {
    // don't use zIndex
    if (!zIndexWarningShowed && "zIndex" in newProps) {
        console.warn(Z_INDEX_WARNING);
        zIndexWarningShowed = true;
    }
    Object.keys(oldProps).forEach((key) => {
        const propChanged = oldProps[key] !== newProps[key];
        if (propChanged) {
            if (isEvent(key)) {
                instance.removeEventListener(getEventName(key));
            }
            else {
                instance.removeAttribute(key);
            }
        }
    });
    Object.keys(newProps).forEach((key) => {
        const propChanged = oldProps[key] !== newProps[key];
        if (propChanged) {
            if (isEvent(key)) {
                if (typeof newProps[key] === "function") {
                    instance.addEventListener(getEventName(key), newProps[key]);
                }
            }
            else {
                instance.setAttribute(key, newProps[key]);
            }
        }
    });
};
exports.updateProps = updateProps;
const updatePropSingle = (instance, key, newProps, oldProps) => {
    const propChanged = oldProps !== newProps;
    if (propChanged) {
        if (oldProps) {
            if (isEvent(key)) {
                instance.removeEventListener(getEventName(key));
            }
            else {
                instance.removeAttribute(key);
            }
        }
        if (newProps) {
            if (isEvent(key)) {
                if (typeof newProps === "function") {
                    instance.addEventListener(getEventName(key), newProps);
                }
            }
            else {
                instance.setAttribute(key, newProps);
            }
        }
    }
};
exports.updatePropSingle = updatePropSingle;
//# sourceMappingURL=processProps.js.map