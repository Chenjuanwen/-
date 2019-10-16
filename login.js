var storage=window.localStorage;//获取当前locastorage中值
var identity;//用于存储身份
//显示登录的输入
function show_login(){
    var show=window.document.getElementById("input_div");
    show.innerHTML='<form>'  +
    // "<br>"
    // +
    "<p>学生<input name='identity' type='radio' value='1' checked='checked'>教师 <input name='identity' type='radio' value='0'></p>"
    +
    "<p>学&emsp;号&nbsp;&nbsp;<input placeholder='请输入学号' type='text' id='userid' class='text_field' /></p>"
    +  
    "<p>密&emsp;码&nbsp;&nbsp;<input placeholder='请输入密码' type='password' id='password' class='text_field'/></p>"
    +  
    "<div id='login_control'>"        
    +
        "<button class='handin' style='cursor:pointer' onclick='login()' >提交</button>"
    +    
    "</div> "  
    +
    "</form>"
}

//显示登录的输入
function show_regist(){
    var show=window.document.getElementById("input_div");
    show.innerHTML=
    "<form id='input_form'>"  
    +
            "<p>学生<input name='identity' type='radio' value='1' checked='checked'>教师 <input name='identity' type='radio' value='0'></p>"
    +
            "<p>&nbsp;学&nbsp;&nbsp;号&nbsp;&nbsp;<input placeholder='请输入学号' type='text' id='idnumber' class='text_field'/></p>"
    +        
            "<p>用&nbsp;户&nbsp;名&nbsp;&nbsp;<input placeholder='请输入用户名' type='text' id='setname' class='text_field'/></p> "
    +
            "<p>设置密码&nbsp;<input placeholder='请输入密码' type='password' id='password1' class='text_field'/></p>" 
    +
            "<p>确认密码&nbsp;<input placeholder='请再次输入密码' type='password' id='password2' class='text_field'/></p> "
    +

            "<button class='handin' style='cursor:pointer' onclick='regist_result()'>提交</button>"
    +
            "</form>"
}

//登录函数
function login() {   
    var userid = window.document.getElementById("userid");    
    var pass = window.document.getElementById("password"); 
    identity = $('input:radio[name="identity"]:checked').val();//获取身份信息,学生为1，老师为0
    //将身份信息存储到本地
    //身份信息已传给后端
    
        storage.setItem("identity",identity);


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
            data: {id:userid.value,password:pass.value,identity:identity},//提交到login_in.php的数据
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

//注册函数
function regist_result(){
    var setname = window.document.getElementById("setname"); 
    var idnumber =  window.document.getElementById("idnumber"); 
    var pass1 = window.document.getElementById("password1");   
    var pass2 = window.document.getElementById("password2"); 
    //var obj=document.getElementsByTagName("input");
    identity = $('input:radio[name="identity"]:checked').val();//获取身份信息
    //将身份信息存储到本地
    //身份信息已传给后端
    // if(identity[0].checked==true)
        storage.setItem("identity",identity);
    // else
    //     storage.setItem("identity",'0');

    //alert(obj[0].value);
    // alert(indentity);

    alert("!!!"); 
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
            data: {id:idnumber.value,password:pass1.value,name:setname.value,identity:identity},//提交到login_in.php的数据
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
