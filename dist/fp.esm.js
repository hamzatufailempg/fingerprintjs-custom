/**
 * FingerprintJS v4.2.2 - Copyright (c) FingerprintJS, Inc, 2024 (https://fingerprint.com)
 *
 * Licensed under Business Source License 1.1 https://mariadb.com/bsl11/
 * Licensor: FingerprintJS, Inc.
 * Licensed Work: FingerprintJS browser fingerprinting library
 * Additional Use Grant: None
 * Change Date: Four years from first release for the specific version.
 * Change License: MIT, text at https://opensource.org/license/mit/ with the following copyright notice:
 * Copyright 2015-present FingerprintJS, Inc.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.withIframe = exports.transformSource = exports.loadSources = exports.isDesktopWebKit = exports.isGecko = exports.isWebKit = exports.isChromium = exports.isEdgeHTML = exports.isTrident = exports.isAndroid = exports.getFullscreenElement = exports.getWebGLContext = exports.handleApplePayError = exports.getUnstableScreenResolution = exports.getUnstableScreenFrame = exports.getUnstableCanvasFingerprint = exports.renderAudio = exports.doesBrowserSuspendAudioContext = exports.getUnstableAudioFingerprint = exports.sources = exports.prepareForSources = exports.murmurX64Hash128 = exports.componentsToDebugString = exports.hashComponents = exports.load = void 0;
var agent_1 = require("./agent");
Object.defineProperty(exports, "load", { enumerable: true, get: function () { return agent_1.load; } });
Object.defineProperty(exports, "hashComponents", { enumerable: true, get: function () { return agent_1.hashComponents; } });
Object.defineProperty(exports, "componentsToDebugString", { enumerable: true, get: function () { return agent_1.componentsToDebugString; } });
var hashing_1 = require("./utils/hashing");
// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
exports.default = { load: agent_1.load, hashComponents: agent_1.hashComponents, componentsToDebugString: agent_1.componentsToDebugString };
// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
exports.murmurX64Hash128 = hashing_1.x64hash128;
var agent_2 = require("./agent");
Object.defineProperty(exports, "prepareForSources", { enumerable: true, get: function () { return agent_2.prepareForSources; } });
var sources_1 = require("./sources");
Object.defineProperty(exports, "sources", { enumerable: true, get: function () { return sources_1.sources; } });
var audio_1 = require("./sources/audio");
Object.defineProperty(exports, "getUnstableAudioFingerprint", { enumerable: true, get: function () { return audio_1.getUnstableAudioFingerprint; } });
Object.defineProperty(exports, "doesBrowserSuspendAudioContext", { enumerable: true, get: function () { return audio_1.doesBrowserSuspendAudioContext; } });
Object.defineProperty(exports, "renderAudio", { enumerable: true, get: function () { return audio_1.renderAudio; } });
var canvas_1 = require("./sources/canvas");
Object.defineProperty(exports, "getUnstableCanvasFingerprint", { enumerable: true, get: function () { return canvas_1.getUnstableCanvasFingerprint; } });
var screen_frame_1 = require("./sources/screen_frame");
Object.defineProperty(exports, "getUnstableScreenFrame", { enumerable: true, get: function () { return screen_frame_1.getUnstableScreenFrame; } });
var screen_resolution_1 = require("./sources/screen_resolution");
Object.defineProperty(exports, "getUnstableScreenResolution", { enumerable: true, get: function () { return screen_resolution_1.getUnstableScreenResolution; } });
var apple_pay_1 = require("./sources/apple_pay");
Object.defineProperty(exports, "handleApplePayError", { enumerable: true, get: function () { return apple_pay_1.getStateFromError; } });
var webgl_1 = require("./sources/webgl");
Object.defineProperty(exports, "getWebGLContext", { enumerable: true, get: function () { return webgl_1.getWebGLContext; } });
var browser_1 = require("./utils/browser");
Object.defineProperty(exports, "getFullscreenElement", { enumerable: true, get: function () { return browser_1.getFullscreenElement; } });
Object.defineProperty(exports, "isAndroid", { enumerable: true, get: function () { return browser_1.isAndroid; } });
Object.defineProperty(exports, "isTrident", { enumerable: true, get: function () { return browser_1.isTrident; } });
Object.defineProperty(exports, "isEdgeHTML", { enumerable: true, get: function () { return browser_1.isEdgeHTML; } });
Object.defineProperty(exports, "isChromium", { enumerable: true, get: function () { return browser_1.isChromium; } });
Object.defineProperty(exports, "isWebKit", { enumerable: true, get: function () { return browser_1.isWebKit; } });
Object.defineProperty(exports, "isGecko", { enumerable: true, get: function () { return browser_1.isGecko; } });
Object.defineProperty(exports, "isDesktopWebKit", { enumerable: true, get: function () { return browser_1.isDesktopWebKit; } });
var entropy_source_1 = require("./utils/entropy_source");
Object.defineProperty(exports, "loadSources", { enumerable: true, get: function () { return entropy_source_1.loadSources; } });
Object.defineProperty(exports, "transformSource", { enumerable: true, get: function () { return entropy_source_1.transformSource; } });
var dom_1 = require("./utils/dom");
Object.defineProperty(exports, "withIframe", { enumerable: true, get: function () { return dom_1.withIframe; } });
