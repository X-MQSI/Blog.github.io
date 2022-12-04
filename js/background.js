var imgs =["http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_2.jpg",

       "http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_default.png",

       "http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_3.jpg",

       "http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_1.jpg",

       "http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_4.jpg",

       "http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_5.jpg",

       "http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_6.jpg",

       "http://images.cnblogs.com/cnblogs_com/xiaobo-Linux/1112236/o_default-2.jpg",

       ];  

    

var index=Math.floor(Math.random()*8);

var img = imgs[index];

    function time(){

           

       document.body.style.backgroundImage="url("+img+")";

           

    }  

    

document.body.onload = function(){

 time();

}
