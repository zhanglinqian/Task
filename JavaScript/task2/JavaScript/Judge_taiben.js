

/********************法官台本************************/
$('#terminate').click(function () {});        //关闭按钮    //没定义
$('#fallback').click(function () {
    window.location.href ="../html/voting_page.html"   // 返回法官台本
});

var killer = [];              //  玩家 身份证
// days: '',       天数    
// id: [0 ~ N],    ID 编号
// name: '平民',   身份     平民 或 杀手
// state: '' ,    生死状态  用  ‘ 0 ’ || ‘ 1 ’ 代替  0为死，1为生 
// HowToDie:''    出局方式  被杀死 || 被投死
//  { days: '', id: i, name: '平民', state: '1' ,HowToDie:''}
var INDEX = [];               //  结果 索引 数组
var days = 1 ;                //  日期 天数
var mystyle = [];             //  列表显示样式
// mystyle = [{ id: [ 0 ~ N ], one: '0',  state: '0' }];  //  列表显示样式
//
// { id: [ 0 ~ N ], one: '0',  state: '0' };   初始状态
// id  :  [ 0 ~ N ];  ID编号
// one :  [0 || 1 ];  记录是杀人阶段盒子 的 高亮  变色   
// state: [0 || 4 ];  状态  从 0 ~ 4 五种状态    
//    0  执行杀手杀人  并高亮提示
//    1  亡灵发言     高亮提示
//    2  玩家发言     高亮提示
//    3  投票阶段     并高亮提示  判断 一轮游戏是否结束  结束全部变色  且 不能点击。
//    4  禁止点击     没想好
var mydays = sessionStorage.getItem( "days" );                //读取 日期  
    myDays = JSON.parse( mydays )
    if ( myDays > days ){ days = myDays };
var myKILLER = sessionStorage.getItem( "killer" );            //读取 玩家状态
    mykiller = JSON.parse( myKILLER )                        
    if ( mykiller != null ){                                  //判断 玩家状态 数组 是否为 空  
        for( var i = 0; i < mykiller.length; i++ ){
        killer[i] = mykiller[i] 
        }; 
    };
var MYINDEX = sessionStorage.getItem( "INDEX" );              //读取 结果索引
    myINDEX = JSON.parse( MYINDEX )                        
    if ( myINDEX != null ){                                   //判断 结果索引 数组 是否为 空  
        for( var i = 0; i < myINDEX.length; i++ ){
            INDEX.push( myINDEX[i] ) 
        }; 
    };
var STYLE = sessionStorage.getItem( "style" );                //读取 列表样式
    mySTYLE = JSON.parse( STYLE );
    if ( mySTYLE != null  ){
        for ( var i = 0; i < mySTYLE.length; i++ ) {
            mystyle.push(mySTYLE[i])
        }
    } else if (mySTYLE == null){
        mystyle.push({ id:'初始版', one:'0',  state:'0' });
    }
function stores() {    //  储存  数据  
    var aaa = JSON.stringify(mystyle);
    sessionStorage.setItem("style", aaa)                   //存入  列表样式
}
$(function(){     //   添加盒子
    var Digital = ['零','一','二','三','四','五','六','七','八','九','十']
        var numBer = -1;
        var numBer01 = -1;
    for ( var i = 0; i < days ; i ++) {
        var Grade = undefined;
        var Grade01 = undefined;
        var Identity = undefined;
        var ccc = '#options-' + [i];
        var fff = '#Grade-' + [numBer01 + 1];
        var ggg = '#Grade-' + [numBer01 + 2];
        var hhh = '#day-' + [i]
        var jjj = 'Grade-' + [numBer01 + 1];
        var kkk = 'Grade-' + [numBer01 + 2];
        if ( INDEX[numBer01 + 1] != undefined ) {
            var G = Number(killer[INDEX[numBer + 1]].id.match(/\d+/g));   
            Grade = G+1;
        };
        if ( INDEX[numBer01 + 2] != undefined ){
            var G01 = Number(killer[INDEX[numBer + 2]].id.match(/\d+/g));   
            Grade01 = G01+1;
            Identity =  killer[INDEX[numBer + 2]].name;
            numBer = numBer+2
        };
    var listBox = '<div class="days">'+
                '<div class="days-top box-rgba">'+
                    '<p>第'+ Digital[i+1] +'天</p>'+
                '</div>'+
                '<div class="days-bottom box-rgba">' +
                    '<div class="days-bottom-left">'+
                        '<div></div>'+
                        '<div><img src="../image/月.png"></div>'+
                        '<div id="day-'+ [i] +'"><img src="../image/日.png"></div>'+
                    '</div>'+
                    '<div class="days-bottom-right"  id="options-' + [i] + '">'+
                        //
                        '<div>'+     
                            '<p class="days-triangle"></p>'+
                            '<p class="Kill">杀手杀人</p>'+
                        '</div>'+
              /* 1 */   '<div id= "'+ jjj +'" >'+ Grade +'号被杀手杀死，真实身份是平民</div>'+ 
                        //
                        '<div>'+
                            '<p class="days-triangle"></p>'+
                            '<p class="words">亡灵发表遗言</p>'+
                        '</div>'+
                        //
                        '<div>'+
                            '<p class="days-triangle"></p>'+
                            '<p class="speak">玩家依次发言</p>'+
                        '</div>'+
                        //
                        '<div>'+
                            '<p class="days-triangle"></p>'+
                            '<p class="Vote">全民投票</p>'+
                        '</div>'+
              /* 2 */   '<div id="'+ kkk +'">'+ Grade01 +'号被投票出局，真实身份是'+ Identity +'</div>'+
                    '</div>'+
                '</div>'
            '</div>'+
    $('.box').append(listBox);
    if ( mystyle[i].one == '1') {
        var color = $( ccc ).find('div').first('div');
        color.find('p:odd').css("background-color","#147086");  // 循环 变色。
        color.find('p:even').css("border-right-color","#147086")
    };
    if ( mystyle[i].state == '4') {
        var colo = $( ccc ).find('div');
        colo.find('p:odd').css("background-color","#147086");  //  循环 变色。
        colo.find('p:even').css("border-right-color","#147086")
    };
    if ( INDEX[numBer01 + 1] != undefined ) {
        $(fff).css('display','block')
        $(hhh).css('top','135px')
    };
    if ( INDEX[numBer01 + 2] != undefined ){
        $(ggg).css('display','block')
    };
    if ( i+1 == days ){
        $(ccc).parent().show();
    } else {
        $(ccc).parent().hide();
    }
    numBer01 = numBer01+2;
    }
});
//点击隐藏  其他元素
$(function () {                           
    $(".days-top > p").click(function () {
        $(this).parent().next().show().parent().siblings("div").find(".days-bottom").hide();
    });
});
// 点击顺序 规则
$(function(){
    $('.Kill').click(function () {    //  杀手杀人
            var id = $(event.target).parent().parent().attr('id');   //读取 ID 序号
            var t = id.match(/\d+/g);   //检索玩家ID返回其中的的  数字
        if (mystyle[t].state === '0') { 
            mystyle[t].id = t[0];
            mystyle[t].one = "1";
            mystyle[t].state = '1'
            $(this).css("background-color", "#147086");                             // 点击改变当前元素
            $(this).siblings().css("border-right-color", "#147086")
            stores()   //存入  玩家状态
            sessionStorage.setItem("state", 'Kill')
            window.location.href = "../html/voting_page_main.html"
        } else {
            alert('请按顺序操作')
        }
    });
    $('.words').click(function () {
        var id = $(event.target).parent().parent().attr('id');   //读取 ID 序号
        var t = id.match(/\d+/g);   //检索玩家ID返回其中的的  数字
        if (mystyle[t].state === '1') {
            alert('亡灵发表遗言');
            mystyle[t].state = '2'
            $(this).css("background-color", "#147086");                             // 点击改变当前元素
            $(this).siblings().css("border-right-color", "#147086")
        } else {
            alert('请按顺序操作')
        }
    });
    $('.speak').click(function () {
        var id = $(event.target).parent().parent().attr('id');   //读取 ID 序号
        var t = id.match(/\d+/g);   //检索玩家ID返回其中的的  数字
        if (mystyle[t].state === '2') {
            alert('玩家依次发言');
            mystyle[t].state = '3'
            $(this).css("background-color", "#147086");                             // 点击改变当前元素
            $(this).siblings().css("border-right-color", "#147086")
        } else {
            alert('请按顺序操作')
        }
    });
    $('.Vote').click(function () {         //  投票
        var id = $(event.target).parent().parent().attr('id');   //读取 ID 序号
        var t = id.match(/\d+/g);   //检索玩家ID返回其中的的  数字
        if (mystyle[t].state === '3') {
            mystyle[t].state = "4";
            mystyle.push({ id: '', one: '0', state: '0' });
            $(this).css("background-color", "#147086");                             // 点击改变当前元素
            $(this).siblings().css("border-right-color", "#147086")
            stores()     //存入  玩家状态            
            sessionStorage.setItem("state", 'Vote')
            window.location.href = "../html/voting_page_main.html"
        } else {
            alert('请按顺序操作')
        }
    });
})



















