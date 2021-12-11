var start = { //起始中心点
    Long: 106.652024,
    Lat: 26.617221
};
//var listLast = start.length - 1;

// 百度地图API功能
//var map = create_Map("allmap",start.Long, start.Lat,3);
var map = new BMapGL.Map("allmap"); // 创建Map实例
map.setMapType(BMAP_EARTH_MAP);
map.centerAndZoom(new BMapGL.Point(start.Long, start.Lat), 3); // 初始化地图,设置中心点坐标和地图级别
var opts = { offset: new BMapGL.Size(0, 0) }; //设置偏移
var TypeControl = new BMapGL.MapTypeControl(opts);
TypeControl.hide();
map.addControl(TypeControl); //添加地图类型控件
map.addEventListener('tilesloaded', function() { //百度地图加载完成后再执行的代码：
    setTimeout(function() { //1.2秒后缩放地图
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.setZoom(map.getZoom() - 2);
    }, 1200);

    setTimeout(function() { //2.2秒后开始监听是否应该显示控件（地图类型控件）
        setInterval(function() {
            if (map.getZoom() > 4) {
                TypeControl.show(); //显示控件
                $(".no").hide();
                $(".column").hide();
                $(".colum").hide();
            } else {
                TypeControl.hide(); //隐藏控件
                $(".no").show();
                $(".column").show();
                $(".colum").show();
            }
        }, 1000);
    }, 2200)
});


/*
setTimeout(drawIcon, 500);
var carMk;
var myBeginIcon = new BMapGL.Icon("http://e.hiphotos.baidu.com/image/pic/item/7e3e6709c93d70cfaf72bca2f0dcd100bba12b90.jpg", new BMap.Size(25, 37), {
    imageOffset: new BMap.Size(0, 0)
}); //人
var myEndIcon = new BMapGL.Icon("http://b.hiphotos.baidu.com/image/pic/item/b58f8c5494eef01f534c096ae8fe9925bd317dc0.jpg", new BMap.Size(25, 37), {
    imageOffset: new BMap.Size(0, 0)
}); //人


function drawGreenLine(i) {
    var polyline = new BMapGL.Polyline([
        new BMapGL.Point(list[i].Long, list[i].Lat), //起始点的经纬度
        new BMapGL.Point(list[i + 1].Long, list[i + 1].Lat) //终点的经纬度
    ], {
        strokeColor: "red", //设置颜色
        strokeWeight: 4, //宽度
        strokeOpacity: 1
    }); //透明度
    map.addOverlay(polyline);
}

function drawIcon() {
    if (carMk) {
        map.removeOverlay(carMk);
    }
    carMk2 = new BMapGL.Marker(
        new BMapGL.Point(list[0].Long, list[0].Lat), //起始点的经纬度
        {
            icon: myBeginIcon
        });
    map.addOverlay(carMk2);
    carMk = new BMapGL.Marker(
        new BMapGL.Point(list[listLast].Long, list[listLast].Lat), //终点的经纬度
        {
            icon: myEndIcon
        });
    map.addOverlay(carMk);
    for (var i = 0; i < list.length - 1; i++) {
        drawGreenLine(i);
    }
}
*/