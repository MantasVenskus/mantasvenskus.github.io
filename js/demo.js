/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),

/***/ 57:
/***/ (function(module, exports) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

jQuery(document).ready(function ($) {

	$("#subscribe").submit(function (event) {
		event.preventDefault();
		var email = $("#email").val();
		$.ajax({
			method: "POST",
			url: "/api/subscribe",
			data: { email: email },
			dataType: "json"
		}).done(function (msg) {
			if (msg.result == "success") {
				$('#subscribeSuccess').modal('show');
			} else {
				$('#subscribeError').modal('show');
			}
		});
	});

	// student add teacher
	var teacher_count = 1;
	$('.student.capture .add-teachers').on('click', function() {
		var $teacher = $(this).parent().find('.add-teacher').eq(0).clone();
		$teacher.find('input').val('');
		$teacher.find('textarea').val('');
		if (teacher_count < 2) {
			$.each($teacher.find('label'), function() {
				$(this).attr('for', $(this).attr('for') +'-' + teacher_count);
			});
			$($teacher.find('input'), $teacher.find('textarea')).each(function() {
				$(this).attr('id', $(this).attr('id') + '-' + teacher_count);
			});
			$($teacher.find('input'), $teacher.find('textarea')).each(function() {
				$(this).attr('name', $(this).attr('name') + '-' + teacher_count);
			});
		} else {
			$.each($teacher.find('label'), function() {
				$(this).attr('for', $(this).attr('for').slice(0, -1) + teacher_count);
			});
			$($teacher.find('input'), $teacher.find('textarea')).each(function() {
				$(this).attr('id', $(this).attr('id').slice(0, -1) + teacher_count);
			});
			$($teacher.find('input'), $teacher.find('textarea')).each(function() {
				$(this).attr('name', $(this).attr('name').slice(0, -1) + teacher_count);
			});
		}
		teacher_count++;
		$(this).before($teacher);
	});
	$('.student.capture .capture__form').delegate('.remove-teacher', 'click', function() {
		var $removes = $(this).parent().parent().find('.remove-teacher');
		if ($removes.length < 2) {
			return;
		} else {
			$(this).parent().remove();
		}
	});
});

/***/ })

/******/ });