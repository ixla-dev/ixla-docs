"use strict";(self.webpackChunkixla_docs=self.webpackChunkixla_docs||[]).push([[1223],{4847:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var t=a(4848),s=a(8453);const r=a.p+"assets/images/swagger_ui-1dd8f3b43a9aa2e321eb365ffebfd412.png",i={title:"Accessing REST APIs"},o=void 0,l={id:"setup-and-integration/accessing-rest-apis",title:"Accessing REST APIs",description:"[openapi]//openapi-generator.tech/docs/installation/",source:"@site/docs/setup-and-integration/00-accessing-rest-apis.mdx",sourceDirName:"setup-and-integration",slug:"/setup-and-integration/accessing-rest-apis",permalink:"/ixla-docs/docs/setup-and-integration/accessing-rest-apis",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Accessing REST APIs"},sidebar:"defaultSidebar",previous:{title:"Setup and Integration",permalink:"/ixla-docs/docs/category/setup-and-integration"},next:{title:"Design and create documents",permalink:"/ixla-docs/docs/setup-and-integration/prerequisites"}},c={},g=[{value:"Generating SDK Clients",id:"generating-sdk-clients",level:2},{value:"Install <code>openapi-generator-cli</code>",id:"install-openapi-generator-cli",level:3},{value:"Typescript Angular",id:"typescript-angular",level:3},{value:"C# .NETCore/.NET5",id:"c-netcorenet5",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["By default AIDA's HTTP service listens on port ",(0,t.jsx)(n.code,{children:"5000"})," and binds to ",(0,t.jsx)(n.code,{children:"0.0.0.0"})," (all IP addresses)."]}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"http://{BOX_IP_ADDRESS}:5000/swagger/index.html"})," to see an exhaustive list of available endpoints in Swagger UI."]}),"\n","\n","\n",(0,t.jsx)("img",{src:r,className:"wizard-step"}),"\n",(0,t.jsx)(n.h2,{id:"generating-sdk-clients",children:"Generating SDK Clients"}),"\n",(0,t.jsx)(n.p,{children:"SDK clients can be generated for various languages using openapi-generator-cli.\nThe following are two examples for generating SDK client clients for Typescript Angular and C# .NETCore clients."}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://openapi-generator.tech/docs/installation/",children:"@openapitools/opeapi-generator-cli official\ndocumentation"})," for a full list of supported languages and configurations."]}),"\n",(0,t.jsxs)(n.h3,{id:"install-openapi-generator-cli",children:["Install ",(0,t.jsx)(n.code,{children:"openapi-generator-cli"})]}),"\n",(0,t.jsx)(n.p,{children:"First of all you will need to install openapi-generator-cli:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g @openapitools/openapi-generator-cli\n"})}),"\n",(0,t.jsx)(n.h3,{id:"typescript-angular",children:"Typescript Angular"}),"\n",(0,t.jsxs)(n.p,{children:["Settings that affect the generator output can be provided in a separate ",(0,t.jsx)(n.code,{children:".json"})," file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="angular-generator-config.json"',children:'{\n  "stringEnums": true,\n  "ensureUniqueParams": true,\n  "useSingleRequestParameter": true,\n  "npmName": "my-npm-packagen-name",\n  "enumPropertyNaming": "PascalCase"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Generating the client is easy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# -o  -- generator's output directory path\n# -g  -- generator name, in this case we use typescript-angular \n# -c  -- path to a json file that contains settings for the generator \n# -i  -- input openapi spec in `.yaml` or `.json` format. \nopenapi-generator-cli generate -o ./my-angular-sdk \\\n                      //highlight-start\n                      -g typescript-angular \\\n                      -c angular-generator-config.json \\\n                      //highlight-end\n                      -i http://$BOX_IP_ADDRESS:5000/AIDA/v1/swagger.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"c-netcorenet5",children:"C# .NETCore/.NET5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="csharp-generator-config.json"',children:'{\n  "stringEnums": true,\n  "ensureUniqueParams": true,\n  "returnICollection" : true,\n  "useSingleRequestParameter": true,\n  "sortParamsByRequiredFlag" : true,\n  "netCoreProjectFile" : true,\n  "packageName" : "IXLA.AIDA.Sdk",\n  "sourceFolder" : "src",\n  "nonPublicApi" : false,\n  "targetFramework" : "netstandard2.1",\n  "enumPropertyNaming": "PascalCase"\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"openapi-generator-cli generate -o ./my-csharp-sdk \\\n                      //highlight-start\n                      -g csharp-netcore \\\n                      -c csharp-generator-config.json \\\n                      //highlight-end\n                      -i http://$BOX_IP_ADDRESS:5000/AIDA/v1/swagger.yaml\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);