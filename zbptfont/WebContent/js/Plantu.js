//------------------------------百度地图API功能

//console.log('-----------tu');
//	var map = new BMap.Map("allmap");    // 创建Map实例
//	map.centerAndZoom(new BMap.Point(121.391382, 37.539297), 12);  // 初始化地图,设置中心点坐标和地图级别
//	//添加地图类型控件
//	function myFun(result){
//		var cityName = result.name;
//		map.setCenter(cityName);
//		alert("当前定位城市:"+cityName);
//	}
//	var myCity = new BMap.LocalCity();
//	myCity.get(myFun); 
//	map.addControl(new BMap.MapTypeControl({
//		mapTypes:[
//            BMAP_NORMAL_MAP,
//			BMAP_HYBRID_MAP,
//			BMAP_SATELLITE_MAP
//			]}));
//	map.setCurrentCity("烟台");
//    map.enableScrollWheelZoom(true);


let codea=$.ajax({url:'http://ydhy.xyz:8687/zbpth/zbpt/hisdata'
			    	,type:'post'
			        ,data:{"jia_ci":'47540130874497800020210118001'}
			        ,dataType:"json"
			        ,async:false
			        });
			       var path= JSON.parse(codea.responseText).data
					console.log(path); 
			       let bmap = new BMap.Map("allmap"); 
			         // 创建Map实例
					bmap.centerAndZoom(new BMap.Point(121.391382, 37.539297), 12);  // 初始化地图,设置中心点坐标和地图级别
					//添加地图类型控件
					var point = [];
					console.log(path[5].jin_du);
				    for (var i = 0; i < path.length; i++) {
				    	let lon = path[i].jin_du ;
	        			let weh = path[i].wei_du;
				        //point.push(new BMap.Point(path[i].lon, path[i].weh));
				       
				        let point = new BMap.Point(lon,weh);
				        bmap.centerAndZoom(point, 15);
						bmap.enableScrollWheelZoom(true);
				        var marker = new BMap.Marker(point);  // 创建标注
						bmap.addOverlay(marker);               // 将标注添加到地图中
						//marker.setAnimation(BMAP_ANIMATION_BOUNCE);
				    }
				    
//				    var pl = new BMap.Polyline(point);
//				    setTimeout('start()', 3000);
//				    console.log('------------test1');
//				    function start () {
//				        trackAni = new BMapGLLib.TrackAnimation(bmap, pl, {
//				            overallView: true,
//				            tilt: 30,
//				            duration: 20000,
//				            delay: 300
//				        });
//				        trackAni.start();
//				    }
					bmap.addControl(new BMap.MapTypeControl({
						mapTypes:[
				            BMAP_NORMAL_MAP,
							BMAP_HYBRID_MAP,
							BMAP_SATELLITE_MAP
							]}));
				    bmap.enableScrollWheelZoom(true); 
            