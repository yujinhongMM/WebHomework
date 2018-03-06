
var num=0;//用于存前一个数值
var num1=0;//用于存后一个数值
var next=0;//进行了运算的下一次操作
var fuhao=0;//记录上一个符号
var quit=0;//防止重复按

window.onload =function(){
	 var jieguo=document.getElementById("jieguo");
	var td=document.getElementsByTagName("td");
	console.log(td+'dd');
	for(var i=2;i<td.length;i++){
		 td[i].onclick=function(){
			
			if(this.innerHTML=="删除"){
				if(jieguo.innerHTML.length==0){
					alert("亲，不需要删除啦！");
					return;
				}
				jieguo.innerHTML=jieguo.innerHTML.substr(0,jieguo.innerHTML.length-1);
			}
			//上一次为等号,如果下一次按运算符会接着上次的结果继续运行
			if(next==2){
				jieguo.innerHTML="";
				next=0;
			}
			
			//获取判断后的显示屏的内容
			var jieguowenzi=jieguo.innerHTML;
			//如果为数字就显示出来
			if(checkNumber(this.innerHTML)){
				jieguo.innerHTML=jieguowenzi+this.innerHTML;
				if(next==0){
				num=jieguo.innerHTML;
				quit=0;
				}else{
					num1=jieguo.innerHTML;
					quit=0;
				}
			}
			if(this.innerHTML=="+"){
				if(quit==1){
					alert("请先输入数据再按键哦！");
					return;
					
				}
				jieguo.innerHTML="";
				size(fuhao);
				fuhao=1;
				next=1;
				quit=1;
			}
			if(this.innerHTML=="-"){
				if(quit==1){
					alert("请不要重复按键哦！");
					return;
				}
				jieguo.innerHTML="";
				size(fuhao);
				fuhao=2;
				next=1;
				quit=1;
			}
			if(this.innerHTML=="*"){
				if(quit==1){
					alert("请不要重复按键哦！");
					return;
				}
				jieguo.innerHTML="";
				size(fuhao);
				fuhao=3;
				next=1;
				quit=1;
			}
			if(this.innerHTML=="/"){
				if(quit==1){
					alert("请不要重复按键哦！");
					return;
				}
				jieguo.innerHTML="";
				size(fuhao);
				fuhao=4;
				next=1;
				quit=1;
			}
			if(this.innerHTML=="="){
				if(quit==1){
					alert("请不要重复按键哦！");
					return;
				}
				size(fuhao);
				jieguo.innerHTML=num;
				fuhao=0;
				next=2;
				quit=0;
			}
			if(this.innerHTML=="清除"){
				jieguo.innerHTML="";
				xianshi.innerHTML="";
				fuhao=0;
				next=0;
				num=0;
				num1=0;
				quit=0;
			}
			
		 }
	}
	//验证字符串是否是数字
	function checkNumber(theObj) {
  	var reg = /^[0-9]+.?[0-9]*$/;
  	if (reg.test(theObj)) {
    	return true;
  	}
  	return false;
	}
	//进行四则运算
	function size(fuhao){
		switch(fuhao){
			case 1:xianshi.innerHTML=num+"+"+num1;num=parseInt(num)+parseInt(num1);break;
			case 2:xianshi.innerHTML=num+"-"+num1;num=parseInt(num)-parseInt(num1);break;
			case 3:xianshi.innerHTML=num+"*"+num1;num=parseInt(num)*parseInt(num1);break;
			case 4:xianshi.innerHTML=num+"/"+num1;num=parseInt(num)/parseInt(num1);break;
			default:break;
		}
	}
}