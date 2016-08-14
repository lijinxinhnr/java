define([ "view/order/leftSearch", "view/order//centerGrid",
		"view/order//buttomGrid" ],
		function(leftSearch, centerGrid, buttomGrid) {
			return {
			
				cols : [ {
					view : "accordion",
					width : 300,
					multi : true,
					cols : [ {
						header : "查询",
						body : leftSearch
					} ]
				}, {
					view : "resizer"
				}, {

					rows : [ centerGrid, {
						view : "resizer"
					}, buttomGrid ]
				} ]

			}
		});