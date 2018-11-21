import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { first: 'Xinghui', last: 'Zhao', address: 'WSU Vancouver', phone: '360-546-9110', email: 'x.zhao@wsu.edu' },
  { first: 'David', last: 'Chiu', address: 'WSU Vancouver', phone: '360-546-1234', email: 'david.chiu@wsu.edu' },
  { first: 'Scott', last: 'Wallace', address: 'WSU Vancouver', phone: '360-546-9112', email: 'wallaces@wsu.edu' },
  { first: 'Sarah', last: 'Mocas', address: 'WSU Vancouver', phone: '360-546-2456', email: 'sarah.mocas@wsu.edu' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
