var imgs =["https://f0.0sm.com/node0/2022/12/8638ED64B9B9901D-882cf7458d1d7cb3.jpg",

       "https://f0.0sm.com/node0/2022/12/8638ED64BF4AE178-660e33b199ec92a5.jpg",

       "https://f0.0sm.com/node0/2022/12/8638ED64C28C3FCE-75aaf1194cc906c5.jpg",

       "https://f0.0sm.com/node0/2022/12/8638ED64C2A2323E-47db4fc2d7965eec.jpg",

       "https://f0.0sm.com/node0/2022/12/8638ED64E2BFFED1-e453e450a327a7db.jpg",

       "https://f0.0sm.com/node0/2022/12/8638ED64F4577189-1bf632ce00fecc67.jpg",

       "https://f0.0sm.com/node0/2022/12/8638ED651C5CA8A3-c6c0ce939392f3d2.jpg",

       "https://f0.0sm.com/node0/2022/12/8638ED64E2BFFED1-e453e450a327a7db.jpg",

       ];  

    

var index=Math.floor(Math.random()*8);

var img = imgs[index];

    function time(){

           

       document.body.style.backgroundImage="url("+img+")";

           

    }  

    

document.body.onload = function(){

 time();

}
