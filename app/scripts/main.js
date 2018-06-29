'use strict';
require('./localStoragePolyfill');
var IS_CX = false;
if (typeof chrome != 'undefined') IS_CX = chrome.windows === undefined ? false : true;
var angular                  = require('angular');
var angularTranslate         = require('angular-translate');
var angularTranslateErrorLog = require('angular-translate-handler-log');
var angularSanitize          = require('angular-sanitize');
var angularAnimate           = require('angular-animate');
var bip39                    = require('bip39');
var HDKey                    = require('hdkey');
window.hd                    = { bip39: bip39, HDKey: HDKey };
var BigNumber                = require('bignumber.js');
var Web3                     = require('web3');
window.BigNumber             = BigNumber;
window.Web3                  = Web3;
var marked                   = require('./staticJS/customMarked');
window.marked                = marked;
var ethUtil                  = require('ethereumjs-util');
ethUtil.crypto               = require('crypto');
ethUtil.Tx                   = require('ethereumjs-tx');
ethUtil.scrypt               = require('scryptsy');
ethUtil.uuid                 = require('uuid');
ethUtil.solidityCoder        = require('./solidity/coder');
ethUtil.solidityUtils        = require('./solidity/utils');
ethUtil.WAValidator          = require('wallet-address-validator');
window.ethUtil               = ethUtil;
var format                   = require('string-format');
window.format                = format;
var browser                  = require('detect-browser');
window.browser               = browser;
var Wallet                   = require('./myetherwallet');
window.Wallet                = Wallet;
var Web3Wallet               = require('./web3Wallet');
window.Web3Wallet            = Web3Wallet;
var Token                    = require('./tokenlib');
window.Token                 = Token;
var globalFuncs              = require('./globalFuncs');
window.globalFuncs           = globalFuncs;
var uiFuncs                  = require('./uiFuncs');
window.uiFuncs               = uiFuncs;
var etherUnits               = require('./etherUnits');
window.etherUnits            = etherUnits;
var ajaxReq                  = require('./ajaxReq');
window.ajaxReq               = ajaxReq;
var nodes                    = require('./nodes');
window.nodes                 = nodes;
var ethFuncs                 = require('./ethFuncs');
window.ethFuncs              = ethFuncs;
var Validator                = require('./validator');
window.Validator             = Validator;
var bity                     = require('./bity');
window.bity                  = bity;
var ens                      = require('./ens');
window.ens                   = ens;
var domainsale               = require('./domainsale');
window.domainsale            = domainsale;
var translate                = require('./translations/translate.js');
if (IS_CX) {
  var cxFuncs                = require('./cxFuncs');
  window.cxFuncs             = cxFuncs;
} else {
    var u2f                  = require('./staticJS/u2f-api');
    var ledger3              = require('./staticJS/ledger3');
    var ledgerEth            = require('./staticJS/ledger-eth');
    var trezorConnect        = require('./staticJS/trezorConnect');
    var digitalBitboxUsb     = require('./staticJS/digitalBitboxUsb');
    var digitalBitboxEth     = require('./staticJS/digitalBitboxEth');
    window.u2f               = u2f;
    window.Ledger3           = ledger3;
    window.ledgerEth         = ledgerEth;
    window.TrezorConnect     = trezorConnect.TrezorConnect;
    window.DigitalBitboxUsb  = digitalBitboxUsb;
    window.DigitalBitboxEth  = digitalBitboxEth;
}
var CustomGasMessages        = require('./customGas.js')
window.CustomGasMessages     = CustomGasMessages;
var tabsCtrl                 = require('./controllers/tabsCtrl');
var viewCtrl                 = require('./controllers/viewCtrl');
var walletGenCtrl            = require('./controllers/walletGenCtrl');
var onboardingCtrl            = require('./controllers/onboardingCtrl');
var bulkGenCtrl              = require('./controllers/bulkGenCtrl');
var decryptWalletCtrl        = require('./controllers/decryptWalletCtrl');
var viewWalletCtrl           = require('./controllers/viewWalletCtrl');
var txStatusCtrl              = require('./controllers/txStatusCtrl');
var sendTxCtrl               = require('./controllers/sendTxCtrl');
var swapCtrl                 = require('./controllers/swapCtrl');
var signMsgCtrl              = require('./controllers/signMsgCtrl');
var contractsCtrl            = require('./controllers/contractsCtrl');
var ensCtrl                  = require('./controllers/ensCtrl');
var domainsaleCtrl           = require('./controllers/domainsaleCtrl');
var footerCtrl               = require('./controllers/footerCtrl');
var offlineTxCtrl            = require('./controllers/offlineTxCtrl');
var walletBalanceCtrl        = require('./controllers/walletBalanceCtrl');
var helpersCtrl              = require('./controllers/helpersCtrl');
var tokenCreationCtrl        = require('./controllers/tokenCreation')
var globalService            = require('./services/globalService');
var walletService            = require('./services/walletService');
var blockiesDrtv             = require('./directives/blockiesDrtv');
var addressFieldDrtv         = require('./directives/addressFieldDrtv');
var QRCodeDrtv               = require('./directives/QRCodeDrtv');
var walletDecryptDrtv        = require('./directives/walletDecryptDrtv');
var cxWalletDecryptDrtv      = require('./directives/cxWalletDecryptDrtv');
var fileReaderDrtv           = require('./directives/fileReaderDrtv');
var ngClickOutDrtv           = require('./directives/ngClickOutDrtv');
var ngResizeDrtv           = require('./directives/ngResizeDrtv');
var balanceDrtv              = require('./directives/balanceDrtv');

if (IS_CX) {
  var addWalletCtrl          = require('./controllers/CX/addWalletCtrl');
  var cxDecryptWalletCtrl    = require('./controllers/CX/cxDecryptWalletCtrl');
  var myWalletsCtrl          = require('./controllers/CX/myWalletsCtrl');
  var mainPopCtrl            = require('./controllers/CX/mainPopCtrl');
  var quickSendCtrl          = require('./controllers/CX/quickSendCtrl');
}

// AIRON Imports
var walletLoadedAironDrtv    = require('./directives/Airon/walletLoadedAironDrtv');
var viewWalletAironCtrl    = require('./controllers/Airon/viewWalletAironCtrl');
var decryptWalletAironCtrl    = require('./controllers/Airon/decryptWalletAironCtrl');

var app = angular.module('mewApp', ['pascalprecht.translate', 'ngSanitize','ngAnimate']);
app.config(['$compileProvider', function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|https|mailto):/);
}]);
app.config(['$translateProvider', function($translateProvider) {
  $translateProvider.useMissingTranslationHandlerLog();
  new translate($translateProvider);
}]);
app.config(['$animateProvider', function($animateProvider) {
    $animateProvider.classNameFilter(/^no-animate$/);
}]);
app.factory('globalService', ['$http', '$httpParamSerializerJQLike', globalService]);
app.factory('walletService', walletService);

// AIRON directive
app.directive('walletLoadedAiron', walletLoadedAironDrtv);

app.directive('blockieAddress', blockiesDrtv);
app.directive('addressField', ['$compile', addressFieldDrtv]);
app.directive('qrCode', QRCodeDrtv);
app.directive('onReadFile', fileReaderDrtv);
app.directive('ngClickOut',ngClickOutDrtv);
app.directive('ngResize',ngResizeDrtv);
app.directive('walletBalanceDrtv', balanceDrtv);
app.directive('walletDecryptDrtv', walletDecryptDrtv);
app.directive('cxWalletDecryptDrtv', cxWalletDecryptDrtv);
app.controller('tabsCtrl', ['$scope', 'globalService', '$translate', '$sce', tabsCtrl]);
app.controller('viewCtrl', ['$scope', 'globalService', '$sce', viewCtrl]);
app.controller('walletGenCtrl', ['$scope', walletGenCtrl]);
app.controller('bulkGenCtrl', ['$scope', bulkGenCtrl]);
app.controller('onboardingCtrl', ['$scope', onboardingCtrl]);
app.controller('decryptWalletCtrl', ['$scope', '$sce', 'walletService', decryptWalletCtrl]);
app.controller('viewWalletCtrl', ['$scope', 'walletService', viewWalletCtrl]);
app.controller('txStatusCtrl', ['$scope', txStatusCtrl]);
app.controller('sendTxCtrl', ['$scope', '$sce', 'walletService', '$rootScope', sendTxCtrl]);
app.controller('swapCtrl', ['$scope', '$sce', 'walletService', swapCtrl]);
app.controller('signMsgCtrl', ['$scope', '$sce', 'walletService', signMsgCtrl]);
app.controller('contractsCtrl', ['$scope', '$sce', 'walletService', contractsCtrl]);
app.controller('ensCtrl', ['$scope', '$sce', 'walletService', ensCtrl]);
app.controller('domainsaleCtrl', ['$scope', '$sce', 'walletService', domainsaleCtrl]);
app.controller('footerCtrl', ['$scope', '$sce', 'globalService', footerCtrl]);
app.controller('offlineTxCtrl', ['$scope', '$sce', 'walletService', offlineTxCtrl]);
app.controller('walletBalanceCtrl', ['$scope', '$sce', '$rootScope', walletBalanceCtrl]);
app.controller('helpersCtrl', ['$scope', helpersCtrl]);
app.controller('tokenCreationCtrl', ['$scope', '$sce', 'walletService', tokenCreationCtrl]);

if (IS_CX) {
  app.controller('addWalletCtrl', ['$scope', '$sce', addWalletCtrl]);
  app.controller('myWalletsCtrl', ['$scope', '$sce','walletService', myWalletsCtrl]);
  app.controller('mainPopCtrl', ['$scope', '$sce', mainPopCtrl]);
  app.controller('quickSendCtrl', ['$scope', '$sce', quickSendCtrl]);
  app.controller('cxDecryptWalletCtrl', ['$scope', '$sce', 'walletService', cxDecryptWalletCtrl]);
}

// AIRON controller
app.controller('viewWalletAironCtrl', ['$scope', viewWalletAironCtrl]);
app.controller('decryptWalletAironCtrl', ['$scope', '$sce', 'walletService', decryptWalletAironCtrl]);