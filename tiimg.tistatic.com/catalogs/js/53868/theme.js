$('a[href^="#"]').on('click',function(event){var target=$($(this).attr('href'));if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top},1000);}});function showDIV(num){var cont=document.getElementById('main');for(i=0;i<=cont.getElementsByTagName('div').length;i++){if(i==num){cont.getElementsByTagName('div')[i].style.display="";cont.getElementsByTagName('a')[i].style.backgroundColor="#cfcfcf";cont.getElementsByTagName('a')[i].style.color="#000000";}
else{cont.getElementsByTagName('div')[i].style.display="none";cont.getElementsByTagName('a')[i].style.backgroundColor="#e4e4e4";cont.getElementsByTagName('a')[i].style.color="#000000";}}}
function newImg(bigimg){var theImg=new Image();theImg.src=bigimg;var imgw=theImg.width;var imgh=theImg.height;if(imgw<200){imgw=500};if(imgh<200){imgh=550};var ImgWin=window.open('','imgwin',config='height='+imgh+',width='+imgw+',top=250,left=425')
with(ImgWin.document){writeln('<html><head><title>Display Image</title></head>');writeln('<body onload="self.focus()" onblur="self.close()">');writeln('<div style="text-align:center">');writeln('<img src='+bigimg+'></div>');writeln('<div style="text-align:center;font-size:9px">');writeln('<a href="#" onClick="self.close()">Close Me</a>');writeln('</div></body></html>');close();}}