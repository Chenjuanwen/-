
function login() {    
    var username = window.document.getElementById("username");    
    var pass = window.document.getElementById("password");    
    if (username.value == "") 
    {         
        alert("请输入用户名");  
         
    } 
    else if (pass.value  == "") 
    {         
        alert("请输入密码");  
    } 
    else if(username.value == "admin" && pass.value == "123456")
    {         
        window.open('main.html'); 
    } 
    else 
    {         
        alert("请输入正确的用户名和密码！");     
    }
}

