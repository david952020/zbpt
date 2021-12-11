
var thisURL = document.URL;    
	  console.log(thisURL);
	  var  getval =thisURL.split('?')[1];  
	  console.log(getval);
	  /*var useradmin= getval.split("=")[1];*/
	  if( getval != null) {
	  	var useradmin= getval.split("=")[1];   
	  	console.log(useradmin);
	  }else{	
	  	window.location.href = 'login.html';
	  };

function layui_diy(html){
	$.ajax({url:"http://127.0.0.1:8087/zbpt/jobaccount",method:'post',async:false,data:"team_id="+useradmin,success:function(plandata){
		//layui模块
        layui.use(['table','flow'], function() {
			var  key =1;
            var table = layui.table;
            var flow = layui.flow;
			function addLink(d){
				var addLink = d.jia_ci;
				if('' == addLink || null == addLink || undefined == addLink){
					return'';
				}
				if(addLink.length>0){
					return'<a class="layui-table-link" href="javascript:void(0);" lay-event="link">'+d.jia_ci+'</a>';
				}
			}
			var demo_op ={
				elem: '#demohis',
                height: 812,
                width:890,
                page: true, //开启分页
                toolbar: '#JiaciNum',//开启工具栏
                /*id : 'demohis',*/
				cols: [
                    [ //表头
                        {
                            type:"checkbox",
                            hide:true,
                            fixed:"left"},
                        {
	                        field: 'jia_ci', 
	                        title: '飞机架次',
	                        //width: "21%",
	                        sort: true,
	                        fixed: 'left',
	                        templet: addLink
	                    }, {
	                        field: 'plan_id',
	                        title: '飞机编号',
	                        //width: "14%",
	                        sort: false
//	                        ,fixed: 'left'
	                    }, {
	                        field: 'planer_id',
	                        title: '飞手编号',
	                        //width: "10%",
	                        sort: true
//	                        ,fixed: 'left'
	                    }, {
	                        field: 'work_area',
	                        title: '作业面积',
	                        //width: "9%",
	                        sort: true
//	                        ,fixed: 'left'
	                    }, {
	                        field: 'work_block',
	                        title: '作业区块',
	                        //width: "10%",
	                        sort: false
//	                        ,fixed: 'left'
	                    }, {
	                        field: 'start_time',
	                        title: '起飞时间',
	                        //width: "12.5%",
	                        sort: true
//	                        ,fixed: 'left'
	                    }, {
	                        field: 'team_id',
	                        title: '团队名称',
	                        //width: "10%",
	                        sort: true
//	                        ,fixed: 'left'
	                    }, {
	                        field: 'planer_name',
	                        title: '飞手名字',
	                        //width: "8.5%",
	                        sort: true
//	                        ,fixed: 'left'
	                    }
	                    
                    ]
                    
                ],
				data: plandata.data,
			};
			table.render(demo_op);//渲染表格
			table.on('tool(test)',function (obj){
			var checkStatus = obj.data;
			var codetu = checkStatus.jia_ci;
			codetu = encodeURIComponent(codetu);
			console.log(codetu);
			let codea=$.ajax({url:'http://127.0.0.1:8087/zbpt/hisdata'
				,type:'post'
			    ,data:{"jia_ci":codetu}
			    ,dataType:"json"
			    ,async:false
				});
			var path= JSON.parse(codea.responseText).data;
			let map = new BMap.Map("allmap"); 	
			
			var label = new BMap.Label("当前架次号:"+codetu);
			// 自定义文本标注样式
			label.setStyle({
				color: 'blue',
				borderRadius: '5px',
				borderColor: '#ccc',
				padding: '10px',
				fontSize: '16px',
				height: '30px',
				lineHeight: '30px',
				fontFamily: '微软雅黑'
			});
			let allpoints = new Array();
			for (var i = 0; i < path.length; i++) {
				var p00 = path[i].jin_du;
                var p11 = path[i].wei_du;
				let gpspoints = new BMap.Point(p00, p11);
				translateCallback = function (points){
					allpoints.push(points);
					var Polyline = new BMap.Polyline(allpoints
					,{strokeColor:  "red", strokeWeight: 2, strokeOpacity: 1}
					);
					map.centerAndZoom(points,17.9);
					map.enableScrollWheelZoom(true);
					map.setMapType(BMAP_HYBRID_MAP);
					map.addOverlay(label);
					map.addOverlay(Polyline);
					map.addControl(new BMap.MapTypeControl({
					mapTypes:[
								  BMAP_NORMAL_MAP,
								  BMAP_HYBRID_MAP,
								  BMAP_SATELLITE_MAP
											]
					}));
					};
				setTimeout(function(){
				 BMap.Convertor.translate(gpspoints,0,translateCallback); 
				 },100)
			};	 
		})
	});
	}
	})
}	