import * as utils from './utils.js';
import { states } from './states.js';

export class windowObject {
    constructor(name, app, width, height, fullscreen) {
        this.name = name;
        this.app = app;
        this.width = width;
        this.height = height;
        this.fullscreen = fullscreen;

        this.id = utils.getRandomInt(0, 256);
        while (states.openWindows.includes(this.id)) {
            this.id = utils.getRandomInt(0, 256);
        }
        this.window = null;

        if (typeof this.name !== 'string') {
            throw new TypeError('Window name must be a string');
        }
        if (typeof this.app !== 'string') {
            throw new TypeError('App folder path must be a string');
        }
        if (typeof this.width !== 'number' || this.width <= 0 || Math.round(this.width) != this.width) {
            throw new TypeError('Window width must be a whole positive integer');
        }
        if (typeof this.height !== 'number' || this.height <= 0 || Math.round(this.height) != this.height) {
            throw new TypeError('Window height must be a whole positive integer');
        }
        if (typeof this.fullscreen !== 'boolean') {
            throw new TypeError('Window fullscreen attribute must be a boolean');
        }

        this.open();
    }

    open() {
        this.window = document.createElement('div');
        this.window.id = this.id;
        states.openWindows[this.id] = true;
        document.body.appendChild(this.window);
    }

    close() {
        this.window.remove();
        states.openWindows[this.id] = false;
        this.id = null;
    }
}