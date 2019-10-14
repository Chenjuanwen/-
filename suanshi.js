
var ss;//全局变量，用于存储算式答案
var mytime;//用以计时
var h,m,s,ms;//用以计时
var str;
var time;
var correct;//用以计数正确题目数
var number;//用以收集总题数
var storage=window.localStorage;//获取当前locastorage中值
var grade=storage.grade;//年级
var unit=storage.unit;//单元

//var relgrade=String((parseInt(grade)+1)/2);//换算成真正的年级
//alert(grade);
//alert(unit);
//用来显示标题
function showtitle(){
	var title=window.document.getElementById("leixing1");
	//alert(title);
	if(grade=='1'){
		title.innerHTML=
	"<h1 style='color:#000;' class='leixing' style='float:none' text-align='center;' width='120px;' height='35px;'>"
	+" 一年级上第 "+unit+" 单元"+"</h1>"
	}
	else if(grade=='2'){
		title.innerHTML=
	"<h1 style='color:#000;' class='leixing' style='float:none' text-align='center;' width='120px;' height='35px;'>"
	+" 一年级下第 "+unit+" 单元"+"</h1>"
	}
	else if(grade=='3'){
		title.innerHTML=
	"<h1 style='color:#000;' class='leixing' style='float:none' text-align='center;' width='120px;' height='35px;'>"
	+" 二年级上第 "+unit+" 单元"+"</h1>"
	}
	else if(grade=='4'){
		title.innerHTML=
	"<h1 style='color:#000;' class='leixing' style='float:none' text-align='center;' width='120px;' height='35px;'>"
	+" 二年级下第 "+unit+" 单元"+"</h1>"
	}
	else if(grade=='5'){
		title.innerHTML=
	"<h1 style='color:#000;' class='leixing' style='float:none' text-align='center;' width='120px;' height='35px;'>"
	+" 三年级上第 "+unit+" 单元"+"</h1>"
	}
	else {
		title.innerHTML=
	"<h1 style='color:#000;' class='leixing' style='float:none' text-align='center;' width='120px;' height='35px;'>"
	+" 三年级下第 "+unit+" 单元"+"</h1>"
	}
	
}



//显示算式的函数，包括调用产生函数的步骤
function product_suanshi(){
	start();//开始计时
    var obj=window.document.getElementById("select_number");//获取选题数
	number=obj.options[obj.selectedIndex].value;//总题数
    // for(var k=0;k<number;k++){ //一维长度为要生成算式个数
	// 	suanshi[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组，这个数组有两个元素，都是字符形式；
	// 							//第一个是运算式，第二个是答案（运算式带等号）
	// }
	alert(grade+unit+number);
	$.ajax({
		type: "post",
		url: "php/ques_gen.php",//指示使用的PHP文件
		data: {grade:parseInt(grade),unit:parseInt(unit),num:parseInt(number)},//提交到php的数据
		dataType: "json",
		success: function(arr){
            //将以json字符串格式返回的数据变成json的对象
            // var json='';
            // json = eval("("+suanshi+")"); 
			// alert(json.name);
			// ss=suanshi;
			alert("接收成功！"+arr);
			ss=arr;
			var ul=document.getElementById("neirong_ul");
	//ul.remove();
	$(ul).html("");
	for(k=0;k<number;k++){
    var li=document.createElement("li");
    li.innerHTML =
        '<p class="shizi" style="color:#000;">'+ss[k].formu+
		'<input type="text" class="shuru" size="3" />'+
        '<span class="daan_show" ></span>'+
        '<i class="s_jieguo" style="display:inline;"></i>'+
		'</p>'
	//$("#shuru1").attr("")
    ul.appendChild(li);
		//$('.document').append(li);
	}
			
        },
        //未成功接收时的处理
        error:function(student_data){
            //提示连接出错
            alert("服务器连接出错！");
        }
	  });   
	//var suanshi=product(number);
	//ss=suanshi;
	// var ul=document.getElementById("neirong_ul");
	// //ul.remove();
	// $(ul).html("");
	// for(k=0;k<number;k++){
    // var li=document.createElement("li");
    // li.innerHTML =
    //     '<p class="shizi" style="color:#000;">'+ss[k].formu+
	// 	'<input type="text" class="shuru" size="3" />'+
    //     '<span class="daan_show" ></span>'+
    //     '<i class="s_jieguo" style="display:inline;"></i>'+
	// 	'</p>'
	// //$("#shuru1").attr("")
    // ul.appendChild(li);
	// 	//$('.document').append(li);
	// }
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
	//用以记录做题结果
	var answer=new Array();

    for (var i = 0; i < inputs.length; i++) {
      //判断这个元素是不是按钮
      if (inputs[i].type == "text") {
		  inputs[i].style="display:none;";
		  spans[i].value=inputs[i].value;//输入答案的赋值
		  spans[i].innerHTML=spans[i].value;//输入答案的显示
		  var res = String(ss[i].value);
		  var ret = String(inputs[i].value);
		  if(res==ret){//输入正确
			  correct +=1;//正确题数加一
			  iclass[i].innerHTML='<h7 style="color:green;">  正确</h7>'
			  answer[i]=1;
		  }
		  else{//输入错误
			iclass[i].innerHTML='<h7 style="color:red;">  答案：'+ss[i].value+'</h7>'
			answer[i]=0;
		  }
        
      }
	}
	correctnumber.innerHTML=correct+"/"+number;
	var logjudge=1;
	var storage=window.localStorage;//获取当前locastorage中值
	var userid = storage.getItem("id");
	alert(userid);

	$.ajax({
		type: "post",
		url: "php/questionaire.php",//指示使用的PHP文件
		data: {id:userid,login:logjudge,que_num:number,right_num:correct,timer:str,answer:answer},//提交到login_in.php的数据，注意！！！！这里加上了一个做题结果的数组
		dataType: "json"
	  });   

}
