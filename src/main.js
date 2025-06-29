import config from './config.json' with { type: 'json' };
import { states } from './scripts/states.js';
import * as utils from './scripts/utils.js';
import { windowObject } from './scripts/window.js';

let test1 = new windowObject('test', 'test', 200, 200, false);
let test2 = new windowObject('test2', 'test2', 200, 200, false);