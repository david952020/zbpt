//创建上方和左侧导航栏

//无参数无返回值
function Navigation()
{

}
//发送ajax请求，从服务器获取json数据，返回数据对象
/*function loadXMLJson(url)//url:访问路径*/
{
    //代码...

}

//创建建layui表格
  //当前页面需要执行的
  function layui_diy(html)
{
    /* console.log('-------test');*/
    if(html=="index.html")//首页
    {

    }else if(html=="plane_list.html")//飞机列表
    {
        //let a;//获取ajax返回的数据
       let pla=$.ajax({url:"http://ydhy.xyz:8687/zbpth/zbpt/planlist",method:'post',success:function(plistdata){
        //layui模块
        layui.use(['table','element','layer'], function() {
         /*   var  key =1;*/
            var table = layui.table;
         /*   var layer = layui.layer;*/
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
                data:plistdata.data
            };
            table.render(demo_op);//渲染表格
            
        })
	   }
	 });
    }else if(html=="plane_place.html")//实时位置
    {
        layui.use('element', function() {
            /*let element = layui.element;*/
        });
    }else if(html=="plane_history.html")//历史记录
    {

    }else if(html=="error_data.html")//异常参数
    {
		console.log('-------test1');
		let err=$.ajax({url:"http://ydhy.xyz:8687/zbpth/zbpt/errordata",method:'post'});
        //layui模块
        layui.use(['table','element','layer'], function() {
           /* var  key =1;*/
            var table = layui.table;
           /* var layer = layui.layer;*/
             table.render({
                elem: '#erro',
                height: 726,
                page: true, //开启分页
                toolbar: '#barDemo',//开启工具栏
                id : 'table1',
                cols: [
                    [ //表头
                        {
                            type:"checkbox",
                            hide:true,
                            fixed:"left"},
                        {
                            field: 'id',
                            title: '序号',
                            //width: "9%",
                            sort: true,
                            fixed: 'left'
                        }, {
                        field: 'data_desc',
                        title: '数据描述',
                        //width: "10%",
                        sort: false,
                        fixed: 'left'
                    }, {
                        field: 'get_time',
                        title: '获取时间',
                        //width: "9%",
                        sort: true,
                        fixed: 'left'
                    }
                    ]
                ],
                data: JSON.parse(err.responseText).data
            });
         console.log(data+'-------1');
            })
            console.log(data+'-------2');
    }else if(html=="massif.html")//地块管理
    {

    }else if(html=="job_accounting.html")//作业统计
    {
		$.ajax({url:"http://ydhy.xyz:8687/zbpth/zbpt/jobaccount",method:'post',success:function(jobdata)
		{
		   /* console.log(json.data);*/
		     
        //layui模块
        layui.use(['table','element','layer','laydate'], function() {
            var table = layui.table;
            var layer = layui.layer;
            var laydate = layui.laydate;
            var slider = layui.slider ;
            function addLink(d){
			var addLink = d.jia_ci;
				if('' == addLink || null == addLink || undefined == addLink){
					return'';
				}
				if(addLink.length>0){
					return'<a class="layui-table-link" href="javascript:void(0);" lay-event="link">'+d.jia_ci+'</a>';
				}
		  	}	;
		  	
            var demo_op ={
                elem: '#demo',
                height: 726,
                page: true, //开启分页
                toolbar: '#barDemo',//开启工具栏
                id:'testReload',
                totalRow: true,//开启合计行
                cols: [
                    [ //表头
                        	{
                            type:"checkbox",
                            hide:false,
                            fixed:"left"
                           
                       }, {
	                        field: 'jia_ci', 
	                        title: '飞机架次',
	                        width: "21%",
	                        sort: true,
	                        fixed: 'left',
	                        templet: addLink,
	                        totalRowText: '合计：'
	                    }, {
	                        field: 'plan_id',
	                        title: '飞机编号',
	                        width: "14%",
	                        sort: false,
	                        fixed: 'left'
	                    }, {
	                        field: 'planer_id',
	                        title: '飞手编号',
	                        width: "10%",
	                        sort: false,
	                        fixed: 'left'
	                    }, {
	                        field: 'work_area',
	                        title: '作业面积',
	                        width: "10%",
	                        sort: false,
	                        fixed: 'left',
	                        totalRow:true
	                    }, {
	                        field: 'work_block',
	                        title: '作业区块',
	                        width: "10%",
	                        sort: false,
	                        fixed: 'left'
	                    }, {
	                        field: 'start_time',
	                        title: '起飞时间',
	                        width: "12.5%",
	                        sort: true,
	                        fixed: 'left'
	                    }, {
	                        field: 'team_id',
	                        title: '团队名称',
	                        width: "10%",
	                        sort: false,
	                        fixed: 'left'
	                    }, {
	                        field: 'planer_name',
	                        title: '飞手名字',
	                        width: "10%",
	                        sort: true,
	                        fixed: 'left'
	                    }
                    ]
                ],
                data:jobdata.data
                ,done: function(){
                toolbar();
                 }
            };
            
           table.render(demo_op);//渲染表格
            laydate.render({
		    elem: '#dateReload'
		    ,type: 'datetime'
		    });
		      table.on('checkbox(demo)', function(obj){
			    console.log(obj)
			  });
		  	 function toolbar() {
		  	   $(".search_btn").on("click",function (){
			      var planReload = $('#planReload');
			      var teamReload = $('#teamReload');
			      var planerReload = $('#planerReload');
			      var dateReload = $('#dateReload');
			      var team_id=teamReload.val();
			      var plan_id=planReload.val();
			      var planer_id=planerReload.val();
			      var start_time=dateReload.val();
			      var team_id=team_id.trim();
			      var plan_id=plan_id.trim();
			      var planer_id=planer_id.trim();
			      var start_time=start_time.trim();
			      //执行重载
			      if(team_id !=null && team_id !='' && plan_id =='' && planer_id =='' && start_time ==''){
			      table.reload('testReload', {
			      url:"http://ydhy.xyz:8687/zbpth/zbpt/Teamchk",
			      method:'post',
			       page: {
			          curr: 1 //重新从第 1 页开始
			        },
			       where: {
						team_id,
						
			        }
			      },'data'); 
			      }else if(plan_id !=null && plan_id !='' && team_id =='' && planer_id =='' && start_time =='' ){
			      table.reload('testReload', {
			      url:"http://ydhy.xyz:8687/zbpth/zbpt/Planchk",
			      method:'post',
			       page: {
			          curr: 1 //重新从第 1 页开始
			        },
			       where: {
						plan_id,
			        }
			      },'data');
			      }else if(planer_id !=null && planer_id !='' && plan_id =='' && team_id =='' && start_time =='' ){
			      table.reload('testReload', {
			      url:"http://ydhy.xyz:8687/zbpth/zbpt/Planerchk",
			      method:'post',
			       page: {
			          curr: 1 //重新从第 1 页开始
			        },
			       where: {
						planer_id,
			        }
			      },'data');
			      }else if(start_time !=null && start_time !='' && plan_id =='' && team_id =='' && planer_id ==''){
			      	
			      	table.reload('testReload', {
				      url:"http://ydhy.xyz:8687/zbpth/zbpt/Startimechk",
				      method:'post',
				       page: {
				          curr: 1 //重新从第 1 页开始
				        },
				       where: {
							start_time,
				        }
				      },'data'
				   	  
				      );
				     
				      /*--------------------*/
			      }else if(team_id !='' && plan_id !='' && planer_id =='' && start_time ==''){
			      	table.reload('testReload', {
				      url:"http://ydhy.xyz:8687/zbpth/zbpt/Teamplan",
				      method:'post',
				       page: {
				          curr: 1 //重新从第 1 页开始
				        },
				       where: {
							team_id,
							plan_id,
				        }
			      	},'data');
			      }else if(team_id !='' && planer_id !='' && plan_id =='' && start_time ==''){
			      	table.reload('testReload', {
				      url:"http://ydhy.xyz:8687/zbpth/zbpt/Teamplaner",
				      method:'post',
				       page: {
				          curr: 1 //重新从第 1 页开始
				        },
				       where: {
							team_id,
							planer_id,
				        }
			      	},'data');
			      }else if(team_id !='' && planer_id =='' && plan_id =='' && start_time !=''){
			      	table.reload('testReload', {
				      url:"http://ydhy.xyz:8687/zbpth/zbpt/Teamtime",
				      method:'post',
				       page: {
				          curr: 1 //重新从第 1 页开始
				        },
				       where: {
							team_id,
							start_time,
				        }
			      	},'data');
			      }else if( planer_id !='' && plan_id !='' &&team_id =='' && start_time ==''){
			      	table.reload('testReload', {
				      url:"http://ydhy.xyz:8687/zbpth/zbpt/Planplaner",
				      method:'post',
				       page: {
				          curr: 1 //重新从第 1 页开始
				        },
				       where: {
							plan_id,
							planer_id,
				        }
			      	},'data');
			      }else if(planer_id !='' && start_time !='' && plan_id =='' && team_id =='' ){
			      	table.reload('testReload', {
				      url:"http://ydhy.xyz:8687/zbpth/zbpt/Planertime",
				      method:'post',
				       page: {
				          curr: 1 //重新从第 1 页开始
				        },
				       where: {
							planer_id,
							start_time,
				        }
				        
			      	},'data'
			      	);
			      	
			      }else if(plan_id !='' && start_time !='' && planer_id =='' && team_id =='' ){
			      	table.reload('testReload', {
				      url:"http://ydhy.xyz:8687/zbpth/zbpt/Plantime",
				      method:'post',
				       page: {
				          curr: 1 //重新从第 1 页开始
				        },
				       where: {
							plan_id,
							start_time,
				        }
			      	},'data'
			      	);
			      }else{alert("信息输入有误！！")};
			    })
			    
			  $(".get_btn").on("click",function (){
			    		   var checkStatus = table.checkStatus('testReload')
					       ,data = checkStatus.data;
					       var a=data.length;
					       console.log(data.length);
					       for(var i=0;i<a;i++){
								var jc=JSON.stringify(data[i].jia_ci);
								var pl=JSON.stringify(data[i].plan_id);
								var pler=JSON.stringify(data[i].planer_id);
								var st=JSON.stringify(data[i].start_time);
								jc = jc.replace("\"","").replace("\"","");
								pl = pl.replace("\"","").replace("\"","");
								pler = pler.replace("\"","").replace("\"","");
					            st = st.replace("\"","").replace("\"","");
					            var nat ="["+pl+"]"+"["+pler+"]"+"["+st+"]";
			       		        table.render({
					                elem: '#table',
					                id:'exportTable',
					                title:nat,
					                cols: [[
									       {type: 'checkbox', fixed: 'left',hide:true}
									      /* ,{field:'id', title:'序号', fixed: 'left', sort: true} */
									      ,{field:'plan_id', title:'飞机编号'}
									      ,{field:'planer_id', title:'飞手编号'}
									      ,{field:'plan_time', title:'飞行时长',sort: true}
									      ,{field:'plan_speed', title:'喷洒流速'}
									      ,{field:'work_area', title:'作业面积'}
									      ,{field:'mu_set', title:'亩设定值'}
									      ,{field:'mu_ac', title:'亩设实际值'}
									      ,{field:'pen_status', title:'喷洒开关'}
									      ,{field:'jin_du', title:'经度'}
									      ,{field:'wei_du', title:'纬度'}
									      ,{field:'height_du', title:'高度'}
									      ,{field:'sh_speed', title:'水平速度'}
									      ,{field:'level_sta', title:'液位状态'}
									      ,{field:'plane_mode', title:'飞行模式'}
									      ,{field:'start_time', title:'起飞时间'}
									      ,{field:'planer_name', title:'飞手姓名'}
									      ,{field:'team_id', title:'团队编号'}
									      ,{field:'jia_ci', title:'架次号'}
									      ,{field:'sh_time',title:'当前时间',sort: true}
									    ]],
				                		/*data:JSON.parse(d.responseText).data,*/
				            		});	  
					       
						            let d=$.ajax({url:'http://ydhy.xyz:8687/zbpth/zbpt/flydata'
							    	,type:'post'
							        ,data:{"jia_ci":jc}
							        ,dataType:"json"
							        ,async:false
							        ,success:function (res) {
						             //使用table.exportFile()导出数据
						              table.exportFile('exportTable',res.data, 'xls');
										}
									});        
							};
						   
			        });
             table.on('tool(test)',function (obj){
                //var checkStatus=table.checkStatus(obj.config.id);
                  var checkStatus = obj.data;
			      var code1 = checkStatus.jia_ci;
			      code1 = encodeURIComponent(code1);
			      console.log(checkStatus.jia_ci);
			      layer.open({
			           type: 2,
			           title: '架次:'+code1+'明细',
			           shadeClose: true,
			           shade: 0.8,
			           area: ['100%', '100%'],
			           content: 'fly_data.html? jiaci='+code1,
			           yes: function(index) {   }
			        });
			      
                   console.log("触发了事件");

                })
		    }	
        });
		}
		});
        
    }else if(html=="rbac.html")//用户管理
    {
		var usertable=$.ajax({url:"http://ydhy.xyz:8687/zbpth/zbpt/useradmin",method:"post",success:function(rbacdata){
		console.log(usertable);
        //layui模块
        layui.use(['table','element','layer'], function() {
            var  key =1;
            var table = layui.table;
            var layer = layui.layer;
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
                            fixed:"left"},
                        {
                            field: 'id',
                            title: '序号',
                            width: "9%",
                            sort: true,
                            fixed: 'left'
                        },
                        {
                            field: 'user_admin',
                            title: '用户名',
                            width: "9%",
                            sort: true,
                            fixed: 'left'
                        }, {
                        field: 'user_pwd',
                        title: '密码',
                        width: "10%",
                        sort: false,
                        fixed: 'left',
                        modify:'text',
                        templet: function(res){
					    return '<em>'+ res.user_pwd +'</em>'}
                    }, {
                        field: 'user_flag',
                        title: '当前状态',
                        width: "9%",
                        sort: true,
                        fixed: 'left'
                    }, {
                        field: 'zuce_time',
                        title: '注册时间',
                        //width: "14%",
                        sort: true,
                        fixed: 'left'
                    }
                    ]
                ],
                data: rbacdata.data
            };
           
            table.render(demo_op);//渲染表格
            $("#a4").hide();
            $("#a3").hide();
            var layer_option ={
                type: 2,
                title: '用户管理', //不显示标题栏,
                closeBtn: 1,
                area: ['450px','300px'],
                shade: 0.6,
                id: 'LAY_layuipro' ,//设定一个id，防止重复弹出
                //btn: ['确定', '取消'],
                btnAlign: 'c',
                moveType: 1, //拖拽模式，0或者1
                content:'user2.html' //这里content是一个普通的String
                
            };

            table.on('toolbar(test)',function (obj){
                //var checkStatus=table.checkStatus(obj.config.id);
                var checkStatus=table.checkStatus(obj.config.id),
                data = checkStatus.data;//获取选中的数据
                console.log("触发了事件");
                switch (obj.event){
                    case 'open': {
                        if(demo_op.cols[0][0].hide==true)demo_op.cols[0][0].hide=false;
                        else if(demo_op.cols[0][0].hide==false)demo_op.cols[0][0].hide=true;
                        table.render(demo_op);
                        console.log("触发了open");
                        if(key==1) {
                            $("#a4").show();
                            $("#a3").show();
                            key=-1;
                            $("#a2").addClass("layui-bg-orange");
                        }
                        else{
                            $("#a4").hide();
                            $("#a3").hide();
                            key=1;
                            $("#a2").addClass("layui-bg-green");
                        }
                        break;
                    }//开启编辑模式
                    case 'add'://添加事件
                    {
                        console.log("触发了add");
                        layer.open(layer_option);
                        
                        break;
                    }
                    case 'modify'://编辑事件
                    { 
                        
                        console.log("触发了modify");
                        for (var i=0;i<data.length;i++){
                        
                         idd=(checkStatus.data[i].id)
                    }
                        if(data.length === 0){
                        layer.msg('请选择一行');
                    } else {
                    	layer.prompt({
					        formType: 2
					        ,value: data.team_user
					      }, function(value1, index){
					      	$.ajax({
                                		//几个参数需要注意一下
                                        type: "post",//方法类型
                                        url: "http://ydhy.xyz:8687/zbpth/zbpt/bjuser",method:"post",//url
                                        data:{"user_pwd":value1,"id":idd},
                                        dataType:"json",
                                        async:false,
                                        //contentType:'application/json;charset=UTF-8',
                                        traditional: true,
                                        success: function (result) {
                                        	console.log(result);//打印服务端返回的数据(调试用)
                                            if (0==result ) {
                                                alert("修改失败");
                                            }else{
                                                window.location.reload();
                                            };
                                        },
                                        error : function() {
                                            alert("请稍后重试！");
                                        }
                                	
                                	})
                               
                                 console.log(data);
					      })
                      }
                        
                        break;
                    }
                    case 'del'://删除事件
                    {
                        for (var i=0;i<data.length;i++){
                        
                         idc=(checkStatus.data[i].id)
                    }
//                    	console.log(data+"-----0");
//                    	console.log(data);
//                    	console.log(idc);
                        if(data.length === 0){
                        layer.msg('请选择一行');
                    } else {
                        layer.open({
                        	title: '删除信息'
                            ,type: 1
                            ,closeBtn: false
                            ,area: '300px;'
                            ,shade: 0.8
                            ,id: 'LAY_layuipro'
                            ,btn: ['确定', '取消']
                            ,content: '是否删除'
                        	,success: function(layero){
                                var btn = layero.find('.layui-layer-btn');
                                //alert("580");
                                btn.find('.layui-layer-btn0').click(function () {
                                	$.ajax({
                                		//几个参数需要注意一下
                                        type: "post",//方法类型
                                        url: "http://ydhy.xyz:8687/zbpth/zbpt/Deluser",method:"post",//url
                                        data:{"id":idc},
                                        dataType:"json",
                                        async:false,
                                        //contentType:'application/json;charset=UTF-8',
                                        traditional: true,
                                        success: function (result) {
                                        	console.log(result);//打印服务端返回的数据(调试用)
                                            if (0==result ) {
                                                alert("修改失败");
                                              
                                            }else{
                                                window.location.reload();
                                               
                                            };
                                        },
                                        
                                        error : function() {
                                            alert("请稍后重试！");
                                            
                                        }
                                	
                                	})
                               
                                 console.log(data);
                                 })
                               
                                }
                        	
                        	})
                        }
                        console.log("触发了del");
                        
                        break;
                    }
                }
            })
        })
       }
      })
    }else if (html == "team.html")//团队管理
    {
       var teamtable=$.ajax({url:"http://ydhy.xyz:8687/zbpth/zbpt/teamadmin",method:"post",success:function(teamdata){
        //console.log(b);
        //layui模块
        layui.use(['table','element','layer'], function() {
            var  key =1;
            var table = layui.table;
            var layer = layui.layer;
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
                        },{
                            field: 'id',
                            title: '序号',
                            //width: "9%",
                            sort: true,
                            fixed: 'left'
                        },{
                            field: 'team_user',
                            title: '团队编号',
                            //width: "9%",
                            sort: true,
                            fixed: 'left',
                            modify:'text',
                            templet: function(res){
					        return '<em>'+ res.team_user +'</em>'
					      }
                            
                        }, {
	                        field: 'planer_id',
	                        title: '飞手编号',
	                        //width: "10%",
	                        sort: false,
	                        fixed: 'left'
	                    }, {
	                        field: 'plan_id',
	                        title: '飞机编号',
	                        //width: "9%",
	                        sort: true,
	                        fixed: 'left'
	                    },{
	                        field: 'planer_name',
	                        title: '飞手姓名',
	                        //width: "9%",
	                        sort: true,
	                        fixed: 'left'
	                    }, {
	                        field: 'zuce_time',
	                        title: '注册时间',
	                        //width: "14%",
	                        sort: true,
	                        fixed: 'left'
	                    }
                    ]
                ],
                data: teamdata.data
            };
            table.render(demo_op);//渲染表格
            $("#a4").hide();
            $("#a3").hide();
            var layer_option ={
                type: 2,
                title: '团队管理', //不显示标题栏,
                closeBtn: 1,
                area: ['450px','350px'],
                shade: 0.6,
                id: 'LAY_layuipro' ,//设定一个id，防止重复弹出
                //btn: ['确定', '取消'],
                btnAlign: 'c',
                moveType: 1, //拖拽模式，0或者1
                content:'user1.html' //这里content是一个普通的String
                
            };

            table.on('toolbar(test)',function (obj){
                var checkStatus=table.checkStatus(obj.config.id),
                data = checkStatus.data;//获取选中的数据
                console.log(checkStatus);
                console.log(data.team_user);
                console.log("触发了事件");
                switch (obj.event){
                    case 'open': {
                        if(demo_op.cols[0][0].hide==true)demo_op.cols[0][0].hide=false;
                        else if(demo_op.cols[0][0].hide==false)demo_op.cols[0][0].hide=true;
                        table.render(demo_op);
                        console.log("触发了open");
                        if(key==1) {
                            $("#a4").show();
                            $("#a3").show();
                            key=-1;
                            $("#a2").addClass("layui-bg-orange");
                        }
                        else{
                            $("#a4").hide();
                            $("#a3").hide();
                            key=1;
                            $("#a2").addClass("layui-bg-green");
                        }
                        break;
                    }//开启编辑模式
                    case 'add'://添加事件
                    {
                        console.log("触发了add");
                        layer.open(layer_option);
                        break;
                    }
                    case 'modify'://编辑事件
                    { 
                        console.log("触发了modify");
                        for (var i=0;i<data.length;i++){
                        
                         idz=(checkStatus.data[i].id)
                    }
                        if(data.length === 0){
                        layer.msg('请选择一行');
                    } else {
                    	layer.prompt({
					        formType: 2
					        ,value: data.team_user
					      }, function(value, index){
					      	$.ajax({
                                		//几个参数需要注意一下
                                        type: "post",//方法类型
                                        url: "http://ydhy.xyz:8687/zbpth/zbpt/bjteam",method:"post",//url
                                        data:{"team_user":value,"id":idz},
                                        dataType:"json",
                                        async:false,
                                        //contentType:'application/json;charset=UTF-8',
                                        traditional: true,
                                        success: function (result) {
                                        	console.log(result);//打印服务端返回的数据(调试用)
                                            if (0==result ) {
                                                alert("修改失败");
                                            }else{
                                                window.location.reload();
                                            };
                                        },
                                        error : function() {
                                            alert("请稍后重试！");
                                        }
                                	
                                	})
                               
                                 console.log(data);
					      })
                      }
                        break;
                    }
                    case 'del'://删除事件
                    {
                    for (var i=0;i<data.length;i++){
                        
                         ids=(checkStatus.data[i].id)
                    }
                        if(data.length === 0){
                        layer.msg('请选择一行');
                    } else {
                        layer.open({
                        	title: '删除信息'
                            ,type: 1
                            ,closeBtn: false
                            ,area: '300px;'
                            ,shade: 0.8
                            ,id: 'LAY_layuipro'
                            ,btn: ['确定', '取消']
                            ,content: '是否删除'
                        	,success: function(layero){
                                var btn = layero.find('.layui-layer-btn');
                                //alert("580");
                                btn.find('.layui-layer-btn0').click(function () {
                                	$.ajax({
                                		//几个参数需要注意一下
                                        type: "post",//方法类型
                                        url: "http://ydhy.xyz:8687/zbpth/zbpt/DelTeam",method:"post",//url
                                        data:{"id":ids},
                                        dataType:"json",
                                        async:false,
                                        //contentType:'application/json;charset=UTF-8',
                                        traditional: true,
                                        success: function (result) {
                                        	console.log(result);//打印服务端返回的数据(调试用)
                                            if (0==result ) {
                                                alert("修改失败");
                                            }else{
                                                window.location.reload();
                                            };
                                        },
                                        
                                        error : function() {
                                            alert("请稍后重试！");
                                            
                                        }
                                	
                                	})
                               
                                 console.log(data);
                                 })
                               
                                }
                        	
                        	})
                        }
                        console.log("触发了del");
                        break;
                    }
                }
            })
        })
       }
      });
        }
       
}
