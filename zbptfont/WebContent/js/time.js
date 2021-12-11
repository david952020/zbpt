var days=new  Array ("日", "一", "二", "三", "四", "五", "六");
function showDT() {
  var currentDT = new Date();
  var y,m,date,day,hs,ms,ss,theDateStr;
  y = currentDT.getFullYear(); //四位整数表示的年份
  m = currentDT.getMonth()+1; //月
  date = currentDT.getDate(); //日
  day = currentDT.getDay(); //星期
  hs = currentDT.getHours(); //时
  ms = currentDT.getMinutes(); //分
  ss = currentDT.getSeconds(); //秒
  if(hs<10){
  	hs = "0"+hs; //时
  	}else if(ms<10){
  	ms = "0"+ms;
  	}else if(ss<10){ //分
  	ss = "0"+ss; //秒
  	}else{
  hs ; //时
  ms ; //分
  ss ; //秒
  }
  theDateStr = y+"年"+  m +"月"+date+"日 星期"+days[day]+" "+hs+":"+ms+":"+ss;
  document.getElementById("theClock"). innerHTML =theDateStr;
  // setTimeout 在执行时,是在载入后延迟指定时间后,去执行一次表达式,仅执行一次
  window.setTimeout( showDT, 1000);
 
} 