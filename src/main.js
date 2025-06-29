import config from './config.json' with { type: 'json' };
import { states } from './scripts/states.js';
import * as utils from './scripts/utils.js';
import { windowObject } from './scripts/window.js';

let test1 = new windowObject('test', 'test', 75, 50, false);
let test2 = new windowObject('test2', 'test2', 100, 75, false);