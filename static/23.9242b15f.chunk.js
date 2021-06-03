webpackJsonp([23],{1563:function(e,n,t){var o=t(1),a=t(67),i=t(309).PageRenderer;i.__esModule&&(i=i.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1619)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,e.exports=s},1619:function(e,n){e.exports='```react\nnoSource: true\n---\n<React.Fragment>\n\t<V6Banner>\n\t\t<AcceptsStyledSystemProps />\n\t\t<AriaCompliant />\n\t</V6Banner>\n</React.Fragment>\n```\n\n## Dropdown -> Menu\n\n"Dropdown" is an umbrella term for any component that shows a popover when clicked or hovered. The v5 Dropdown component implemented the WAI-ARIA `menu` pattern and as such has been renamed to `<Menu>` in Styled-UI v6 for role clarity.\n\n[View the Menu docs](/menu/variations)\n[View the Listbox docs](/listbox/variations)\n\n### Menu vs Listbox\n\nA "Listbox" has a "toggle" component which usually has some visual indication of the currently selected list item(s) which are available in a dropdown that is conditionally rendered/expanded. (In ARIA terms, a listbox does not have to use a dropdown, but the Styled-UI ones happen to)\nhttps://www.w3.org/TR/wai-aria-practices-1.1/#Listbox\nhttps://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-collapsible.html\n\nA "Menu" has a "toggle" component, sometimes just an icon, sometimes a button with icon and text, which opens a list of buttons or links in a dropdown. A menu does not have a concept of a currently "selected" item.\nhttps://www.w3.org/TR/wai-aria-practices-1.1/#menubutton\nhttps://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html\n\nThese two distinct design patterns may use the same underlying primitive components, such as Dropdowns and Buttons, but benefit from having their own distinct named exports and documentation to differentiate their different uses.\n'}});
//# sourceMappingURL=23.9242b15f.chunk.js.map