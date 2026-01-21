#!c:\Program Files\nodejs\node.exe

import fs from 'fs';
import path from 'path';


function parseFiles( ) {
    const byVersion = {};
    const files = fs.readdirSync('./static/api-definitions');
    for(let filename of files) {
        const basename = path.basename(filename)
        const extension = path.extname(filename);
        const filenameWithoutExtension = basename.substring(0, basename.length - extension.length);
        const tokens = filenameWithoutExtension.split('-')
        const version = tokens[tokens.length - 1];
        let results = [];
        if (version in byVersion)
            results = byVersion[version].definitions;
        else {
            byVersion[version] = {
                version,
                definitions: []
            }
            results = byVersion[version].definitions;
        }
            
        const name = tokens.splice(0, tokens.length - 1).join('-');
        results.push({ name: basename, link: `/api-definitions/${basename}` })
    }
    return byVersion;
}

const definitions = parseFiles();

let content = `---
id: openapi-definitions
title: OpenAPI Definitions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

`;

const sortedKeys = Object.keys(definitions).sort((a,b) => a < b ? 1 : -1);

for (let k of sortedKeys) {
    content += `### ${k}

`;
    const files = definitions[k].definitions;
    for(let f of files) {
        content += `- <a href={useBaseUrl('${f.link}')} target="_blank" rel="noopener noreferrer">${f.name}</a>
`
    }
    content += '\n';
}

fs.writeFileSync('./docs/API/definitions.mdx', content);
console.log('done');
