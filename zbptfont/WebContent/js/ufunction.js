//创建上方和左侧导航栏
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
//无参数无返回值
function Navigation()
{

}
//发送ajax请求，从服务器获取json数据，返回数据对象
function loadXMLJson(url)//url:访问路径
{
    //代码...

}

//创建建layui表格
  //当前页面需要执行的
  function layui_diy(html)
{
     console.log('-------test');
    if(html=="uindex.html")//首页
    {

    }else if(html=="uplane_list.html")//飞机列表
    {
        //let a;//获取ajax返回的数据
       let pla=$.ajax({url:"http://ydhy.xyz:8687/zbpth/zbpt/uplanlist",method:'post',async:false,data:"team_id="+useradmin});
        //layui模块
        layui.use(['table','element','layer'], function() {
           /* var  key =1;*/
            var table = layui.table;
            /*var layer = layui.layer;*/
            var demo_op ={
                elem: '#demo',
               height: 726,
                page: true, //开启分页
                toolbar: '#barDemo',//开启工具栏
                id : 'table1',
                cols: [
                    	[ //表头
                        	{
	                            type:"checkbox",
	                            hide:true,
	                            fixed:"left"
	                        },/*{
	                            field: 'id',
	                            title: '序号',
	                            //width: "9%",
	                            sort: true,
	                            fixed: 'left'
                        	}, */{
		                        field: 'plan_id',
		                        title: '飞机编号',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left'
                    		}, {
		                        field: 'plan_er',
		                        title: '飞手编号',
		                        //width: "9%",
		                        sort: true,
		                        fixed: 'left'
                    		}, {
		                        field: 'plan_name',
		                        title: '飞手姓名',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left'
                    		},{
		                        field: 'plan_time',
		                        title: '飞行时长（s）',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left'
                    		},{
                    			field: 'plan_speed',
		                        title: '喷洒流速',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left'
                    		},{
                    			field: 'sh_speed',
		                        title: '水平速度',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left'
                    		},{
                    			field: 'pen_status',
		                        title: '喷洒阀状态',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left',
		                        templet: '#sexTpl'
                    		}, {
		                        field: 'level_sta',
		                        title: '液位状态',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left',
		                        templet: '#sexLev'
                    		},{
		                        field: 'plane_mode',
		                        title: '飞行模式',
		                        //width: "10%",
		                        sort: true,
		                        fixed: 'left'
		                        }
                    		]
                		],
                data: JSON.parse(pla.responseText).data
            };
            table.render(demo_op);//渲染表格
            
        });

    }else if(html=="uplane_place.html")//实时位置
    {
        layui.use('element', function() {
            let element = layui.element;
        });
    }
       
}
