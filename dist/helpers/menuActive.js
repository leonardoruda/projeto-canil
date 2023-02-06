"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuActive = void 0;
const menuActive = (activeMenu) => {
    let object = {
        all: false, dog: false, cat: false, fish: false
    };
    if (activeMenu !== '') {
        object[activeMenu] = true;
    }
    ;
    return object;
};
exports.menuActive = menuActive;
