"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const menuActive_1 = require("../helpers/menuActive");
const Pet_1 = require("../models/Pet");
const home = (req, res) => {
    let list = Pet_1.petFunctions.getAll;
    res.render('pages/page', {
        menu: (0, menuActive_1.menuActive)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = Pet_1.petFunctions.getFromType('dog');
    res.render('pages/page', {
        menu: (0, menuActive_1.menuActive)('dog'),
        banner: {
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = Pet_1.petFunctions.getFromType('cat');
    res.render('pages/page', {
        menu: (0, menuActive_1.menuActive)('cat'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = Pet_1.petFunctions.getFromType('fish');
    res.render('pages/page', {
        menu: (0, menuActive_1.menuActive)('fish'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishes = fishes;
