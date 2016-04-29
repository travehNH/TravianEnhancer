// ==UserScript==
// @name         Travian Enhancer
// @include     http://*.travian.*/*
// @include     https://*.travian.*/*
// @grant        none
// @namespace   TravianEnhancer
// @version     3.651
// @author      EpicSeven
// ==/UserScript==

(function() {
    'use strict';
    var body = document.getElementsByTagName('body')[0];
    body.style.transform = 'scaleX(-1)';
    body.style.filter = 'FlipH';
})();
