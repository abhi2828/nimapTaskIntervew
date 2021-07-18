var register_users =[
    {email: "abc25@gmail.com", password: "@Abhay25828", conf_pass: "@Abhay25828"},
    {email: "abhay@gmail.com", password: "@Abhay28", conf_pass: "@Abhay28"},
    {email: "abc@gmail.com", password: "@Abhay25828", conf_pass: "@Abhay25828"}
    
    ]

    var login_user_details = {email: "abhay@gmail.com", password: "@Abhay28", conf_pass: "@Abhay28"}
    var change_login_user = {email: "xyz@gmail.com", password: "@xyz", conf_pass: "@xyz"}

    
   

const new_change_pass = register_users.findIndex(item => item.email === login_user_details.email);
console.log(new_change_pass);
register_users[new_change_pass] = change_login_user;
console.log(register_users);