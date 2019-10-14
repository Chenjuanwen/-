var storage=window.localStorage;//获取当前locastorage中值
function login() {   
    var userid = window.document.getElementById("userid");    
    var pass = window.document.getElementById("password"); 
    var identity = $('input:radio:checked').val;//获取身份信息
    //将身份信息存储到本地
    //！！！！！！！！！身份信息未传给后端
    if(identity=='1')
        storage.setItem("identity",'1');
    else
        storage.setItem("identity",'0');
    
        if (userid.value == "") 
        {         
            alert("请输入用户名");    
        } 
        else if (pass.value  == "") 
        {         
            alert("请输入密码");  
        } 
        else 
        {       
           $.ajax({
            type: "post",
            url: "php/login.php",//指示使用的PHP文件
            data: {id:userid.value,password:pass.value},//提交到login_in.php的数据
            dataType: "json",//回调函数接收数据的数据格式为json
            //成功接收时的处理
            async: false,//同步加载页面
            success: function(student_data){
                //将以json字符串格式返回的数据变成json的对象
                var json='';
                json = eval("("+student_data+")");
                if(json.login==1)
                {
                    if(json.pwd_right==1){
                        alert("登录成功！");
                        storage["id"]=userid.value;
                        storage.setItem("pass",pass);
                        //alert(storage.id);
                        window.open('index.html');
                    }
                    else
                        alert(" 请输入正确密码！");
                }
                else
                {
                    alert("学号不存在！");
                }
            },
            //未成功接收时的处理
            error:function(student_data){
                //提示连接出错
                alert("服务器连接出错！");
            }
          });   
    } 

} 





