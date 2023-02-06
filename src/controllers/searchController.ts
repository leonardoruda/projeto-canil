import {Request, Response} from 'express';
import { menuActive } from '../helpers/menuActive';
import { petFunctions } from '../models/Pet';

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string;

    if (!query) {
        res.redirect('/');
        return;
    }

    let list = petFunctions.getFromName(query);

    res.render('pages/page', {
        menu: menuActive(''),
        list,
        query
    });
}