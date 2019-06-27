$(document).ready(function(){
	setInterval(function() {
	$.ajax({
		url : "http://localhost:8181/linechart/companydata.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var companyid = [];
			var company_name = [];
			var stock_value = [];
			//var googleplus_follower = [];

			for(var i in data) {
				companyid.push("companyId " + data[i].company_id);
				company_name.push(data[i].company_name);
				stock_value.push(data[i].stock_value);
				//googleplus_follower.push(data[i].googleplus);
			}

			var chartdata = {
				labels: company_name,
				datasets: [
					{
						label: "company",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: company_name
					},
					{
						label: "stock",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(29, 202, 255, 0.75)",
						borderColor: "rgba(29, 202, 255, 1)",
						pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
						pointHoverBorderColor: "rgba(29, 202, 255, 1)",
						data: stock_value
					},
					
				]
			};

			var ctx = $("#mycanvas");

			var LineGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata
			});
		},
		error : function(data) {

		}
	});
	},2000);
});