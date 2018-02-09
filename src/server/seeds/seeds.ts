import { House } from "../models/got.model";

export default class Seeds {
    public static async GoT() {
        console.log('Seeding people...')
        let count = await House.count({});
        if (count == 0) {
            const val = await House.create({
                name: 'House Stark',
                words: 'Winter Is Coming'
            }, {
                name: 'House Targaryen',
                words: 'Fire and Blood'
            }, {
                name: 'House Lannister',
                words: 'Hear Me Roar!'
            }, {
                name: 'House Baratheon',
                words: 'Ours Is the Fury'
            }, {
                name: 'House Greyjoy',
                words: 'We Do Not Sow'
            });
        }
        console.log('... Done');
    }
}