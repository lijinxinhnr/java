define(function() {
	var form = {
		view : "form",
		elements : [ {
			view : "text",
			name : "orderNumber",
			label : "订单号"
		}, {
			view : "text",
			name : "name",
			label : "合同号"
		}, {
			view : "text",
			name : "age",
			label : "备货单号"
		}, {
			cols : [ {
				view : "button",
				value : "查询",
				on : {
					'onItemClick' : function() {
						webix.alert("功能开发中");
					}
				}
			}, {
				view : "button",
				value : "重置",
				on : {
					'onItemClick' : function() {
						this.getParentView().getParentView().clear();
					}

				}
			} ]
		} ]
	};
	return form;
});