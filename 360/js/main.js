//设计返回顶部
$(function () {
    $(".return-top").hide();
    $(document).scroll(function () {
        var getScroll = $(document.body).get(0).scrollTop;
        if (getScroll >= 320) {
            $(".return-top").show();
        }
        else {
            $(".return-top").hide();
        }
        $(".return-top").on("touchstart", function () {
            $('html,body').stop().animate({scrollTop: '0px'}, 1000);
            return false;
        })
    });
});
//轮播图
$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 1000,
        speed: 2000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
    });
});
$(function () {
    var ali = $("#msg-list").children(),
        i = 0;
    setInterval(function () {
        i++;
        if (i < ali.length) {
            var setTop = -parseInt(ali.outerHeight()) * i + 'px';
            $("#msg-list").animate({"top": setTop});
        }
        else {
            i = 0;
            var setTop = -parseInt(ali.outerHeight()) * i + 'px';
            $("#msg-list").css({"top": setTop});
        }
    }, 2000)

});
//明星单品
$(function () {
    //第一的数据
    var mxdp = [
        {
            pIcon: "img/star.png",
            pTxt: "360&nbsp;N5手机",
            imgSrc: "//img14.360buyimg.com/N2/jfs/t5455/303/17057029/108657/ec40af10/58f710f6Nfde2f9f9.jpg",
            text: "送原装壳膜"
        },
        {
            pIcon: "img/star.png",
            pTxt: "开启人工智能2.0",
            imgSrc: "//img12.360buyimg.com/N2/jfs/t3547/262/2798701267/74986/eac9d3f0/585d4d50N41ecf8b7.jpg",
            text: "360智能摄像机小水滴"
        },
        {
            pIcon: "img/star.png",
            pTxt: "ADAS驾驶辅助",
            imgSrc: "//img13.360buyimg.com/N2/jfs/t2803/225/2369244403/272133/b5aeb8d9/57621511N5cbafb8a.jpg",
            text: "360行车记录仪美猴王版"
        },
        {
            pIcon: "img/star.png",
            pTxt: "蒸煮烤智能菜单",
            imgSrc: "//img10.360buyimg.com/N2/jfs/t2695/228/823537167/127165/21c16554/57285ac8N9365f258.jpg",
            text: "美的变频微波炉23L"
        },
        {
            pIcon: "img/star.png",
            pTxt: "记录你的美",
            imgSrc: "//img12.360buyimg.com/N2/g10/M00/12/12/rBEQWVFiTIkIAAAAAAGW23gk0GgAADoSABPe9IAAZbz654.jpg",
            text: "佳能EOS\t700D"
        },
        {
            pIcon: "img/star.png",
            pTxt: "方寸间 乐趣全开",
            imgSrc: "//img12.360buyimg.com/N2/jfs/t4687/112/548423108/598231/ee82085c/58d1617bN614200f1.jpg",
            text: "Apple &nbsp;iPad"
        }
    ];
    for (var i = 0; i < mxdp.length; i++) {
        var li = '<li class="show-li"><a href=""><p class="mxdp-show-p"><span class="mxdp-show-p-icon"><img src="' + mxdp[i].pIcon + '" alt=""><span>' + mxdp[i].pTxt + '</span></span></p><img class="mxdp-show-img" src="http:' + mxdp[i].imgSrc + '" alt=""><p class="mxdp-show-txt">' + mxdp[i].text + '</p></a></li>';
        $(li).appendTo($("#mxdp-show"));
        var setWidth = $(".mxdp-show-img").css("width");
        $(".mxdp-show-img").css("height", setWidth);
    }
});
//手机等数据
$(function () {
    function createLi(id, obj) {
        for (var i = 0; i < obj.length; i++) {
            var li = '<li class="mobile-li"><a href=""><img class="mobile-li-img" src="http:' + obj[i].imgSrc + '" alt=""><p class="mobile-li-txt  mobile-li-fist-txt">' + obj[i].pTxt + '</p><p class="mobile-li-txt mobile-li-second-txt">' + obj[i].text + '</p></a></li>';
            $(li).appendTo($(id));
            var setWidth = $(".mobile-li-img").css("width");
            $(".mobile-li-img").css("height", setWidth);
        }
    }
    var objMobile = [
            {
                imgSrc: "//img14.360buyimg.com/N1/jfs/t5455/303/17057029/108657/ec40af10/58f710f6Nfde2f9f9.jpg",
                pTxt: "N5\t 6GB+64GB 慕斯黑",
                text: "慕斯黑新上市"
            },
            {
                imgSrc: "//img11.360buyimg.com/N1/jfs/t4774/65/1760566647/310883/d8845fa8/58f46189N2c1232af.jpg",
                pTxt: "N5 \t 6GB+64GB 流光金",
                text: "含价值1399《光明大陆》游戏礼包"
            },
            {
                imgSrc: "//img14.360buyimg.com/N1/jfs/t2527/48/1437801234/167725/3cc11f14/56c6762dN997ace45.jpg",
                pTxt: "SOLOVE \t 10000毫安移动电源",
                text: "为你私人定制掌心艺术"
            },
            {
                imgSrc: "//img10.360buyimg.com/N1/jfs/t3466/52/1988991454/129466/fe0e8670/583b8e0aN6df18c06.jpg",
                pTxt: "美逸\t多功能手机支架",
                text: "创意新组合"
            },
            {
                imgSrc: "//img11.360buyimg.com/N1/jfs/t3121/335/8007517958/51196/b4c544fa/58be7d5dN4bb5c3d0.jpg",
                pTxt: "奥睿科EDC \t安卓数据线",
                text: "好产品\t 就不用塑料"
            },
            {
                imgSrc: "//img12.360buyimg.com/N1/jfs/t3100/241/5805187661/146619/a47bcabb/58806706Neb4b76d5.jpg",
                pTxt: "圣迪威线控带麦克风",
                text: "高保真立体声"
            }
    ],
        objShuMa = [{
            imgSrc: "//img13.360buyimg.com/N1/jfs/t4603/84/2391835328/142878/1087c9e2/58eefd8fNbd14e4a1.jpg",
            pTxt: "360儿童手表SE\t2\tPlus松石蓝",
            text: "智能问答手表"
        }, {
            imgSrc: "//img14.360buyimg.com/N1/jfs/t3136/290/2173639686/60947/b8df4b55/57de02a9N18692c76.jpg",
            pTxt: "360行车记录仪后视镜版",
            text: "释放你的车内空间"
        },
            {
                imgSrc: "//img14.360buyimg.com/N1/jfs/t2638/331/2108458736/73645/db78a8cf/575779ddN0a18ded6.jpg",
                pTxt: "360智能摄像机大众版",
                text: "大广角\t双向通话"
            },
            {
                imgSrc: "//img12.360buyimg.com/N1/jfs/t2047/146/2086715124/310950/69f3d238/56f0dc7cN852cd379.jpg",
                pTxt: "乐心\tMAMBO\t智能手环",
                text: "专业运动手环\t 微信互联"
            }, {
                imgSrc: "//img11.360buyimg.com/N1/jfs/t3355/277/1667520318/73174/82509038/582d4cdaN95ac648a.jpg",
                pTxt: "香山智能运动手环",
                text: "微信连接手环\t无需APP"
            },
            {
                imgSrc: "//img10.360buyimg.com/N1/jfs/t4609/136/2377914571/154207/882b7648/58f0b19cN87d7e740.jpg",
                pTxt: "bong\t3\tHR心率智能手环",
                text: "宠物互动\t20天持续续航"
            }
        ],
        objYuLe = [{
            imgSrc: "//img13.360buyimg.com/N1/jfs/t3067/213/8331289550/140824/270d1678/58c21256Nf2a82279.jpg",
            pTxt: "联想\t主播专用话筒",
            text: "自带外接伴奏功能"
        }, {
            imgSrc: "//img13.360buyimg.com/N1/jfs/t4351/206/3100118513/103379/b9e6b1a9/58da2c0aN0fbac2ef.jpg",
            pTxt: "猫王小王子便携蓝牙音箱",
            text: "重遇最初的自己"
        }, {
            imgSrc: "//img13.360buyimg.com/N1/jfs/t3292/168/691368364/76711/a6857230/57bd0ca0N970ce97d.jpg",
            pTxt: "索尼防水耳机",
            text: "一体化Walkman"
        },
            {
                imgSrc: "//img11.360buyimg.com/N1/jfs/t1474/182/1088815726/92842/5d0f7bee/55bb4267Na1346540.jpg",
                pTxt: "Apple iPod touch 16G",
                text: "时尚人士的选择"
            }, {
                imgSrc: "//img11.360buyimg.com/N1/jfs/t2026/67/2222012622/37465/76c34843/56aeb25bN41c5264b.jpg",
                pTxt: "Beats\turBeats\t入耳式耳机",
                text: "个性设计\t引领潮流"
            },
            {
                imgSrc: "//img14.360buyimg.com/N1/jfs/t3277/54/5112598372/53839/73ffa57b/586382fbN17b92023.jpg",
                pTxt: "硕美科—声丽入耳式电脑耳麦",
                text: "正确选择适合自己的通话耳机"
            }
        ],
        objDianNao = [{
            imgSrc: "//img10.360buyimg.com/N1/g9/M03/09/08/rBEHaVB_qv8IAAAAAAFTS5fgWmYAABz1wGwYQQAAVNj572.jpg",
            pTxt: "雷蛇噬魂金蝎游戏键盘",
            text: "更强控制\t更多胜利"
        }, {
            imgSrc: "//img14.360buyimg.com/N1/g8/M03/04/05/rBEHZ1A8Kc8IAAAAAAEqUg0v_7wAAA0FAIExA0AASpq640.jpg",
            pTxt: "罗技K310\t有线水洗键盘",
            text: "水洗键盘\t水漾如新"
        }, {
            imgSrc: "//img12.360buyimg.com/N1/jfs/t3175/122/813645427/83358/19dbac99/57bfda3aN9eff4a30.jpg",
            pTxt: "雷蛇炼狱蝰蛇1800\tDPI\t 电竞鼠标",
            text: "专业级表现\t电竞的必备"
        },
            {
                imgSrc: "//img10.360buyimg.com/N1/jfs/t2551/38/808471936/121954/40e10aeb/566a3ea8N925ccd55.jpg",
                pTxt: "雷蛇北海巨妖标准版 游戏耳麦",
                text: "耳听八方\t胜券在握"
            }, {
                imgSrc: "//img10.360buyimg.com/N1/jfs/t4663/351/1836976099/80834/59b4856f/58e6f544Nd39c10a2.jpg",
                pTxt: "金士顿32GB\t金属U盘",
                text: "精巧时尚\t稳定可靠"
            },
            {
                imgSrc: "//img10.360buyimg.com/N1/jfs/t3553/131/350126243/518186/e5be98b8/5806d409N03ea2784.jpg",
                pTxt: "雷蛇速度版-小号\t 游戏鼠标垫",
                text: "柔软的鼠标垫\t刚强的战斗力"
            }
        ],
        objJiaYongDianQi = [{
            imgSrc: "//img14.360buyimg.com/N1/jfs/t2431/185/764437221/187603/ae49bc29/5628b05cNa991a47b.jpg",
            pTxt: "飞科家用电吹风机",
            text: "负离子可折叠吹风筒"
        }, {
            imgSrc: "//img11.360buyimg.com/N1/jfs/t4954/322/971246676/97568/70c13d01/58eb22beNf0899a59.jpg",
            pTxt: "美国艾罗伯特智能扫地机器人",
            text: "一键尽扫\t超乎想象"
        }, {
            imgSrc: "//img12.360buyimg.com/N1/jfs/t2668/27/3926614562/266627/6b3d666/579ef3e8Ne531b5b3.jpg",
            pTxt: "小狗小型除螨大功率家用吸尘器",
            text: "为深层清洁而设计"
        },
            {
                imgSrc: "//img13.360buyimg.com/N1/jfs/t3754/93/859730387/145590/72759017/5819cbc0Na5bad5e9.jpg",
                pTxt: "美的\t单杆蒸汽挂烫机",
                text: "小身材也有大性感"
            }, {
                imgSrc: "//img13.360buyimg.com/N1/jfs/t4183/197/1739862671/413483/c37c6f63/58c61473N1160011d.jpg",
                pTxt: "赛亿电风扇",
                text: "强力电机\t动力核心"
            },
            {
                imgSrc: "//img14.360buyimg.com/N1/jfs/t4609/177/2371064821/150271/36819790/58f08824N8b3821ee.jpg",
                pTxt: "飞科充电电动剃须刀",
                text: "刀头水洗\t净爽剃须"
            }
        ],
        objQiCheYongPin = [{
            imgSrc: "//img12.360buyimg.com/N1/jfs/t2611/76/979789740/49117/6e136d52/573078e5N75e293d3.jpg",
            pTxt: "网易云音乐车载蓝牙播放器",
            text: "支持双系统\t随插随用"
        }, {
            imgSrc: "//img13.360buyimg.com/N1/g15/M05/00/04/rBEhWlHo0noIAAAAAAFmzg-s5bYAABKLgIm3akAAWbm866.jpg",
            pTxt: "尤利特车载充气泵",
            text: "轻巧便携\t噪音小"
        }, {
            imgSrc: "//img14.360buyimg.com/N1/jfs/t2062/199/2870959174/411793/83151778/571d83b2N23f6fbb8.jpg",
            pTxt: "趣行\t汽车前挡防晒遮阳挡",
            text: "帮您解决遮阳问题"
        },
            {
                imgSrc: "//img13.360buyimg.com/N1/g13/M07/10/0F/rBEhU1JbmEkIAAAAAAYb3C_SyjgAAEHUgIuKqUABhv0315.jpg",
                pTxt: "卡饰社\t5505系列\t台湾产汽车脚垫",
                text: "洁净\t修饰\t歇脚两不误"
            }, {
                imgSrc: "//img10.360buyimg.com/N1/jfs/t3109/345/1738719887/311580/8c84c8f2/57d3c9b5N06fabdfc.jpg",
                pTxt: "安马家车多用途密封后备箱",
                text: "打造整洁精致生活"
            },
            {
                imgSrc: "//img12.360buyimg.com/N1/jfs/t826/110/1189671272/94305/fd9dc557/558ba26eN27ae46e8.jpg",
                pTxt: "铁摩图车载手机支架",
                text: "稳固耐用\t不挡视线"
            }
        ],
        objSheYingSheXing = [{
            imgSrc: "//img10.360buyimg.com/N1/jfs/t2386/270/1906255327/138534/7d88db99/56e2789eN601d115d.jpg",
            pTxt: "尼康\tD5300\t单反套机",
            text: "记录你的美"
        }, {
            imgSrc: "//img10.360buyimg.com/N1/jfs/t1420/67/1403568457/113544/866eebf9/55c86c03N2470ae63.jpg",
            pTxt: "佳能EOS\t700D\t单反套机",
            text: "7种照片风格拍出满意的色彩效果"
        }, {
            imgSrc: "//img10.360buyimg.com/N1/jfs/t4000/152/2492963218/269506/6d369ab9/58ababf5N5b9b024a.jpg",
            pTxt: "佳能IXUS\t190\t数码相机",
            text: "2000万像素\t10倍光学变焦"
        },
            {
                imgSrc: "//img14.360buyimg.com/N1/jfs/t2767/191/2629675016/322925/5643c014/576cf254N955ca285.jpg",
                pTxt: "富士INSTAX\t一次成像相机",
                text: "高性能闪光灯\t双重曝光模式"
            }, {
                imgSrc: "//img11.360buyimg.com/N1/jfs/t3241/22/5905632873/199747/66ba9d15/58942238Nba6eb0e7.jpg",
                pTxt: "GoPro\t迷你小巧高清运动摄像机 ",
                text: "坚固耐用又防水"
            },
            {
                imgSrc: "//img13.360buyimg.com/N1/jfs/t2071/8/1646605703/216520/efe1d65f/56663b97N0ee4999b.jpg",
                pTxt: "索尼HDR-CX450\t高清数码摄像机",
                text: "光学防抖\t30倍光学变焦"
            }
        ],
        objJiaoYuWenJu = [{
            imgSrc: "//img13.360buyimg.com/N1/jfs/t592/179/207129832/51793/4df375b3/54572d60Nec42d2b8.jpg",
            pTxt: "索尼ICD-TX650\t数码锂电录音棒",
            text: "会议录音\t迷你易携带"
        }, {
            imgSrc: "//img13.360buyimg.com/N1/jfs/t2830/115/1917236429/257610/fe6d5da0/574f9b05Ncb7df6ab.jpg",
            pTxt: "卡西欧E-Y200BK\t电子词典",
            text: "完整收录85本辞书及300本英文名著"
        }, {
            imgSrc: "//img12.360buyimg.com/N1/g15/M0A/1A/1C/rBEhWlNgy7MIAAAAAAJoxKUq0C0AAMtHwPNszoAAmjc527.jpg",
            pTxt: "纽曼儿童双语点读笔",
            text: "让孩子爱上读书的早教礼物"
        },
            {
                imgSrc: "//img11.360buyimg.com/N1/jfs/t2110/4/974280074/142416/f844720/563b08eeNe865f590.jpg",
                pTxt: "帝尔MP5视频复读机",
                text: "牛津英汉词典/跟读电影"
            }, {
                imgSrc: "//img12.360buyimg.com/N1/g13/M09/01/0F/rBEhVFHmMlcIAAAAAAJBcI7ibL8AABL5gFF3vsAAkGI996.jpg",
                pTxt: "Double\tA\tA4\t70克复印纸",
                text: "达伯埃泰国原装进口高端复印纸"
            },
            {
                imgSrc: "//img12.360buyimg.com/N1/jfs/t3271/44/1487087949/131833/5045b25c/57ce42f0N2739bc93.jpg",
                pTxt: "富士施乐\t黑色墨粉筒\t粉盒\t墨盒",
                text: "还原真彩,品质保障"
            }
        ],
        objHuWaiYunDong = [{
            imgSrc: "//img14.360buyimg.com/N1/jfs/t2500/185/2371408008/276513/99836b01/56cd49e1N4afa1807.jpg",
            pTxt: "迪士尼\t旱冰鞋轮滑鞋",
            text: "可调伸缩直排闪光"
        }, {
            imgSrc: "//img13.360buyimg.com/N1/jfs/t2746/286/866333480/181825/3d13c6fb/57296a9eN0c39afd1.jpg",
            pTxt: "李宁\t镀膜游泳镜",
            text: "高清防水防雾"
        }, {
            imgSrc: "//img12.360buyimg.com/N1/jfs/t2155/86/2212126419/109584/5a889d80/56f7518aN226cf816.jpg",
            pTxt: "尚烤佳\t加厚加宽双人帆布彩条吊床",
            text: "野营露宿秋千200cm*150cm"
        }, {
            imgSrc: "//img14.360buyimg.com/N1/jfs/t2764/115/2242498383/268415/bdad09a/575fb2bbNd6c2d7f7.jpg",
            pTxt: "斯伯丁5号比赛足球",
            text: "高弹跳力\t柔软耐磨"
        }, {
            imgSrc: "//img10.360buyimg.com/N1/jfs/t3130/348/7861426230/62047/a10b6515/58bcf4beN38a7ab50.jpg",
            pTxt: "瑞仕达折叠床",
            text: "传递舒适与活力"
        },
            {
                imgSrc: "//img13.360buyimg.com/N1/jfs/t3115/36/1266599325/79796/95bdf2f9/57c93adcN826a6c10.jpg",
                pTxt: "尚烤佳烧烤炉",
                text: "串烧欢聚时刻"
            }
        ];
    createLi("#mobile", objMobile);
    createLi("#shuma", objShuMa);
    createLi("#yule", objYuLe);
    createLi("#dianNao", objDianNao);
    createLi("#jiaYongDianQi", objJiaYongDianQi);
    createLi("#qiCheYongPin", objQiCheYongPin);
    createLi("#sheYingSheXiang", objSheYingSheXing);
    createLi("#jiaoYuWenJu", objJiaoYuWenJu);
    createLi("#huWaiYunDong", objHuWaiYunDong);
});



//ajax跨越获取的数据
// $(function () {
//     function ajaxget(id,num) {
//         $.ajax({
//             url: "http://m.i360mall.com/query",
//             type: "POST",
//             data: {
//                 'cat1': num
//             },
//		dataType:"jsonp",
//             success: function (data) {
//                 var obj = JSON.parse(data).data.searchItems;
//                 for (var i =0; i < obj.length; i++) {
//                     console.log(obj[i].itemImgSrc);
//                     var li = '<li class="mobile-li"><a href=""><img class="mobile-li-img" src="http:' + obj[i].itemImgSrc + '" alt=""><p class="mobile-li-txt  mobile-li-fist-txt">' + obj[i].itemName + '</p><p class="mobile-li-txt mobile-li-second-txt">' + obj[i].price + '</p></a></li>';
//                     $(li).appendTo($(id));
//                     var setWidth = $(".mobile-li-img").css("width");
//                     $(".mobile-li-img").css("height", setWidth);
//                 }
//             }
//
//         })
//     }
//     ajaxget("#mobile", 149);
//     ajaxget("#shuma", 152);
//     ajaxget("#yule", 154);/////
//     ajaxget("#dianNao", 169);
//     ajaxget("#jiaYongDianQi", 233);
//     ajaxget("#qiCheYongPin", 210);
//     ajaxget("#sheYingSheXiang", 349);
//     ajaxget("#jiaoYuWenJu", 345);
//     ajaxget("#huWaiYunDong", 346);
//
// });