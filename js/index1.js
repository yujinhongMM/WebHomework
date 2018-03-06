var n=1;


window.onscroll=function(){
    //滚轮事件
        var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;//上下滚轮滚动的距离
        var node=document.getElementById('top');//变化的模块
        var node1=document.getElementById('FixLeft');//变化的模块
        if(top>200){//就是滚动条滚动到200px位置，显示菜单，并且可以修改它的样式。
            node.style.position="fixed";
            node.style.zIndex="9999";
            node1.style.position="fixed";
            node1.style.top="121px";//上面两个加起来有120px+1px;
            node1.style.zIndex="0";
        }else{//当鼠标滚动回初始位子样式变回。
            node.style.position="static";
            node.style.zIndex="0";
            node1.style.position="static";
            node1.style.zIndex="0";
        }

        

    
}

window.onload=function(){

         /*时间*/
         setInterval(getTimes,1000);
         function getTimes(){
             var mydate=new Date();
             var weekday=["日","一","二","三","四","五","六"];
             var mynum=mydate.getDay();
             var show=mydate.getFullYear()+"年"+(mydate.getMonth()+1)+"月"
             +mydate.getDate()+"日"+" "+"星期"+weekday[mynum]+" "+
             format(mydate.getHours())+":"+format(mydate.getMinutes());
             document.getElementById("top_m_i_t").innerText=show;
             if(mydate.getHours()<12&&mydate.getHours()>=7){
                 var show2="早上好，YJH！";
             }else if(mydate.getHours()<19&&mydate.getHours()>=12){
                var show2="下午好，YJH！";
             }else{
                var show2="晚上好，YJH！";
             }
             document.getElementById("top_m_i_h").innerText=show2;
         }
         function format(a)
         {
             return a.toString().replace(/^(\d)$/, "0$1")	
         }


         //登录框判断BTNN
         var BTNN=document.getElementById("BTNN");
         BTNN.onclick=function(){
             var ID=document.getElementById("userid");
             var PSW=document.getElementById("pwd");
             var YZMZ=document.getElementById("yzmz");
            if(ID.value==""){
                alert("请输入您的用户名！");
                return false;
            }else if(PSW.value==""){
                alert("请输入您的密码！");
                return false;
            }else if( YZMZ.value==""){
                alert("请输入您的验证码！");
                return false;
            }
            if(ID.value.length>10){
                alert("用户名超出10位");
                return false;
            }else if(PSW.value.length>10){
                alert("密码超出16位");
                return false;
            }else{
                return true;
            }
        }


        /*网页换肤*/
        var oLink=document.getElementsByTagName("link")[0];/*因为具有相同tagname的元素很多，不像通过id,name找到的都是唯一的。[0]是数组的表示形式，0代表所有搜索到元素的第一个。如果是1那就是第二个元素*/
		var oSkin=document.getElementById("skin").getElementsByTagName("li");
		console.log(oSkin);
		for(var i=0;i<oSkin.length;i++){
			console.log(i);
			oSkin[i].onclick=function(){
                for(var p=0;p<oSkin.length;p++){
                    oSkin[p].className="";
                }
				this.className="current";
                oLink['href']="css/"+this.id+".css";
			}
		}

}



//内容发布按钮
function ddd(){
    var text=document.getElementById('box2').value;//内容框
    if(text==""){
        alert("请输入内容喔！");
        return;
    }else{
        var len =text.length;
        if(len>50){
            alert("输入请小于50字节！");
            return;
        }
        var foo = document.getElementById("dddd");
        //年月日
        //通过javascript的日期对象来得到当前的日期，并输出。
        var mydate=new Date();//当前日期
        var weekday=["日","一","二","三","四","五","六"];
        var mynum=mydate.getDay();
        var time=(n++)+"楼"+"&nbsp;&nbsp;"+mydate.getFullYear()+"年"+mydate.getMonth()+"月"+mydate.getDate()+"日"+"&nbsp;"
        +"星期"+weekday[mynum]+"&nbsp;"+mydate.getHours()+":"+mydate.getMinutes();
        var fff = document.createElement("div");
        fff.setAttribute("class","time");
        fff.innerHTML = time;
        foo.appendChild(fff);
        //增加内容
        var eee = document.createElement("div");
        eee.setAttribute("class","content");
        eee.innerHTML = text;
        foo.appendChild(eee);
        
    }
}
//关注按钮
function aaa(){
    var text = document.getElementById("guanzhu").value;
    console.log(text);
    if(text == '关注'){
        document.getElementById("guanzhu").value = "取消关注";
    }else{
        document.getElementById("guanzhu").value = "关注";
    }
}
//textarea字符字数计算
function keypress(){  
    var text= document.getElementById("box2").value;  
    var len; //记录剩余字符串的长度   
    if (text.length >= 50){//textarea控件不能用maxlength属性，就通过这样显示输入字符数了
        document.getElementById("box2").value = text.substr(0, 50);  
        len = 0;  
    } else {  
        len = 50 - text.length;  
    }  
    var show = "你还可以输入" + len + "个字";  
    document.getElementById("zishu").innerText = show;  
}  
/*点击头像间接点击input*/
function F_Open_dialog() 
{ 
     document.getElementById("btn_file").click(); 
}
/*显示修改后的头像*/
function showPicture(imgFile) {
 //alert(window.URL.createObjectURL(imgFile.files[0]));
/*获取上传文件的路径*/
document.getElementsByClassName("M_M")[0].style.backgroundImage="url("+window.URL.createObjectURL(imgFile.files[0])+")" ;
document.getElementsByClassName("M_M")[1].style.backgroundImage="url("+window.URL.createObjectURL(imgFile.files[0])+")" ;
}


/*登录弹出*/
function login(){
    var oWin = document.getElementById("win");
    var oLay = document.getElementById("overlay");
    var oLay1 = document.getElementById("pagewrap");	
	oLay.style.display = "block";
    oWin.style.display = "block";
    oLay1 .style.position="fixed";
    	
}
function Close(){
    var oWin = document.getElementById("win");
    var oLay = document.getElementById("overlay");
    var oLay1 = document.getElementById("pagewrap");	
    oLay.style.display = "none";
    oWin.style.display = "none";
    oLay1.style.position="relative";
}

function QIMO(){
    var oWin = document.getElementById("win1");
    var oLay = document.getElementById("overlay");
    var oLay1 = document.getElementById("pagewrap");	
	oLay.style.display = "block";
    oWin.style.display = "block";
    oLay1 .style.position="fixed";
    	
}
function Close1(){
    var oWin = document.getElementById("win1");
    var oLay = document.getElementById("overlay");
    var oLay1 = document.getElementById("pagewrap");	
    oLay.style.display = "none";
    oWin.style.display = "none";
    oLay1.style.position="relative";
}
