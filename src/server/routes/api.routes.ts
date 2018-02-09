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

export default router;