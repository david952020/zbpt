var map = new BMap.Map('allmap'); 
map.centerAndZoom(new BMap.Point(121.438327,37.468951), 10);
map.enableScrollWheelZoom(true);
map.setMapType(BMAP_HYBRID_MAP);
map.addControl(new BMap.MapTypeControl({
						mapTypes:[
								  BMAP_NORMAL_MAP,
								  BMAP_HYBRID_MAP,
								  BMAP_SATELLITE_MAP
											]
						      }));