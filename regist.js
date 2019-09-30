function regist_result(){
    var setname = window.document.getElementById("setname");    
    var pass1 = window.document.getElementById("password1");   
    var pass2 = window.document.getElementById("password2");   
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
        alert("注册成功！");     
        window.open('main.html');
    }
}
