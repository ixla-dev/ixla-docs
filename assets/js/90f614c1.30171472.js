"use strict";(self.webpackChunkixla_docs=self.webpackChunkixla_docs||[]).push([[451],{4084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(4848),o=n(8453);const r={title:"Database Integration"},s=void 0,i={id:"setup-and-integration/database-integration",title:"Database Integration",description:"Overview",source:"@site/docs/setup-and-integration/02-database-integration.mdx",sourceDirName:"setup-and-integration",slug:"/setup-and-integration/database-integration",permalink:"/ixla-docs/docs/setup-and-integration/database-integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Database Integration"},sidebar:"defaultSidebar",previous:{title:"Configure Job Templates",permalink:"/ixla-docs/docs/setup-and-integration/configure-job-templates"},next:{title:"Start Issuance",permalink:"/ixla-docs/docs/setup-and-integration/start-issuance"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"System Database",id:"system-database",level:2},{value:"The ETL Service",id:"the-etl-service",level:2},{value:"Retriving Data Exchange Tables DDL",id:"retriving-data-exchange-tables-ddl",level:3},{value:"Retrieving Entity Names",id:"retrieving-entity-names",level:3}];function _(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["When we configured our ",(0,a.jsx)(t.em,{children:"Job Template"})," the system has automatically created a ",(0,a.jsx)(t.em,{children:"Data Exchange Table"})," for us. Records in data exchange tables represent jobs that the system will try to process during issuance."]}),"\n",(0,a.jsx)(t.p,{children:"We will populate data exchange tables with personalization data that will be used to update entities values before engraving. Data exchange tables also contain columns, managed by AIDA, that are used to persist workflows execution status and results."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"#system-database",children:"system database"})," is directly accessible to integrations, use your favorite connector / tools to interact with it."]}),"\n",(0,a.jsxs)(t.p,{children:["Table names, column names and column types, can be retrieved using the ",(0,a.jsx)(t.a,{href:"#the-etl-service",children:"ETL Service API"}),".\nOnce you have them, you can construct SQL statements to populate the database."]}),"\n",(0,a.jsx)(t.h2,{id:"system-database",children:"System Database"}),"\n",(0,a.jsxs)(t.p,{children:["Systems controlled by AIDA host an instance of ",(0,a.jsx)(t.strong,{children:"MariaDB"})," configured as follows:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property Name"}),(0,a.jsx)(t.th,{children:"Value"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"INSTALLDIR"})}),(0,a.jsx)(t.td,{children:"d:\\apps\\mysql\\bin\\"}),(0,a.jsx)(t.td,{children:"Installation root"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"DATADIR"})}),(0,a.jsx)(t.td,{children:"d:\\apps\\mysql\\data\\"}),(0,a.jsx)(t.td,{children:"Location of the data directory"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"PORT"})}),(0,a.jsx)(t.td,{children:"3306"}),(0,a.jsx)(t.td,{children:"--port parameter for the server"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"PASSWORD"})}),(0,a.jsx)(t.td,{children:"root"}),(0,a.jsx)(t.td,{children:"Password of the root user"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"ALLOWREMOTEROOTACESS"})}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"Allow login as root from remote hosts"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"the-etl-service",children:"The ETL Service"}),"\n",(0,a.jsxs)(t.p,{children:["The component of AIDA that generates ",(0,a.jsx)(t.em,{children:"Data Exchange Tables"})," using metadata retrived from SJF Files is the ",(0,a.jsx)(t.em,{children:"ETL (Extract Transform Load) Service"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["We can query the ",(0,a.jsx)(t.em,{children:"ETL Service"})," to obtain ",(0,a.jsx)(t.em,{children:"Data Exchange Tables"})," names and the list of columns that map to personalization data."]}),"\n",(0,a.jsx)(t.h3,{id:"retriving-data-exchange-tables-ddl",children:"Retriving Data Exchange Tables DDL"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Data Exchange Tables"})," DDL can be retrieved as follows"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="HTTP Request - Getting tables DDL"',children:"GET /AIDA/v1/etl/{jobId}/exchange-table-ddl\nAccept: application/json\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The services returns an object containing the ",(0,a.jsx)(t.em,{children:"table name"}),", and ",(0,a.jsx)(t.em,{children:"sql"})," to create the table if needed."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="Response Body"',children:'{\n  "sql": "\\nDROP TABLE IF EXISTS `__DET__Demo_Box`;\\nCREATE TABLE `__DET__Demo_Box` (\\n`job_id` int primary key not null auto_increment,\\n`job_status` varchar(255),\\n`create_timestamp` datetime default NOW(),\\n`update_timestamp` datetime,\\n`start_timestamp` datetime,\\n`complete_timestamp` datetime,\\n`workflow_id` varchar(255),\\n`workflow_status` varchar(255),\\n`step_id` varchar(255),\\n`step_name` varchar(255),\\n`stack_trace` longtext default null,\\n`Front_DemoBox_000__Signature` MEDIUMBLOB,\\n`Front_DemoBox_001__lblName` VARCHAR(255),\\n`Front_DemoBox_002__Name` VARCHAR(255),\\n`Front_DemoBox_003__lblSurname` VARCHAR(255),\\n`Front_DemoBox_004__Surname` VARCHAR(255),\\n`Front_DemoBox_005__lblDateOfBirth` VARCHAR(255),\\n`Front_DemoBox_006__DateOfBirth` VARCHAR(255),\\n`Front_DemoBox_007__lblNationality` VARCHAR(255),\\n`Front_DemoBox_008__Nationality` VARCHAR(255),\\n`Front_DemoBox_009__lblPlaceOfBirth` VARCHAR(255),\\n`Front_DemoBox_010__PlaceOfBirth` VARCHAR(255),\\n`Front_DemoBox_011__lblExpiryDate` VARCHAR(255),\\n`Front_DemoBox_012__ExpiryDate` VARCHAR(255),\\n`Front_DemoBox_013__lblSignature` VARCHAR(255),\\n`Front_DemoBox_014__bmpPicture` MEDIUMBLOB,\\n`Front_DemoBox_015__Logo` VARCHAR(255),\\n`Rear_DemoBox_000__WebSite` VARCHAR(255),\\n`Rear_DemoBox_001__Logo` VARCHAR(255)\\n) charset=utf8mb4;\\n",\n  "tableName": "__DET__Demo_Box"\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The contents of the ",(0,a.jsx)(t.em,{children:"sql"})," field properly formatted look like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",metastring:"title=\"DDL of data exchange table generated for 'Demo Box'\"",children:"DROP TABLE IF EXISTS `__DET__Demo_Box`;\nCREATE TABLE `__DET__Demo_Box` (\n    # Fieds used by AIDA to persist workflows execution status and results\n    `job_id` int primary key not null auto_increment,\n    `job_status` varchar(255),\n    `create_timestamp` datetime default NOW(),\n    `update_timestamp` datetime,\n    `start_timestamp` datetime,\n    `complete_timestamp` datetime,\n    `workflow_id` varchar(255),\n    `workflow_status` varchar(255),\n    `step_id` varchar(255),\n    `step_name` varchar(255),\n    `stack_trace` longtext default null,\n    # Fields that contain Personalization Data, populated by integrations\n    # Front_DemoBox.sjf\n    `Front_DemoBox_000__Signature` MEDIUMBLOB,\n    `Front_DemoBox_001__lblName` VARCHAR(255),\n    `Front_DemoBox_002__Name` VARCHAR(255),\n    `Front_DemoBox_003__lblSurname` VARCHAR(255),\n    `Front_DemoBox_004__Surname` VARCHAR(255),\n    `Front_DemoBox_005__lblDateOfBirth` VARCHAR(255),\n    `Front_DemoBox_006__DateOfBirth` VARCHAR(255),\n    `Front_DemoBox_007__lblNationality` VARCHAR(255),\n    `Front_DemoBox_008__Nationality` VARCHAR(255),\n    `Front_DemoBox_009__lblPlaceOfBirth` VARCHAR(255),\n    `Front_DemoBox_010__PlaceOfBirth` VARCHAR(255),\n    `Front_DemoBox_011__lblExpiryDate` VARCHAR(255),\n    `Front_DemoBox_012__ExpiryDate` VARCHAR(255),\n    `Front_DemoBox_013__lblSignature` VARCHAR(255),\n    `Front_DemoBox_014__bmpPicture` MEDIUMBLOB,\n    `Front_DemoBox_015__Logo` VARCHAR(255),\n    # Rear_DemoBox.sjf\n    `Rear_DemoBox_000__WebSite` VARCHAR(255),\n    `Rear_DemoBox_001__Logo` VARCHAR(255)\n) charset=utf8mb4;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"retrieving-entity-names",children:"Retrieving Entity Names"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="HTTP Request - Retrieving Entity Descriptors"',children:"GET /AIDA/v1/etl/1/entities\nAccept: application/json\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="Response Body"',children:'[\n  {\n    "entityIndex": 0,\n    // highlight-next-line\n    "entityName": "Front_DemoBox_000__Signature",\n    "groupName": "Front_DemoBox",\n    "displayName": "Signature",\n    "valueType": "Image"\n  },\n  ...\n]\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Entity names, map 1-to-1 with column names in ",(0,a.jsx)(t.em,{children:"Data Exchange Tables"}),". We can use this information to generate SQL that populates our tables. Eg."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `__DET__Demo_Box` (\n        `Front_DemoBox_000__Signature`,\n        `Front_DemoBox_001__lblName`,\n        `Front_DemoBox_002__Name`,\n         ...\n        `Rear_DemoBox_001__Logo`) VALUES ( .. ),( .. ),( .. );\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"We are only populating fields that map to entities values. AIDA's managed fields can be ignored when providing data"})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}}}]);