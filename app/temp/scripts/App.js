/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _streamUrls = __webpack_require__(2);

var _streamUrls2 = _interopRequireDefault(_streamUrls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectStation = function () {
  function SelectStation() {
    _classCallCheck(this, SelectStation);

    this.urls = _streamUrls2.default;
    this.audioSrc = document.getElementById('audioSrc');
    this.programScreen = document.getElementById('radio-player__program-screen');
    this.radioPrograms = document.querySelectorAll('.program-btn');
    this.soundSpectrum = document.getElementById('sound-spectrum');
    this.events();
  }

  _createClass(SelectStation, [{
    key: 'events',
    value: function events() {
      this.selectProgramEvent();
    }
  }, {
    key: 'selectProgramEvent',
    value: function selectProgramEvent() {
      var _this = this;

      // This event is checking which button was clicked and takes data-program="" attribute.
      // After that it call setProgramSrc method which will set src URL
      // from streamUrls.js equal to data-program attribute.
      Array.from(this.radioPrograms).forEach(function (radioProgram) {
        radioProgram.addEventListener('click', function (e) {
          _this.program = e.currentTarget;
          _this.programName = _this.program.getAttribute('data-program');
          _this.currentProgramName = _this.audioSrc.getAttribute('data-current-program');
          _this.setProgramSrc(_this.programName);
          _this.showOnScreen(_this.programName, _this.currentProgramName);
          if (_this.programName === _this.currentProgramName) {
            _this.playStopRadio();
          } else {
            _this.isPlaying = false;
            _this.playStopRadio();
          }
        }, false);
      });
    }
  }, {
    key: 'setProgramSrc',
    value: function setProgramSrc(programName) {
      this.audioSrc.setAttribute('src', this.urls[programName]);
      this.audioSrc.setAttribute('data-current-program', programName);
    }
  }, {
    key: 'playStopRadio',
    value: function playStopRadio() {
      if (this.isPlaying) {
        this.isPlaying = false;
        this.stopRadio();
        this.removeCurrentClass();
        this.removeSpectrumAnimation();
      } else {
        this.isPlaying = true;
        this.playRadio();
        this.removeCurrentClass();
        this.addCurrentClass();
        this.addSpectrumAnimation();
      }
    }
  }, {
    key: 'playRadio',
    value: function playRadio() {
      this.audioSrc.play();
    }
  }, {
    key: 'stopRadio',
    value: function stopRadio() {
      this.audioSrc.pause();
      // prevent downloading stream from source when radio is stoped.
      this.audioSrc.setAttribute('src', '');
    }
  }, {
    key: 'removeCurrentClass',
    value: function removeCurrentClass() {
      this.currentProgramClass = document.getElementsByClassName('program-btn--current');
      while (this.currentProgramClass.length) {
        this.currentProgramClass[0].classList.remove('program-btn--current');
      }
    }
  }, {
    key: 'addCurrentClass',
    value: function addCurrentClass() {
      this.program.className += ' program-btn--current';
    }
  }, {
    key: 'removeSpectrumAnimation',
    value: function removeSpectrumAnimation() {
      this.soundSpectrum.classList.remove('icon--visible');
    }
  }, {
    key: 'addSpectrumAnimation',
    value: function addSpectrumAnimation() {
      this.soundSpectrum.classList.add('icon--visible');
    }
  }, {
    key: 'showOnScreen',
    value: function showOnScreen(programName, currentProgramName) {
      if (programName === currentProgramName) {
        this.programScreen.classList.toggle('radio-player__program-screen--' + programName);
      } else {
        this.programScreen.classList.remove('radio-player__program-screen--' + currentProgramName);
        this.programScreen.classList.add('radio-player__program-screen--' + programName);
      }
    }
  }]);

  return SelectStation;
}();

exports.default = SelectStation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VolumeControl = function () {
  function VolumeControl() {
    _classCallCheck(this, VolumeControl);

    this.volumeRange = document.getElementById('volume-control__volume');
    this.volumeSpeaker = document.getElementById('volume-control__speaker');
    this.volumeRangeEvents();
    this.toggleVolumeRangeEvent();
  }

  _createClass(VolumeControl, [{
    key: 'volumeRangeEvents',
    value: function volumeRangeEvents() {
      this.volumeRange.addEventListener('change', this.rangeUpdate);
      this.volumeRange.addEventListener('mousemove', this.rangeUpdate);
    }
  }, {
    key: 'rangeUpdate',
    value: function rangeUpdate() {
      this.audioSrc = document.getElementById('audioSrc');
      this.audioSrc[this.name] = this.value;
    }
  }, {
    key: 'toggleVolumeRangeEvent',
    value: function toggleVolumeRangeEvent() {
      this.volumeSpeaker.addEventListener('click', this.toggleVolumeRange.bind(this));
    }
  }, {
    key: 'toggleVolumeRange',
    value: function toggleVolumeRange() {
      this.volumeRange.classList.toggle('volume-control__volume--visible');
      this.volumeSpeaker.classList.toggle('volume-control__speaker--dark');
    }
  }]);

  return VolumeControl;
}();

exports.default = VolumeControl;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var streamUrls = {
  program1: 'http://mp3.polskieradio.pl:8900/;stream',
  program2: 'http://mp3.polskieradio.pl:8902/;stream',
  program3: 'http://mp3.polskieradio.pl:8904/;stream',
  program4: 'http://mp3.polskieradio.pl:8906/;stream'
};

exports.default = streamUrls;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SelectStation = __webpack_require__(0);

var _SelectStation2 = _interopRequireDefault(_SelectStation);

var _VolumeControl = __webpack_require__(1);

var _VolumeControl2 = _interopRequireDefault(_VolumeControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectStation = new _SelectStation2.default();
var volumeControl = new _VolumeControl2.default();

/***/ })
/******/ ]);