
var lifeChart = echarts.init(document.getElementById("lifeChart"),"macarons");

var lifeOption;

let r = function(max) {
    let m = max || 10;
    return Math.floor(Math.random() * m);
};
let roofs = [
    /*三角形*/
    [1, 2, 3, 4, 5, 4, 3, 2, 1],
    /*凸*/
    [2, 2, 2, 4, 4, 4, 2, 2, 2],
    [2, 2, 2, 4, 20, 4, 2, 2, 2],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [6, 6, 6, 6, 6, 5, 4, 3, 2, 1],
    [0.3, 1, 1.6, 2.5, 3, 3.5, 3.6, 3.7, 3.7, 3.6, 3.5, 3, 2.5, 1.6, 1, 0.3],
    [6, 6, 6, 6, 6, 2, 2, 2],
    [6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5],
    [1, 1, 1, 1, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    [1, 1, 1, 1, 1, 1, 1],
    [4, 4, 4, 2, 2, 2, 4, 4, 4]

];
let build = function(height) {
    let arr = [100];
    let l =36;
    let h = height || 20;
    let addFloor = function(arr, l) {
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            a.push(arr[i] + l);
        }
        return a;
    };
    for (let i = 0; i < l; i++) {
        let newRoof = addFloor(roofs[r(11)], r(h));
        if (Math.random() < .5) {
            newRoof.reverse()
        }
        arr = arr.concat(newRoof);
        if (Math.random() < .5) {
            arr.push(0)
        }
    }
    return arr;
};
let building = build();
let building2 = (function() {
    let b = build(40);
    for(let i = 0; i < b.length; i++) {
        if(b[i] > building[i]) {
            b[i] = b[i] - building[i];
        }
    }
    return b;
})()


var lifeDims = {
    y:0,
    x:1,
    img:2,
    name:3,
    level:4,
    tips:5
}
var iconSize = 36;

function renderIndex(param, api) {
    var x = api.value(lifeDims.x)*150+70;
    var y = api.value(lifeDims.y)*120+45;
    // console.log(api.value(lifeDims.tips));
    return {
        type: 'group',
        children: [
          {
            type: 'image',
            style: {
                image: api.value(lifeDims.img),
                x: -iconSize / 2,
                y: -iconSize / 2,
                width: iconSize,
                height: iconSize
            },
            position: [x,y]
        }, {
            type: 'text',
            style: {
                text: api.value(lifeDims.name),
                textFont: api.font({fontSize: 12}),
                fill:'#FFFAFA',
                textAlign: 'center',
                textVerticalAlign: 'bottom'
            },
            position: [x, 45+y]
        }, {
            type: 'text',
            style: {
                text: api.value(lifeDims.level),
                textFont: api.font({fontSize: 18}),
                fill:'#FFF',
                textAlign: 'center',
                textVerticalAlign: 'bottom'
            },
            position: [x,70+y]
        }]
    };
}


lifeOption = {
    title: {
        text: '',
        top: 10,
        left: 'center',
        textStyle: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        }
    },
    stack: true,
    grid: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
    },
    xAxis: {
        data: [],
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [

        {
        type: 'bar',
        data: building,
        itemStyle: {
            normal: {
                color: 'rgb(38, 41, 57)'
            }
        },
        animationDelay: function(idx) {
            return idx * 10;
        }
    }, {
        type: 'bar',
        data: building2,
        itemStyle: {
            normal: {
                color: 'rgb(28, 31, 47)'
            }
        },
        animationDelay: function(idx) {
            return idx * 10 + 300;
        }
    }, {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        zlevel: 2,
        symbolSize: 2,
        effect: {
            show: true,
            period: 1,
            trailLength: 0.01,
            symbolSize: 3,
            symbol: 'pin',
            loop: true
        },
        lineStyle: {
            normal: {
                color: '#BF3EFF',
                opacity: 0.005,
                //curveness: -0.05,
                width: 0.01,
                //opacity: 0.6,
                curveness: 0.1
            }
        },
        data: [{
            coords: [ // 竖直向上
                [2.375*40, 166*0.4242],
                [2.375*40, 210*0.4242]
            ]
        }, { // 水平向右
            coords: [
                [2.375*41, 165*0.4242],
                [2.375*65, 165*0.4242]

            ]
        }, { // 水平向左
            coords: [
                [2.375*39, 165*0.4242],
                [2.375*15, 165*0.4242]
            ]
        }, { // 垂直向下
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*40, 115*0.4242]
            ]
        }, { //第一象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*55, 192*0.4242]
            ]
        }, { //第一象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*56, 175*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { //第一象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*46, 197*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { //第一象限
            coords: [
                [2.375*41, 190*0.4242],
                [2.375*47, 215*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第一象限
            coords: [
                [2.375*48, 190*0.4242],
                [2.375*57, 205*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第一象限
            coords: [
                [2.375*52, 180*0.4242],
                [2.375*62, 185*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第一象限
            coords: [
                [2.375*55, 170*0.4242],
                [2.375*68, 171*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第二象限
            coords: [
                [2.375*39, 166*0.4242],
                [2.375*24, 190*0.4242]
            ]
        }, { //第二象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*24, 175*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { //第二象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*31, 195*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { //第二象限
            coords: [
                [2.375*25, 168*0.4242],
                [2.375*13, 176*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第二象限
            coords: [
                [2.375*29, 175*0.4242],
                [2.375*18, 195*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第二象限
            coords: [
                [2.375*33, 179*0.4242],
                [2.375*24, 210*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第二象限
            coords: [
                [2.375*36, 185*0.4242],
                [2.375*35, 210*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第三象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*26, 137*0.4242]
            ]
        }, { //第三象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*34, 135*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { //第三象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*25, 153*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { //第三象限
            coords: [
                [2.375*39, 144*0.4242],
                [2.375*36, 120*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第三象限
            coords: [
                [2.375*34, 144*0.4242],
                [2.375*22, 123*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第三象限
            coords: [
                [2.375*30, 151*0.4242],
                [2.375*21, 143*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第三象限
            coords: [
                [2.375*30, 159*0.4242],
                [2.375*18, 157*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { // 第四象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*55, 135*0.4242]
            ]
        }, { // 第四象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*55, 152*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { // 第四象限
            coords: [
                [2.375*40, 164*0.4242],
                [2.375*46, 135*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            }
        }, { //第四象限
            coords: [
                [2.375*52, 160*0.4242],
                [2.375*65, 153*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第四象限
            coords: [
                [2.375*52, 150*0.4242],
                [2.375*62, 133*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第四象限
            coords: [
                [2.375*47, 144*0.4242],
                [2.375*53, 123*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, { //第四象限
            coords: [
                [2.375*43, 134*0.4242],
                [2.375*45, 113*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#00FF33'
                }
            }
        }, ],
        animationDelay: 1100
    }, {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        zlevel: -2,
        effect: {
            show: true,
            period: 1,
            trailLength: 0.01,
            symbolSize: 6,
            symbol: 'circle',
            loop: true
        },
        lineStyle: {
            normal: {
                color: '#ccc',
                opacity: 0,
                curveness: 0
            }
        },
        data: [{
            coords: [
                [95, 20],
                [95, 70]
            ]
        }],
        animationDelay: 1100
    }, {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        zlevel: -2,
        effect: {
            show: true,
            period: 1,
            trailLength: 0.01,
            symbolSize: 6,
            symbol: 'circle',
            loop: true
        },
        lineStyle: {
            normal: {
                color: '#ccc',
                opacity: 0,
                curveness: 0
            }
        },
        data: [{
            coords: [
                [285, 20],
                [285, 70]
            ]
        }],
        animationDelay: 1100
    }, {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        zlevel: 2,
        symbolSize: 3,
        effect: {
            show: true,
            period: 1,
            trailLength: 0.01,
            symbolSize: 5,
            symbol: 'pin',
            loop: true
        },
        lineStyle: {
            normal: {
                color: '#ccc',
                opacity: 0.02,
                //curveness: -0.05,
                width: 0.01,
                //opacity: 0.6,
                curveness: 0.1
            }
        },
        data: [{
            coords: [ // 竖直向上
                [2.59*110, 166*0.4242],
                [2.59*110, 210*0.4242]
            ]
        }, { // 水平向右
            coords: [
                [2.59*111, 165*0.4242],
                [2.59*135, 165*0.4242]

            ]
        }, { // 水平向左
            coords: [
                [2.59*109, 165*0.4242],
                [2.59*85, 165*0.4242]
            ]
        }, { // 垂直向下
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*110, 115*0.4242]
            ]
        }, { //第一象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*125, 192*0.4242]
            ]
        }, { //第一象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*126, 175*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { //第一象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*116, 197*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { //第一象限
            coords: [
                [2.59*111, 190*0.4242],
                [2.59*117, 215*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第一象限
            coords: [
                [2.59*118, 190*0.4242],
                [2.59*127, 205*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第一象限
            coords: [
                [2.59*122, 180*0.4242],
                [2.59*132, 185*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第一象限
            coords: [
                [2.59*125, 170*0.4242],
                [2.59*138, 171*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第二象限
            coords: [
                [2.59*109, 166*0.4242],
                [2.59*94, 190*0.4242]
            ]
        }, { //第二象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*94, 175*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { //第二象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*101, 195*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { //第二象限
            coords: [
                [2.59*95, 168*0.4242],
                [2.59*83, 176*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第二象限
            coords: [
                [2.59*99, 175*0.4242],
                [2.59*88, 195*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第二象限
            coords: [
                [2.59*103, 179*0.4242],
                [2.59*94, 210*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第二象限
            coords: [
                [2.59*106, 185*0.4242],
                [2.59*105, 210*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第三象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*96, 137*0.4242]
            ]
        }, { //第三象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*104, 135*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { //第三象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*95, 153*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { //第三象限
            coords: [
                [2.59*109, 144*0.4242],
                [2.59*106, 120*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第三象限
            coords: [
                [2.59*104, 144*0.4242],
                [2.59*92, 123*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第三象限
            coords: [
                [2.59*100, 151*0.4242],
                [2.59*91, 143*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第三象限
            coords: [
                [2.59*100, 159*0.4242],
                [2.59*88, 157*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { // 第四象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*125, 135*0.4242]
            ]
        }, { // 第四象限
            coords: [
                [2.59*110, 164*0.4242],
                [2.59*125, 152*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { // 第四象限
            coords: [
                [2.59*110, 164*0.4242], // 红色象限位置错乱 由 [555, 164] 改为[110, 164]
                [2.59*116, 135*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#DD2222'
                }
            }
        }, { //第四象限
            coords: [
                [2.59*122, 160*0.4242],
                [2.59*135, 153*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第四象限
            coords: [
                [2.59*122, 150*0.4242],
                [2.59*132, 133*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第四象限
            coords: [
                [2.59*117, 144*0.4242],
                [2.59*123, 123*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, { //第四象限
            coords: [
                [2.59*113, 134*0.4242],
                [2.59*115, 113*0.4242]
            ],
            lineStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, ],
        animationDelay: 1100
    },
    {
        type: 'custom',
        renderItem: renderIndex,
        zlevel:10,
        data: [],
        tooltip: {
            trigger: 'item',
            triggerOn:"mousemove",
            showContent:true,
            alwaysShowContent:true,
            
            formatter: function (param) {
                return 'Tips: \n'+ param.value[lifeDims.name];     
            }
        },
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function(idx) {
        return idx * 5;
    }
};


function updateLifeChart(lifeData){

    // console.log(lifeData);
    lifeOption.series[6].data = [
        [0,0,"../static/img/icons/chuanyi.png","穿衣指数",lifeData.chuanyi.level,lifeData.chuanyi.tips],
        [0,1,"../static/img/icons/daisan.png","带伞指数",lifeData.daisan.level,lifeData.daisan.tips],
        [0,2,"../static/img/icons/ganmao.png","感冒指数",lifeData.ganmao.level,lifeData.ganmao.tips],
        [0,3,"../static/img/icons/chenlian.png","晨练指数",lifeData.chenlian.level,lifeData.chenlian.tips],
        [1,0,"../static/img/icons/ziwaixian.png","紫外线指数",lifeData.ziwaixian.level,lifeData.ziwaixian.tips],
        [1,1,"../static/img/icons/liangshai.png","晾晒指数",lifeData.liangshai.level,lifeData.liangshai.tips],
        [1,2,"../static/img/icons/lvyou.png","旅游指数",lifeData.lvyou.level,lifeData.lvyou.tips],
        [1,3,"../static/img/icons/diaoyu.png","钓鱼指数",lifeData.diaoyu.level,lifeData.diaoyu.tips]
    ];
    lifeChart.setOption(lifeOption);
};
