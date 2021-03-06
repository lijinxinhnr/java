define(function() {
	var datatable = {
		view : "datatable",
		select : "cell",
		columns : [ {
			id : "orderNumber",
			header : "订单号",
			fillspace : true
		}, {
			id : "toNumebr",
			header : "备货单号",
			fillspace : true
		}, {
			id : "hetong",
			header : "合同号",
			fillspace : true
		}, {
			id : "toStatus",
			header : "备货单状态",
			fillspace : true
		} ],
		data : [ {
			orderNumber : 1111,
			toNumebr : 2222,
			hetong : 3333,
			toStatus : "排产"
		} ]
	};

	return datatable;
});