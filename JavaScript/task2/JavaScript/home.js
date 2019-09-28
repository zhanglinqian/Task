


/***************首页*****************/


var  myleft = document.getElementById("left-sidebar");
    myright = document.getElementById("right-main");
   mybutton = document.getElementById("button");
   mysimple = document.getElementById("simple");
  myzhezhao = document.getElementById("zhezhao")
//var sidebar = "off";
    mybutton.onclick = function() {
        //if (sidebar === "off") {
            myleft.style.left = "0";
        myzhezhao.style.display = "block"
        //     myright.style.left = "200px";
        //     sidebar = "on";
        // } else if(sidebar === "on") {
        //     myleft.style.left = "-200px";
        //     myright.style.left = "0";
        //     sidebar = "off";
        // };
};
    myzhezhao.onclick = function() {
        myleft.style.left = "-220px";
        myzhezhao.style.display = "none"
    }
    mysimple.onclick = function() {  //页面跳转
        window.location.href = "../html/player_match.html";
    }
