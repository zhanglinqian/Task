

// var myacc = document.getElementById('account');
// var mypass = document.getElementById('password');
// var login = document.getElementById('login')
// var but = document.getElementById('but');
// var mytext = document.getElementById('text')
// var text = null;
// but.onclick = function(event) {
//     event.preventDefault();
//     var data = new FormData(login);
//     var myajax = new XMLHttpRequest();
//         myajax.onreadystatechange = function(){
//             if(myajax.readyState === 4 && myajax.status === 200){
//                 returnData = JSON.parse(myajax.responseText);
//                 console.log(returnData);
//                 if (returnData.code === 0 ){
//                     window.location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
//                 } else {
//                     //clearInterval(text);
//                     mytext.innerHTML = returnData.message
//                 }
//             }
//         }
//     console.log();
//     myajax.open('POST', '/carrots-admin-ajax/a/login', true);
//     myajax.send(data);
// }


$("#but").click( function() { 
    var login = document.getElementById('login')
    var formdata = new FormData(login);
    var name = formdata.get('name');
    var pwd = formdata.get('pwd');
    if ( name.length === 0 ) {
        $('#text').html('请输入账户');
    } else if ( pwd.length === 0  ) {
        $('#text').html('请输入密码');
    } else if (name.length !== 0 && pwd.length !== 0  ) {
        $.ajax({
        type: 'POST',
        url: '/carrots-admin-ajax/a/login',
        data: formdata,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if (data.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
            } else {
                $('#text').html(data.message);
                timer = setTimeout(function() {
                    $('#text').html('');
                }, 3000)
            }
        }
    })
    }
    return false;//阻止表单默认提交行为
})



