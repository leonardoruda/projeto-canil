"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const menuActive_1 = require("../helpers/menuActive");
const Pet_1 = require("../models/Pet");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = Pet_1.petFunctions.getFromName(query);
    res.render('pages/page', {
        menu: (0, menuActive_1.menuActive)(''),
        list,
        query
    });
};
exports.search = search;
