
var ss;//全局变量，用于存储算式答案
var mytime;//用以计时
var h,m,s,ms;//用以计时
var str;
var time;
var correct;//用以计数正确题目数
var number;//用以收集总题数


//显示算式的函数，包括调用产生函数的步骤
function product_suanshi(){
	start();//开始计时
    var obj=window.document.getElementById("select_number");//获取选题数
	number=obj.options[obj.selectedIndex].value;//总题数
	var suanshi = new Array(); //先声明一维
    for(var k=0;k<number;k++){ //一维长度为要生成算式个数
		suanshi[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组，这个数组有两个元素，都是字符形式；
								//第一个是运算式，第二个是答案（运算式带等号）
	}
	suanshi[0]=['1+1=','2'];
	suanshi[1]=['1+2=','3'];
	suanshi[2]=['1+3=','4'];
	suanshi[3]=['1+4=','5'];
	suanshi[4]=['1+4=','5'];
	suanshi[5]=['1+4=','5'];
	suanshi[6]=['1+4=','5'];
	suanshi[7]=['1+4=','5'];
	suanshi[8]=['1+4=','5'];
	suanshi[9]=['1+4=','5'];
	suanshi[10]=['1+4=','5'];
	//var suanshi=product(number);
	ss=suanshi;
	var ul=document.getElementById("neirong_ul");
	//ul.remove();
	$(ul).html("");
	for(k=0;k<number;k++){
    var li=document.createElement("li");
    li.innerHTML =
        '<p class="shizi" style="color:#000;">'+suanshi[k][0]+
		'<input type="text" class="shuru" size="3" />'+
        '<span class="daan_show" ></span>'+
        '<i class="s_jieguo" style="display:inline;"></i>'+
		'</p>'
	//$("#shuru1").attr("")
    ul.appendChild(li);
		//$('.document').append(li);
	}
}

function toDub(n){  //补0操作
	if(n<10){
	  return "0"+n;
	}
	else {
	  return ""+n;
	}
  }

function start(){
	h=m=s=ms= 0;  //时，分，秒初始化为0；
  
	function timer(){   //定义计时函数
	  ms=ms+50;         //毫秒
	  if(ms>=1000){
		ms=0;
		s=s+1;         //秒
	  }
	  if(s>=60){
		s=0;
		m=m+1;        //分钟
	  }
	  if(m>=60){
		m=0;
		h=h+1;        //小时
	  }
	  str =toDub(h)+"时"+toDub(m)+"分"+toDub(s)+"秒";
	  mytime = document.getElementById('clock');
	  mytime.innerHTML = str;
	}
	time=setInterval(timer,50);//开始计时
	
}

//生成算式，返回字符串形式的算式和结果（点击“交卷”的结果）
function product_dengshi(){
	clearInterval(time);//停止时间
	var inputs = document.getElementsByClassName("shuru");
	var spans = document.getElementsByClassName("daan_show");
	var iclass = document.getElementsByClassName("s_jieguo");
	correct = 0;//计数正确题目的个数，清零
	var correctnumber = document.getElementById("grade");
	var obj=document.getElementById("select_number");
    for (var i = 0; i < inputs.length; i++) {
      //判断这个元素是不是按钮
      if (inputs[i].type == "text") {
		  inputs[i].style="display:none;";
		  spans[i].value=inputs[i].value;//输入答案的赋值
		  spans[i].innerHTML=spans[i].value;//输入答案的显示
		  var res = String(ss[i][1]);
		  var ret = String(inputs[i].value);
		  if(res==ret){//输入正确
			  correct +=1;//正确题数加一
			  iclass[i].innerHTML='<h7 style="color:green;">  正确</h7>'
		  }
		  else{//输入错误
			iclass[i].innerHTML='<h7 style="color:red;">  答案：'+ss[i][1]+'</h7>'
		  }
        
      }
	}
	correctnumber.innerHTML=correct+"/"+number;
	var logjudge=1;
	var storage=window.localStorage;//获取当前locastorage中值
	var userid = storage.getItem("id");

	


	$.ajax({
		type: "post",
		url: "php/questionaire.php",//指示使用的PHP文件
		data: {id:userid,login:logjudge,que_num:number,right_num:correct,timer:str},//提交到login_in.php的数据
		dataType: "json"
	  });   

}


//你要改的！！！！！！！！
//!!!!!!!!!!!!!!!!!!!!!!!
function product(number){
    var tArray = new Array(); //先声明一维
    for(var k=0;k<number;k++){ //一维长度为要生成算式个数
		tArray[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组，这个数组有两个元素，都是字符形式；
		                        //第一个是运算式，第二个是答案（运算式带等号）

    //生成式子 ,以下你要改   
    var  x;//存放结果
    //生成数值和运算符号
	var a=[Math.ceil(Math.random()*10),Math.ceil(Math.random()*10),Math.ceil(Math.random()*10)];//生成随机0~10以内数
    var b=[Math.floor(Math.random()*4),Math.floor(Math.random()*4)];//随机生成符号
	
		//开始计算
		if (b[0] == 0)
		{
			if (b[1] == 0)
			{
				x = a[0] + a[1] + a[2];
				if ((x <= 100)&&(x>=0))
				{
                    tArray[k][0]=String(a[0])+'+'+String(a[1])+'+'+String(a[2])+'=';//把生成的的式子放到二维数组里
                    tArray[k][1]=String(X);//把生成的结果也放进去
                }
				else
					k--;
			}				
			else if (b[1] == 1)
			{
				x = a[0] + a[1] - a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d + %d - %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else if (b[1] == 2)
			{
				x = a[0] + a[1] * a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d + %d * %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else
			{
				if (a[2] == 0)
				{
					k--;
					continue;
				}					
				x = a[0] + a[1] / a[2];
				if (a[1] % a[2] != 0)
					k--;
				else if ((x <= 100) && (x >= 0))
					printf("%d + %d / %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
		}
		else if (b[0] == 1)
		{
			if (b[1] == 0)
			{
				x = a[0] - a[1] + a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d - %d + %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else if (b[1] == 1)
			{
				x = a[0] - a[1] - a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d - %d - %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else if (b[1] == 2)
			{
				x = a[0] - a[1] * a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d - %d * %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else
			{
				if (a[2] == 0)
				{
					k--;
					continue;
				}
				x = a[0] - a[1] / a[2];
				if (a[1] % a[2] != 0)
					k--;
				else if ((x <= 100) && (x >= 0))
					printf("%d - %d / %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
		}
		else if (b[0] == 2)
		{
			if (b[1] == 0)
			{
				x = a[0] * a[1] + a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d * %d + %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else if (b[1] == 1)
			{
				x = a[0] * a[1] - a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d * %d - %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else if (b[1] == 2)
			{
				x = a[0] * a[1] * a[2];
				if ((x <= 100) && (x >= 0))
					printf("%d * %d * %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
			else
			{
				if (a[2] == 0)
				{
					k--;
					continue;
				}
				x = a[0] * a[1] / a[2];
				if (a[1] % a[2] != 0)
					k--;
				else if ((x <= 100) && (x >= 0))
					printf("%d * %d / %d = %d \n", a[0], a[1], a[2], x);
				else
					k--;
			}
		}
		else
		{
		if (a[1] == 0)
		{
			k--;
			continue;
		}
		else if (a[0] % a[1] != 0)
			k--;
		else if (b[1] == 0)
		{
			x = a[0] / a[1] + a[2];
			if ((x <= 100) && (x >= 0))
				printf("%d / %d + %d = %d \n", a[0], a[1], a[2], x);
			else
				k--;
		}
		else if (b[1] == 1)
		{
			x = a[0] / a[1] - a[2];
			if ((x <= 100) && (x >= 0))
				printf("%d / %d - %d = %d \n", a[0], a[1], a[2], x);
			else
				k--;
		}
		else if (b[1] == 2)
		{
			x = a[0] / a[1] * a[2];
			if ((x <= 100) && (x >= 0))
				printf("%d / %d * %d = %d \n", a[0], a[1], a[2], x);
			else
				k--;
		}
		else
		{
			if (a[2] == 0)
			{
				k--;
				continue;
			}
			x = a[0] / a[1] / a[2];
			if (a[1] % a[2] != 0)
				k--;
			else if ((x <= 100) && (x >= 0))
				printf("%d / %d / %d = %d \n", a[0], a[1], a[2], x);
			else
				k--;
		}
		}
	}
    

   
}
