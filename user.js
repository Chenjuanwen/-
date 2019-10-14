//用以获得数据库传回信息
var alltime;
var percent;
var allnum;
var storage=window.localStorage;//获取当前locastorage中值


function show_information(){//用于与数据库沟通显示用户数据
var userid = storage.id;
// var show_mes = new Array(); //存放从后台取得的数据，
//     for(var k=0;k<30;k++){ //一维长度为一共的题目总数
// 		show_mes[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组，这个数组有两个元素，都是字符形式；
// 								//第一个是运算式，第二个是答案（运算式带等号）
//     }
//用于将从数据库中获取的数据输出到表格中,需要完善！！！！！！！！！！
// for(var i=0;i<30;i++){
//     for(var j=1;j<=5;j++){
//         var show_td = document.getElementById(show_mes[i][0]+String(j));
//         show_td.innerHTML = show_mes[i][j];
//     }
// }
  
//if(localStorage.getItem("id")==null)
alert(userid);

    
    $.ajax({
        type: "post",
        url: "php/stu_info.php",//指示使用的PHP文件
        data: {id:userid},
        dataType: "json",//回调函数接收数据的数据格式为json
        //成功接收时的处理
        success: function(student_data){
            //将以json字符串格式返回的数据变成json的对象
            var json='';
            json = eval("("+student_data+")"); 
            alert(json.name);
            alltime = json.timer;
            percent = json.percent;
            allnum = json.que_num;
            var spanname = document.getElementById('p_name');
            //alert(spanname.value);
            spanname.innerHTML = json.name;//将班级等信息赋值
            var span_number = document.getElementById('span_number');
            var span_class = document.getElementById("span_class");
            span_class.innerHTML = json.grade;
            span_number.innerHTML = userid;
        },
        //未成功接收时的处理
        error:function(student_data){
            //提示连接出错
            alert("服务器连接出错！");
        }
      });

}

function show_allnum(){
    var show = document.getElementById("show_span1");//用于获取显示位置
    show.innerHTML = allnum;
    
}
function show_alltime(){
    var show = document.getElementById("show_span2");//用于获取显示位置
    show.innerHTML = alltime;
    
}
function show_percent(){
    var show = document.getElementById("show_span3");//用于获取显示位置
    show.innerHTML = percent;
    
}
