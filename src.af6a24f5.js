parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"GonQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{name:"Abaddon",attackSpeed:143,damage:55,damageIncr:2.6,attackRange:150,speed:325,manaRestore:1.15,armor:2.8,healthRestore:3.2,health:640,mana:291,mainAttribute:"strength",strength:22,agility:23,intelligence:18,strengthIncr:2.6,agilityIncr:1.5,intelligenceIncr:2},{name:"Alchemist",attackSpeed:122,damage:55,damageIncr:2.9,attackRange:150,speed:305,manaRestore:1.25,armor:2.7,healthRestore:2.75,health:700,mana:375,mainAttribute:"strength",strength:25,agility:22,intelligence:25,strengthIncr:2.9,agilityIncr:1.5,intelligenceIncr:1.8},{name:"Axe",attackSpeed:120,damage:54,damageIncr:3.4,attackRange:150,speed:310,manaRestore:.9,armor:2.3,healthRestore:5,health:700,mana:291,mainAttribute:"strength",strength:25,agility:20,intelligence:18,strengthIncr:3.4,agilityIncr:2.2,intelligenceIncr:1.6},{name:"Beastmaster",attackSpeed:117,damage:56,damageIncr:2.9,attackRange:150,speed:305,manaRestore:.8,armor:3,healthRestore:2.55,health:660,mana:267,mainAttribute:"strength",strength:23,agility:18,intelligence:16,strengthIncr:2.9,agilityIncr:1.6,intelligenceIncr:1.9},{name:"Brewmaster",attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Bristleback",attackSpeed:110,damage:55,damageIncr:2.5,attackRange:150,speed:295,manaRestore:.9,armor:3.8,healthRestore:2.4,health:640,mana:243,mainAttribute:"strength",strength:22,agility:17,intelligence:14,strengthIncr:2.5,agilityIncr:1.8,intelligenceIncr:2.8},{name:"Centaur Warrunner",attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Chaos Knight",attackSpeed:117,damage:65,damageIncr:3,attackRange:150,speed:295,manaRestore:.75,armor:5,healthRestore:4.3,health:660,mana:255,mainAttribute:"strength",strength:23,agility:18,intelligence:15,strengthIncr:3,agilityIncr:2.2,intelligenceIncr:1.6},{name:"Clockwerk",attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Dawnbreaker",attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Doom",attackSpeed:99,damage:63,damageIncr:3.7,attackRange:200,speed:285,manaRestore:.75,armor:4.8,healthRestore:2.65,health:680,mana:255,mainAttribute:"strength",strength:24,agility:11,intelligence:15,strengthIncr:3.7,agilityIncr:.9,intelligenceIncr:1.7},{name:"Dragon Knight",attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Earth Spirit",attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Huskar",attackSpeed:116,damage:43,damageIncr:3.3,attackRange:400,speed:295,manaRestore:.9,armor:.7,healthRestore:2.2,health:600,mana:291,mainAttribute:"strength",strength:20,agility:10,intelligence:18,strengthIncr:3.3,agilityIncr:1.5,intelligenceIncr:1.5},{name:"Io",attackSpeed:114,damage:48,damageIncr:3,attackRange:500,speed:320,manaRestore:1.15,armor:3,healthRestore:1.95,health:540,mana:351,mainAttribute:"strength",strength:17,agility:14,intelligence:23,strengthIncr:3,agilityIncr:1.6,intelligenceIncr:1.7},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Mars",attackSpeed:113,damage:56,damageIncr:3.7,attackRange:250,speed:310,manaRestore:1.5,armor:2.3,healthRestore:2.5,health:660,mana:327,mainAttribute:"strength",strength:23,agility:20,intelligence:21,strengthIncr:3.7,agilityIncr:1.7,intelligenceIncr:2.2},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Primal Beast",attackSpeed:108,damage:63,damageIncr:4.3,attackRange:150,speed:305,manaRestore:.8,armor:4.5,healthRestore:2.6,health:720,mana:267,mainAttribute:"strength",strength:26,agility:15,intelligence:16,strengthIncr:4.3,agilityIncr:1,intelligenceIncr:1.4},{name:"Pudge",attackSpeed:114,damage:70,damageIncr:3,attackRange:175,speed:280,manaRestore:.8,armor:1.3,healthRestore:4.5,health:700,mana:267,mainAttribute:"strength",strength:25,agility:14,intelligence:16,strengthIncr:3,agilityIncr:1.4,intelligenceIncr:1.8},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Snap Fire",attackSpeed:123,damage:49,damageIncr:3.5,attackRange:500,speed:300,manaRestore:1.05,armor:3.7,healthRestore:2.7,health:void 0,mana:void 0,mainAttribute:"strength",strength:20,agility:16,intelligence:21,strengthIncr:3.5,agilityIncr:1.9,intelligenceIncr:2.2},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Tiny",attackSpeed:90,damage:64,damageIncr:4,attackRange:150,speed:295,manaRestore:.85,armor:0,healthRestore:4.5,health:800,mana:279,mainAttribute:"strength",strength:30,agility:0,intelligence:17,strengthIncr:4,agilityIncr:0,intelligenceIncr:2.2},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"strength",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Undying",attackSpeed:110,damage:61,damageIncr:2.8,attackRange:150,speed:300,manaRestore:1.6,armor:2.7,healthRestore:2.45,health:640,mana:399,mainAttribute:"strength",strength:22,agility:10,intelligence:27,strengthIncr:2.8,agilityIncr:1.2,intelligenceIncr:2.8},{name:"Wraith King",attackSpeed:116,damage:61,damageIncr:3,attackRange:150,speed:315,manaRestore:.9,armor:1.7,healthRestore:2.4,health:640,mana:291,mainAttribute:"strength",strength:22,agility:16,intelligence:18,strengthIncr:3,agilityIncr:1.7,intelligenceIncr:1.6},{name:"Anti Mage",attackSpeed:150,damage:55,damageIncr:2.8,attackRange:150,speed:310,manaRestore:.6,armor:4,healthRestore:2.3,health:620,mana:219,mainAttribute:"agility",strength:21,agility:24,intelligence:12,strengthIncr:1.6,agilityIncr:2.8,intelligenceIncr:1.8},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Bounty Hunter",attackSpeed:121,damage:55,damageIncr:2.6,attackRange:150,speed:325,manaRestore:1.6,armor:7.5,healthRestore:3.2,health:600,mana:339,mainAttribute:"agility",strength:20,agility:21,intelligence:22,strengthIncr:2.5,agilityIncr:2.6,intelligenceIncr:1.9},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Hoodwink",attackSpeed:105,damage:49,damageIncr:3.6,attackRange:575,speed:310,manaRestore:1,armor:4,healthRestore:1.9,health:540,mana:327,mainAttribute:"agility",strength:17,agility:24,intelligence:21,strengthIncr:2,agilityIncr:3.6,intelligenceIncr:2.9},{name:"Juggernaut",attackSpeed:174,damage:52,damageIncr:2.8,attackRange:150,speed:305,manaRestore:.7,armor:5.7,healthRestore:2.5,health:600,mana:243,mainAttribute:"agility",strength:20,agility:34,intelligence:14,strengthIncr:2.2,agilityIncr:2.8,intelligenceIncr:1.4},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Mirana",attackSpeed:134,damage:51,damageIncr:3.4,attackRange:630,speed:290,manaRestore:1.5,armor:2,healthRestore:2.05,health:560,mana:339,mainAttribute:"agility",strength:18,agility:24,intelligence:22,strengthIncr:2.2,agilityIncr:3.4,intelligenceIncr:1.9},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Phantom Assassin",attackSpeed:123,damage:56,damageIncr:3.4,attackRange:150,speed:305,manaRestore:.75,armor:4.8,healthRestore:2.85,health:620,mana:255,mainAttribute:"agility",strength:21,agility:23,intelligence:15,strengthIncr:2.2,agilityIncr:3.4,intelligenceIncr:1.4},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Shadow Fiend",attackSpeed:127,damage:42,damageIncr:3.5,attackRange:500,speed:305,manaRestore:1.2,armor:4.3,healthRestore:2.15,health:580,mana:291,mainAttribute:"agility",strength:19,agility:20,intelligence:18,strengthIncr:2.7,agilityIncr:3.5,intelligenceIncr:2.2},{name:"Slark",attackSpeed:131,damage:57,damageIncr:1.7,attackRange:150,speed:300,manaRestore:.8,armor:3.5,healthRestore:3.7,health:600,mana:267,mainAttribute:"agility",strength:20,agility:21,intelligence:16,strengthIncr:1.9,agilityIncr:1.7,intelligenceIncr:1.7},{name:"Sniper",attackSpeed:127,damage:43,damageIncr:3.2,attackRange:550,speed:285,manaRestore:.75,armor:3.5,healthRestore:2.15,health:580,mana:255,mainAttribute:"agility",strength:19,agility:27,intelligence:15,strengthIncr:2,agilityIncr:3.2,intelligenceIncr:2.6},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Templar Assassin",attackSpeed:123,damage:56,damageIncr:3.2,attackRange:160,speed:305,manaRestore:1,armor:3.8,healthRestore:2.35,health:620,mana:315,mainAttribute:"agility",strength:21,agility:23,intelligence:20,strengthIncr:2.4,agilityIncr:3.2,intelligenceIncr:2},{name:"Terrorblade",attackSpeed:149,damage:55,damageIncr:4,attackRange:150,speed:315,manaRestore:.95,armor:8.7,healthRestore:2.6,health:520,mana:303,mainAttribute:"agility",strength:16,agility:22,intelligence:19,strengthIncr:2,agilityIncr:4,intelligenceIncr:1.6},{name:"Troll Warlord",attackSpeed:121,damage:52,damageIncr:3.3,attackRange:500,speed:305,manaRestore:.65,armor:2.5,healthRestore:2.35,health:620,mana:231,mainAttribute:"agility",strength:21,agility:21,intelligence:13,strengthIncr:2.5,agilityIncr:3.3,intelligenceIncr:1},{name:"Ursa",attackSpeed:117,damage:44,damageIncr:2.6,attackRange:150,speed:310,manaRestore:.8,armor:4,healthRestore:3,health:700,mana:267,mainAttribute:"agility",strength:25,agility:18,intelligence:16,strengthIncr:2.6,agilityIncr:2.6,intelligenceIncr:1.5},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"agility",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{name:"Venomancer",attackSpeed:139,damage:47,damageIncr:2.8,attackRange:450,speed:280,manaRestore:.95,armor:4,healthRestore:2.15,health:580,mana:303,mainAttribute:"agility",strength:19,agility:24,intelligence:19,strengthIncr:2.1,agilityIncr:2.8,intelligenceIncr:1.8},{name:"viper",attackSpeed:141,damage:49,damageIncr:2.7,attackRange:575,speed:275,manaRestore:.8,armor:1.5,healthRestore:2.3,health:620,mana:279,mainAttribute:"agility",strength:21,agility:21,intelligence:17,strengthIncr:2.4,agilityIncr:2.7,intelligenceIncr:2},{name:"Weaver",attackSpeed:129,damage:57,damageIncr:3.1,attackRange:425,speed:275,manaRestore:1.5,armor:2.8,healthRestore:2.8,health:520,mana:315,mainAttribute:"agility",strength:16,agility:17,intelligence:20,strengthIncr:2,agilityIncr:3.1,intelligenceIncr:2},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0},{attackSpeed:void 0,damage:void 0,damageIncr:void 0,attackRange:void 0,speed:void 0,manaRestore:void 0,armor:void 0,healthRestore:void 0,health:void 0,mana:void 0,mainAttribute:"intelligence",strength:void 0,agility:void 0,intelligence:void 0,strengthIncr:void 0,agilityIncr:void 0,intelligenceIncr:void 0}];exports.default=e;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=t(require("./dotaHeroData"));function t(e){return e&&e.__esModule?e:{default:e}}console.log(e.default);
},{"./dotaHeroData":"GonQ"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/main.js");
},{"./sass/main.scss":"clu1","./js/main.js":"d6sW"}]},{},["Focm"], null)
//# sourceMappingURL=/test-rep/src.af6a24f5.js.map