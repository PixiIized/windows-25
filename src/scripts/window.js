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
        while (states.openWindows[this.id]) {
            this.id = utils.getRandomInt(0, 256);
        }
        this.window = null;
        this.header = null;
        this.footer = null;
        this.footers = []; // This is a list for now but it will be an object containing info and stuff later

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
        if (!(states.windowCount >= 256)) {
            // Make window
            states.windowCount++;
            this.window = document.createElement('div');
            this.window.className = 'window';
            this.window.id = this.id;
            this.window.style.width = `${this.width}px`;
            this.window.style.height = `${this.height}px`;
            this.window.style.zIndex = states.topZIndex++;
            states.openWindows[this.id] = true;
            document.body.appendChild(this.window);

            // Move to front
            this.window.addEventListener('mousedown', () => {
                this.window.style.zIndex = states.topZIndex++;
            });

            // Make header
            this.header = document.createElement('span');
            this.header.className = 'header';
            this.window.appendChild(this.header);

            // Make footer
            this.footer = document.createElement('div');
            this.footer.className = 'footers';
            this.window.appendChild(this.footer);
            // Note: this is the div containing all footers. the app config can add the details themselves.
            // Here's a testing default
            this.footerDefault = document.createElement('span');
            this.footerDefault.className = 'footerDefault';
            this.footer.appendChild(this.footerDefault);

            // Make draggable
            $( function() {
                $( '.window' ).draggable({ handle: '.header', scroll: false }).resizable({ minWidth: 75, minHeight: 40});
            });

        } else {
            throw new Error('Can\'t open new window: limit reached');
        }
    }

    close() {
        states.windowCount--;
        this.window.remove();
        states.openWindows[this.id] = false;
        this.id = null;
    }
}