import * as express from 'express';
import { House } from '../models/got.model';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('api index');
});

router.get('/got/houses', async (req, res) => {
    const houses = await House.find();
    res.json(houses);
});

router.get('/got/houses/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        const house = await House.findById(id);
        res.json(house);
    } catch (error) {
        next(error);
    }
    
});

export default router;