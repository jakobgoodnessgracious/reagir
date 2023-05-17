(function (TReact, main) {
	'use strict';

	var domNode = document.getElementById('root');
	var root = TReact.createRoot(domNode);
	root.render( /*#__PURE__*/React.createElement(main.UsingFragment, null));

})(TReact, main);
