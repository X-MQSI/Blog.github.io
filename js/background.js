var bodyBgs = [];
         bodyBgs[0] = "https://f0.0sm.com/node0/2022/12/8638ED64B9B9901D-882cf7458d1d7cb3.jpg";  
         bodyBgs[1] = "https://f0.0sm.com/node0/2022/12/8638ED64BF4AE178-660e33b199ec92a5.jpg";  
         bodyBgs[2] = "https://f0.0sm.com/node0/2022/12/8638ED64C28C3FCE-75aaf1194cc906c5.jpg";  
         bodyBgs[3] = "https://f0.0sm.com/node0/2022/12/8638ED64E2BFFED1-e453e450a327a7db.jpg";  
         bodyBgs[4] = "https://f0.0sm.com/node0/2022/12/8638ED64C2A2323E-47db4fc2d7965eec.jpg";  
         bodyBgs[5] = "https://f0.0sm.com/node0/2022/12/8638ED651C5CA8A3-c6c0ce939392f3d2.jpg";
         bodyBgs[6] = "https://f0.0sm.com/node0/2022/12/8638ED64F4577189-1bf632ce00fecc67.jpg"
         var randomBgIndex = Math.round( Math.random() * 6);
         document.write('body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;}');(' + bodyBgs[randomBgIndex] + ') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;}');  
