layui.use(['table','element','layer','laydate'], function() {
            var  key =1;
            var table = layui.table;
            var layer = layui.layer;
            var laydate = layui.laydate;
            function addLink(d){
			var addLink = d.jia_ci;
				if('' == addLink || null == addLink || undefined == addLink){
					return'';
				}
				if(addLink.length>0){
					return'<a class="layui-table-link" href="javascript:void(0);" lay-event="link">'+d.jia_ci+'</a>';
				}
		  	};
		  	
            var demo_op ={
                elem: '#demo',
                height: 516,
                page: true, //开启分页
                toolbar: '#barDemo',//开启工具栏
                id:'testReload',
                cols: [
                    [ //表头
                        {
                            type:"checkbox",
                            hide:true,
                            fixed:"left"},
                        {
                            field: 'id',
                            title: '序号',
                            width: "6%",
                            sort: true,
                            fixed: 'left'
                        }, {
	                        field: 'jia_ci', 
	                        title: '飞机架次',
	                        width: "21%",
	                        sort: false,
	                        fixed: 'left',
	                        templet: addLink
	                    }, {
	                        field: 'plan_id',
	                        title: '飞机编号',
	                        width: "14%",
	                        sort: true,
	                        fixed: 'left'
	                    }, {
	                        field: 'planer_id',
	                        title: '飞手编号',
	                        width: "10%",
	                        sort: true,
	                        fixed: 'left'
	                    }, {
	                        field: 'work_area',
	                        title: '作业面积',
	                        width: "9%",
	                        sort: true,
	                        fixed: 'left'
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
	                        sort: false,
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
	                        width: "8.5%",
	                        sort: true,
	                        fixed: 'left'
	                    }
                    ]
                ],
                data: JSON.parse(a.responseText).data,
            };
			table.render(demo_op);//渲染表格
			laydate.render({
		    elem: '#dateReload'
		    ,type: 'datetime'
		    });
		  	 var $ = layui.$, active = {
			    reload: function(){
			      var planReload = $('#planReload');
			      //执行重载
			      table.reload('testReload', {
			       page: {
			          curr: 1 //重新从第 1 页开始
			        },
			       where: {
			       	key:{
			       		id: planReload.val()
			       	 }
			        }
			      },'data');
			    }
			  };
			  console.log();
			   $('.layui-form .layui-btn').on('click', function(){ 
			    var type = $(this).data('type');
			    active[type] ? active[type].call(this) : '';
			  }); 
});