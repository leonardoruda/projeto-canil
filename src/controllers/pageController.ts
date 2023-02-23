import {Request, Response} from 'express';
import { menuActive } from '../helpers/menuActive';
import { petFunctions } from '../models/Pet';

export const home = (req: Request, res: Response) => {
    let list = petFunctions.getAll;

    res.render('pages/page', {
        menu: menuActive('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = petFunctions.getFromType('dog');

    res.render('pages/page', {
        menu: menuActive('dog'),
        banner: {
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = petFunctions.getFromType('cat');

    res.render('pages/page', {
        menu: menuActive('cat'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = petFunctions.getFromType('fish');

    res.render('pages/page', {
        menu: menuActive('fish'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}