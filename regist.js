var storage=window.localStorage;//获取当前locastorage中值
function regist_result(){
    var setname = window.document.getElementById("setname"); 
    var idnumber =  window.document.getElementById("idnumber"); 
    var pass1 = window.document.getElementById("password1");   
    var pass2 = window.document.getElementById("password2"); 
    var identity = $('input:radio:checked').val;//获取身份信息
    //将身份信息存储到本地
    //！！！！！！！！！身份信息未传给后端
    if(identity=='1')
        storage.setItem("identity",'1');
    else
        storage.setItem("identity",'0');
    //alert(idnumber);  
    if (setname.value == "") 
    {         
        alert("请设置用户名");  
         
    } 
    else if (pass1.value  == "") 
    {         
        alert("请输入密码");  
    } 
    else if (pass2.value  == "") 
    {         
        alert("请确认密码");  
    } 
    else if (pass2.value  != pass1.value) 
    {         
        alert("请确认两次输入密码相同");  
    }
    else if(setname.value == "admin")
    {         
        alert("该用户名已被注册");  
    } 
    else 
    {      
        $.ajax({
            type: "post",
            url: "php/sign.php",//指示使用的PHP文件
            data: {id:idnumber.value,password:pass1.value,name:setname.value},//提交到login_in.php的数据
            dataType: "json",//回调函数接收数据的数据格式为json
            async: false,//同步加载页面
            //成功接收时的处理
            success: function(student_data){
                //将以json字符串格式返回的数据变成json的对象
                var json='';
                json = eval("("+student_data+")");
                if(json.sign==1)
                {
                    if(json.exist==0)
                    {
                        alert("注册成功！");
                        storage["id"]=idnumber.value;//写入id到localStorage
                        storage.setItem("password",pass1);//写入password到localStorage
                        //var c=storage.id;
                        //alert(localStorage.id);
                        window.open('index.html');
                    }
                      
                }
                else
                {
                    if(json.exist==1)
                        alert("该学号已被注册！");
                    else
                        alert("注册失败！");
                }
            },//这个逗号没问题吗？
            //未成功接收时的处理
            error:function(student_data){
                //提示连接出错
                alert("服务器连接出错！");
            }
          });
    }
}
