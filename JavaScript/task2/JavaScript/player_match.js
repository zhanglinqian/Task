

/***************设置人数*******************/
var     myfallback = document.getElementById("fallback");         // 获取返回链接
       myterminate = document.getElementById("terminate");        //关闭按钮    //没定义
           mysubmi = document.getElementById("submi");            // 提交按
              text = document.getElementById("input_text");       // 输入人数
             range = document.getElementById("input_range");      // 滑动条
             myadd = document.getElementById("add");              // 加
        myreducing = document.getElementById("reducing");         // 减
          mykiller = document.getElementById("killer");           // 杀手
       mycivilians = document.getElementById("civilians");        // 平民
window.onload = function() {
           text.addEventListener("change",myfun1);    // 改变输入框内容  自动判断
          range.addEventListener("change",myfun2);    // 滑动条
          myadd.addEventListener("click",myfun3);     // 加
     myreducing.addEventListener("click",myfun4);     // 减
        mysubmi.addEventListener("click",mykillers);  //本地储存
        mysubmi.addEventListener("click",stores);     //本地储存
    text.addEventListener("change", mykillers);
    range.addEventListener("change", mykillers);
    myadd.addEventListener("click",mykillers);
myreducing.addEventListener("click",mykillers);
}
myfallback.onclick = function() {window.location.href = "../html/home.html";}  // 返回主页按钮                             
function stores() {         //发牌按钮
    var sss = JSON.stringify(mykillers());             //转换为字符串
        sessionStorage.setItem("myreordering",sss)       //存入身份数组
    var ccc = JSON.stringify(bbb);             //转换为字符串
        sessionStorage.setItem("ing",ccc)       //存入身份数组
    window.location.href = "../html/licensing.html";   //发牌
}
function myfun1() {
    if (isNaN( text ) && text.value >= 4 && text.value <= 18){
        range.value = text.value;      // 改变输入框内容  自动判断
    } else {
        alert("请输入正确玩家人数");
    }
}
function myfun2() {
    text.value = range.value;          // 滑动条
} 
function myfun3() {
    range.value++;
    if( text.value >= 18 ){
        alert("请输入正确玩家人数");
    } else {
        text.value = range.value;     // 加
    };
}
function myfun4() {
    range.value--;
    if( text.value <= 4 ){
        alert("请输入正确玩家人数");
    } else {
        text.value = range.value;      // 减
    }
}
var nnn = [];
var bbb = []
function mykillers(){
     nnn = [];
     bbb = []
    var killer = Math.round((text.value) * 23 / 100);          //获取杀手人数
        civilians = text.value - killer;                       //获取平民人数
        mykiller.innerHTML = killer;                           //输出杀手数量
        mycivilians.innerHTML = civilians;                     //输出平民数量
    var mynumber = [];                                     //顺序排列身份数组
    var reordering = [];                                   //重新排序身份数组
    // days: '',      记录天数
    // id: [0 ~ N],    ID编号
    // name: '平民',   身份     平民 或 杀手
    // state: '' ,    生死状态  用  ‘ 0 ’ || ‘ 1 ’ 代替  0为死，1为生
    // HowToDie:''    出局方式  被杀死 || 被投死
    for (var i = 0; i < range.value; i++) {
        mynumber.push({ days: '', id:'', name: '平民', state: '1' ,HowToDie:''});      //生成平民身份
        nnn.push(0);
    };
    for (var a = 0; a < killer; a++) {   //替换前 “ N ” 个平民为杀手
        mynumber[a] = ({ days: '', id:'', name: '杀手', state: '1', HowToDie:''});       //生成杀手身份
        nnn[a] = 1;
    }
    for (var b = 0; b < text.value; b++) {
        var aaa = Math.floor(Math.random() * (mynumber.length - b));       //重新排序身份数组
        reordering.push(mynumber[aaa]);
        mynumber[aaa] = mynumber[mynumber.length - b - 1];
        reordering[b].id = 'box-'+[b];    //顺序分配 ID 
        bbb.push(nnn[aaa]);
        nnn[aaa] = nnn[nnn.length - b - 1]
    }
    return reordering    //把 重新排序身份数组 返回给函数 mykillers()
}







