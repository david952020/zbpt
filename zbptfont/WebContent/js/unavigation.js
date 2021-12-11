//内容控制：
var Top = new Vue({ //上方菜单数据
    el: '.layui-header',
    data: {
        logo: '植保管理平台',
        left: {
            
        },
        right: {
            li1: {
                a: 'javascript:;',
                src: 'css/layui/images/face/0.gif',
                name: useradmin
            },
            /*dd: [{
                    a: 'javascript:;',
                    text: '个人设置',
                    this: false
                },
                {
                    a: 'javascript:;',
                    text: '更换密码',
                    this: false
                }
            ],*/
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
                text: ['实时位置', 0, 'uplane_place.html?useradmin='+useradmin],
                itemed: false,
                this: false
            }, // 值 是否渲染  超链接
            {
                text: ['飞机管理', 1, 'javascript:;', [
                    { dv: ['飞机列表', 'uplane_list.html?useradmin='+useradmin], this: false },
                    { dv: ['历史记录', 'uplane_history.html?useradmin='+useradmin], this: false }
                ]],
                itemed: false
            }
        ]
    }
});