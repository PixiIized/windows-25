import config from '../config.json' with { type: 'json' };

// CSS interaction
export function getCSS(variable) {
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    return rs.getPropertyValue(variable);
}

export function setCSS(variable, value) {
    let r = document.querySelector(':root');
    return r.style.setProperty(variable, value);
}

// Math
export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}