// ==UserScript==
// @name         Cosmetic Filter - eBay
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Hide similar items, sponsored items, etc. on eBay
// @author       Kris Wilk
// @match        https://www.ebay.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('#CenterPanel div[data-slot^="PLACEMENT_"] { display: none; }');
GM_addStyle('div[class$="main-container__bottom-panel"] div[data-slot^="PLACEMENT_"] { display: none; }');
GM_addStyle('div[data-testid^="x-rx-slot-btf-"]:has(div[id^="placement"]) { display: none; }');
GM_addStyle('.x-evo-atf-top-river .x-rx-slot { display: none; }');
GM_addStyle('.stream-slot { display: none; }');
