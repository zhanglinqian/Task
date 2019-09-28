function rec() {//遍历所有盒子重置颜色
    var x = document.getElementsByClassName("content")[0];
    var ab = x.children;
    for (var i = 0; i < ab.length; i++) {
        ab[i].style.background = "darkorange";
    }
};
function change() {
    rec();
    var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];//原始数组
    var result = [];   //随机生成长度为三的新数组
    for (var i = 0; i < 3; i++ ){
        var  ran =  Math.floor(Math.random() * (arr.length - i));
        result.push(arr[ran]);
        arr[ran] = arr[arr.length - i - 1];  
    };
    var order = []   //生成三个随机ID
    order[0] = ("div-" + (result[0]));
    order[1] = ("div-" + (result[1]));
    order[2] = ("div-" + (result[2]));
    var bgcNew = [];//储存随机生成的颜
        bgcNew[0];
        bgcNew[1];
        bgcNew[2];
    for ( var i = 0; i < 3; i++){
        var bgc = '#'+('000000'+(Math.random()*0xffffff << 0).toString(16)).slice(-6);
        bgcNew.push(bgc);
    };
    /*for ( var i = 0; i < 3; i++){
        var bgc = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        bgcNew.push(bgc);
    };*/
    if (bgcNew[0] != bgcNew[1] && bgcNew[0] != bgcNew[2] && bgcNew[1] != bgcNew[2]) {
document.getElementById(order[0]).style.backgroundColor=bgcNew[0];
document.getElementById(order[1]).style.backgroundColor=bgcNew[1];
document.getElementById(order[2]).style.backgroundColor=bgcNew[2];
    }
console.log(order);
console.log(bgcNew);
}
//开关与防点击   
var begin;
var control = "off"
function start() {
    change();
    if (control === "off") {  //防点击判断
        clearInterval(begin);
        begin = setInterval("change()", 1000);
    }
    control = "on"
};
function stop() {
    clearInterval(begin);
    //rec();   //重置颜色
    control = "off";
}
