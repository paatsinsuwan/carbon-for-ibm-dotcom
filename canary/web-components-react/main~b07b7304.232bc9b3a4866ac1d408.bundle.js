/*! For license information please see main~b07b7304.232bc9b3a4866ac1d408.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=Base=>class extends Base{constructor(...args){var obj,key,value;super(...args),value=null,(key="_mutationObserver")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}connectedCallback(){super.connectedCallback();const{stableSelector:stableSelector}=this.constructor;stableSelector&&(this.dataset.autoid=stableSelector),this._cleanAndCreateMutationObserver({create:!0}),window.requestAnimationFrame((()=>{this.linkNode||this.transposeAttributes()}))}disconnectedCallback(){this._cleanAndCreateMutationObserver()}transposeAttributes(linkNodeArg){var _this$shadowRoot;this.linkNode=linkNodeArg,this.linkNode||this.querySelectorAll("*").forEach((e=>{var _e$shadowRoot;const anchor=null===(_e$shadowRoot=e.shadowRoot)||void 0===_e$shadowRoot?void 0:_e$shadowRoot.querySelector("a");anchor&&(this.linkNode=anchor)})),this.linkNode=this.linkNode||(null===(_this$shadowRoot=this.shadowRoot)||void 0===_this$shadowRoot?void 0:_this$shadowRoot.querySelector("a"));[].filter.call(this.attributes,(at=>/^data-/.test(at.name)&&"data-autoid"!==at.name)).forEach((e=>{var _this$linkNode;this.linkNode&&(null===(_this$linkNode=this.linkNode)||void 0===_this$linkNode||_this$linkNode.setAttribute(e.name,e.value))}))}_cleanAndCreateMutationObserver({create:create}={}){if(this._mutationObserver&&(this._mutationObserver.disconnect(),this._mutationObserver=null),create){var _this$_mutationObserv;const element=this;this._mutationObserver=new MutationObserver((mutations=>{mutations.forEach((mutation=>{"attributes"===mutation.type&&this.linkNode&&this.transposeAttributes(this.linkNode)}))})),null===(_this$_mutationObserv=this._mutationObserver)||void 0===_this$_mutationObserv||_this$_mutationObserv.observe(element,{attributes:!0})}}}},1001:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return loadMediaData}));__webpack_require__(25),__webpack_require__(131),__webpack_require__(192);var _carbon_ibmdotcom_services_es_services_KalturaPlayer_KalturaPlayer_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(157),_types_kalturaPlayerAPI_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(259);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function setRequestMediaDataInProgress(mediaId,request){return{type:_types_kalturaPlayerAPI_js__WEBPACK_IMPORTED_MODULE_4__.a.SET_REQUEST_MEDIA_DATA_IN_PROGRESS,mediaId:mediaId,request:request}}function setErrorRequestMediaData(mediaId,error){return{type:_types_kalturaPlayerAPI_js__WEBPACK_IMPORTED_MODULE_4__.a.SET_ERROR_REQUEST_MEDIA_DATA,mediaId:mediaId,error:error}}function setMediaData(mediaId,mediaData){return{type:_types_kalturaPlayerAPI_js__WEBPACK_IMPORTED_MODULE_4__.a.SET_MEDIA_DATA,mediaId:mediaId,mediaData:mediaData}}function loadMediaData(mediaId){return function(){var fn,_ref=(fn=regeneratorRuntime.mark((function _callee(dispatch,getState){var _getState$mediaPlayer,_ref2,_ref2$requestsMediaDa,requestMediaData,promiseVideoData;return regeneratorRuntime.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(_ref2=null!==(_getState$mediaPlayer=getState().mediaPlayerAPI)&&void 0!==_getState$mediaPlayer?_getState$mediaPlayer:{},_ref2$requestsMediaDa=_ref2.requestsMediaData,!(requestMediaData=(void 0===_ref2$requestsMediaDa?{}:_ref2$requestsMediaDa)[mediaId])){_context.next=4;break}return _context.abrupt("return",requestMediaData);case 4:return promiseVideoData=_carbon_ibmdotcom_services_es_services_KalturaPlayer_KalturaPlayer_js__WEBPACK_IMPORTED_MODULE_3__.a.api(mediaId),dispatch(setRequestMediaDataInProgress(mediaId,promiseVideoData)),_context.prev=6,_context.t0=dispatch,_context.t1=setMediaData,_context.t2=mediaId,_context.next=12,promiseVideoData;case 12:_context.t3=_context.sent,_context.t4=(0,_context.t1)(_context.t2,_context.t3),(0,_context.t0)(_context.t4),_context.next=20;break;case 17:_context.prev=17,_context.t5=_context.catch(6),dispatch(setErrorRequestMediaData(mediaId,_context.t5));case 20:return _context.abrupt("return",promiseVideoData);case 21:case"end":return _context.stop()}}),_callee,null,[[6,17]])})),function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))});return function(){return _ref.apply(this,arguments)}}()}},1040:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return loadTranslation}));__webpack_require__(25),__webpack_require__(131),__webpack_require__(47),__webpack_require__(147),__webpack_require__(192);var _carbon_ibmdotcom_services_es_services_Translation_Translation_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1041),_localeAPI_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(541),_types_translateAPI_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(258);function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function setRequestTranslationInProgress(language,request){return{type:_types_translateAPI_js__WEBPACK_IMPORTED_MODULE_7__.a.SET_REQUEST_TRANSLATION_IN_PROGRESS,language:language,request:request}}function setErrorRequestTranslation(language,error){return{type:_types_translateAPI_js__WEBPACK_IMPORTED_MODULE_7__.a.SET_ERROR_REQUEST_TRANSLATION,language:language,error:error}}function setTranslation(language,translation){return{type:_types_translateAPI_js__WEBPACK_IMPORTED_MODULE_7__.a.SET_TRANSLATION,language:language,translation:translation}}function loadTranslation(language,dataEndpoint){return function(){var fn,_ref=(fn=regeneratorRuntime.mark((function _callee(dispatch,getState){var _getState$translateAP,effectiveLanguage,_ref2,_ref2$requestsTransla,requestTranslation,_effectiveLanguage$sp,_effectiveLanguage$sp2,primary,country,promiseTranslation;return regeneratorRuntime.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==language){_context.next=4;break}_context.t0=language,_context.next=7;break;case 4:return _context.next=6,dispatch(Object(_localeAPI_js__WEBPACK_IMPORTED_MODULE_6__.a)());case 6:_context.t0=_context.sent;case 7:if(effectiveLanguage=_context.t0,_ref2=null!==(_getState$translateAP=getState().translateAPI)&&void 0!==_getState$translateAP?_getState$translateAP:{},_ref2$requestsTransla=_ref2.requestsTranslation,!(requestTranslation=(void 0===_ref2$requestsTransla?{}:_ref2$requestsTransla)[effectiveLanguage])){_context.next=12;break}return _context.abrupt("return",requestTranslation);case 12:return _effectiveLanguage$sp=effectiveLanguage.split("-"),_effectiveLanguage$sp2=_slicedToArray(_effectiveLanguage$sp,2),primary=_effectiveLanguage$sp2[0],country=_effectiveLanguage$sp2[1],promiseTranslation=_carbon_ibmdotcom_services_es_services_Translation_Translation_js__WEBPACK_IMPORTED_MODULE_5__.a.getTranslation({cc:country.toLowerCase(),lc:primary.toLowerCase()},dataEndpoint),dispatch(setRequestTranslationInProgress(effectiveLanguage,promiseTranslation)),_context.prev=15,_context.t1=dispatch,_context.t2=setTranslation,_context.t3=effectiveLanguage,_context.next=21,promiseTranslation;case 21:_context.t4=_context.sent,_context.t5=(0,_context.t2)(_context.t3,_context.t4),(0,_context.t1)(_context.t5),_context.next=29;break;case 26:_context.prev=26,_context.t6=_context.catch(15),dispatch(setErrorRequestTranslation(effectiveLanguage,_context.t6));case 29:return _context.abrupt("return",promiseTranslation);case 30:case"end":return _context.stop()}}),_callee,null,[[15,26]])})),function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))});return function(){return _ref.apply(this,arguments)}}()}},126:function(module,__webpack_exports__,__webpack_require__){"use strict";var LOCALE_API_ACTION;__webpack_require__.d(__webpack_exports__,"a",(function(){return LOCALE_API_ACTION})),function(LOCALE_API_ACTION){LOCALE_API_ACTION.SET_REQUEST_LANGUAGE_IN_PROGRESS="SET_REQUEST_LANGUAGE_IN_PROGRESS",LOCALE_API_ACTION.SET_ERROR_REQUEST_LANGUAGE="SET_ERROR_REQUEST_LANGUAGE",LOCALE_API_ACTION.SET_LANGUAGE="SET_LANGUAGE",LOCALE_API_ACTION.SET_REQUEST_LANG_DISPLAY_IN_PROGRESS="SET_REQUEST_LANG_DISPLAY_IN_PROGRESS",LOCALE_API_ACTION.SET_ERROR_REQUEST_LANG_DISPLAY="SET_ERROR_REQUEST_LANG_DISPLAY",LOCALE_API_ACTION.SET_LANG_DISPLAY="SET_LANG_DISPLAY",LOCALE_API_ACTION.SET_REQUEST_LOCALE_LIST_IN_PROGRESS="SET_REQUEST_LOCALE_LIST_IN_PROGRESS",LOCALE_API_ACTION.SET_ERROR_REQUEST_LOCALE_LIST="SET_ERROR_REQUEST_LOCALE_LIST",LOCALE_API_ACTION.SET_LOCALE_LIST="SET_LOCALE_LIST"}(LOCALE_API_ACTION||(LOCALE_API_ACTION={}))},210:function(module,__webpack_exports__,__webpack_require__){"use strict";var lib=__webpack_require__(61),lib_default=__webpack_require__.n(lib),redux=__webpack_require__(173),es=__webpack_require__(999),localeAPI=(__webpack_require__(2065),__webpack_require__(48),__webpack_require__(25),__webpack_require__(131),__webpack_require__(126));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var translateAPI=__webpack_require__(258);function translateAPI_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function translateAPI_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?translateAPI_ownKeys(Object(source),!0).forEach((function(key){translateAPI_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):translateAPI_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function translateAPI_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var PROFILE_API_ACTION,SEARCH_API_ACTION;function profileAPI_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function profileAPI_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?profileAPI_ownKeys(Object(source),!0).forEach((function(key){profileAPI_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):profileAPI_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function profileAPI_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function searchAPI_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function searchAPI_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?searchAPI_ownKeys(Object(source),!0).forEach((function(key){searchAPI_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):searchAPI_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function searchAPI_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}!function(PROFILE_API_ACTION){PROFILE_API_ACTION.SET_REQUEST_USER_STATUS_IN_PROGRESS="SET_REQUEST_USER_STATUS_IN_PROGRESS",PROFILE_API_ACTION.SET_ERROR_REQUEST_USER_STATUS="SET_ERROR_REQUEST_USER_STATUS",PROFILE_API_ACTION.SET_USER_STATUS="SET_USER_STATUS"}(PROFILE_API_ACTION||(PROFILE_API_ACTION={})),function(SEARCH_API_ACTION){SEARCH_API_ACTION.SET_CURRENT_SEARCH_QUERY_STRING="SET_CURRENT_SEARCH_QUERY_STRING",SEARCH_API_ACTION.SET_REQUEST_SEARCH_RESULTS_IN_PROGRESS="SET_REQUEST_SEARCH_RESULTS_IN_PROGRESS",SEARCH_API_ACTION.SET_ERROR_REQUEST_SEARCH_RESULTS="SET_ERROR_REQUEST_SEARCH_RESULTS",SEARCH_API_ACTION.SET_SEARCH_RESULTS="SET_SEARCH_RESULTS"}(SEARCH_API_ACTION||(SEARCH_API_ACTION={}));var kalturaPlayerAPI=__webpack_require__(259);function kalturaPlayerAPI_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function kalturaPlayerAPI_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?kalturaPlayerAPI_ownKeys(Object(source),!0).forEach((function(key){kalturaPlayerAPI_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):kalturaPlayerAPI_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function kalturaPlayerAPI_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var CLOUD_ACCOUNT_AUTH_API_ACTION;function cloudAccountAuthAPI_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function cloudAccountAuthAPI_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?cloudAccountAuthAPI_ownKeys(Object(source),!0).forEach((function(key){cloudAccountAuthAPI_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):cloudAccountAuthAPI_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function cloudAccountAuthAPI_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}!function(CLOUD_ACCOUNT_AUTH_API_ACTION){CLOUD_ACCOUNT_AUTH_API_ACTION.SET_REQUEST_USER_STATUS_IN_PROGRESS="SET_REQUEST_USER_STATUS_IN_PROGRESS",CLOUD_ACCOUNT_AUTH_API_ACTION.SET_ERROR_REQUEST_USER_STATUS="SET_ERROR_REQUEST_USER_STATUS",CLOUD_ACCOUNT_AUTH_API_ACTION.SET_USER_STATUS="SET_USER_STATUS"}(CLOUD_ACCOUNT_AUTH_API_ACTION||(CLOUD_ACCOUNT_AUTH_API_ACTION={}));var reducers=Object(redux.c)({localeAPI:function(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case localeAPI.a.SET_REQUEST_LANGUAGE_IN_PROGRESS:var requestLanguage=action.request;return _objectSpread(_objectSpread({},state),{},{requestLanguageInProgress:!0,requestLanguage:requestLanguage});case localeAPI.a.SET_ERROR_REQUEST_LANGUAGE:var errorRequestLanguage=action.error;return _objectSpread(_objectSpread({},state),{},{requestLanguageInProgress:!1,errorRequestLanguage:errorRequestLanguage});case localeAPI.a.SET_LANGUAGE:var language=action.language;return _objectSpread(_objectSpread({},state),{},{requestLanguage:Promise.resolve(language),requestLanguageInProgress:!1,language:language});case localeAPI.a.SET_REQUEST_LOCALE_LIST_IN_PROGRESS:var _language=action.language,request=action.request;return _objectSpread(_objectSpread({},state),{},{requestsLocaleListInProgress:_objectSpread(_objectSpread({},state.requestsLocaleListInProgress||{}),{},_defineProperty({},_language,!0)),requestsLocaleList:_objectSpread(_objectSpread({},state.requestsLocaleList||{}),{},_defineProperty({},_language,request))});case localeAPI.a.SET_ERROR_REQUEST_LOCALE_LIST:var _language2=action.language,error=action.error;return _objectSpread(_objectSpread({},state),{},{requestsLocaleListInProgress:_objectSpread(_objectSpread({},state.requestsLocaleListInProgress||{}),{},_defineProperty({},_language2,!1)),errorsRequestLocaleList:_objectSpread(_objectSpread({},state.errorsRequestLocaleList||{}),{},_defineProperty({},_language2,error))});case localeAPI.a.SET_LOCALE_LIST:var _language3=action.language,localeList=action.localeList;return _objectSpread(_objectSpread({},state),{},{requestsLocaleListInProgress:_objectSpread(_objectSpread({},state.requestsLocaleListInProgress||{}),{},_defineProperty({},_language3,!1)),requestsLocaleList:_objectSpread(_objectSpread({},state.requestsLocaleList||{}),{},_defineProperty({},_language3,Promise.resolve(localeList))),localeLists:_objectSpread(_objectSpread({},state.localeLists||{}),{},_defineProperty({},_language3,localeList))});default:return state}},translateAPI:function(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case translateAPI.a.SET_REQUEST_TRANSLATION_IN_PROGRESS:var language=action.language,request=action.request;return translateAPI_objectSpread(translateAPI_objectSpread({},state),{},{requestsTranslationInProgress:translateAPI_objectSpread(translateAPI_objectSpread({},state.requestsTranslationInProgress||{}),{},translateAPI_defineProperty({},language,!0)),requestsTranslation:translateAPI_objectSpread(translateAPI_objectSpread({},state.requestsTranslation||{}),{},translateAPI_defineProperty({},language,request))});case translateAPI.a.SET_ERROR_REQUEST_TRANSLATION:var _language=action.language,error=action.error;return translateAPI_objectSpread(translateAPI_objectSpread({},state),{},{requestsTranslationInProgress:translateAPI_objectSpread(translateAPI_objectSpread({},state.requestsTranslationInProgress||{}),{},translateAPI_defineProperty({},_language,!1)),errorsRequestTranslation:translateAPI_objectSpread(translateAPI_objectSpread({},state.errorsRequestTranslation||{}),{},translateAPI_defineProperty({},_language,error))});case translateAPI.a.SET_TRANSLATION:var _language2=action.language,translation=action.translation;return translateAPI_objectSpread(translateAPI_objectSpread({},state),{},{requestsTranslationInProgress:translateAPI_objectSpread(translateAPI_objectSpread({},state.requestsTranslationInProgress||{}),{},translateAPI_defineProperty({},_language2,!1)),requestsTranslation:translateAPI_objectSpread(translateAPI_objectSpread({},state.requestsTranslation||{}),{},translateAPI_defineProperty({},_language2,Promise.resolve(translation))),translations:translateAPI_objectSpread(translateAPI_objectSpread({},state.translations||{}),{},translateAPI_defineProperty({},_language2,translation))});default:return state}},profileAPI:function(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case PROFILE_API_ACTION.SET_ERROR_REQUEST_USER_STATUS:var errorGetUserStatus=action.error;return profileAPI_objectSpread(profileAPI_objectSpread({},state),{},{errorGetUserStatus:errorGetUserStatus});case PROFILE_API_ACTION.SET_USER_STATUS:var request=action.request;return profileAPI_objectSpread(profileAPI_objectSpread({},state),{},{request:request});default:return state}},searchAPI:function(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SEARCH_API_ACTION.SET_CURRENT_SEARCH_QUERY_STRING:var searchQueryString=action.searchQueryString;return searchAPI_objectSpread(searchAPI_objectSpread({},state),{},{currentSearchQueryString:searchQueryString});case SEARCH_API_ACTION.SET_REQUEST_SEARCH_RESULTS_IN_PROGRESS:var _oldRequestsSearchRes,_oldRequestsSearchRes2,language=action.language,_searchQueryString=action.searchQueryString,request=action.request,_state$requestsSearch=state.requestsSearchResultsInProgress,oldRequestsSearchResultsInProgress=void 0===_state$requestsSearch?{}:_state$requestsSearch,_state$requestsSearch2=state.requestsSearchResults,oldRequestsSearchResults=void 0===_state$requestsSearch2?{}:_state$requestsSearch2;return searchAPI_objectSpread(searchAPI_objectSpread({},state),{},{requestsSearchResultsInProgress:searchAPI_objectSpread(searchAPI_objectSpread({},oldRequestsSearchResultsInProgress),{},searchAPI_defineProperty({},_searchQueryString,searchAPI_objectSpread(searchAPI_objectSpread({},null!==(_oldRequestsSearchRes=oldRequestsSearchResultsInProgress[_searchQueryString])&&void 0!==_oldRequestsSearchRes?_oldRequestsSearchRes:{}),{},searchAPI_defineProperty({},language,!0)))),requestsSearchResults:searchAPI_objectSpread(searchAPI_objectSpread({},oldRequestsSearchResults),{},searchAPI_defineProperty({},_searchQueryString,searchAPI_objectSpread(searchAPI_objectSpread({},null!==(_oldRequestsSearchRes2=oldRequestsSearchResults[_searchQueryString])&&void 0!==_oldRequestsSearchRes2?_oldRequestsSearchRes2:{}),{},searchAPI_defineProperty({},language,request))))});case SEARCH_API_ACTION.SET_ERROR_REQUEST_SEARCH_RESULTS:var _oldRequestsSearchRes3,_oldErrorsRequestSear,_language=action.language,_searchQueryString2=action.searchQueryString,error=action.error,_state$requestsSearch3=state.requestsSearchResultsInProgress,_oldRequestsSearchResultsInProgress=void 0===_state$requestsSearch3?{}:_state$requestsSearch3,_state$errorsRequestS=state.errorsRequestSearchResults,oldErrorsRequestSearchResults=void 0===_state$errorsRequestS?{}:_state$errorsRequestS;return searchAPI_objectSpread(searchAPI_objectSpread({},state),{},{requestsSearchResultsInProgress:searchAPI_objectSpread(searchAPI_objectSpread({},_oldRequestsSearchResultsInProgress),{},searchAPI_defineProperty({},_searchQueryString2,searchAPI_objectSpread(searchAPI_objectSpread({},null!==(_oldRequestsSearchRes3=_oldRequestsSearchResultsInProgress[_searchQueryString2])&&void 0!==_oldRequestsSearchRes3?_oldRequestsSearchRes3:{}),{},searchAPI_defineProperty({},_language,!1)))),errorsRequestSearchResults:searchAPI_objectSpread(searchAPI_objectSpread({},oldErrorsRequestSearchResults),{},searchAPI_defineProperty({},_searchQueryString2,searchAPI_objectSpread(searchAPI_objectSpread({},null!==(_oldErrorsRequestSear=oldErrorsRequestSearchResults[_searchQueryString2])&&void 0!==_oldErrorsRequestSear?_oldErrorsRequestSear:{}),{},searchAPI_defineProperty({},_language,error))))});case SEARCH_API_ACTION.SET_SEARCH_RESULTS:var _oldRequestsSearchRes4,_oldRequestsSearchRes5,_oldSearchResults$sea,_language2=action.language,_searchQueryString3=action.searchQueryString,results=action.results,_state$requestsSearch4=state.requestsSearchResultsInProgress,_oldRequestsSearchResultsInProgress2=void 0===_state$requestsSearch4?{}:_state$requestsSearch4,_state$requestsSearch5=state.requestsSearchResults,_oldRequestsSearchResults=void 0===_state$requestsSearch5?{}:_state$requestsSearch5,_state$searchResults=state.searchResults,oldSearchResults=void 0===_state$searchResults?{}:_state$searchResults;return searchAPI_objectSpread(searchAPI_objectSpread({},state),{},{requestsSearchResultsInProgress:searchAPI_objectSpread(searchAPI_objectSpread({},_oldRequestsSearchResultsInProgress2),{},searchAPI_defineProperty({},_searchQueryString3,searchAPI_objectSpread(searchAPI_objectSpread({},null!==(_oldRequestsSearchRes4=_oldRequestsSearchResultsInProgress2[_searchQueryString3])&&void 0!==_oldRequestsSearchRes4?_oldRequestsSearchRes4:{}),{},searchAPI_defineProperty({},_language2,!1)))),requestsSearchResults:searchAPI_objectSpread(searchAPI_objectSpread({},_oldRequestsSearchResults),{},searchAPI_defineProperty({},_searchQueryString3,searchAPI_objectSpread(searchAPI_objectSpread({},null!==(_oldRequestsSearchRes5=_oldRequestsSearchResults[_searchQueryString3])&&void 0!==_oldRequestsSearchRes5?_oldRequestsSearchRes5:{}),{},searchAPI_defineProperty({},_language2,Promise.resolve(results))))),searchResults:searchAPI_objectSpread(searchAPI_objectSpread({},oldSearchResults),{},searchAPI_defineProperty({},_searchQueryString3,searchAPI_objectSpread(searchAPI_objectSpread({},null!==(_oldSearchResults$sea=oldSearchResults[_searchQueryString3])&&void 0!==_oldSearchResults$sea?_oldSearchResults$sea:{}),{},searchAPI_defineProperty({},_language2,results))))});default:return state}},kalturaPlayerAPI:function(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case kalturaPlayerAPI.a.SET_REQUEST_MEDIA_DATA_IN_PROGRESS:var mediaId=action.mediaId,request=action.request;return kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state),{},{requestsMediaDataInProgress:kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state.requestsMediaDataInProgress||{}),{},kalturaPlayerAPI_defineProperty({},mediaId,!0)),requestsMediaData:kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state.requestsMediaData||{}),{},kalturaPlayerAPI_defineProperty({},mediaId,request))});case kalturaPlayerAPI.a.SET_ERROR_REQUEST_MEDIA_DATA:var _mediaId=action.mediaId,error=action.error;return kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state),{},{requestsMediaDataInProgress:kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state.requestsMediaDataInProgress||{}),{},kalturaPlayerAPI_defineProperty({},_mediaId,!1)),errorsRequestMediaData:kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state.errorsRequestMediaData||{}),{},kalturaPlayerAPI_defineProperty({},_mediaId,error))});case kalturaPlayerAPI.a.SET_MEDIA_DATA:var _mediaId2=action.mediaId,mediaData=action.mediaData;return kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state),{},{requestsMediaDataInProgress:kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state.requestsMediaDataInProgress||{}),{},kalturaPlayerAPI_defineProperty({},_mediaId2,!1)),requestsMediaData:kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state.requestsMediaData||{}),{},kalturaPlayerAPI_defineProperty({},_mediaId2,Promise.resolve(mediaData))),mediaData:kalturaPlayerAPI_objectSpread(kalturaPlayerAPI_objectSpread({},state.mediaData||{}),{},kalturaPlayerAPI_defineProperty({},_mediaId2,mediaData))});default:return state}},cloudAccountAuthAPI:function(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case CLOUD_ACCOUNT_AUTH_API_ACTION.SET_ERROR_REQUEST_USER_STATUS:var errorGetUserStatus=action.error;return cloudAccountAuthAPI_objectSpread(cloudAccountAuthAPI_objectSpread({},state),{},{errorGetUserStatus:errorGetUserStatus});case CLOUD_ACCOUNT_AUTH_API_ACTION.SET_USER_STATUS:var request=action.request;return cloudAccountAuthAPI_objectSpread(cloudAccountAuthAPI_objectSpread({},state),{},{request:request});default:return state}}}),ibmdotcom_services_store_reducers=reducers,middlewares=[es.a];var store=function(){var initialState=0<arguments.length&&void 0!==arguments[0]?arguments[0]:lib_default.a.__PRELOADED_STATE__;return Object(redux.d)(ibmdotcom_services_store_reducers,null!=initialState?initialState:{},redux.a.apply(void 0,middlewares))}();__webpack_exports__.a=store},258:function(module,__webpack_exports__,__webpack_require__){"use strict";var TRANSLATE_API_ACTION;__webpack_require__.d(__webpack_exports__,"a",(function(){return TRANSLATE_API_ACTION})),function(TRANSLATE_API_ACTION){TRANSLATE_API_ACTION.SET_REQUEST_TRANSLATION_IN_PROGRESS="SET_REQUEST_TRANSLATION_IN_PROGRESS",TRANSLATE_API_ACTION.SET_ERROR_REQUEST_TRANSLATION="SET_ERROR_REQUEST_TRANSLATION",TRANSLATE_API_ACTION.SET_TRANSLATION="SET_TRANSLATION"}(TRANSLATE_API_ACTION||(TRANSLATE_API_ACTION={}))},259:function(module,__webpack_exports__,__webpack_require__){"use strict";var MEDIA_PLAYER_API_ACTION;__webpack_require__.d(__webpack_exports__,"a",(function(){return MEDIA_PLAYER_API_ACTION})),function(MEDIA_PLAYER_API_ACTION){MEDIA_PLAYER_API_ACTION.SET_REQUEST_MEDIA_DATA_IN_PROGRESS="SET_REQUEST_MEDIA_DATA_IN_PROGRESS",MEDIA_PLAYER_API_ACTION.SET_ERROR_REQUEST_MEDIA_DATA="SET_ERROR_REQUEST_MEDIA_DATA",MEDIA_PLAYER_API_ACTION.SET_MEDIA_DATA="SET_MEDIA_DATA"}(MEDIA_PLAYER_API_ACTION||(MEDIA_PLAYER_API_ACTION={}))},338:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=(store,mapStateToProps,mapDispatchToProps=(()=>({})))=>Base=>class extends Base{_handleChangeStoreState(state){const props=mapStateToProps(state);Object.keys(props).forEach((name=>{const old=this[name],current=props[name];Object.is(old,current)||(this[name]=current,this.requestUpdate(name,old))}))}constructor(...args){var obj,key,value;super(...args),value=null,(key="_hStore")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,Object.assign(this,mapDispatchToProps(store.dispatch))}connectedCallback(){super.connectedCallback(),this._handleChangeStoreState(store.getState());const unsubscribe=store.subscribe((()=>this._handleChangeStoreState(store.getState())));this._hStore={release:()=>(unsubscribe(),null)}}disconnectedCallback(){this._hStore&&(this._hStore=this._hStore.release()),super.disconnectedCallback()}}},519:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const closestComposed=(elem,selector)=>{const found=elem.closest(selector);if(found)return found;const{host:host}=elem.getRootNode();return host?closestComposed(host,selector):null};__webpack_exports__.a=Base=>class extends Base{constructor(...args){super(...args),_defineProperty(this,"_disconnectedAfterCreation",!1),_defineProperty(this,"modalRenderRoot",null)}_createAndRenderModal(){this.modalRenderRoot||(this.modalRenderRoot=this.createModalRenderRoot());const{modalRenderRoot:modalRenderRoot}=this;modalRenderRoot&&Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.g)(this.renderModal(),modalRenderRoot)}get container(){const{selectorContainer:selectorContainer}=this.constructor;return closestComposed(this,selectorContainer)||this.ownerDocument.body}createModalRenderRoot(){const{container:container,ownerDocument:doc}=this,div=doc.createElement("div");return div.style.display="contents",container.appendChild(div),div}connectedCallback(){super.connectedCallback(),this._disconnectedAfterCreation&&(this._disconnectedAfterCreation=!1,this._createAndRenderModal())}disconnectedCallback(){this.modalRenderRoot&&(this.modalRenderRoot.remove(),this.modalRenderRoot=null),super.disconnectedCallback(),this._disconnectedAfterCreation=!0}update(changedProperties){super.update(changedProperties),this._disconnectedAfterCreation||this._createAndRenderModal()}static get selectorContainer(){return"[data-modal-container]"}}},541:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return setLanguage})),__webpack_require__.d(__webpack_exports__,"a",(function(){return loadLanguage}));__webpack_require__(55),__webpack_require__(25),__webpack_require__(131),__webpack_require__(47),__webpack_require__(147),__webpack_require__(192);var _carbon_ibmdotcom_services_es_services_Locale_Locale_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(412),_types_localeAPI_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(126);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function setLanguage(language){return{type:_types_localeAPI_js__WEBPACK_IMPORTED_MODULE_7__.a.SET_LANGUAGE,language:language}}function loadLanguage(){return function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(dispatch,getState){var _getState$localeAPI,_ref2,requestLanguage,promiseLanguage;return regeneratorRuntime.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(_ref2=null!==(_getState$localeAPI=getState().localeAPI)&&void 0!==_getState$localeAPI?_getState$localeAPI:{},!(requestLanguage=_ref2.requestLanguage)){_context.next=3;break}return _context.abrupt("return",requestLanguage);case 3:return promiseLanguage=_carbon_ibmdotcom_services_es_services_Locale_Locale_js__WEBPACK_IMPORTED_MODULE_6__.a.getLocale().then((function(_ref3){var country=_ref3.cc,primary=_ref3.lc;return"".concat(primary,"-").concat(country)})),dispatch((request=promiseLanguage,{type:_types_localeAPI_js__WEBPACK_IMPORTED_MODULE_7__.a.SET_REQUEST_LANGUAGE_IN_PROGRESS,request:request})),_context.prev=5,_context.t0=dispatch,_context.t1=setLanguage,_context.next=10,promiseLanguage;case 10:_context.t2=_context.sent,_context.t3=(0,_context.t1)(_context.t2),(0,_context.t0)(_context.t3),_context.next=19;break;case 15:throw _context.prev=15,_context.t4=_context.catch(5),dispatch((error=_context.t4,{type:_types_localeAPI_js__WEBPACK_IMPORTED_MODULE_7__.a.SET_ERROR_REQUEST_LANGUAGE,error:error})),_context.t4;case 19:return _context.abrupt("return",promiseLanguage);case 20:case"end":return _context.stop()}var error,request}),_callee,null,[[5,15]])})));return function(){return _ref.apply(this,arguments)}}()}},691:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return forEach})),__webpack_require__.d(__webpack_exports__,"b",(function(){return indexOf}));const forEach=(a,predicate,thisObject)=>Array.prototype.forEach.call(a,predicate,thisObject),indexOf=(a,item)=>Array.prototype.indexOf.call(a,item)},85:function(module,__webpack_exports__,__webpack_require__){"use strict";let BASIC_COLOR_SCHEME,ICON_PLACEMENT;__webpack_require__.d(__webpack_exports__,"a",(function(){return BASIC_COLOR_SCHEME})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ICON_PLACEMENT})),function(BASIC_COLOR_SCHEME){BASIC_COLOR_SCHEME.REGULAR="",BASIC_COLOR_SCHEME.INVERSE="inverse"}(BASIC_COLOR_SCHEME||(BASIC_COLOR_SCHEME={})),function(ICON_PLACEMENT){ICON_PLACEMENT.LEFT="left",ICON_PLACEMENT.RIGHT="right"}(ICON_PLACEMENT||(ICON_PLACEMENT={}))},997:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15);__webpack_exports__.a=Base=>class extends Base{constructor(...args){var obj,key,value;super(...args),value=null,(key="lightRenderRoot")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}createLightRenderRoot(){return this}update(changedProperties){super.update(changedProperties),this.lightRenderRoot||(this.lightRenderRoot=this.createLightRenderRoot());const{lightRenderRoot:lightRenderRoot}=this;lightRenderRoot&&Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.g)(this.renderLightDOM(),lightRenderRoot,{eventContext:this})}}}},[[2142,27,37,31,39,36,29,43,44,41,38,28,34,40,33,35,32,42,30,7,20,12,3,24,2,17,5,9,22,14,13,10,0,8,26,25,16,4,21,1,11,15,6,23,19]]]);