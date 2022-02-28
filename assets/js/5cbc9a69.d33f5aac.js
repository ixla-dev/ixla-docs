"use strict";(self.webpackChunkixla_docs=self.webpackChunkixla_docs||[]).push([[521],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,f=g["".concat(l,".").concat(d)]||g[d]||u[d]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},636:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t.p+"assets/images/swagger_ui-1dd8f3b43a9aa2e321eb365ffebfd412.png",s=["components"],l={title:"Accessing REST APIs"},c=void 0,p={unversionedId:"setup-and-integration/accessing-rest-apis",id:"setup-and-integration/accessing-rest-apis",title:"Accessing REST APIs",description:"[openapi]//openapi-generator.tech/docs/installation/",source:"@site/docs/setup-and-integration/00-accessing-rest-apis.mdx",sourceDirName:"setup-and-integration",slug:"/setup-and-integration/accessing-rest-apis",permalink:"/ixla-docs/docs/setup-and-integration/accessing-rest-apis",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Accessing REST APIs"},sidebar:"defaultSidebar",previous:{title:"Setup and Integration",permalink:"/ixla-docs/docs/category/setup-and-integration"},next:{title:"Design and create documents",permalink:"/ixla-docs/docs/setup-and-integration/prerequisites"}},u={},g=[{value:"Generating SDK Clients",id:"generating-sdk-clients",level:2},{value:"Install <code>openapi-generator-cli</code>",id:"install-openapi-generator-cli",level:3},{value:"Typescript Angular",id:"typescript-angular",level:3},{value:"C# .NETCore/.NET5",id:"c-netcorenet5",level:3}],d={toc:g};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default IWS's HTTP service listens on port ",(0,i.kt)("inlineCode",{parentName:"p"},"5000")," and binds to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," (all IP addresses)."),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"http://{BOX_IP_ADDRESS}:5000/swagger/index.html")," to see an exhaustive list of available endpoints in Swagger UI."),(0,i.kt)("img",{src:o,className:"wizard-step"}),(0,i.kt)("h2",{id:"generating-sdk-clients"},"Generating SDK Clients"),(0,i.kt)("p",null,"SDK clients can be generated for varioius languages using openapi-generator-cli.\nThe following are two examples for generating SDK client clients for Typescript Angular and C# .NETCore clients."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/installation/"},"@openapitools/opeapi-generator-cli official\ndocumentation")," for a full list of supported languages and configurations. "),(0,i.kt)("h3",{id:"install-openapi-generator-cli"},"Install ",(0,i.kt)("inlineCode",{parentName:"h3"},"openapi-generator-cli")),(0,i.kt)("p",null,"First of all you will need to install openapi-generator-cli: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @openapitools/openapi-generator-cli\n")),(0,i.kt)("h3",{id:"typescript-angular"},"Typescript Angular"),(0,i.kt)("p",null,"Settings that affect the generator output can be provided in a separate ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="angular-generator-config.json"',title:'"angular-generator-config.json"'},'{\n  "stringEnums": true,\n  "ensureUniqueParams": true,\n  "useSingleRequestParameter": true,\n  "npmName": "my-npm-packagen-name",\n  "enumPropertyNaming": "PascalCase"\n}\n')),(0,i.kt)("p",null,"Generating the client is easy: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# -o  -- generator's output directory path\n# -g  -- generator name, in this case we use typescript-angular \n# -c  -- path to a json file that contains settings for the generator \n# -i  -- input openapi spec in `.yaml` or `.json` format. \nopenapi-generator-cli generate -o ./my-angular-sdk \\\n                      //highlight-start\n                      -g typescript-angular\n                      -c angular-generator-config.json\n                      //highlight-end\n                      -i http://$BOX_IP_ADDRESS:5000/iws/v1/swagger.yaml \\\n")),(0,i.kt)("h3",{id:"c-netcorenet5"},"C# .NETCore/.NET5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="csharp-generator-config.json"',title:'"csharp-generator-config.json"'},'{\n  "stringEnums": true,\n  "ensureUniqueParams": true,\n  "returnICollection" : true,\n  "useSingleRequestParameter": true,\n  "sortParamsByRequiredFlag" : true,\n  "netCoreProjectFile" : true,\n  "packageName" : "IXLA.Iws.Sdk",\n  "sourceFolder" : "src",\n  "nonPublicApi" : false,\n  "targetFramework" : "netstandard2.1",\n  "enumPropertyNaming": "PascalCase"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openapi-generator-cli generate -o ./my-csharp-sdk \\\n                      //highlight-start\n                      -g csharp-netcore\n                      -c csharp-generator-config.json\n                      //highlight-end\n                      -i http://$BOX_IP_ADDRESS:5000/iws/v1/swagger.yaml \\\n")))}f.isMDXComponent=!0}}]);