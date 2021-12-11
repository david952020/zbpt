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
setInterval('GPS()',3000);
function GPS(){
	$.ajax({
		       url: 'http://ydhy.xyz:8687/zbpth/zbpt/usergps',
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
		        	var lon = con[i].jin_du ;
		        	var weh = con[i].wei_du;
		        	var ple = con[i].planer_id;
		        	var plr = con[i].planer_name;
		        	var pla = con[i].plan_id;
		        	var lgh = con[i].height_du;
		        	var pln = con[i].plan_speed;
		        	var cup = con[i].cur_speed;
		        	var wor = con[i].work_area;
		        	var tem = con[i].team_id;
		        	console.log (lon,weh)
		        	var gpspoint = new BMap.Point(lon,weh);
					/*map.centerAndZoom(gpspoint, 13);
					map.enableScrollWheelZoom(true);
					map.setMapType(BMAP_SATELLITE_MAP);*/
				 BMap.Convertor.translate(gpspoint,0, function (point){
		        	/*let point = new BMap.Point(lon,weh);*/
					/*map.centerAndZoom(point, 13);
					map.enableScrollWheelZoom(true);
					map.setMapType(BMAP_SATELLITE_MAP);*/
					var vectorPlane = new BMap.Marker(point, {
					  // 初始化小飞机Symbol
					  icon: new BMap.Symbol(BMap_Symbol_SHAPE_PLANE, {
					    scale: 0.8,
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
					/*let lon1 = point.lng;
					let weh1 = point.lat;*/
					map.centerAndZoom(point, 12.9);
					map.enableScrollWheelZoom(true);
					map.setMapType(BMAP_SATELLITE_MAP);
					/*let infoWindow = new BMap.InfoWindow("经度:" + lon + "<br/>维度:" + weh + "<br/>飞手:" +ple+"<br/>姓名:"+ plr + "<br/>飞机:" + pla + "<br/>高度(米):"+lgh+"<br/>水平速度(m/s):"+pln+"<br/>喷洒速度(L/分):"+cup+"<br/>作业面积(亩):"+wor+"<br/>团队："+tem);  // 创建信息窗口对象 */
						vectorPlane.addEventListener("click", function(){          
						map.openInfoWindow(infoWindow,point); //开启信息窗口
						});	
					/*let infoWindow = new BMap.InfoWindow("经度:" + lon1 + "<br/>维度:" + weh1);  // 创建信息窗口对象 
						vectorPlane.addEventListener("click", function(){          
						map.openInfoWindow(infoWindow,point); //开启信息窗口
						});*/
		        	});
					/*setTimeout(function(){
					    BMap.Convertor.translate(gpspoint,0,translateCallback);     //真实经纬度转成百度坐标
					}, 100)*/
					
					let infoWindow = new BMap.InfoWindow("经度:" + lon + "<br/>维度:" + weh + "<br/>飞手:" +ple+"<br/>姓名:"+ plr + "<br/>飞机:" + pla + "<br/>高度(米):"+lgh+"<br/>水平速度(m/s):"+pln+"<br/>喷洒速度(L/分):"+cup+"<br/>作业区块:"+wor+"<br/>团队："+tem);  // 创建信息窗口对象 
					 
		          }
		        }
		        
		     });
}
	
