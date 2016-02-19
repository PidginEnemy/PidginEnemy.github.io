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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* STYLES */

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(6);

	__webpack_require__(11);

	__webpack_require__(24);

	/* JS */


	var catMail = angular.module('catMail', ['ui.router', 'angular-storage', 'ui', 'login', 'mail', 'user']);

	catMail.config(["$httpProvider", "$stateProvider", "$urlRouterProvider", "storeProvider", function ($httpProvider, $stateProvider, $urlRouterProvider, storeProvider) {

		//$httpProvider.interceptors.push('LoginInterceptor');
		$urlRouterProvider.otherwise('/login');

		storeProvider.setStore('sessionStorage');
	}]);

	catMail.run(["$rootScope", "$state", "LoginService", function ($rootScope, $state, LoginService) {

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {

			if (toState.name != 'login' && !LoginService.isAuthorized()) {
				event.preventDefault();
				alert('Please, login');
				$state.go('login');
			} else if (toState.name == 'login' && LoginService.isAuthorized()) {
				event.preventDefault();
				$state.go('mail.list', { box: 'inbox' });
			}
		});
	}]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cmNavigationDirective = __webpack_require__(3);

	var _cmNavigationDirective2 = _interopRequireDefault(_cmNavigationDirective);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ui = angular.module('ui', []);

	ui.directive('cmNavigation', _cmNavigationDirective2.default);

	exports.default = ui;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _cmNavigationTpl = __webpack_require__(4);

	var _cmNavigationTpl2 = _interopRequireDefault(_cmNavigationTpl);

	var _cmNavigationController = __webpack_require__(5);

	var _cmNavigationController2 = _interopRequireDefault(_cmNavigationController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cmNavigation = function cmNavigation() {
		return {
			restrict: 'E',
			template: _cmNavigationTpl2.default,
			controller: _cmNavigationController2.default,
			controllerAs: 'cmNavCtrl'
		};
	};

	exports.default = cmNavigation;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<nav class=\"navbar navbar-inverse navbar-fixed-top\"> <div class=\"container\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\"> <span class=\"sr-only\">Toggle navigation</span>\n<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span> </button>\n<a ui-sref=\"mail.list({ box:'inbox' })\"><span class=\"navbar-logo glyphicon glyphicon-envelope\"></span></a>\n<a class=\"navbar-brand\" ui-sref=\"mail.list({ box:'inbox' })\">CatMail</a> </div> <div id=\"navbar\" class=\"collapse navbar-collapse\"> <ul class=\"nav navbar-nav\"> <li ng-class=\"{ 'active': cmNavCtrl.state.current.name.indexOf('mail') != -1 }\"><a ui-sref=\"mail.list({ box: 'inbox' })\">Mails</a></li> <li ng-class=\"{ 'active': cmNavCtrl.state.current.name.indexOf('user') != -1 }\"><a ui-sref=\"user.list\">Users</a></li> </ul> <a class=\"navbar-exit\" href=\"#\" ng-click=\"cmNavCtrl.logout()\">Logout</a> </div> </div> </nav>";
	ngModule.run(["$templateCache",function(c){c.put("layout/cm-navigation/cm-navigation.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var CMNavigationController = function CMNavigationController($state, LoginService) {
		this.state = $state;
		this.logout = function () {
			LoginService.logout();
		};
	};

	exports.default = CMNavigationController;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _loginDirective = __webpack_require__(7);

	var _loginDirective2 = _interopRequireDefault(_loginDirective);

	var _loginService = __webpack_require__(10);

	var _loginService2 = _interopRequireDefault(_loginService);

	var _loginController = __webpack_require__(9);

	var _loginController2 = _interopRequireDefault(_loginController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var login = angular.module('login', []);

	login.config(["$stateProvider", function ($stateProvider) {

		$stateProvider.state('login', {
			url: '/login',
			template: '<login></login>'
		});
	}]);

	login.directive('login', _loginDirective2.default);
	login.service('LoginService', _loginService2.default);
	login.controller('LoginController', _loginController2.default);

	exports.default = login;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _loginTpl = __webpack_require__(8);

	var _loginTpl2 = _interopRequireDefault(_loginTpl);

	var _loginController = __webpack_require__(9);

	var _loginController2 = _interopRequireDefault(_loginController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var login = function login() {
		return {
			restrict: 'E',
			template: _loginTpl2.default,
			controller: _loginController2.default,
			controllerAs: 'loginCtrl'
		};
	};

	exports.default = login;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"login-page\"> <div class=\"container text-center\"> <form class=\"form-signin clearfix\"> <div class=\"form-signin-logo clearfix\"> <a href=\"#\"><span class=\"navbar-logo glyphicon glyphicon-envelope\"></span></a>\n<a href=\"#\" class=\"navbar-brand\">CatMail</a> </div> <div class=\"form-group\"> <label for=\"loginName\">Username</label> <input type=\"text\" id=\"loginName\" class=\"form-control\" placeholder=\"Введите логин\" autofocus=\"\" ng-model=\"loginCtrl.credits.name\"> </div> <div class=\"form-group\"> <label for=\"loginPassword\">Pasword</label> <input type=\"password\" id=\"loginPassword\" class=\"form-control\" placeholder=\"Введите пароль\" ng-model=\"loginCtrl.credits.password\"> </div> <button class=\"btn btn-lg btn-default\" ng-click=\"loginCtrl.login()\" type=\"submit\">Login</button> </form> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("login/views/login.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var LoginController = function LoginController(LoginService, $state) {
		var _this = this;

		this.credits = {
			name: null,
			password: null
		};

		this.login = function () {
			if (_this.credits.name && _this.credits.password) {
				if (LoginService.checkCredits(_this.credits)) $state.go('mail.list', { box: 'inbox' });else alert('Вы ввели неправильный логин или пароль');
			} else {
				alert('Введите логин и пароль');
			}
		};
	};

	exports.default = LoginController;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var LoginService = function LoginService(store) {

		var authStatus = false,
		    storage = localStorage || window.localStorage;

		this.checkCredits = function (credits) {
			if (credits && credits.name && credits.password && credits.name == 'admin' && credits.password == '123') {
				authStatus = true;
				storage.clear(); /* зачистим старые данные (якобы новая сессия и пора получить данные с сервера) */
			} else {
					authStatus = false;
				}
			store.set('user', { username: credits.name });

			return authStatus;
		};

		this.isAuthorized = function () {
			var user = store.get('user');
			if (user) return true;else return false;
		};

		this.logout = function () {
			store.remove('user');
		};
	};

	exports.default = LoginService;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mailDirective = __webpack_require__(12);

	var _mailDirective2 = _interopRequireDefault(_mailDirective);

	var _mailListDirective = __webpack_require__(14);

	var _mailListDirective2 = _interopRequireDefault(_mailListDirective);

	var _mailListBoxDirective = __webpack_require__(17);

	var _mailListBoxDirective2 = _interopRequireDefault(_mailListBoxDirective);

	var _mailDetailDirective = __webpack_require__(20);

	var _mailDetailDirective2 = _interopRequireDefault(_mailDetailDirective);

	var _mailListService = __webpack_require__(23);

	var _mailListService2 = _interopRequireDefault(_mailListService);

	var _mailListController = __webpack_require__(16);

	var _mailListController2 = _interopRequireDefault(_mailListController);

	var _mailDetailController = __webpack_require__(22);

	var _mailDetailController2 = _interopRequireDefault(_mailDetailController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mail = angular.module('mail', []);

	mail.config(["$stateProvider", function ($stateProvider) {

		$stateProvider.state('mail', {
			abstract: true,
			url: '',
			template: '<mail></mail>',
			resolve: {
				mailList: ["MailListService", function mailList(MailListService) {
					return MailListService.getAll();
				}],
				userList: ["UserListService", function userList(UserListService) {
					return UserListService.getAll();
				}]
			}
		}).state('mail.list', {
			url: '/mail/:box',
			template: '<mail-list></mail-list>'
		}).state('mail.detail', {
			url: '/mail/:box/:mail_id',
			template: '<mail-detail></mail-detail>'
		});
	}]);

	mail.directive('mail', _mailDirective2.default);
	mail.directive('mailList', _mailListDirective2.default);
	mail.directive('mailListBox', _mailListBoxDirective2.default);
	mail.directive('mailDetail', _mailDetailDirective2.default);
	mail.service('MailListService', _mailListService2.default);
	mail.controller('MailListController', _mailListController2.default);
	mail.controller('MailDetailController', _mailDetailController2.default);

	exports.default = mail;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mailTpl = __webpack_require__(13);

	var _mailTpl2 = _interopRequireDefault(_mailTpl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mail = function mail() {
		return {
			restrict: 'E',
			template: _mailTpl2.default
		};
	};

	exports.default = mail;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<cm-navigation></cm-navigation> <div class=\"page\"> <div class=\"container page-inner\"> <div class=\"row\"> <div class=\"col-xs-12 col-sm-3 col-md-2\"> <mail-list-box></mail-list-box> </div> <div class=\"col-xs-12 col-sm-9 col-md-10\"> <ui-view></ui-view> </div> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/mail.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mailListTpl = __webpack_require__(15);

	var _mailListTpl2 = _interopRequireDefault(_mailListTpl);

	var _mailListController = __webpack_require__(16);

	var _mailListController2 = _interopRequireDefault(_mailListController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailList = function mailList() {
		return {
			restrict: 'E',
			template: _mailListTpl2.default,
			controller: _mailListController2.default,
			controllerAs: 'mailListCtrl'
		};
	};

	exports.default = mailList;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<table class=\"table table-hover mail-list-table\"> <tbody> <tr ng-repeat=\"mail in mailListCtrl.mailList | orderBy:dtReceived\" ng-class=\"{ unread: mailListCtrl.isMailUnread(mail) }\" ng-click=\"mailListCtrl.mailItemOnClick(mail._id)\"> <td><img ng-src=\"{{mail.picture}}\" class=\"img-circle\"/></td> <td>{{mail.name}}</td> <td>{{mail.subject}}</td> <td><span ng-if=\"mail.withAttachments\" class=\"glyphicon glyphicon-paperclip\"></span></td> <td>{{mail.dtReceived | date:'dd.MM.yy'}}</td> </tr> </tbody> </table>";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/mail-list.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var MailListController = function MailListController($state, $stateParams, MailListService) {
		var _this = this;

		this.mailList = []; // массив для писем

		/* получение списка писем  */
		this.getMailList = function () {
			var box = $stateParams.box || 'inbox';
			MailListService.getMailsFromBox(box).then(function (res) {
				if (angular.isArray(res)) _this.mailList = res;
			});
		};

		/* проверить прочитанное ли письмо */
		this.isMailUnread = function (mail) {
			return mail.isNew && mail.mailBoxType == 'inbox' ? true : false;
		};

		this.mailItemOnClick = function (id) {
			$state.go('mail.detail', { box: $stateParams.box, mail_id: id });
		};

		this.mailItemCheckboxClick = function () {
			console.log('1');
		};

		/* получим письма */
		this.getMailList();
	};

	exports.default = MailListController;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mailListBoxTpl = __webpack_require__(18);

	var _mailListBoxTpl2 = _interopRequireDefault(_mailListBoxTpl);

	var _mailListBoxController = __webpack_require__(19);

	var _mailListBoxController2 = _interopRequireDefault(_mailListBoxController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailListBox = function mailListBox() {
		return {
			restrict: 'E',
			template: _mailListBoxTpl2.default,
			bindToController: true,
			controller: _mailListBoxController2.default,
			controllerAs: 'mailListBoxCtrl'
		};
	};

	exports.default = mailListBox;

/***/ },
/* 18 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"mail-list-filter\"> <button class=\"btn btn-default btn-block\" ui-sref=\"mail.list({ box:'inbox' })\" ui-sref-active=\"active\"> <span class=\"glyphicon glyphicon-download\"></span>\nInbox <span class=\"badge\">{{mailListBoxCtrl.countNewInbox}}</span> </button>\n<button class=\"btn btn-default btn-block\" ui-sref=\"mail.list({ box:'outbox' })\" ui-sref-active=\"active\"> <span class=\"glyphicon glyphicon-upload\"></span>\nOutbox </button>\n<button class=\"btn btn-default btn-block\" ui-sref=\"mail.list({ box:'spam' })\" ui-sref-active=\"active\"> <span class=\"glyphicon glyphicon-ban-circle\"></span>\nSpam </button>\n<button class=\"btn btn-default btn-block\" ui-sref=\"mail.list({ box:'trash' })\" ui-sref-active=\"active\"> <span class=\"glyphicon glyphicon-trash\"></span>\nTrash </button> </div>";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/mail-list-box.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var MailListBoxController = function MailListBoxController(MailListService) {
		this.countNewInbox = MailListService.getCountUnreadMails();
	};

	exports.default = MailListBoxController;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mailDetailTpl = __webpack_require__(21);

	var _mailDetailTpl2 = _interopRequireDefault(_mailDetailTpl);

	var _mailDetailController = __webpack_require__(22);

	var _mailDetailController2 = _interopRequireDefault(_mailDetailController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailDetail = function mailDetail() {
		return {
			restrict: 'E',
			template: _mailDetailTpl2.default,
			controller: _mailDetailController2.default,
			controllerAs: 'mailDetailCtrl'
		};
	};

	exports.default = mailDetail;

/***/ },
/* 21 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"col-xs-12 mail-detail-back\"> <a class=\"btn btn-default\" title=\"Back to mail list\" ng-click=\"mailDetailCtrl.backToList()\"> <span class=\"glyphicon glyphicon-arrow-left\"></span> </a> </div> <div class=\"col-xs-12\"> <div class=\"pull-left\"> <img class=\"img-circle\" src=\"{{mailDetailCtrl.mail.picture}}\"/>\n<strong>{{mailDetailCtrl.mail.name}}</strong> <p>{{mailDetailCtrl.mail.email}}</p> <p>{{mailDetailCtrl.mail.dtReceived | date:'dd.MM.yy'}}</p> </div> </div> <div class=\"col-xs-12\"> <p>{{mailDetailCtrl.mail.text}}</p> <div ng-if=\"mailDetailCtrl.mail.withAttachments\"> <strong>Attachment:</strong><br/> <img ng-src=\"http://thecatapi.com/api/images/get?format=src&type=gif&size=small&guid={{mailDetailCtrl.mail.guid}}\"/> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/mail-detail.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var MailDetailCtrl = function MailDetailCtrl($state, $stateParams, MailListService) {
		var _this = this;

		this.mail = null;

		this.getMail = function () {
			var id = $stateParams.mail_id;
			_this.mail = MailListService.getMailById(id);
		};

		this.backToList = function () {
			$state.go('mail.list', { box: $stateParams.box });
		};

		this.getMail();
	};

	exports.default = MailDetailCtrl;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MailListService = function MailListService($http, $q) {

	  var mailServiceUrl = 'http://www.json-generator.com/api/json/get/cfnrnjDxMy?indent=2',
	      storage = localStorage || window.localStorage;

	  var getMailListFromStorage = function getMailListFromStorage() {
	    return JSON.parse(storage['mailList']);
	  };

	  var setMailListToStorage = function setMailListToStorage(list) {
	    storage.setItem('mailList', JSON.stringify(list));
	  };

	  var prepareMailList = function prepareMailList(list) {
	    for (var i in list) {
	      list[i].dtReceived = new Date(list[i].dtReceived);
	    }
	    return list;
	  };

	  /* get mail list from API or from storage */
	  this.getAll = function () {

	    if (storage.getItem('mailList')) {

	      var mailList = getMailListFromStorage();
	      return $q.resolve(mailList);
	    } else {

	      return $http.get(mailServiceUrl).then(function (res) {
	        var mailList = res.data;
	        var preparedList = prepareMailList(mailList);
	        setMailListToStorage(preparedList);
	        return preparedList;
	      }, function (err) {
	        return err;
	      });
	    }
	  };

	  /* get mails from current box */
	  this.getMailsFromBox = function (box) {
	    var mailList = getMailListFromStorage(),
	        mailListFiltered = mailList.filter(function (item) {
	      return item.mailBoxType == box;
	    });
	    return $q.resolve(mailListFiltered);
	  };

	  /* get mail from storage by id */
	  this.getMailById = function (id) {
	    var mailList = getMailListFromStorage(),
	        mail = mailList.filter(function (item) {
	      return item._id == id;
	    });
	    return mail[0];
	  };

	  /* get count unread mails */
	  this.getCountUnreadMails = function () {
	    var mailList = getMailListFromStorage(),
	        mailsF = mailList.filter(function (item) {
	      return item.mailBoxType == 'inbox' && item.isNew;
	    });
	    return mailsF.length;
	  };
	};

	exports.default = MailListService;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _userDirective = __webpack_require__(25);

	var _userDirective2 = _interopRequireDefault(_userDirective);

	var _userListDirective = __webpack_require__(27);

	var _userListDirective2 = _interopRequireDefault(_userListDirective);

	var _userEditDirective = __webpack_require__(30);

	var _userEditDirective2 = _interopRequireDefault(_userEditDirective);

	var _userListService = __webpack_require__(33);

	var _userListService2 = _interopRequireDefault(_userListService);

	var _userListController = __webpack_require__(29);

	var _userListController2 = _interopRequireDefault(_userListController);

	var _userEditController = __webpack_require__(32);

	var _userEditController2 = _interopRequireDefault(_userEditController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var user = angular.module('user', []);

	user.config(["$stateProvider", function ($stateProvider) {

		$stateProvider.state('user', {
			abstract: true,
			url: '',
			template: '<user></user>'
		}).state('user.list', {
			url: '/user',
			template: '<user-list></user-list>'
		}).state('user.edit', {
			url: '/user/:user_id',
			template: '<user-edit></user-edit>'
		});
	}]);

	user.directive('user', _userDirective2.default);
	user.directive('userList', _userListDirective2.default);
	user.directive('userEdit', _userEditDirective2.default);
	user.service('UserListService', _userListService2.default);
	user.controller('UserListController', _userListController2.default);
	user.controller('UserEditController', _userEditController2.default);

	exports.default = user;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _userTpl = __webpack_require__(26);

	var _userTpl2 = _interopRequireDefault(_userTpl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var user = function user() {
		return {
			restrict: 'E',
			template: _userTpl2.default
		};
	};

	exports.default = user;

/***/ },
/* 26 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<cm-navigation></cm-navigation> <div class=\"page\"> <div class=\"container page-inner\"> <div class=\"row\"> <div class=\"col-xs-12\"> <ui-view></ui-view> </div> </div> </div> </div> <div></div>";
	ngModule.run(["$templateCache",function(c){c.put("user/views/user.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _userListTpl = __webpack_require__(28);

	var _userListTpl2 = _interopRequireDefault(_userListTpl);

	var _userListController = __webpack_require__(29);

	var _userListController2 = _interopRequireDefault(_userListController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var userList = function userList() {
		return {
			restrict: 'E',
			template: _userListTpl2.default,
			controller: _userListController2.default,
			controllerAs: 'userListCtrl'
		};
	};

	exports.default = userList;

/***/ },
/* 28 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<table class=\"table table-hover user-list-table\"> <tbody> <tr ng-repeat=\"user in userListCtrl.usersList\" ng-click=\"userListCtrl.userOnClick(user.id)\"> <td> <img src=\"{{user.picture.small}}\" class=\"img-circle\"/> </td> <td>{{user.surName}} {{user.firstName}}</td> <td>{{user.email}}</td> </tr> </tbody> </table>";
	ngModule.run(["$templateCache",function(c){c.put("user/views/user-list.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var UserListController = function UserListController($state, UserListService) {
		var _this = this;

		this.usersList = [];

		/* получим юзверей */
		this.getUsers = function () {
			UserListService.getUsersFromStorage().then(function (res) {
				if (angular.isArray(res)) _this.usersList = res;
			});
		};

		this.userOnClick = function (id) {
			$state.go('user.edit', { user_id: id });
		};

		this.getUsers();
	};

	exports.default = UserListController;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _userEditTpl = __webpack_require__(31);

	var _userEditTpl2 = _interopRequireDefault(_userEditTpl);

	var _userEditController = __webpack_require__(32);

	var _userEditController2 = _interopRequireDefault(_userEditController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var userEdit = function userEdit() {
		return {
			restrict: 'E',
			template: _userEditTpl2.default,
			controller: _userEditController2.default,
			controllerAs: 'userEditCtrl'
		};
	};

	exports.default = userEdit;

/***/ },
/* 31 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"row\"> <div class=\"col-xs-12 col-md-6 center-block\" style=\"float:none\"> <a ui-sref=\"user.list\" class=\"btn btn-default\" title=\"Back to users list\"> <span class=\"glyphicon glyphicon-arrow-left\"></span> </a> <h2 class=\"text-center\">User's data</h2> <form> <div class=\"form-group text-center\"> <img src=\"{{userEditCtrl.user.picture.medium}}\" class=\"img-circle\"/> </div> <div class=\"form-group\"> <label>Surname</label> <input class=\"form-control\" type=\"text\" ng-model=\"userEditCtrl.user.surName\"/> </div> <div class=\"form-group\"> <label>Firstname</label> <input class=\"form-control\" type=\"text\" ng-model=\"userEditCtrl.user.firstName\"/> </div> <div class=\"form-group\"> <label>Email</label> <input class=\"form-control\" type=\"text\" ng-model=\"userEditCtrl.user.email\"/> </div> <div class=\"form-group\"> <label>Phone</label> <input class=\"form-control\" type=\"text\" ng-model=\"userEditCtrl.user.phone\"/> </div> <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"userEditCtrl.saveUser()\">Save</button> </form> <div class=\"alert alert-success text-center user-status-msg\" role=\"alert\" ng-show=\"userEditCtrl.statusMsg\"> <strong>{{userEditCtrl.statusMsg}}</strong> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("user/views/user-edit.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var UserEditController = function UserEditController($timeout, $state, $stateParams, UserListService) {
		var _this = this;

		this.user = null;
		this.statusMsg = null;

		this.getUser = function () {
			var id = $stateParams.user_id;
			UserListService.getUserById(id).then(function (res) {
				_this.user = res;
			});
		};

		this.saveUser = function () {
			UserListService.saveUser(_this.user).then(function (res) {
				if (!res.msg) {
					console.log(res);
					return;
				}
				_this.statusMsg = res.msg;
				$timeout(function () {
					$state.go('user.list');
				}, 800);
			});
		};

		this.getUser();
	};

	exports.default = UserEditController;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var UserListService = function UserListService($http, $q) {

	  var usersUrl = 'http://www.json-generator.com/api/json/get/bQzpeuaeiG?indent=2',
	      storage = localStorage || window.localStorage;

	  var getUsersListFromStorage = function getUsersListFromStorage() {
	    return JSON.parse(storage['usersList']);
	  };

	  var setUsersListToStorage = function setUsersListToStorage(list) {
	    storage.setItem('usersList', JSON.stringify(list));
	  };

	  this.getAll = function () {
	    if (storage.getItem('usersList')) {
	      var usersList = getUsersListFromStorage();
	      return $q.resolve(usersList);
	    } else {
	      return $http.get(usersUrl).then(function (res) {
	        setUsersListToStorage(res.data);
	        return res.data;
	      }, function (err) {
	        return err;
	      });
	    }
	  };

	  this.getUsersFromStorage = function () {
	    var usersList = getUsersListFromStorage();
	    return $q.resolve(usersList);
	  };

	  this.getUserById = function (id) {
	    var usersList = getUsersListFromStorage(),
	        user = null;
	    for (var i in usersList) {
	      if (usersList[i].id == id) user = usersList[i];
	    }
	    return $q.resolve(user);
	  };

	  this.saveUser = function (user) {
	    var usersList = getUsersListFromStorage();
	    for (var i in usersList) {
	      if (usersList[i].id == user.id) usersList[i] = user;
	    }
	    setUsersListToStorage(usersList);
	    return $q.resolve({ msg: 'Succesfull saving' });
	  };
	};

	exports.default = UserListService;

/***/ }
/******/ ]);