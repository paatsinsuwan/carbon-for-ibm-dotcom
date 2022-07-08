/*! For license information please see main~ceab0c39.f4faa5a27b6872d85a0d.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{2337:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithCustomTypeahead",(function(){return WithCustomTypeahead})),__webpack_require__.d(__webpack_exports__,"searchOpenOnload",(function(){return searchOpenOnload})),__webpack_require__.d(__webpack_exports__,"withPlatform",(function(){return withPlatform})),__webpack_require__.d(__webpack_exports__,"withL1",(function(){return withL1})),__webpack_require__.d(__webpack_exports__,"withAlternateLogoAndTooltip",(function(){return withAlternateLogoAndTooltip}));var dist=__webpack_require__(7),react=__webpack_require__(0),react_default=__webpack_require__.n(react),masthead_container=__webpack_require__(366);const logoData={svg:'<svg width="81px" height="33px" viewBox="0 0 81 33" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <title>Artboard</title>\n  <defs>\n      <path d="M67.716,0.0192 L66.982,2.1532 L80.733,2.1532 L80.733,0.0192 L67.716,0.0192 Z M44.624,0.0192 L44.625,2.1532 L58.392,2.1532 L57.64,0.0192 L44.624,0.0192 Z M17.011,0.0192 L17.011,2.1532 L39.738,2.1532 C38.216,0.8282 36.189,0.0192 33.961,0.0192 L33.961,0.0192 L17.011,0.0192 Z M0.019,2.1532 L14.887,2.1532 L14.887,0.0192 L0.019,0.0192 L0.019,2.1532 Z M66.246,4.2862 L65.479,6.4192 L80.733,6.4192 L80.733,4.2862 L66.246,4.2862 Z M44.624,4.2862 L44.625,6.4192 L59.87,6.4192 L59.132,4.2862 L44.624,4.2862 Z M17.011,4.2862 L17.011,6.4192 L41.863,6.4192 C41.672,5.6612 41.365,4.9442 40.97,4.2862 L40.97,4.2862 L17.011,4.2862 Z M0.019,6.4192 L14.887,6.4192 L14.887,4.2862 L0.019,4.2862 L0.019,6.4192 Z M64.761,8.5532 L64.009,10.6862 L76.485,10.6862 L76.485,8.5532 L64.761,8.5532 Z M48.872,8.5532 L48.872,10.6862 L61.354,10.6862 L60.602,8.5532 L48.872,8.5532 Z M34.004,8.5532 L34.004,10.6862 L41.565,10.6862 C41.756,10.0052 41.863,9.2912 41.863,8.5532 L41.863,8.5532 L34.004,8.5532 Z M21.259,10.6862 L27.632,10.6862 L27.632,8.5532 L21.259,8.5532 L21.259,10.6862 Z M4.267,10.6862 L10.639,10.6862 L10.639,8.5532 L4.267,8.5532 L4.267,10.6862 Z M63.273,12.8192 L62.679,14.5432 L62.084,12.8192 L48.872,12.8192 L48.872,14.9532 L55.244,14.9532 L55.244,12.9912 L55.945,14.9532 L69.39,14.9532 L70.113,12.9912 L70.113,14.9532 L76.485,14.9532 L76.485,12.8192 L63.273,12.8192 Z M21.259,12.8192 L21.259,14.9532 L38.953,14.9532 C39.685,14.3502 40.316,13.6292 40.801,12.8192 L40.801,12.8192 L21.259,12.8192 Z M4.267,14.9532 L10.639,14.9532 L10.639,12.8192 L4.267,12.8192 L4.267,14.9532 Z M70.113,19.2182 L76.485,19.2182 L76.485,17.0852 L70.113,17.0852 L70.113,19.2182 Z M56.82,17.0862 L57.644,19.2182 L67.691,19.2182 L68.522,17.0862 L56.82,17.0862 Z M48.872,19.2182 L55.244,19.2182 L55.244,17.0852 L48.872,17.0852 L48.872,19.2182 Z M21.259,17.0862 L21.259,19.2182 L40.801,19.2182 C40.316,18.4092 39.685,17.6882 38.953,17.0862 L38.953,17.0862 L21.259,17.0862 Z M4.267,19.2182 L10.639,19.2182 L10.639,17.0852 L4.267,17.0852 L4.267,19.2182 Z M70.113,23.4852 L76.485,23.4852 L76.485,21.3522 L70.113,21.3522 L70.113,23.4852 Z M58.494,21.3522 L59.334,23.4852 L66.023,23.4852 L66.857,21.3522 L58.494,21.3522 Z M48.872,23.4852 L55.244,23.4852 L55.244,21.3522 L48.872,21.3522 L48.872,23.4852 Z M34.004,21.3522 L34.004,23.4852 L41.863,23.4852 C41.863,22.7472 41.756,22.0322 41.565,21.3522 L41.565,21.3522 L34.004,21.3522 Z M21.259,23.4852 L27.632,23.4852 L27.632,21.3522 L21.259,21.3522 L21.259,23.4852 Z M4.267,23.4852 L10.639,23.4852 L10.639,21.3522 L4.267,21.3522 L4.267,23.4852 Z M70.113,27.7522 L80.733,27.7522 L80.733,25.6192 L70.113,25.6192 L70.113,27.7522 Z M60.169,25.6192 L61.001,27.7522 L64.363,27.7522 L65.191,25.6192 L60.169,25.6192 Z M44.624,27.7522 L55.244,27.7522 L55.244,25.6192 L44.624,25.6192 L44.624,27.7522 Z M17.011,25.6192 L17.011,27.7522 L40.97,27.7522 C41.365,27.0932 41.672,26.3772 41.863,25.6192 L41.863,25.6192 L17.011,25.6192 Z M0.019,27.7522 L14.887,27.7522 L14.887,25.6192 L0.019,25.6192 L0.019,27.7522 Z M70.113,32.0192 L80.733,32.0192 L80.733,29.8852 L70.113,29.8852 L70.113,32.0192 Z M61.833,29.8852 L62.676,32.0192 L63.53,29.8852 L61.833,29.8852 Z M44.624,32.0192 L55.244,32.0192 L55.244,29.8852 L44.624,29.8852 L44.624,32.0192 Z M17.011,29.8852 L17.011,32.0192 L33.961,32.0192 C36.205,32.0192 38.216,31.2102 39.738,29.8852 L39.738,29.8852 L17.011,29.8852 Z M0.019,32.0192 L14.887,32.0192 L14.887,29.8852 L0.019,29.8852 L0.019,32.0192 Z" id="path-1"></path>\n  </defs>\n  <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="Group-7">\n          <mask id="mask-2" fill="white">\n              <use xlink:href="#path-1"></use>\n          </mask>\n          <g id="Clip-2"></g>\n          <polygon id="Fill-1" fill="#EC1D24" mask="url(#mask-2)" points="-1 33.0382 86.8 33.0382 86.8 -0.9998 -1 -0.9998"></polygon>\n          <polygon id="Fill-3" fill="#2E3092" mask="url(#mask-2)" points="-1 3.3942 86.8 3.3942 86.8 -0.9998 -1 -0.9998"></polygon>\n          <polygon id="Fill-4" fill="#2E3092" mask="url(#mask-2)" points="-1 11.8162 86.8 11.8162 86.8 7.4222 -1 7.4222"></polygon>\n          <polygon id="Fill-5" fill="#00A550" mask="url(#mask-2)" points="-1 20.3502 86.8 20.3502 86.8 15.9562 -1 15.9562"></polygon>\n          <polygon id="Fill-6" fill="#FFF100" mask="url(#mask-2)" points="-1 28.8832 86.8 28.8832 86.8 24.4892 -1 24.4892"></polygon>\n      </g>\n  </g>\n  </svg>',tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",denylist:[],allowlist:[],end:"May 5, 2021 0:00:01",path:"/"},mastheadL1Data={title:"Analytics",url:"https://www.ibm.com/analytics",menuItems:[{title:"Products",titleEnglish:"Products",url:"https://www.ibm.com/analytics/products"},{title:"Solutions",titleEnglish:"Solutions",url:"https://www.ibm.com/analytics/solutions"},{title:"Services",titleEnglish:"Services",url:"https://www.ibm.com/industries?lnk=min"},{title:"Learn",titleEnglish:"Learn",menuSections:[{menuItems:[{title:"Blogs",url:"https://www.ibm.com/blogs/journey-to-ai/"},{title:"Client stories",url:"https://www.ibm.com/analytics/client-stories"},{title:"Communities",url:"https://www.ibm.com/analytics/communities"}]}]},{title:"Explore more",titleEnglish:"Explore more",menuSections:[{menuItems:[{title:"Product support",url:"https://www.ibm.com/analytics/support"},{title:"Expert gallery",url:"https://developer.ibm.com/technologies/blockchain/?lnk=hpmdev_dw&lnk2=learn"}]}]}]};var feature_flags=__webpack_require__(424),profileAPI=__webpack_require__(203),esm=(__webpack_require__(20),__webpack_require__(18),__webpack_require__(1)),blocks=__webpack_require__(12),contributing_license=__webpack_require__(21),masthead_composite=__webpack_require__(429);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},_ref2=Object(esm.mdx)("blockquote",null,Object(esm.mdx)("p",{parentName:"blockquote"},"The masthead component is a required navigational pattern for IBM.com that\ndisplays consistently at the top of each page. It also includes search and\nprofile services for IBM.com.")),_ref3=Object(esm.mdx)("p",null,"The ",Object(esm.mdx)("inlineCode",{parentName:"p"},"platformUrl")," property accepts a single URL as string or an object with a specific URL for each locale.\nThis property has to be set via javascript."),_ref4=Object(esm.mdx)("p",null,"With an object, the component will show a specific URL depending on the locale:"),_ref5=Object(esm.mdx)("p",null,"To use L1 nav, set ",Object(esm.mdx)("inlineCode",{parentName:"p"},"l1Data")," prop. ",Object(esm.mdx)("inlineCode",{parentName:"p"},"l1Data")," prop should be an\nobject that contains the navigation data of L1 nav:"),_ref6=Object(esm.mdx)("p",null,"To set a custom endpoint for the translation service to fetch from, set either the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"data-endpoint")," attribute like below or ",Object(esm.mdx)("inlineCode",{parentName:"p"},"DDS_TRANSLATION_ENDPOINT")," environment variable."),_ref7=Object(esm.mdx)("p",null,"The active menu item receives a unique style treatment to indicate where the current page is within the navigation hierarchy."),_ref8=Object(esm.mdx)("inlineCode",{parentName:"p"},"selected-menu-item"),_ref9=Object(esm.mdx)("p",null,"The first menu item whose ",Object(esm.mdx)("inlineCode",{parentName:"p"},"href")," value matches the browser window's current URL will automatically be marked active if the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"selected-menu-item")," property has not been set."),_ref10=Object(esm.mdx)("p",null,"If no other menu items are marked active and the optional ",Object(esm.mdx)("inlineCode",{parentName:"p"},"platformUrl")," property has been set, the platform link will be marked active."),_ref11=Object(esm.mdx)("p",null,"Using a search API other than the default provided from IBM Search is supported."),_ref12=Object(esm.mdx)("p",null,"First, add the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"custom-typeahead-api")," attribute into the masthead and set it to ",Object(esm.mdx)("inlineCode",{parentName:"p"},"true"),"."),_ref13=Object(esm.mdx)("p",null,"To query the current masthead search input, we need to create an event listener to listen for the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"dds-search-with-typeahead-input")," event.\nOnce captured, we need to call our asynchronous function to fetch the custom API results based on the query. Once the results are retrieved,\na new custom event ",Object(esm.mdx)("inlineCode",{parentName:"p"},"dds-custom-typeahead-api-results")," needs to be dispatched containing the results for the component to render the search suggestions."),_ref14=Object(esm.mdx)("p",null,"Some APIs contain grouped results in addition to regular search suggestions, which can also be displayed upon search."),_ref15=Object(esm.mdx)("p",null,"As before, create a function that fetches the query and make sure to include a JSON object containing the section's ",Object(esm.mdx)("inlineCode",{parentName:"p"},"title"),"\nand the array of retrieved section suggestions in ",Object(esm.mdx)("inlineCode",{parentName:"p"},"items"),". In the example below, the section ",Object(esm.mdx)("inlineCode",{parentName:"p"},"Product pages")," is added to the\nresults array."),_ref16=Object(esm.mdx)("p",null,"As mentioned above, the two events ",Object(esm.mdx)("inlineCode",{parentName:"p"},"dds-search-with-typeahead-input")," and ",Object(esm.mdx)("inlineCode",{parentName:"p"},"dds-custom-typeahead-api-results")," must be handled for\nsuggestions to be rendered -- the same code for the event listener can be reused."),_ref17=Object(esm.mdx)("p",null,"The API results must match the following structure:"),_ref18=Object(esm.mdx)("p",null,"Note that only the first array element is necessary to render the basic search suggestions, the following JSON objects are optional Grouped sections."),_ref19=Object(esm.mdx)(blocks.Props,{of:masthead_composite.PropTypesRef,mdxType:"Props"}),_ref20=Object(esm.mdx)("p",null,"For Cloud-specific version of masthead-container, ",Object(esm.mdx)("inlineCode",{parentName:"p"},"<dds-cloud-masthead-container>"),", we support two user authentication methods, via cookie or api. To select between the two, provide the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"auth-method")," prop with a value of either 'cookie' or 'api'."),_ref21=Object(esm.mdx)("inlineCode",{parentName:"p"},"data-autoid"),_ref22=Object(esm.mdx)("inlineCode",{parentName:"td"},"<dds-masthead>"),_ref23=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead"'),_ref24=Object(esm.mdx)("inlineCode",{parentName:"td"},"<dds-masthead-menu-button>"),_ref25=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__hamburger"'),_ref26=Object(esm.mdx)("inlineCode",{parentName:"td"},"<dds-top-nav-name>"),_ref27=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__platform-name"'),_ref28=Object(esm.mdx)("inlineCode",{parentName:"td"},"<dds-top-nav>"),_ref29=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__l0-nav"'),_ref30=Object(esm.mdx)("inlineCode",{parentName:"td"},'<dds-top-nav-menu trigger-content="${item}">'),_ref31=Object(esm.mdx)("inlineCode",{parentName:"td"},'<dds-top-nav-item title="${item}">'),_ref32=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__l0-nav--nav${item}"'),_ref33=Object(esm.mdx)("inlineCode",{parentName:"td"},'<dds-top-nav-menu-item title="${item}">'),_ref34=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__l0-nav--subnav-col${item}-item${item}"'),_ref35=Object(esm.mdx)("inlineCode",{parentName:"td"},"<dds-left-nav>"),_ref36=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__l0-sidenav"'),_ref37=Object(esm.mdx)("inlineCode",{parentName:"td"},'<dds-left-nav-menu trigger-content="${item}">'),_ref38=Object(esm.mdx)("inlineCode",{parentName:"td"},'<dds-left-nav-item title="${item}">'),_ref39=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__l0-sidenav--nav${item}"'),_ref40=Object(esm.mdx)("inlineCode",{parentName:"td"},'<dds-left-nav-menu-item title="${item}">'),_ref41=Object(esm.mdx)("inlineCode",{parentName:"td"},'data-autoid="dds--masthead__l0-sidenav--subnav-col${item}-item${item}"'),_ref42=Object(esm.mdx)(blocks.Description,{markdown:contributing_license.a,mdxType:"Description"});function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)("h1",{id:"masthead"},"Masthead"),_ref2,Object(esm.mdx)("blockquote",null,Object(esm.mdx)("p",{parentName:"blockquote"},"💡 Check our\n",Object(esm.mdx)("a",_extends({parentName:"p"},{href:"https://githubbox.com/carbon-design-system/carbon-for-ibm-dotcom/tree/master/packages/web-components/examples/codesandbox/components-react/masthead",target:"_blank",rel:"nofollow noopener noreferrer"}),"CodeSandbox"),"\nexample implementation.")),Object(esm.mdx)("h3",{id:"masthead-l0"},"Masthead (L0):"),Object(esm.mdx)("p",null,Object(esm.mdx)("a",_extends({parentName:"p"},{href:"https://githubbox.com/carbon-design-system/carbon-for-ibm-dotcom/tree/master/packages/web-components/examples/codesandbox/components-react/masthead",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(esm.mdx)("img",_extends({parentName:"a"},{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit @carbon/ibmdotcom-web-components"})))),Object(esm.mdx)("h3",{id:"masthead-l1"},"Masthead (L1):"),Object(esm.mdx)("p",null,Object(esm.mdx)("a",_extends({parentName:"p"},{href:"https://githubbox.com/carbon-design-system/carbon-for-ibm-dotcom/tree/main/packages/web-components/examples/codesandbox/components-react/masthead-l1",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(esm.mdx)("img",_extends({parentName:"a"},{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit @carbon/ibmdotcom-web-components"})))),Object(esm.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(esm.mdx)("h5",{id:"note-masthead-uses-the-carbon-white-theme-by-design-using-other-themes-will-not-change-the-masthead-color-scheme"},"Note: Masthead uses the Carbon White theme by design. Using other themes will not change the Masthead color scheme."),Object(esm.mdx)("h3",{id:"js"},"JS"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"import DDSMastheadContainer from '@carbon/ibmdotcom-web-components/es/components-react/masthead/masthead-container.js';\n\nfunction App() {\n  return (\n  <DDSMastheadContainer></DDSMastheadContainer>\n  );\n}\n")),Object(esm.mdx)("h4",{id:"setting-platform"},"Setting Platform"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"\nfunction App() {\n  return (\n  <DDSMastheadContainer platform='Lorem ipsum'></DDSMastheadContainer>\n  );\n}\n")),Object(esm.mdx)("h4",{id:"setting-platform-url"},"Setting Platform URL"),_ref3,Object(esm.mdx)("h6",{id:"setting-a-single-platform-url"},"Setting a single platform URL:"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"\nfunction App() {\n  return (\n  <DDSMastheadContainer platform='Lorem ipsum' id=\"masthead-container\"></DDSMastheadContainer>\n  );\n}\n")),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'const singleUrl = "https://www.example.com";\n\ndocument.getElementById("masthead-container").platformUrl = singleUrl;\n')),Object(esm.mdx)("h6",{id:"setting-multiple-platform-urls-with-an-object"},"Setting multiple platform URLs with an object:"),_ref4,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"const urlObject = {\n  'en-US': {\n    url: 'https://www.example.com',\n  },\n  'fr-FR': {\n    url: 'https://www.example.com/fr-fr/sample',\n  },\n  'es-MX': {\n    url: 'https://www.example.com/es-mx/sample',\n  },\n};\n\ndocument.getElementById(\"masthead-container\").platformUrl = urlObject;\n")),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"\nfunction App() {\n  return (\n  <DDSMastheadContainer platform='Lorem ipsum' id=\"masthead-container\"></DDSMastheadContainer>\n  );\n}\n")),Object(esm.mdx)("h4",{id:"custom-navigation"},"Custom Navigation"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"const links = [...menu items...];\ndocument.getElementById('masthead-container').navLinks = links;\n")),Object(esm.mdx)("h4",{id:"using-l1-nav"},"Using L1 nav"),_ref5,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascipt"}),"const l1Data = {\n  platform: {\n    name: 'Stock Charts',\n    url: 'https://example.com/',\n  },\n  menuItems: (The nav links),\n}\n")),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'\nfunction App() {\n  return (\n  <DDSMastheadContainer id="masthead-container"></DDSMastheadContainer>\n  );\n}\n')),_ref6,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'\nfunction App() {\n  return (\n  <DDSMastheadContainer data-endpoint="/custom-endpoint"></DDSMastheadContainer>\n  );\n}\n')),Object(esm.mdx)("h3",{id:"setting-the-active-menu-item"},"Setting the active menu item"),_ref7,Object(esm.mdx)("h5",{id:"manually"},"Manually"),Object(esm.mdx)("p",null,"Manually set the active item by using the ",_ref8," property. See ",Object(esm.mdx)("a",_extends({parentName:"p"},{href:"#props"}),"the Props table"),"."),Object(esm.mdx)("h5",{id:"automatically"},"Automatically"),_ref9,_ref10,Object(esm.mdx)("h2",{id:"using-custom-search-with-typeahead-api"},"Using custom search with typeahead API"),_ref11,_ref12,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'\nfunction App() {\n  return (\n  <DDSMastheadContainer custom-typeahead-api="true"></DDSMastheadContainer>\n  );\n}\n\n  async function customTypeaheadApiFunction(searchVal) {\n    return fetch(\n      `https://ibmdocs-dev.mybluemix.net/docs/api/v1/suggest?query=${searchVal}&lang=en&categories=&limit=6`\n    )\n      .then((response) => response.json())\n      .then((data) => {\n        let searchResults = [\n          data.hints,\n        ];\n        return searchResults;\n      });\n  }\n')),_ref13,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"  document.addEventListener('dds-search-with-typeahead-input', async (e) => { \n    const results = await customTypeaheadApiFunction(e.detail.value);\n    document.dispatchEvent(new CustomEvent('dds-custom-typeahead-api-results', { detail: results}));\n  })\n")),Object(esm.mdx)("h3",{id:"grouped-search"},"Grouped Search"),_ref14,_ref15,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'  async function customTypeaheadApiFunction(searchVal) {\n    return fetch(\n      `https://ibmdocs-dev.mybluemix.net/docs/api/v1/suggest?query=${searchVal}&lang=en&categories=&limit=6`\n    )\n      .then((response) => response.json())\n      .then((data) => {\n        let searchResults = [\n          data.hints,\n\n          // optional category results fetched from API\n          {\n            title: "Product pages",\n            items: data.products\n          }\n        ];\n        return searchResults;\n      });\n  }\n')),_ref16,Object(esm.mdx)("h4",{id:"note"},"Note"),_ref17,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"[\n  ['result 1', 'result 2', 'result 3'],\n  {\n    title: 'Example group 1'\n    items: ['result a', 'result b', 'result c']\n  },\n  {\n    title: \"Example group 2\",\n    items: ['result d', 'result e', 'result f']\n  }\n]\n")),_ref18,Object(esm.mdx)("h2",{id:"props"},"Props"),_ref19,Object(esm.mdx)("p",null,Object(esm.mdx)("a",_extends({parentName:"p"},{href:"https://carbon-design-system.github.io/carbon-for-ibm-dotcom/canary/web-components/?path=/docs/components-masthead--with-alternate-logo-and-tooltip#props",target:"_blank",rel:"nofollow noopener noreferrer"}),"dds-masthead-container props")),_ref20,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),"\nfunction App() {\n  return (\n  <DDSMastheadContainer auth-method='cookie'></DDSMastheadContainer>\n  );\n}\n")),Object(esm.mdx)("h2",{id:"stable-selectors"},"Stable selectors"),Object(esm.mdx)("p",null,"See ",Object(esm.mdx)("a",_extends({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-for-ibm-dotcom/tree/main/packages/web-components#stable-selectors-for-analytics-and-integratione2e-testing-in-web-components",target:"_blank",rel:"nofollow noopener noreferrer"}),"our README")," to see how Web Components selector and ",_ref21," should be used."),Object(esm.mdx)("table",null,Object(esm.mdx)("thead",{parentName:"table"},Object(esm.mdx)("tr",{parentName:"thead"},Object(esm.mdx)("th",_extends({parentName:"tr"},{align:null}),"Web Components selector"),Object(esm.mdx)("th",_extends({parentName:"tr"},{align:null}),"Compatibility selector"),Object(esm.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"))),Object(esm.mdx)("tbody",{parentName:"table"},Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref22),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref23),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Component")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref24),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref25),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Interactive")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref26),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref27),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Interactive")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref28),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref29),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Component")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref30," and ",_ref31),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref32),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Interactive")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref33),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref34),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Interactive")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref35),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref36),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Component")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref37," and ",_ref38),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref39),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Interactive")),Object(esm.mdx)("tr",{parentName:"tbody"},Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref40),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref41),Object(esm.mdx)("td",_extends({parentName:"tr"},{align:null}),"Interactive")))),_ref42)}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var componentMeta={includeStories:[]};componentMeta.parameters=componentMeta.parameters||{};var _ref43=Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:{},mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null));componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function(){return _ref43}});var README_stories_react=componentMeta,knob_text_nullable=__webpack_require__(16);function masthead_stories_react_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function masthead_stories_react_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?masthead_stories_react_ownKeys(Object(source),!0).forEach((function(key){masthead_stories_react_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):masthead_stories_react_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function masthead_stories_react_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const userStatuses={authenticated:"test.user@ibm.com",unauthenticated:profileAPI.b},platformData_url="https://www.ibm.com/cloud";const Default=({parameters:parameters})=>{var _parameters$props$Mas,_parameters$props;const{customProfileLogin:customProfileLogin,platform:platform,hasProfile:hasProfile,hasSearch:hasSearch,selectedMenuItem:selectedMenuItem,searchPlaceholder:searchPlaceholder,userStatus:userStatus,navLinks:navLinks}=null!==(_parameters$props$Mas=null==parameters||null===(_parameters$props=parameters.props)||void 0===_parameters$props?void 0:_parameters$props.MastheadComposite)&&void 0!==_parameters$props$Mas?_parameters$props$Mas:{};return hasSearch||setTimeout((()=>{var _document$querySelect;null===(_document$querySelect=document.querySelector("dds-masthead-container"))||void 0===_document$querySelect||_document$querySelect.removeAttribute("has-search")}),1e3),react_default.a.createElement(masthead_container.a,{platform:platform,platformUrl:platformData_url,"selected-menu-item":selectedMenuItem,"user-status":userStatus,searchPlaceholder:searchPlaceholder,navLinks:navLinks,"has-profile":hasProfile,"has-search":hasSearch,"custom-profile-login":customProfileLogin})},WithCustomTypeahead=({parameters:parameters})=>{var _parameters$props$Mas2,_parameters$props2;const{customProfileLogin:customProfileLogin,navLinks:navLinks,platform:platform,selectedMenuItem:selectedMenuItem,userStatus:userStatus,searchPlaceholder:searchPlaceholder,hasProfile:hasProfile,hasSearch:hasSearch}=null!==(_parameters$props$Mas2=null==parameters||null===(_parameters$props2=parameters.props)||void 0===_parameters$props2?void 0:_parameters$props2.MastheadComposite)&&void 0!==_parameters$props$Mas2?_parameters$props$Mas2:{};return document.documentElement.addEventListener("dds-search-with-typeahead-input",(async e=>{const results=await async function(searchVal){return fetch(`https://ibmdocs-dev.mybluemix.net/docs/api/v1/suggest?query=${searchVal}&lang=undefined&categories=&limit=6`).then((response=>response.json())).then((data=>[data.hints,{title:"Product pages",items:data.products}]))}(e.detail.value);document.dispatchEvent(new CustomEvent("dds-custom-typeahead-api-results",{detail:results}))})),react_default.a.createElement(masthead_container.a,{platform:platform,platformUrl:platformData_url,"selected-menu-item":selectedMenuItem,"user-status":userStatus,searchPlaceholder:searchPlaceholder,navLinks:navLinks,"has-profile":hasProfile,"has-search":hasSearch,"custom-profile-login":customProfileLogin,"custom-typeahead-api":!0})};WithCustomTypeahead.story={name:"With custom typeahead"};const searchOpenOnload=({parameters:parameters})=>{var _parameters$props$Mas3,_parameters$props3;const{customProfileLogin:customProfileLogin,platform:platform,selectedMenuItem:selectedMenuItem,userStatus:userStatus,searchPlaceholder:searchPlaceholder,hasProfile:hasProfile,hasSearch:hasSearch,navLinks:navLinks}=null!==(_parameters$props$Mas3=null==parameters||null===(_parameters$props3=parameters.props)||void 0===_parameters$props3?void 0:_parameters$props3.MastheadComposite)&&void 0!==_parameters$props$Mas3?_parameters$props$Mas3:{};return hasSearch||setTimeout((()=>{var _document$querySelect2;null===(_document$querySelect2=document.querySelector("dds-masthead-container"))||void 0===_document$querySelect2||_document$querySelect2.removeAttribute("has-search")}),1e3),react_default.a.createElement(masthead_container.a,{"activate-search":"true",platform:platform,platformUrl:platformData_url,"selected-menu-item":selectedMenuItem,"user-status":userStatus,searchPlaceholder:searchPlaceholder,navLinks:navLinks,"has-profile":hasProfile,"has-search":hasSearch,"custom-profile-login":customProfileLogin})};searchOpenOnload.story={name:"Search open onload"};const withPlatform=({parameters:parameters})=>{var _parameters$props$Mas4,_parameters$props4;const{userStatus:userStatus,navLinks:navLinks,hasProfile:hasProfile,hasSearch:hasSearch,searchPlaceholder:searchPlaceholder}=null!==(_parameters$props$Mas4=null==parameters||null===(_parameters$props4=parameters.props)||void 0===_parameters$props4?void 0:_parameters$props4.MastheadComposite)&&void 0!==_parameters$props$Mas4?_parameters$props$Mas4:{};return hasSearch||setTimeout((()=>{var _document$querySelect3;null===(_document$querySelect3=document.querySelector("dds-masthead-container"))||void 0===_document$querySelect3||_document$querySelect3.removeAttribute("has-search")}),1e3),react_default.a.createElement(masthead_container.a,{platform:"Platform",platformUrl:platformData_url,"user-status":userStatus,searchPlaceholder:searchPlaceholder,navLinks:navLinks,"has-profile":hasProfile,"has-search":hasSearch})};withPlatform.story={name:"With platform",parameters:{knobs:{MastheadComposite:({groupId:groupId})=>({hasProfile:Object(dist.select)("show the profile functionality (has-profile)",["true","false"],"true",groupId),hasSearch:Object(dist.boolean)("show the search functionality (has-search)",!0,groupId),searchPlaceholder:Object(knob_text_nullable.a)("search placeholder (searchPlaceholder)","Search all of IBM",groupId),userStatus:Object(dist.select)("The user authenticated status (user-status)",userStatuses,userStatuses.unauthenticated,groupId)})}}};const withL1=({parameters:parameters})=>{var _parameters$props$Mas5,_parameters$props5;const{selectedMenuItem:selectedMenuItem,userStatus:userStatus,navLinks:navLinks,hasProfile:hasProfile,hasSearch:hasSearch}=null!==(_parameters$props$Mas5=null==parameters||null===(_parameters$props5=parameters.props)||void 0===_parameters$props5?void 0:_parameters$props5.MastheadComposite)&&void 0!==_parameters$props$Mas5?_parameters$props$Mas5:{};return hasSearch||setTimeout((()=>{var _document$querySelect4;null===(_document$querySelect4=document.querySelector("dds-masthead-container"))||void 0===_document$querySelect4||_document$querySelect4.removeAttribute("has-search")}),1e3),react_default.a.createElement(masthead_container.a,{"selected-menu-item":selectedMenuItem,"user-status":userStatus,"has-profile":hasProfile,"has-search":hasSearch,l1Data:mastheadL1Data,navLinks:navLinks})};withL1.story={name:"With L1",parameters:{knobs:{MastheadComposite:({groupId:groupId})=>({hasProfile:Object(dist.select)("show the profile functionality (has-profile)",["true","false"],"true",groupId),hasSearch:Object(dist.boolean)("show the search functionality (has-search)",!0,groupId),selectedMenuItem:Object(knob_text_nullable.a)("selected menu item (selected-menu-item)","Products",groupId),userStatus:Object(dist.select)("The user authenticated status (user-status)",userStatuses,userStatuses.unauthenticated,groupId)})}}};const withAlternateLogoAndTooltip=({parameters:parameters})=>{var _parameters$props$Mas6,_parameters$props6;const{selectedMenuItem:selectedMenuItem,userStatus:userStatus,navLinks:navLinks,hasProfile:hasProfile,hasSearch:hasSearch,searchPlaceholder:searchPlaceholder,mastheadLogo:mastheadLogo}=null!==(_parameters$props$Mas6=null==parameters||null===(_parameters$props6=parameters.props)||void 0===_parameters$props6?void 0:_parameters$props6.MastheadComposite)&&void 0!==_parameters$props$Mas6?_parameters$props$Mas6:{};return hasSearch||setTimeout((()=>{var _document$querySelect5;null===(_document$querySelect5=document.querySelector("dds-masthead-container"))||void 0===_document$querySelect5||_document$querySelect5.removeAttribute("has-search")}),1e3),react_default.a.createElement(masthead_container.a,{"selected-menu-item":selectedMenuItem,"user-status":userStatus,searchPlaceholder:searchPlaceholder,navLinks:navLinks,logoData:"alternateWithTooltip"===mastheadLogo?logoData:null,"has-profile":hasProfile,"has-search":hasSearch})};withAlternateLogoAndTooltip.story={name:"With alternate logo and tooltip",parameters:{knobs:{MastheadComposite:({groupId:groupId})=>({hasProfile:Object(dist.select)("show the profile functionality (has-profile)",["true","false"],"true",groupId),hasSearch:Object(dist.boolean)("show the search functionality (has-search)",!0,groupId),searchPlaceholder:Object(knob_text_nullable.a)("search placeholder (searchPlaceholder)","Search all of IBM",groupId),selectedMenuItem:Object(knob_text_nullable.a)("selected menu item (selected-menu-item)","Consulting & Services",groupId),mastheadLogo:Object(dist.select)("masthead logo data (logoData)",{defaultWithNoTooltip:null,alternateWithTooltip:"alternateWithTooltip"},"alternateWithTooltip",groupId),userStatus:Object(dist.select)("The user authenticated status (user-status)",userStatuses,userStatuses.unauthenticated,groupId)})}}};__webpack_exports__.default={title:"Components/Masthead",decorators:[story=>story()],parameters:masthead_stories_react_objectSpread(masthead_stories_react_objectSpread({},README_stories_react.parameters),{},{knobs:{escapeHTML:!1,MastheadComposite:({groupId:groupId})=>({hasProfile:Object(dist.select)("show the profile functionality (has-profile)",["true","false"],"true",groupId),hasSearch:Object(dist.boolean)("show the search functionality (has-search)",!0,groupId),searchPlaceholder:Object(knob_text_nullable.a)("search placeholder (searchPlaceholder)","Search all of IBM",groupId),selectedMenuItem:Object(knob_text_nullable.a)("selected menu item (selected-menu-item)","Consulting & Services",groupId),userStatus:Object(dist.select)("The user authenticated status (user-status)",userStatuses,userStatuses.unauthenticated,groupId),customProfileLogin:feature_flags.a&&Object(knob_text_nullable.a)("custom profile login url (customProfileLogin)","https://www.example.com/",groupId)})}})}}}]);