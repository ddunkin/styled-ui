webpackJsonp([26],{1569:function(t,e,n){var o=n(1),s=n(67),i=n(309).PageRenderer;i.__esModule&&(i=i.default);var a=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1625)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,t.exports=a},1625:function(t,e){t.exports='```react\nnoSource: true\n---\n<React.Fragment>\n\t<V6Banner>\n\t\t<AcceptsStyledSystemProps />\n\t\t<AriaCompliant />\n\t</V6Banner>\n\t<HelpBox variant="warning">\n\t\tCatalog has a setState bug and the example below appears broken, but the component is functional.\n\t</HelpBox>\n</React.Fragment>\n```\n\nA `Listbox` is a dropdown should be used in situations similar to an HTML select. Refer to the `Menu` docs for more info on variations.\n\n```react\nshowSource: true\nstate: { isOpen: false, selected: 0 }\n---\n<ListboxDemo>\n\t<Label id="listboxLabel">Pick your favorite browser:</Label>\n\t<Listbox\n\t\tisOpen={state.isOpen}\n\t\tonItemSelect={id => {console.log(id); setState({ selected: id })}}\n\t\tselectedId={state.selected}\n\t\tonToggleMenu={() => setState({ isOpen: !state.isOpen })}\n\t\tlabelledBy="listboxLabel"\n\t\twidth="100px"\n\t>\n\t\t<Listbox.Toggle>{browserList[state.selected]}</Listbox.Toggle>\n\t\t<Listbox.Dropdown>\n\t\t\t{browserList.map((name, index) => <Listbox.Option id={index}>{name}</Listbox.Option>)}\n\t\t\t<Listbox.Option id="ie" disabled>Internet Explorer</Listbox.Option>\n\t\t</Listbox.Dropdown>\n\t</Listbox>\n</ListboxDemo>\n```\n'}});
//# sourceMappingURL=26.45a1dfb8.chunk.js.map