function product_suanshi(){

    var obj=window.document.getElementById("select_number");
    var number=1;
    //var number=obj.options[obj.selectedIndex].value;
    var suanshi=['1+1=','2'];
    //var suanshi=product(number);
    var ul=document.getElementById("neirong_ul");
    var li=document.createElement("li");
    li.innerHTML =
        '<li style="color:#000;">'+suanshi[0]+
		'<input type="text" size="3" zqda="'+suanshi[1]+'" onkeyup="quanjiao_zhuan_banjiao(this);" />'+
        '<span class="daan_show"></span>'+
        '<i class="s_jieguo"></i>'+
		'</li>'
    ul.appendChild(li);
        //$('.document').append(li);

}
function product(number){
    var tArray = new Array(); //先声明一维
    for(var k=0;k<number;k++){ //一维长度为要生成算式个数
        tArray[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；

    //生成式子    
    var  x;//存放结果
    //生成数值和运算符号
	var a=[Math.ceil(Math.random()*10),Math.ceil(Math.random()*10),Math.ceil(Math.random()*10)];//生成随机0~100以内数
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
