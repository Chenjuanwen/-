function login() {    
    var username = window.document.getElementById("username");    
    var pass = window.document.getElementById("password");   
    if(! window.localStorage){
        alert("浏览器不支持localstorage");
        return false;
    }else{
        var storage=window.localStorage;//获取当前locastorage中值
        //主逻辑业务
        /*if((storage.length!=0)&&((storage.getItem("username"))!="admin"))
        {
            alert(storage.getItem("username")); 
        }
        else*/ if (username.value == "") 
        {         
            alert("请输入用户名");    
        } 
        else if (pass.value  == "") 
        {         
            alert("请输入密码");  
        } 
        else 
        {      
            storage["username"]=username.value;
            //写入b字段
            storage.setItem("pass",pass.value);
            var c = storage.getItem("username");
            window.open('main.html');
            //alert(String(c));
            

        $.ajax({
            type: "post",
            url: "login.php",//指示使用的PHP文件
            data: {userid:userid,userpass:userpass},//提交到login_in.php的数据
            dataType: "json",//回调函数接收数据的数据格式为json
            //成功接收时的处理
            success: function(student_data){
                //将以json字符串格式返回的数据变成json的对象
                var json='';
                json = eval("("+student_data+")");
                //json返回6项数据，调用方式及含义如下：
                //jsobj.find //boolean值，标志数据库中是否存在此用户（注：当前返回值为1表示存在此用户并已返回其值，当前返回值为空表示无此用户或者密码错误返回值都为空）
                    //jsobj.name//12位以下字符串，表示姓名
                //jsobj.age//小整型，表示用户年龄
                //jsobj.que_num//无符号整型，用户总做题数
                //jsobj.right_num//无符号整型，用户正确题目数
                //jsobj.timer//无符号整型，用户登录时间  
                //返回数据使用示例 ******将find文本的值修改为返回的值*******
                if(json.find)
                {
                    window.open('main.html');
                }
                else
                {
                    alert("请输入正确的用户名和密码！");
                }
            },
            //未成功接收时的处理
            error:function(student_data){
                //提示连接出错
                alert("请输入正确的用户名和密码服务器连接出错！");
            }
          });   
    } 

    } 
    
}





