requirejs.config({
	baseUrl : '/webDemo',
	paths : {
		"view" : "/webDemo/view",
		"webix" : '/webDemo/js/webix',
		"path" : location.hash.split("#")[1] ? location.hash.split("#")[1]
				: "index"
	}
});

require([ "path", "webix" ], function(workSpace) {
	webix.ui({
		view : "layout",
		container : "mydiv",
		width : document.documentElement.clientWidth,
		height : document.documentElement.clientHeight,
		rows :[workSpace] 
	})
});
