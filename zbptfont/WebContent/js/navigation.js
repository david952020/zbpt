//内容控制：
var Top = new Vue({ //上方菜单数据
    el: '.layui-header',
    data: {
        logo: '植保机管理平台',
        left: {
            /*li: [{
                //下方三个值分别对应效果：
                //     内容   下拉菜单    超链接
                text: ['', 0, 'partners.html'],
                this: false //当前页面指针
            }, {
                text: ['用户管理', 1, 'javascript:;'],
                this: false
            }],
            dd: [{
                    text: ['权限管理', 'rbac.html'],
                    this: false
                },
                {
                    text: ['注册申请', 'power.html'],
                    this: false
                },
            ]*/
        },
        right: {
            li1: {
//                a: 'javascript:;',
                  src: 'css/layui/images/pic/logo.ico',
                   name: useradmin,
//                  if(name ="undefined"||name==""||name==null ){
//                  href:'login.html'},
                 
            },
//            dd: [{
//                    a: 'javascript:;',
//                    text: '个人设置',
//                    this: false
//                },
//                {
//                    a: 'javascript:;',
//                    text: '更换密码',
//                    this: false
//                }
//            ],
            li2: {
                text: '退出',
                href: 'login.html',
            }
        }
    }
});
var Left = new Vue({ //左侧菜单数据
    el: '.layui-side-scroll',
    data: {
        li: [{
                text: ['平台总览', 0,'index.html?useradmin='+useradmin],
                itemed: false,
                this: false
            }, // 值 是否渲染  超链接
            {
                text: ['飞机管理', 1, 'javascript:;', [
                    { dv: ['飞机列表', 'plane_list.html?useradmin='+useradmin], this: false },
                    { dv: ['实时位置', 'plane_place.html?useradmin='+useradmin], this: false },
                    { dv: ['历史记录', 'plane_history.html?useradmin='+useradmin], this: false }
                ]],
                itemed: false
            }, {
                text: ['参数管理', 1, 'javascript:;', [
                    { dv: ['报警系统', 'urgent_alarm.html?useradmin='+useradmin], this: false },
                    { dv: ['异常参数', 'error_data.html?useradmin='+useradmin], this: false },
                ]],
                itemed: false
            }, {
                text: ['植保管理', 1, 'javascript:;', [
                    { dv: ['现在直播', 'massif.html?useradmin='+useradmin], this: false },
                    { dv: ['作业统计', 'job_accounting.html?useradmin='+useradmin], this: false },
                ]],
                itemed: false
            },{
                text: ['用户管理', 1, 'javascript:;', [
                    { dv: ['用户管理', 'rbac.html?useradmin='+useradmin], this: false },
                    { dv: ['团队管理', 'team.html?useradmin='+useradmin], this: false },
                ]],
                itemed: false
            }
        ]
    }
});