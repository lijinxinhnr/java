define(function() {
	return {
		view : "form",
		id : "myform",
		elements : [{
			view : "text",
			name : "flag",
			label : "输入"
		}, {
			view : "text",
			name : "name",
			label : "名字"
		}, {
			view : "text",
			name : "age",
			label : "年龄"
		}, {
			view : "button",
			value : "提交",
			on : {
				'onItemClick' : function(id) {
					var form = $$("myform");
					var flag = $$("myform").getValues().flag
					webix.ajax().post("testAction", {
						flag : flag
					}, function(data) {

						result = JSON.parse(data).result;

						$$("myform").setValues(result);
						webix.message("你好" + result.status);

					})

				}

			}
		} ]
	}
});