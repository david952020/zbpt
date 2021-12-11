var lastTime = new Date().getTime();
var currentTime = new Date().getTime();
var time = 0.1 * 60 * 100000; //设置超时时间： 1分

/* 鼠标移动事件 */
$(document).mouseover(function(){
lastTime = new Date().getTime(); //更新操作时间
});

//判断用户多久没有进行鼠标操作,超过5分钟自动退出登录
function timeOut(){
currentTime = new Date().getTime(); //更新当前时间
if(currentTime - lastTime > time){ //判断是否超时
window.clearTimeout(inter);
//alert("您长时间未操作,请重新登录!");
//注销当前session ....
window.location.href="login.html";
}else{
inter = setTimeout(timeOut,600000); //这里1秒要改大一点 不然 会出现鼠标在移动但是会登出
}
}
timeOut();/**
 * 
 */