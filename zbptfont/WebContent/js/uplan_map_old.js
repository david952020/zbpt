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
let map = new BMap.Map('allmap');
setInterval('GPS()',2000);
function GPS(){
	$.ajax({
		       url: 'http://127.0.0.1:8087/zbpt/usergps',
	//	       timeout:1000,
		       type: 'post',
		       data: "team_id="+useradmin,
		       dataType: 'json ',
		       success : function (meg){
		       var obj = JSON.stringify(meg);
		       console.log (obj);
		        var con = eval("(" + obj + ")");
		        console.log (con.length);
		        let a = con.length;
		        for(var i = 0;i<a;i++){
		        	//alert (con[i].jin_du +" "+ con[i].wei_du +" "+con[i].planer_id +" "+con[i].plan_id +" "+con[i].height_du)
		        	let lon = con[i].jin_du ;
		        	let weh = con[i].wei_du;
		        	let ple = con[i].planer_id;
		        	let plr = con[i].planer_name;
		        	let pla = con[i].plan_id;
		        	let lgh = con[i].height_du;
		        	let pln = con[i].plan_speed;
		        	let cup = con[i].cur_speed;
		        	let wor = con[i].work_area;
		        	let tem = con[i].team_id;
		        	
		        	console.log (lon,weh)
		        	let point = new BMap.Point(lon,weh);
					map.centerAndZoom(point, 10.8);
					map.enableScrollWheelZoom(true);
					map.setMapType(BMAP_SATELLITE_MAP);
	//			    var marker = new BMap.Marker(point);  // 创建标注
	//				map.addOverlay(marker);               // 将标注添加到地图中
	//				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
					var vectorPlane = new BMap.Marker(point, {
					  // 初始化小飞机Symbol
					  icon: new BMap.Symbol(BMap_Symbol_SHAPE_PLANE, {
					    scale: 1.2,
					    //rotation: -90,
					    fillColor: 'red',
					    fillOpacity: 0.6
					  })
					});
					map.addOverlay(vectorPlane); 
					map.addControl(new BMap.MapTypeControl({
							 mapTypes:[
									  BMAP_NORMAL_MAP,
									  BMAP_HYBRID_MAP,
									  BMAP_SATELLITE_MAP
												]
							}));
					var opts = {
						  width : 170,     // 信息窗口宽度
						  height: 200,     // 信息窗口高度
						  
						  enableMessage:true,//设置允许信息窗发送短息
						  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
							}
							
					let infoWindow = new BMap.InfoWindow("经度:" + lon + "<br/>维度:" + weh + "<br/>飞手:" +ple+"<br/>姓名:"+ plr + "<br/>飞机:" + pla + "<br/>高度(米):"+lgh+"<br/>水平速度(m/s):"+pln+"<br/>喷洒速度(L/分):"+cup+"<br/>作业区块:"+wor+"<br/>团队："+tem, opts);  // 创建信息窗口对象 
						vectorPlane.addEventListener("click", function(){          
						map.openInfoWindow(infoWindow,point); //开启信息窗口
						});	
		        	}
		        }
		        
		     });
	//	setTimeout(function(){
	//		showGPS();
	//		},2000);
	//}
	
	//-------------------------手动添加模块
	//function getMapCenter() {
	//    map.setMapType(BMAP_NORMAL_MAP);
	//}
	//
	//function getMapEarth() {
	//    map.setMapType(BMAP_SATELLITE_MAP);
	//}
	
	
}
	//setTimeout('GPS()',5000); //指定1秒刷新一次
