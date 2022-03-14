(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1346:function(module,exports,__webpack_require__){"use strict";__webpack_require__(50),__webpack_require__(77),Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeDecorator=void 0;var obj,_utilDeprecate=(obj=__webpack_require__(372))&&obj.__esModule?obj:{default:obj};exports.makeDecorator=function(_ref){var name=_ref.name,parameterName=_ref.parameterName,wrapper=_ref.wrapper,_ref$skipIfNoParamete=_ref.skipIfNoParametersOrOptions,skipIfNoParametersOrOptions=void 0!==_ref$skipIfNoParamete&&_ref$skipIfNoParamete,_ref$allowDeprecatedU=_ref.allowDeprecatedUsage,allowDeprecatedUsage=void 0!==_ref$allowDeprecatedU&&_ref$allowDeprecatedU,decorator=function(options){return function(getStory,context){var parameters=context.parameters&&context.parameters[parameterName];return parameters&&parameters.disable?getStory(context):!skipIfNoParametersOrOptions||options||parameters?wrapper(getStory,context,{options:options,parameters:parameters}):getStory(context)}};return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return"function"==typeof args[0]?decorator().apply(void 0,args):function(){for(var _len2=arguments.length,innerArgs=new Array(_len2),_key2=0;_key2<_len2;_key2++)innerArgs[_key2]=arguments[_key2];if(innerArgs.length>1)return decorator.apply(void 0,args).apply(void 0,innerArgs);if(allowDeprecatedUsage)return(0,_utilDeprecate.default)((function(context){return decorator.apply(void 0,args)(innerArgs[0],context)}),"Passing stories directly into ".concat(name,"() is deprecated,\n          instead use addDecorator(").concat(name,") and pass options with the '").concat(parameterName,"' parameter"));throw new Error("Passing stories directly into ".concat(name,"() is not allowed,\n        instead use addDecorator(").concat(name,") and pass options with the '").concat(parameterName,"' parameter"))}}}},1347:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mockChannel=function(){return new _channels.default({transport:{setHandler:function(){},send:function(){}}})};var obj,_channels=(obj=__webpack_require__(783))&&obj.__esModule?obj:{default:obj}},1349:function(module,exports,__webpack_require__){"use strict";__webpack_require__(57),__webpack_require__(89),__webpack_require__(108),__webpack_require__(50),__webpack_require__(375),__webpack_require__(67),__webpack_require__(155),__webpack_require__(125),__webpack_require__(109),__webpack_require__(85),__webpack_require__(54),__webpack_require__(91),__webpack_require__(277),__webpack_require__(77),__webpack_require__(87),__webpack_require__(202),__webpack_require__(59),__webpack_require__(76),__webpack_require__(102),__webpack_require__(588),__webpack_require__(129),__webpack_require__(84),__webpack_require__(791),__webpack_require__(70),__webpack_require__(90),Object.defineProperty(exports,"__esModule",{value:!0}),exports.useMemo=function(nextCreate,deps){return useMemoLike("useMemo",nextCreate,deps)},exports.useCallback=function(callback,deps){return useMemoLike("useCallback",(function(){return callback}),deps)},exports.useRef=function(initialValue){return useRefLike("useRef",initialValue)},exports.useState=function(initialState){return useStateLike("useState",initialState)},exports.useReducer=function(reducer,initialArg,init){var _useStateLike2=_slicedToArray(useStateLike("useReducer",null!=init?function(){return init(initialArg)}:initialArg),2),state=_useStateLike2[0],setState=_useStateLike2[1];return[state,function(action){return setState((function(prevState){return reducer(prevState,action)}))}]},exports.useEffect=useEffect,exports.useChannel=function(eventMap){var deps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],channel=_index.addons.getChannel();return useEffect((function(){return Object.entries(eventMap).forEach((function(_ref2){var _ref3=_slicedToArray(_ref2,2),type=_ref3[0],listener=_ref3[1];return channel.on(type,listener)})),function(){Object.entries(eventMap).forEach((function(_ref4){var _ref5=_slicedToArray(_ref4,2),type=_ref5[0],listener=_ref5[1];return channel.removeListener(type,listener)}))}}),[].concat(_toConsumableArray(Object.keys(eventMap)),_toConsumableArray(deps))),channel.emit.bind(channel)},exports.useStoryContext=useStoryContext,exports.useParameter=function(parameterKey,defaultValue){var parameters=useStoryContext().parameters;if(parameterKey)return parameters[parameterKey]||defaultValue;return},exports.applyHooks=exports.HooksContext=void 0;var obj,_global=(obj=__webpack_require__(116))&&obj.__esModule?obj:{default:obj},_clientLogger=__webpack_require__(189),_coreEvents=__webpack_require__(278),_index=__webpack_require__(777);function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){if(!(Symbol.iterator in Object(arr))&&"[object Arguments]"!==Object.prototype.toString.call(arr))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _toConsumableArray(arr){return function(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var RenderEvents=[_coreEvents.STORY_RENDERED,_coreEvents.DOCS_RENDERED],HooksContext=function(){function HooksContext(){var _this=this;!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,HooksContext),this.hookListsMap=void 0,this.mountedDecorators=void 0,this.prevMountedDecorators=void 0,this.currentHooks=void 0,this.nextHookIndex=void 0,this.currentPhase=void 0,this.currentEffects=void 0,this.prevEffects=void 0,this.currentDecoratorName=void 0,this.hasUpdates=void 0,this.currentContext=void 0,this.renderListener=function(){_this.triggerEffects(),_this.currentContext=null,_this.removeRenderListeners()},this.init()}var Constructor,protoProps,staticProps;return Constructor=HooksContext,(protoProps=[{key:"init",value:function(){this.hookListsMap=new WeakMap,this.mountedDecorators=new Set,this.prevMountedDecorators=this.mountedDecorators,this.currentHooks=[],this.nextHookIndex=0,this.currentPhase="NONE",this.currentEffects=[],this.prevEffects=[],this.currentDecoratorName=null,this.hasUpdates=!1,this.currentContext=null}},{key:"clean",value:function(){this.prevEffects.forEach((function(effect){effect.destroy&&effect.destroy()})),this.init(),this.removeRenderListeners()}},{key:"getNextHook",value:function(){var hook=this.currentHooks[this.nextHookIndex];return this.nextHookIndex+=1,hook}},{key:"triggerEffects",value:function(){var _this2=this;this.prevEffects.forEach((function(effect){!_this2.currentEffects.includes(effect)&&effect.destroy&&effect.destroy()})),this.currentEffects.forEach((function(effect){_this2.prevEffects.includes(effect)||(effect.destroy=effect.create())})),this.prevEffects=this.currentEffects,this.currentEffects=[]}},{key:"addRenderListeners",value:function(){var _this3=this;this.removeRenderListeners();var channel=_index.addons.getChannel();RenderEvents.forEach((function(e){return channel.on(e,_this3.renderListener)}))}},{key:"removeRenderListeners",value:function(){var _this4=this,channel=_index.addons.getChannel();RenderEvents.forEach((function(e){return channel.removeListener(e,_this4.renderListener)}))}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),HooksContext}();exports.HooksContext=HooksContext;var hookify=function(fn){return function(){var _ref="function"==typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=0?void 0:arguments[0],hooks=_ref.hooks,prevPhase=hooks.currentPhase,prevHooks=hooks.currentHooks,prevNextHookIndex=hooks.nextHookIndex,prevDecoratorName=hooks.currentDecoratorName;hooks.currentDecoratorName=fn.name,hooks.prevMountedDecorators.has(fn)?(hooks.currentPhase="UPDATE",hooks.currentHooks=hooks.hookListsMap.get(fn)||[]):(hooks.currentPhase="MOUNT",hooks.currentHooks=[],hooks.hookListsMap.set(fn,hooks.currentHooks),hooks.prevMountedDecorators.add(fn)),hooks.nextHookIndex=0;var prevContext=_global.default.STORYBOOK_HOOKS_CONTEXT;_global.default.STORYBOOK_HOOKS_CONTEXT=hooks;var result=fn.apply(void 0,arguments);if(_global.default.STORYBOOK_HOOKS_CONTEXT=prevContext,"UPDATE"===hooks.currentPhase&&null!=hooks.getNextHook())throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return hooks.currentPhase=prevPhase,hooks.currentHooks=prevHooks,hooks.nextHookIndex=prevNextHookIndex,hooks.currentDecoratorName=prevDecoratorName,result}},numberOfRenders=0;exports.applyHooks=function(applyDecorators){return function(getStory,decorators){var decorated=applyDecorators(hookify(getStory),decorators.map(hookify));return function(context){var hooks=context.hooks;hooks.prevMountedDecorators=hooks.mountedDecorators,hooks.mountedDecorators=new Set([getStory].concat(_toConsumableArray(decorators))),hooks.currentContext=context,hooks.hasUpdates=!1;var result=decorated(context);for(numberOfRenders=1;hooks.hasUpdates;)if(hooks.hasUpdates=!1,hooks.currentEffects=[],result=decorated(context),(numberOfRenders+=1)>25)throw new Error("Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.");return hooks.addRenderListeners(),result}}};var invalidHooksError=function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")};function getHooksContextOrNull(){return _global.default.STORYBOOK_HOOKS_CONTEXT||null}function getHooksContextOrThrow(){var hooks=getHooksContextOrNull();if(null==hooks)throw invalidHooksError();return hooks}function useMemoLike(name,nextCreate,deps){var _useHook=function(name,callback,deps){var hooks=getHooksContextOrThrow();if("MOUNT"===hooks.currentPhase){null==deps||Array.isArray(deps)||_clientLogger.logger.warn("".concat(name," received a final argument that is not an array (instead, received ").concat(deps,"). When specified, the final argument must be an array."));var _hook={name:name,deps:deps};return hooks.currentHooks.push(_hook),callback(_hook),_hook}if("UPDATE"===hooks.currentPhase){var _hook2=hooks.getNextHook();if(null==_hook2)throw new Error("Rendered more hooks than during the previous render.");return _hook2.name!==name&&_clientLogger.logger.warn("Storybook has detected a change in the order of Hooks".concat(hooks.currentDecoratorName?" called by ".concat(hooks.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),null!=deps&&null==_hook2.deps&&_clientLogger.logger.warn("".concat(name," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),null!=deps&&null!=_hook2.deps&&deps.length!==_hook2.deps.length&&_clientLogger.logger.warn("The final argument passed to ".concat(name," changed size between renders. The order and size of this array must remain constant.\nPrevious: ").concat(_hook2.deps,"\nIncoming: ").concat(deps)),null!=deps&&null!=_hook2.deps&&function(deps,nextDeps){return deps.length===nextDeps.length&&deps.every((function(dep,i){return dep===nextDeps[i]}))}(deps,_hook2.deps)||(callback(_hook2),_hook2.deps=deps),_hook2}throw invalidHooksError()}(name,(function(hook){hook.memoizedState=nextCreate()}),deps);return _useHook.memoizedState}function useRefLike(name,initialValue){return useMemoLike(name,(function(){return{current:initialValue}}),[])}function useStateLike(name,initialState){var stateRef=useRefLike(name,"function"==typeof initialState?initialState():initialState);return[stateRef.current,function(update){stateRef.current="function"==typeof update?update(stateRef.current):update,function(){var hooks=getHooksContextOrNull();if(null!=hooks&&"NONE"!==hooks.currentPhase)hooks.hasUpdates=!0;else try{_index.addons.getChannel().emit(_coreEvents.FORCE_RE_RENDER)}catch(e){_clientLogger.logger.warn("State updates of Storybook preview hooks work only in browser")}}()}]}function useEffect(create,deps){var hooks=getHooksContextOrThrow(),effect=useMemoLike("useEffect",(function(){return{create:create}}),deps);hooks.currentEffects.includes(effect)||hooks.currentEffects.push(effect)}function useStoryContext(){var currentContext=getHooksContextOrThrow().currentContext;if(null==currentContext)throw invalidHooksError();return currentContext}},1997:function(module,exports,__webpack_require__){"use strict";__webpack_require__(57),__webpack_require__(89),__webpack_require__(108),__webpack_require__(50),__webpack_require__(67),__webpack_require__(155),__webpack_require__(109),__webpack_require__(85),__webpack_require__(91),__webpack_require__(277),__webpack_require__(614),__webpack_require__(1998),__webpack_require__(87),__webpack_require__(76),__webpack_require__(144),__webpack_require__(102),__webpack_require__(84),__webpack_require__(70),__webpack_require__(90),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(_ref2){var page=_ref2.page,transport=new PostmsgTransport({page:page});return new _channels.default({transport:transport})},exports.PostmsgTransport=exports.KEY=void 0;var obj,_global=__webpack_require__(116),_channels=(obj=__webpack_require__(783))&&obj.__esModule?obj:{default:obj},_clientLogger=__webpack_require__(189),_telejson=__webpack_require__(2e3);function _toConsumableArray(arr){return function(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var KEY="storybook-channel";exports.KEY=KEY;var PostmsgTransport=function(){function PostmsgTransport(config){if(function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PostmsgTransport),this.config=config,this.buffer=void 0,this.handler=void 0,this.connected=void 0,this.buffer=[],this.handler=null,_global.window.addEventListener("message",this.handleEvent.bind(this),!1),"manager"!==config.page&&"preview"!==config.page)throw new Error('postmsg-channel: "config.page" cannot be "'.concat(config.page,'"'))}var Constructor,protoProps,staticProps;return Constructor=PostmsgTransport,protoProps=[{key:"setHandler",value:function(handler){var _this=this;this.handler=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];handler.apply(_this,args),!_this.connected&&_this.getWindow()&&(_this.flush(),_this.connected=!0)}}},{key:"send",value:function(event,options){var _this2=this,iframeWindow=this.getWindow();if(!iframeWindow)return new Promise((function(resolve,reject){_this2.buffer.push({event:event,resolve:resolve,reject:reject})}));var depth=15,allowFunction=!0;options&&"boolean"==typeof options.allowFunction&&(allowFunction=options.allowFunction),options&&Number.isInteger(options.depth)&&(depth=options.depth);var data=(0,_telejson.stringify)({key:KEY,event:event},{maxDepth:depth,allowFunction:allowFunction});return iframeWindow.postMessage(data,"*"),Promise.resolve(null)}},{key:"flush",value:function(){var _this3=this,buffer=this.buffer;this.buffer=[],buffer.forEach((function(item){_this3.send(item.event).then(item.resolve).catch(item.reject)}))}},{key:"getWindow",value:function(){if("manager"===this.config.page){var iframe=_global.document.getElementById("storybook-preview-iframe");return iframe?iframe.contentWindow:null}return _global.window.parent}},{key:"handleEvent",value:function(rawEvent){try{var data=rawEvent.data,_ref="string"==typeof data&&(0,_telejson.isJSON)(data)?(0,_telejson.parse)(data):data,key=_ref.key,event=_ref.event;key===KEY&&(_clientLogger.logger.debug.apply(_clientLogger.logger,["message arrived at ".concat(this.config.page),event.type].concat(_toConsumableArray(event.args))),this.handler(event))}catch(error){_clientLogger.logger.error(error)}}}],protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),PostmsgTransport}();exports.PostmsgTransport=PostmsgTransport},257:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _exportNames={};exports.default=void 0;var _index=__webpack_require__(777);Object.keys(_index).forEach((function(key){"default"!==key&&"__esModule"!==key&&(Object.prototype.hasOwnProperty.call(_exportNames,key)||Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _index[key]}}))}));var _makeDecorator=__webpack_require__(1346);Object.keys(_makeDecorator).forEach((function(key){"default"!==key&&"__esModule"!==key&&(Object.prototype.hasOwnProperty.call(_exportNames,key)||Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _makeDecorator[key]}}))}));var _types=__webpack_require__(782);Object.keys(_types).forEach((function(key){"default"!==key&&"__esModule"!==key&&(Object.prototype.hasOwnProperty.call(_exportNames,key)||Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _types[key]}}))}));var _storybookChannelMock=__webpack_require__(1347);Object.keys(_storybookChannelMock).forEach((function(key){"default"!==key&&"__esModule"!==key&&(Object.prototype.hasOwnProperty.call(_exportNames,key)||Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _storybookChannelMock[key]}}))}));var _hooks=__webpack_require__(1349);Object.keys(_hooks).forEach((function(key){"default"!==key&&"__esModule"!==key&&(Object.prototype.hasOwnProperty.call(_exportNames,key)||Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _hooks[key]}}))}));var _default=_index.addons;exports.default=_default},777:function(module,exports,__webpack_require__){"use strict";__webpack_require__(67),__webpack_require__(65),__webpack_require__(76),__webpack_require__(373),__webpack_require__(144),__webpack_require__(70),Object.defineProperty(exports,"__esModule",{value:!0}),exports.addons=exports.AddonStore=void 0;var obj,_global=(obj=__webpack_require__(116))&&obj.__esModule?obj:{default:obj},_clientLogger=__webpack_require__(189),_types=__webpack_require__(782);var AddonStore=function AddonStore(){var _this=this;!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,AddonStore),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){if(!_this.channel)throw new Error("Accessing non-existent addons channel, see https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel");return _this.channel},this.ready=function(){return _this.promise},this.hasChannel=function(){return!!_this.channel},this.setChannel=function(channel){_this.channel=channel,_this.resolve()},this.getElements=function(type){return _this.elements[type]||(_this.elements[type]={}),_this.elements[type]},this.addPanel=function(name,options){_this.add(name,Object.assign({type:_types.types.PANEL},options))},this.add=function(name,addon){var type=addon.type;_this.getElements(type)[name]=Object.assign({id:name},addon)},this.setConfig=function(value){Object.assign(_this.config,value)},this.getConfig=function(){return _this.config},this.register=function(name,registerCallback){_this.loaders[name]&&_clientLogger.logger.warn("".concat(name," was loaded twice, this could have bad side-effects")),_this.loaders[name]=registerCallback},this.loadAddons=function(api){Object.values(_this.loaders).forEach((function(value){return value(api)}))},this.promise=new Promise((function(res){_this.resolve=function(){return res(_this.getChannel())}}))};exports.AddonStore=AddonStore;var KEY="__STORYBOOK_ADDONS";var addons=(_global.default[KEY]||(_global.default[KEY]=new AddonStore),_global.default[KEY]);exports.addons=addons},782:function(module,exports,__webpack_require__){"use strict";var types;__webpack_require__(275),__webpack_require__(373),Object.defineProperty(exports,"__esModule",{value:!0}),exports.isSupportedType=function(type){return!!Object.values(types).find((function(typeVal){return typeVal===type}))},exports.types=void 0,exports.types=types,function(types){types.TAB="tab",types.PANEL="panel",types.TOOL="tool",types.PREVIEW="preview",types.NOTES_ELEMENT="notes-element"}(types||(exports.types=types={}))},783:function(module,exports,__webpack_require__){"use strict";(function(setImmediate){function _toConsumableArray(arr){return function(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}__webpack_require__(57),__webpack_require__(89),__webpack_require__(108),__webpack_require__(79),__webpack_require__(67),__webpack_require__(155),__webpack_require__(109),__webpack_require__(85),__webpack_require__(117),__webpack_require__(91),__webpack_require__(87),__webpack_require__(59),__webpack_require__(76),__webpack_require__(102),__webpack_require__(84),__webpack_require__(70),__webpack_require__(90),__webpack_require__(785),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Channel=void 0;var generateRandomId=function(){return Math.random().toString(16).slice(2)},Channel=function(){function Channel(){var _this=this,_ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},transport=_ref.transport,_ref$async=_ref.async,async=void 0!==_ref$async&&_ref$async;_classCallCheck(this,Channel),this.isAsync=void 0,this.sender=generateRandomId(),this.events={},this.transport=void 0,this.isAsync=async,transport&&(this.transport=transport,this.transport.setHandler((function(event){return _this.handleEvent(event)})))}var Constructor,protoProps,staticProps;return Constructor=Channel,protoProps=[{key:"addListener",value:function(eventName,listener){this.events[eventName]=this.events[eventName]||[],this.events[eventName].push(listener)}},{key:"addPeerListener",value:function(eventName,listener){var peerListener=listener;peerListener.ignorePeer=!0,this.addListener(eventName,peerListener)}},{key:"emit",value:function(eventName){for(var _this2=this,_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];var event={type:eventName,args:args,from:this.sender},options={};args.length>=1&&args[0]&&args[0].options&&(options=args[0].options);var handler=function(){_this2.transport&&_this2.transport.send(event,options),_this2.handleEvent(event,!0)};this.isAsync?setImmediate(handler):handler()}},{key:"eventNames",value:function(){return Object.keys(this.events)}},{key:"listenerCount",value:function(eventName){var listeners=this.listeners(eventName);return listeners?listeners.length:0}},{key:"listeners",value:function(eventName){var listeners=this.events[eventName];return listeners||void 0}},{key:"once",value:function(eventName,listener){var onceListener=this.onceListener(eventName,listener);this.addListener(eventName,onceListener)}},{key:"removeAllListeners",value:function(eventName){eventName?this.events[eventName]&&delete this.events[eventName]:this.events={}}},{key:"removeListener",value:function(eventName,listener){var listeners=this.listeners(eventName);listeners&&(this.events[eventName]=listeners.filter((function(l){return l!==listener})))}},{key:"on",value:function(eventName,listener){this.addListener(eventName,listener)}},{key:"off",value:function(eventName,listener){this.removeListener(eventName,listener)}},{key:"handleEvent",value:function(event){var isPeer=arguments.length>1&&void 0!==arguments[1]&&arguments[1],listeners=this.listeners(event.type);listeners&&(isPeer||event.from!==this.sender)&&listeners.forEach((function(fn){return!(isPeer&&fn.ignorePeer)&&fn.apply(void 0,_toConsumableArray(event.args))}))}},{key:"onceListener",value:function(eventName,listener){var _this3=this,onceListener=function onceListener(){return _this3.removeListener(eventName,onceListener),listener.apply(void 0,arguments)};return onceListener}},{key:"hasTransport",get:function(){return!!this.transport}}],protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Channel}();exports.Channel=Channel;var _default=Channel;exports.default=_default}).call(this,__webpack_require__(784).setImmediate)}}]);