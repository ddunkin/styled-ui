webpackJsonp([36],{1564:function(t,n,e){var i=e(1),o=e(67),s=e(309).PageRenderer;s.__esModule&&(s=s.default);var a=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(1620)}},componentWillMount:function(){},render:function(){return i.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,t.exports=a},1620:function(t,n){t.exports="## Component Variations\n\n### With Drop Target\n\n```react\nshowSource: true\nstate: {\n\tfiles: [\n\t\t{\n\t\t\tid: 'one',\n\t\t\tmediaType: 'image/png',\n\t\t\tname: 'File one',\n\t\t\tbyteCount: 1244124,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'two',\n\t\t\tmediaType: 'video/mp4',\n\t\t\tname: 'File two',\n\t\t\tbyteCount: 123,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'three',\n\t\t\tmediaType: 'audio/mpeg',\n\t\t\tname: 'File three',\n\t\t\tbyteCount: 923992344124,\n\t\t\tisProcessing: false,\n\t\t},\n\t],\n}\n---\n<div>\n\t<FilesSection\n\t\tfiles={state.files}\n\t\tonFileClicked={file => console.log(file)}\n\t\tonUploadFiles={event => {\n\t\t\tevent.stopPropagation();\n\t\t\tevent.preventDefault();\n\n\t\t\tconst files =\n\t\t\t\t(event.dataTransfer && event.dataTransfer.files) ||\n\t\t\t\t(event.target && event.target.files);\n\n\t\t\tconst mappedFiles = [];\n\t\t\tfor (const file of files) {\n\t\t\t\tmappedFiles.push({\n\t\t\t\t\tid: file.name,\n\t\t\t\t\tname: file.name,\n\t\t\t\t\tbyteCount: file.size,\n\t\t\t\t\tmediaType: file.type,\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tsetState(prevState => ({\n\t\t\t\tfiles: [...prevState.files, ...mappedFiles],\n\t\t\t}));\n\t\t}}\n\t/>\n</div>\n```\n\n## With file actions\n\n```react\nshowSource: true\nstate: {\n\tfiles: [\n\t\t{\n\t\t\tid: 'one',\n\t\t\tmediaType: 'image/png',\n\t\t\tname: 'File one',\n\t\t\tbyteCount: 1244124,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'two',\n\t\t\tmediaType: 'video/mp4',\n\t\t\tname: 'File two',\n\t\t\tbyteCount: 123,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'three',\n\t\t\tmediaType: 'audio/mpeg',\n\t\t\tname: 'File three',\n\t\t\tbyteCount: 923992344124,\n\t\t\tisProcessing: false,\n\t\t},\n\t],\n}\n---\n<div>\n\t<FilesSection\n\t\tfiles={state.files}\n\t\tonFileClicked={file => console.log(file)}\n\t\trenderFileActions={file => (\n\t\t\t<div style={{ paddingTop: 4 }}>\n\t\t\t\t{file.mediaType.startsWith('image') && (\n\t\t\t\t\t<span style={{ padding: '0 16px 0 0' }}>\n\t\t\t\t\t\t<Button onClick={() => console.log('Print file', file)} title=\"Print\" variant=\"primaryTransparent\">\n\t\t\t\t\t\t\t<svg stroke=\"currentColor\" fill=\"none\" strokeWidth=\"2\" viewBox=\"0 0 24 24\" strokeLinecap=\"round\" strokeLinejoin=\"round\" height=\"18\" width=\"18\"><polyline points=\"6 9 6 2 18 2 18 9\" /><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\" /><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" /></svg>\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t</span>\n\t\t\t\t)}\n\t\t\t\t<Button onClick={() => console.log('Download file', file)} title=\"Download\" variant=\"primaryTransparent\">\n\t\t\t\t\t<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\"><g stroke=\"none\" strokeWidth=\"1\" fill=\"none\" fillRule=\"evenodd\"><g fill=\"currentColor\"><path d=\"M9,7.79516537 L9,1 L7,1 L7,7.56670377 L4.71728604,5.35377997 L3.32519442,6.78977472 L7.48559482,10.8229778 L8.21010405,11.5253364 L8.90589288,10.7945156 L12.86268,6.63850972 L11.4141755,5.25943949 L9,7.79516537 Z M14.5,16 L16,16 L16,10 L14,10 L14,14 L2,14 L2,10 L0,10 L0,16 L1.5,16 L14.5,16 L14.5,16 Z\" /></g></g></svg>\n\t\t\t\t</Button>\n\t\t\t</div>\n\t\t)}\n\t/>\n</div>\n```\n\n## With processing files\n\n```react\nshowSource: true\nstate: {\n\tfiles: [\n\t\t{\n\t\t\tid: 'one',\n\t\t\tmediaType: 'image/png',\n\t\t\tname: 'File one',\n\t\t\tbyteCount: 1244124,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'two',\n\t\t\tmediaType: 'video/mp4',\n\t\t\tname: 'File two',\n\t\t\tbyteCount: 123,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'three',\n\t\t\tmediaType: 'audio/mpeg',\n\t\t\tname: 'File three',\n\t\t\tbyteCount: 923992344124,\n\t\t\tisProcessing: true,\n\t\t},\n\t],\n}\n---\n<div>\n\t<FilesSection\n\t\tfiles={state.files}\n\t\tonFileClicked={file => console.log(file)}\n\t\trenderLoadingSpinner={() => <LoadingSpinner small />}\n\t/>\n</div>\n```\n\n## With localized strings\n\n```react\nshowSource: true\nstate: {\n\tfiles: [\n\t\t{\n\t\t\tid: 'one',\n\t\t\tmediaType: 'image/png',\n\t\t\tname: 'Archivo uno',\n\t\t\tbyteCount: 1244124,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'two',\n\t\t\tmediaType: 'video/mp4',\n\t\t\tname: 'Archivo dos',\n\t\t\tbyteCount: 123,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'three',\n\t\t\tmediaType: 'audio/mpeg',\n\t\t\tname: 'Archivo tres',\n\t\t\tbyteCount: 923992344124,\n\t\t\tisProcessing: false,\n\t\t},\n\t],\n}\n---\n<div>\n\t<FilesSection\n\t\ttitle=\"Archivos\"\n\t\tdropZoneText=\"Arrastra y suelta para subir archivos\"\n\t\tbrowseFilesButtonText=\"o navegar archivos\"\n\t\tmediaTypeLabels={{\n\t\t\tvideo: 'V\xeddeo',\n\t\t\taudio: 'Audio',\n\t\t\timage: 'Imagen',\n\t\t\tdefault: 'Otro',\n\t\t}}\n\t\tfiles={state.files}\n\t\tonFileClicked={file => console.log(file)}\n\t\tonUploadFiles={() => console.log('Handle upload files')}\n\t/>\n</div>\n```\n\n## Without clickable files\n\n```react\nshowSource: true\nstate: {\n\tfiles: [\n\t\t{\n\t\t\tid: 'one',\n\t\t\tmediaType: 'image/png',\n\t\t\tname: 'File one',\n\t\t\tbyteCount: 1244124,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'two',\n\t\t\tmediaType: 'video/mp4',\n\t\t\tname: 'File two',\n\t\t\tbyteCount: 123,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'three',\n\t\t\tmediaType: 'audio/mpeg',\n\t\t\tname: 'File three',\n\t\t\tbyteCount: 923992344124,\n\t\t\tisProcessing: false,\n\t\t},\n\t],\n}\n---\n<div>\n\t<FilesSection files={state.files} />\n</div>\n```\n\n## With a large title\n\n```react\nshowSource: true\nstate: {\n\tfiles: [\n\t\t{\n\t\t\tid: 'one',\n\t\t\tmediaType: 'image/png',\n\t\t\tname: 'File one',\n\t\t\tbyteCount: 1244124,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'two',\n\t\t\tmediaType: 'video/mp4',\n\t\t\tname: 'File two',\n\t\t\tbyteCount: 123,\n\t\t\tisProcessing: false,\n\t\t},\n\t\t{\n\t\t\tid: 'three',\n\t\t\tmediaType: 'audio/mpeg',\n\t\t\tname: 'File three',\n\t\t\tbyteCount: 923992344124,\n\t\t\tisProcessing: false,\n\t\t},\n\t],\n}\n---\n<div>\n\t<FilesSection files={state.files} titleFontSize=\"32px\" />\n</div>\n```\n"}});
//# sourceMappingURL=36.c054e4ea.chunk.js.map