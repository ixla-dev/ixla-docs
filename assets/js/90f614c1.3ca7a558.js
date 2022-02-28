"use strict";(self.webpackChunkixla_docs=self.webpackChunkixla_docs||[]).push([[490],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),_=m(n),u=r,d=_["".concat(s,".").concat(u)]||_[u]||c[u]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=_;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},7891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},assets:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Database Integration"},s=void 0,m={unversionedId:"setup-and-integration/database-integration",id:"setup-and-integration/database-integration",title:"Database Integration",description:"Overview",source:"@site/docs/setup-and-integration/02-database-integration.mdx",sourceDirName:"setup-and-integration",slug:"/setup-and-integration/database-integration",permalink:"/ixla-docs/docs/setup-and-integration/database-integration",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Database Integration"},sidebar:"defaultSidebar",previous:{title:"Configure Job Templates",permalink:"/ixla-docs/docs/setup-and-integration/configure-job-templates"},next:{title:"Start Issuance",permalink:"/ixla-docs/docs/setup-and-integration/start-issuance"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"System Database",id:"system-database",level:2},{value:"The ETL Service",id:"the-etl-service",level:2},{value:"Retriving Data Exchange Tables DDL",id:"retriving-data-exchange-tables-ddl",level:3},{value:"Retrieving Entity Names",id:"retrieving-entity-names",level:3}],_={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"When we configured our ",(0,o.kt)("em",{parentName:"p"},"Job Template")," the system has automatically created a ",(0,o.kt)("em",{parentName:"p"},"Data Exchange Table")," for us. Records in data exchange tables represent jobs that the system will try to process during issuance. "),(0,o.kt)("p",null,"We will populate data exchange tables with personalization data that will be used to update entities values before engraving. Data exchange tables contain also columns, managed by IWS, that are used to persist workflows execution status and results."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#system-database"},"system database")," is directly accessible to integrations, use your favorite connector / tools to interact with it."),(0,o.kt)("p",null,"Table names, column names and column types, can be retrieved using the ",(0,o.kt)("a",{parentName:"p",href:"#the-etl-service"},"ETL Service API"),".\nOnce you have them, you can construct SQL statements to populate the database. "),(0,o.kt)("h2",{id:"system-database"},"System Database"),(0,o.kt)("p",null,"Systems controlled by IWS host an instance of ",(0,o.kt)("strong",{parentName:"p"},"MariaDB")," configured as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"INSTALLDIR")),(0,o.kt)("td",{parentName:"tr",align:null},"d:\\apps\\mysql\\bin\\ "),(0,o.kt)("td",{parentName:"tr",align:null},"Installation root")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"DATADIR")),(0,o.kt)("td",{parentName:"tr",align:null},"d:\\apps\\mysql\\data\\ "),(0,o.kt)("td",{parentName:"tr",align:null},"Location of the data directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PORT")),(0,o.kt)("td",{parentName:"tr",align:null},"3306"),(0,o.kt)("td",{parentName:"tr",align:null},"--port parameter for the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PASSWORD")),(0,o.kt)("td",{parentName:"tr",align:null},"root"),(0,o.kt)("td",{parentName:"tr",align:null},"Password of the root user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ALLOWREMOTEROOTACESS")),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Allow login as root from remote hosts")))),(0,o.kt)("h2",{id:"the-etl-service"},"The ETL Service"),(0,o.kt)("p",null,"The component of IWS that generates ",(0,o.kt)("em",{parentName:"p"},"Data Exchange Tables")," using metadata retrived from SJF Files is the ",(0,o.kt)("em",{parentName:"p"},"ETL (Extract Transform Load) Service"),"."),(0,o.kt)("p",null,"We can query the ",(0,o.kt)("em",{parentName:"p"},"ETL Service")," to obtain ",(0,o.kt)("em",{parentName:"p"},"Data Exchange Tables")," names and the list of columns that map to personalization data. "),(0,o.kt)("h3",{id:"retriving-data-exchange-tables-ddl"},"Retriving Data Exchange Tables DDL"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Data Exchange Tables")," DDL can be retrieved as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HTTP Request - Getting tables DDL"',title:'"HTTP',Request:!0,"-":!0,Getting:!0,tables:!0,'DDL"':!0},"GET /iws/v1/etl/{jobId}/exchange-table-ddl\nAccept: application/json\n")),(0,o.kt)("p",null,"The services returns an object containing the ",(0,o.kt)("em",{parentName:"p"},"table name"),", and ",(0,o.kt)("em",{parentName:"p"},"sql")," to create the table if needed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response Body"',title:'"Response','Body"':!0},'{\n  "sql": "\\nDROP TABLE IF EXISTS `__DET__Demo_Box`;\\nCREATE TABLE `__DET__Demo_Box` (\\n`job_id` int primary key not null auto_increment,\\n`job_status` varchar(255),\\n`create_timestamp` datetime default NOW(),\\n`update_timestamp` datetime,\\n`start_timestamp` datetime,\\n`complete_timestamp` datetime,\\n`workflow_id` varchar(255),\\n`workflow_status` varchar(255),\\n`step_id` varchar(255),\\n`step_name` varchar(255),\\n`stack_trace` longtext default null,\\n`Front_DemoBox_000__Signature` MEDIUMBLOB,\\n`Front_DemoBox_001__lblName` VARCHAR(255),\\n`Front_DemoBox_002__Name` VARCHAR(255),\\n`Front_DemoBox_003__lblSurname` VARCHAR(255),\\n`Front_DemoBox_004__Surname` VARCHAR(255),\\n`Front_DemoBox_005__lblDateOfBirth` VARCHAR(255),\\n`Front_DemoBox_006__DateOfBirth` VARCHAR(255),\\n`Front_DemoBox_007__lblNationality` VARCHAR(255),\\n`Front_DemoBox_008__Nationality` VARCHAR(255),\\n`Front_DemoBox_009__lblPlaceOfBirth` VARCHAR(255),\\n`Front_DemoBox_010__PlaceOfBirth` VARCHAR(255),\\n`Front_DemoBox_011__lblExpiryDate` VARCHAR(255),\\n`Front_DemoBox_012__ExpiryDate` VARCHAR(255),\\n`Front_DemoBox_013__lblSignature` VARCHAR(255),\\n`Front_DemoBox_014__bmpPicture` MEDIUMBLOB,\\n`Front_DemoBox_015__Logo` VARCHAR(255),\\n`Rear_DemoBox_000__WebSite` VARCHAR(255),\\n`Rear_DemoBox_001__Logo` VARCHAR(255)\\n) charset=utf8mb4;\\n",\n  "tableName": "__DET__Demo_Box"\n}\n')),(0,o.kt)("p",null,"The contents of the ",(0,o.kt)("em",{parentName:"p"},"sql")," field properly formatted look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"DDL of data exchange table generated for 'Demo Box'\"",title:'"DDL',of:!0,data:!0,exchange:!0,table:!0,generated:!0,for:!0,"'Demo":!0,"Box'\"":!0},"DROP TABLE IF EXISTS `__DET__Demo_Box`;\nCREATE TABLE `__DET__Demo_Box` (\n    # Fieds used by IWS to persist workflows execution status and results\n    `job_id` int primary key not null auto_increment,\n    `job_status` varchar(255),\n    `create_timestamp` datetime default NOW(),\n    `update_timestamp` datetime,\n    `start_timestamp` datetime,\n    `complete_timestamp` datetime,\n    `workflow_id` varchar(255),\n    `workflow_status` varchar(255),\n    `step_id` varchar(255),\n    `step_name` varchar(255),\n    `stack_trace` longtext default null,\n    # Fields that contain Personalization Data, populated by integrations\n    # Front_DemoBox.sjf\n    `Front_DemoBox_000__Signature` MEDIUMBLOB,\n    `Front_DemoBox_001__lblName` VARCHAR(255),\n    `Front_DemoBox_002__Name` VARCHAR(255),\n    `Front_DemoBox_003__lblSurname` VARCHAR(255),\n    `Front_DemoBox_004__Surname` VARCHAR(255),\n    `Front_DemoBox_005__lblDateOfBirth` VARCHAR(255),\n    `Front_DemoBox_006__DateOfBirth` VARCHAR(255),\n    `Front_DemoBox_007__lblNationality` VARCHAR(255),\n    `Front_DemoBox_008__Nationality` VARCHAR(255),\n    `Front_DemoBox_009__lblPlaceOfBirth` VARCHAR(255),\n    `Front_DemoBox_010__PlaceOfBirth` VARCHAR(255),\n    `Front_DemoBox_011__lblExpiryDate` VARCHAR(255),\n    `Front_DemoBox_012__ExpiryDate` VARCHAR(255),\n    `Front_DemoBox_013__lblSignature` VARCHAR(255),\n    `Front_DemoBox_014__bmpPicture` MEDIUMBLOB,\n    `Front_DemoBox_015__Logo` VARCHAR(255),\n    # Rear_DemoBox.sjf\n    `Rear_DemoBox_000__WebSite` VARCHAR(255),\n    `Rear_DemoBox_001__Logo` VARCHAR(255)\n) charset=utf8mb4;\n")),(0,o.kt)("h3",{id:"retrieving-entity-names"},"Retrieving Entity Names"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HTTP Request - Retrieving Entity Descriptors"',title:'"HTTP',Request:!0,"-":!0,Retrieving:!0,Entity:!0,'Descriptors"':!0},"GET /iws/v1/etl/1/entities\nAccept: application/json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response Body"',title:'"Response','Body"':!0},'[\n  {\n    "entityIndex": 0,\n    // highlight-next-line\n    "entityName": "Front_DemoBox_000__Signature",\n    "groupName": "Front_DemoBox",\n    "displayName": "Signature",\n    "valueType": "Image"\n  },\n  ...\n]\n')),(0,o.kt)("p",null,"Entity names, map 1-to-1 with column names in ",(0,o.kt)("em",{parentName:"p"},"Data Exchange Tables"),". We can use this information to generate SQL that populates our tables. Eg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `__DET__Demo_Box` (\n        `Front_DemoBox_000__Signature`,\n        `Front_DemoBox_001__lblName`,\n        `Front_DemoBox_002__Name`,\n         ...\n        `Rear_DemoBox_001__Logo`) VALUES ( .. ),( .. ),( .. );\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We are only populating fields that map to entities values. IWS's managed fields can be ignored when providing data"))))}u.isMDXComponent=!0}}]);