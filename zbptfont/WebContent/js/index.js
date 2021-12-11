//站点工作次数
(function(){
    //1、实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //2、指定配置项和数据
    var option = {
        color: ['#2F89CF'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //修改图表大小
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['蓬莱', '莱山', '青岛', '济南', '威海'],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签
                axisLabel:{
                    color:"rgba(255,255,255,0.6)",
                    fontSize:12
                },
                //不想显示x坐标轴的样式
                axisLine:{
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                //修改刻度标签
                axisLabel:{
                    color:"rgba(255,255,255,0.6)",
                    fontSize:12
                },
                //Y轴样式
                axisLine:{
                    lineStyle: {
                        color :"rgba(255,255,255,0.1)",
                        width: 2
                    }
                },
                //Y轴分割线颜色
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '站点被访问',
                type: 'bar',
                barWidth: '35%',
                data: [3, 4, 1, 5, 3],
                itemStyle:{
                    barBorderRadius:5
                }
            }
        ]
    };
    myChart.setOption(option);
    //自适应
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();
//路线完成度图
(function () {
    var myColor = ["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            //containLabel: true
        },
        xAxis: {
            show:false
        },
        yAxis: [
            {
                type: 'category',
                inverse:true,
                data: ["蓬莱","莱山","青岛","济南","威海"],
                //不显示Y轴的线
                axisLine:{
                    show:false
                },
                //刻度
                axisTick:{
                    show:false
                },
                //刻度标签文字颜色改成白色
                axisLabel:{
                    color:"#fff"
                }
            },
            {
                show:true,
                //后面的数据
                data:[32,67,45,16,76],
                inverse:true,
                //不显示线
                axisLine:{
                    show:false
                },
                //不显示刻度
                axisTick:{
                    show:false
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12,
                        color:"#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                //工作时间
                data: [78,69,100,100,100],
                // 修改第一组柱子的圆角
                itemStyle:{
                    barBorderRadius:20,

                    color:function(params){
                        return myColor[params.dataIndex];
                    }
                },
                //柱子之间的距离
                barCategoryGap:50,
                //柱子的宽度
                barWidth:10,
                //显示柱子内的文字
                label:{
                    show:true,
                    position:'inside',
                    formatter:"{c}%"
                }
            },
            {
                name: "框",
                type: 'bar',
                yAxisIndex:1,
                barCategoryGap:50,
                barWidth:15,
                data: [100,100,100,100,100],
                itemStyle:{
                    color:"none",
                    borderColor:"#00c1de",
                    borderWidth:3,
                    barBorderRadius:15
                }

            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();
//AGV性能
(function(){
    var myChart = echarts.init(document.querySelector(".rader .chart"));
    var option = {
        color: ['#2F89CF'],
        tooltip: {
            trigger: 'axis'
        },
        radar:{
            indicator: [
                {text: '外观', max: 100},
                {text: '载重', max: 100},
                {text: '系统', max: 100},
                {text: '性能', max: 100},
                {text: '稳定性', max: 100}
            ],
            radius: 50,
            center: ['50%', '50%'],
        },
        series: [
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {},
                data: [
                    {
                        value: [65, 90, 75, 80,100],
                        name: 'AGV性能'
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();
//AGV电量
(function(){
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {

        graphic: [{
            type: 'text',
            left: 'center',
            top: '45%',
            style: {
                text: '67%',
                textAlign: 'center',
                fill: '#fff', //文字的颜色
                width: 100,
                height: 50,
                fontSize: 30,
                fontFamily: "Microsoft YaHei"
            }
        }],
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                color:['rgba(205,205,205,0)','#fd5b3b',],
                data:[
                    {value:33},
                    {value:67},
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();
//AGV工作效率
(function(){
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top:"0%",
            data: ['1#', '2#'],
            textStyle:{
                color:"rgba(255,255,255,.5)",
                fontSize:"12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
                axisLabel:{
                    textStyle:{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{show:false},
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1"
                    }
                }
            }
        ],
        series: [
            {
                name: '1#',
                type: 'line',
                smooth: true,
                lineStyle:{
                    color: "#0184d5",
                    width: "3"
                },
                //填充颜色
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1,132,213,0.4)"
                            },
                            {
                                offset:0.8,
                                color: "rgba(1,132,213,0.1)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0,0,0,0.1)"
                },
                //拐点
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(211,220,107,0.1)",
                    borderWidth: 12
                },
                showSymbol: false,
                //data: [ 30000, 40000, 30000, 40000,30000, 40000, 30000,60000,20000, 40000, 30000, 40000],
                data: [ 30,  20,  60,  70,  100,  200,  300, 120, 260],
            },
            {
                name: '2#',
                type: 'line',
                smooth:true,
                lineStyle: {
                    normal:{
                        color:"#00d887",
                        width:2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0,216,135,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0,216,135,0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0,0,0,0.1)"
                    }
                },
                symbol:"circle",
                symbolSize: 5,
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(211,220,107,0.1)",
                    borderWidth:12
                },
                showSymbol:false,
                //data: [ 13000, 10000, 20000, 40000,30000, 40000, 80000,60000,20000, 40000, 90000, 40000],
                data: [ 130, 206,  160, 75, 100,  210, 320, 50, 12],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();
//时间
