"use strict";

/**
 * Get element by ID
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * Get elements by selector
 */
function $$(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Create element helper
 */
function create(tag, className = "") {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}