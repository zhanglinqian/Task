



/**************结束页****************/
var killer = [];              //  玩家 身份证
// days: '',       天数    
// id: [0 ~ N],    ID 编号
// name: '平民',   身份     平民 或 杀手
// state: '' ,    生死状态  用  ‘ 0 ’ || ‘ 1 ’ 代替  0为死，1为生 
// HowToDie:''    出局方式  被杀死 || 被投死
//  { days: '', id: i, name: '平民', state: '1' ,HowToDie:''}
var INDEX = [];               //  结果 索引 数组
var days = 1;                 //  日期 天数
var killerNumber = 0;         //  杀手 人数
var civiliansNumber = 0;      //  平民 人数
var total = killerNumber + civiliansNumber;
var win = sessionStorage.getItem("Win");
var mydays = sessionStorage.getItem("days");                     //读取 日期  
myDays = JSON.parse(mydays)
if (myDays > days) { days = myDays };
        var myKILLER = sessionStorage.getItem("killer");         //读取 玩家状态
        mykiller = JSON.parse(myKILLER)
if (mykiller != null) {                                        //判断 玩家状态 数组 是否为 空  
    for (var i = 0; i < mykiller.length; i++) {
        killer[i] = mykiller[i]
    };
};
var MYINDEX = sessionStorage.getItem("INDEX");                   //读取 结果索引
    myINDEX = JSON.parse(MYINDEX)
if (myINDEX != null) {                                         //判断 结果索引 数组 是否为 空  
    for (var i = 0; i < myINDEX.length; i++) {
        INDEX.push(myINDEX[i])
    };
};
var kNumber = sessionStorage.getItem("killerNumber");          
var cNumber = sessionStorage.getItem("civiliansNumber");      
if ( kNumber !== null && cNumber !== null){
killerNumber =  Number (kNumber)          // 杀手 人数
civiliansNumber = Number(cNumber)        //  平民 人数
    };
var total = killerNumber + civiliansNumber;
$(function(){
    $("#win").text(win);
    $("#total").text(total);
    $("#killerNumber").text(killerNumber);
    $("#civiliansNumber").text(civiliansNumber);
})
$(function(){
    var Digital = ['零','一','二','三','四','五','六','七','八','九','十'];
    var numBer = -1;
    var numBer01 = -1;
    for(i = 0; i < days -1; i++ ){
        var Grade = undefined;
        var Grade01 = undefined;
        var Identity = undefined;
        if ( INDEX[numBer01 + 1] != undefined ) {
            var G = Number(killer[INDEX[numBer + 1]].id.match(/\d+/g));   
            Grade = G+1;
        };
        if ( INDEX[numBer01 + 2] != undefined ){
            var G01 = Number(killer[INDEX[numBer + 2]].id.match(/\d+/g));   
            Grade01 = G01+1;
            Identity =  killer[INDEX[numBer + 2]].name;
            numBer = numBer+2;
        };
        numBer01 = numBer01+2;
        var listBox =  '<div class="content-bottom-itmes box-rgba">'+
                        '<div>'+
                            '<p>第'+Digital[i+1] +'天</p>'+
                            '<p>黑夜：'+ Grade+'号被杀死了，真实身份是平民。</p>'+
                            '<p>白天：'+ Grade01 +'号被投死了，真实身份是'+  Identity + '。</p>'+
                        '</div>'+
                    '</div>';
        $('.content-bottom').append(listBox);
    }
})
$('#but').click(function(){
    sessionStorage.clear()
    window.location.href = "../html/player_match.html"  // 页面跳转 法官台本 继续游戏
})
$('#fallback').click(function(){
    sessionStorage.clear()
    window.location.href = "../html/home.html"  // 页面跳转 法官台本 继续游戏
})

