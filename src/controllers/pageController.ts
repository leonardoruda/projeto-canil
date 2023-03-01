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
        list: list(),
        query: ''
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
        list,
        query: ''
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
        list,
        query: ''
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
        list,
        query: ''
    });
}

export const notFound = (req: Request, res: Response) => {
    res.render('pages/404', {query: '', menu: {}});
}