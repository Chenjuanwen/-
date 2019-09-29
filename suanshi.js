//<script type="text/javascript" src="jQuery.js"></script>
var ss;
function product_suanshi(){

    var obj=window.document.getElementById("select_number");
    var number=2;
	//var number=obj.options[obj.selectedIndex].value;
	var suanshi = new Array(); //先声明一维
    for(var k=0;k<number;k++){ //一维长度为要生成算式个数
		suanshi[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组，这个数组有两个元素，都是字符形式；
								//第一个是运算式，第二个是答案（运算式带等号）
	}
	suanshi[0]=['1+1=','2'];
	suanshi[1]=['1+2=','3'];
	
	//var suanshi=product(number);
	ss=suanshi;
	var ul=document.getElementById("neirong_ul");
	for(k=0;k<number;k++){
    var li=document.createElement("li");
    li.innerHTML =
        '<li style="color:#000;">'+suanshi[k][0]+
		'<input type="text" class="shuru" size="3" onkeyup="quanjiao_zhuan_banjiao(this);" />'+
        '<span class="daan_show" ></span>'+
        '<i class="s_jieguo" style="display:inline;"></i>'+
		'</li>'
	//$("#shuru1").attr("")
    ul.appendChild(li);
		//$('.document').append(li);
	}
}
/*function quanjiao_zhuan_banjiao(this){

}*/
function product_dengshi(){
	
	var inputs = document.getElementsByClassName("shuru");
	var spans = document.getElementsByClassName("daan_show");
	var iclass = document.getElementsByClassName("s_jieguo");
    for (var i = 0; i < inputs.length; i++) {
      //判断这个元素是不是按钮
      if (inputs[i].type == "text") {
		  inputs[i].style="display:none;";
		  spans[i].value=inputs[i].value;//输入答案的赋值
		  spans[i].innerHTML=spans[i].value;//输入答案的显示
		  var res = String(ss[i][1]);
		  var ret = String(inputs[i].value);
		  if(res==ret){//输入正确
			  iclass[i].innerHTML='<h7>正确</h7>'
		  }
		  else{//输入错误
			iclass[i].innerHTML='<h7>答案：'+ss[i][1]+'</h7>'
		  }
        
      }
    }

}
function product(number){
    var tArray = new Array(); //先声明一维
    for(var k=0;k<number;k++){ //一维长度为要生成算式个数
		tArray[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组，这个数组有两个元素，都是字符形式；
		                        //第一个是运算式，第二个是答案（运算式带等号）

    //生成式子    
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
                    tArray[k][0]=String(a[0])+'+'+String(a[1])+'+'+String(a[2])+'=';
                    tArray[k][1]=String(X);
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
