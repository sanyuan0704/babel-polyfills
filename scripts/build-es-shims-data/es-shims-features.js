"use strict";

module.exports = {
  globalThis: "globalThis",
  parseInt: "Miscellaneous / parseInt ignores leading zeros",
  AggregateError: "Promise.any / AggregateError",
  "Array.from": "Array static methods / Array.from",
  "Array.of": "Array static methods / Array.of",
  "Array.prototype.at": "`.item` method / Array.prototype.item",
  "Array.prototype.concat": {
    features: [
      "well-known symbols / Symbol.isConcatSpreadable, non-spreadable array",
      "well-known symbols / Symbol.isConcatSpreadable, spreadable object with poisoned getter",
    ],
  },
  "Array.prototype.copyWithin":
    "Array.prototype methods / Array.prototype.copyWithin",
  "Array.prototype.entries":
    "Array.prototype methods / Array.prototype.entries",
  "Array.prototype.every": "Array methods / Array.prototype.every",
  "Array.prototype.filter": "Array methods / Array.prototype.filter",
  "Array.prototype.find": "Array.prototype methods / Array.prototype.find",
  "Array.prototype.findIndex":
    "Array.prototype methods / Array.prototype.findIndex",
  "Array.prototype.findLast": "Array find from last / Array.prototype.findLast",
  "Array.prototype.findLastIndex":
    "Array find from last / Array.prototype.findLastIndex",
  "Array.prototype.flat":
    "Array.prototype.{flat, flatMap} / Array.prototype.flat",
  "Array.prototype.flatMap":
    "Array.prototype.{flat, flatMap} / Array.prototype.flatMap",
  "Array.prototype.includes": "Array.prototype.includes",
  "Array.prototype.indexOf": "Array methods / Array.prototype.indexOf",
  "Array.prototype.keys": "Array.prototype methods / Array.prototype.keys",
  "Array.prototype.lastIndexOf": "Array methods / Array.prototype.lastIndexOf",
  "Array.prototype.map": "Array methods / Array.prototype.map",
  "Array.prototype.reduce": "Array methods / Array.prototype.reduce",
  "Array.prototype.reduceRight": "Array methods / Array.prototype.reduceRight",
  "Array.prototype.some": "Array methods / Array.prototype.some",
  "Array.prototype.splice": "Array.prototype methods / Array.prototype.splice",
  //"Array.prototype.toReversed": MISSING,
  //"Array.prototype.toSpliced": MISSING,
  //"Array.prototype.toSorted": MISSING,
  "Array.prototype.values": "Array.prototype methods / Array.prototype.values",
  //"Array.prototype.with": MISSING,
  "Error cause": "Error.cause property",
  "Function.prototype.name": {
    features: [
      'function "name" property / function statements',
      'function "name" property / function expressions',
    ],
  },
  "Math.acosh": "Math methods / Math.acosh",
  "Math.atanh": "Math methods / Math.atanh",
  "Math.clz32": "Math methods / Math.clz32",
  "Math.cbrt": "Math methods / Math.cbrt",
  "Math.fround": "Math methods / Math.fround",
  "Math.imul": "Math methods / Math.imul",
  "Math.log10": "Math methods / Math.log10",
  "Math.log1p": "Math methods / Math.log1p",
  "Math.sign": "Math methods / Math.sign",
  "Number.isFinite": "Number properties / Number.isFinite",
  "Number.isInteger": "Number properties / Number.isInteger",
  "Number.isSafeInteger": "Number properties / Number.isSafeInteger",
  "Number.isNaN": "Number properties / Number.isNaN",
  "Number.parseFloat": "Number properties / Number.parseFloat",
  "Number.parseInt": "Number properties / Number.parseInt",
  "Number.prototype.toExponential": {
    features: [
      "Number methods / Number.prototype.toExponential rounds properly",
      "Number methods / Number.prototype.toExponential throws on ±Infinity fractionDigits",
    ],
  },
  "Object.assign": "Object static methods / Object.assign",
  "Object.is": "Object static methods / Object.is",
  "Object.defineProperties": "Object static methods / Object.defineProperties",
  "Object.entries": "Object static methods / Object.entries",
  "Object.fromEntries": "Object.fromEntries",
  "Object.getOwnPropertyDescriptors":
    "Object static methods / Object.getOwnPropertyDescriptors",
  "Object.getPrototypeOf": "Object static methods / Object.getPrototypeOf",
  "Object.hasOwn": "Object.hasOwn",
  "Object.values": "Object static methods / Object.values",
  "Promise.allSettled": "Promise.allSettled",
  "Promise.any": "Promise.any",
  "Promise.try": [],
  "Promise.prototype.finally": "Promise.prototype.finally",
  "Reflect.apply": "Reflect / Reflect.apply",
  "Reflect.getPrototypeOf": "Reflect / Reflect.getPrototypeOf",
  "Reflect.ownKeys": "Reflect / Reflect.ownKeys",
  "RegExp.prototype.flags":
    "RegExp.prototype properties / RegExp.prototype.flags",
  "String.fromCodePoint": "String static methods / String.fromCodePoint",
  "String.raw": "String static methods / String.raw",
  "String.prototype.codePointAt":
    "String.prototype methods / String.prototype.codePointAt",
  "String.prototype.endsWith":
    "String.prototype methods / String.prototype.endsWith",
  "String.prototype.includes":
    "String.prototype methods / String.prototype.includes",
  "String.prototype.at": "`.item` method / String.prototype.item",
  "String.prototype.matchAll": "String.prototype.matchAll",
  "String.prototype.padEnd": "String padding / String.prototype.padEnd",
  "String.prototype.padStart": "String padding / String.prototype.padStart",
  "String.prototype.repeat":
    "String.prototype methods / String.prototype.repeat",
  "String.prototype.replaceAll": "String.prototype.replaceAll",
  "String.prototype.split":
    "String properties and methods / String.prototype.split",
  "String.prototype.startsWith":
    "String.prototype methods / String.prototype.startsWith",
  "String.prototype.trim":
    "String properties and methods / String.prototype.trim",
  "String.prototype.trimEnd": "string trimming / String.prototype.trimEnd",
  "String.prototype.trimLeft": "string trimming / String.prototype.trimLeft",
  "String.prototype.trimRight": "string trimming / String.prototype.trimRight",
  "String.prototype.trimStart": "string trimming / String.prototype.trimStart",
  "Symbol.prototype.description": "Symbol.prototype.description",

  // Annex B
  "String.prototype.anchor": "String.prototype HTML methods",
  "String.prototype.big": "String.prototype HTML methods",
  "String.prototype.blink": "String.prototype HTML methods",
  "String.prototype.bold": "String.prototype HTML methods",
  "String.prototype.fixed": "String.prototype HTML methods",
  "String.prototype.fontcolor": "String.prototype HTML methods",
  "String.prototype.fontsize": "String.prototype HTML methods",
  "String.prototype.italics": "String.prototype HTML methods",
  "String.prototype.link": "String.prototype HTML methods",
  "String.prototype.small": "String.prototype HTML methods",
  "String.prototype.strike": "String.prototype HTML methods",
  "String.prototype.sub": "String.prototype HTML methods",
  "String.prototype.sup": "String.prototype HTML methods",
};
