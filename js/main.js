function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
	options = options || {};
	options.duration = options.duration || 1000;
	options.easing = options.easing || 'ease-out';
	var count = Math.floor(options.duration/30);
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];
	}
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear' :
					var a = n/count;
					var cur = start[name] + dis[name]*a; 
					break;
				case 'ease-in' : 
					var a = n/count;
					var cur = start[name] + dis[name]*a*a*a;
					break;
				case 'ease-out' : 
					var a = 1-n/count;
					var cur = start[name] + dis[name]*(1-a*a*a);
					break;
			}
			if(name == 'opacity'){
				obj.style[name] = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name] = cur + 'px';
			}
		}
		if(n >= count){
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	},30)
}
// function getPos(obj){
//     var l=0;
//     var t=0;
//     while(obj){
//         l+=obj.offsetLeft;
//         t+=obj.offsetTop;
//         obj=obj.offsetParent;
//     }
//     return {left:l,top:t};
// }
// function hoverDir(obj,ev){
//     var oEvent=ev||event;
//     var scrollT=document.body.scrollTop || document.documentElement.scrollTop;
//     var scrollL=document.body.scrollLeft || document.documentElement.scrollLeft;

//     var y=obj.offsetHeight/2+getPos(obj).top-(oEvent.clientY+scrollT);
//     var x=obj.offsetWidth/2+getPos(obj).left-(oEvent.clientX+scrollL);

//     return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
// }

window.onload =function(){
	// 分块运动大图
	;(function(){
		var oBox = document.getElementById('banner');
		var timer = null;
		var C = 4;
		var R = 7;
		for (var c = 0; c < C; c++) {
			for (var r = 0; r < R; r++) {
				var oSpan = document.createElement('span');
				oBox.appendChild(oSpan);					
				oSpan.style.width = oBox.offsetWidth/R+'px';
				oSpan.style.height = oBox.offsetHeight/C+'px';
				oSpan.style.left= oSpan.offsetWidth*r+'px';
				oSpan.style.top= oSpan.offsetHeight*c+'px';
				oSpan.style.position='absolute';
				oSpan.style.backgroundPosition='-'+oSpan.offsetWidth*r+'px'+' '+'-'+oSpan.offsetHeight*c+'px';
				oSpan.r=r;
				oSpan.c=c;	
			}
		}
		var iNow = 0;
		var aSpan = oBox.children;
		var bSys = false;	
		var iN = 0;
		function show(){
			if(bSys)return;
			bSys=true;
			oBox.style.backgroundImage='url(image/'+iNow%3+'.jpg)'
			iNow++;
			iN++;
			iN%=4;
			for (var i = 0; i < aSpan.length; i++) {
				;(function(index){
					setTimeout(function(){
						aSpan[index].style.opacity=0;
						aSpan[index].style.backgroundImage='url(image/'+iNow%3+'.jpg)';
						move(aSpan[index],{'opacity':1},{'duration':2000});
						if(aSpan[index].r==R-1&& aSpan[index].c==C-1){
							bSys=false;
						}
						if(iN==1){
							aSpan[index].c=Math.abs(aSpan[index].c-C);
						}else if(iN==2){
							aSpan[index].r=Math.abs(aSpan[index].r-R);
						}else if(iN==3){
							aSpan[index].c=Math.abs(aSpan[index].c-C);
						}else if(iN==0){
							aSpan[index].r=Math.abs(aSpan[index].r-R);
						};
					},150*(aSpan[index].r+aSpan[index].c));
				})(i);
			}
			
		}
		setInterval(show,2500);
	})();
	// 轮播图
	;(function(){
		var oMy =  document.getElementById('myself');
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		var oBtn = oMy.children[0];
		var oUl = oMy.children[1];
		var aLi = oUl.children;
		var timer = null;
		var timer2 = null;
		var iNow =0;
		aLi[0].style.opacity=1;
		aLi[0].style.filter='alpha(opacity=100)';
		for (var i = 0; i < aLi.length; i++) {
			var aBtn = document.createElement('li');
			oBtn.appendChild(aBtn);
		}
		var aBtn = oBtn.children;
		aBtn[0].className='on';
		for (var i = 0; i < aBtn.length; i++) {
			;(function(index){
				aBtn[i].index=i;
				aBtn[i].onmouseover =function(){
					iNow=this.index;
					timer = setTimeout(function(){
						tab();
					},500)					
				}
				aBtn[i].onmouseout =function(){
					clearTimeout(timer);
				}
			})(i);
		}
		function tab(){
			for (var j = 0; j < aBtn.length; j++) {
				aBtn[j].className='';
				aLi[j].style.opacity=0;
				aLi[j].style.filter='alpha(opacity:0)';
				// move(aLi[j],{'opacity':0});
			}
			aBtn[iNow].className='on';
			move(aLi[iNow],{'opacity':1});
		}
		oPrev.onclick = prev;
		function prev(){
			iNow--;
			if(iNow==-1){
				iNow=aBtn.length-1;
			}
			tab();
		}
		oNext.onclick = next;
		function next(){
			iNow++;
			if(iNow==aBtn.length){
				iNow=0;
			}
			tab();
		}
		timer2 = setInterval(next,3000);
		oMy.onmouseover =function(){
			clearInterval(timer2);
		}
		oMy.onmouseout =function(){
			timer2 = setInterval(next,3000);
		}
	})();
	// 作品展示
	;(function(){
		var aLi = document.getElementById('demo').children;
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].onmouseenter =function(ev){
	            var oEvent = ev || event;
	            var oSon = this.children[0];
	            // switch(hoverDir(this,oEvent)){
	            //     case 0:
	            //         oSon.style.left=aLi[0].offsetWidth+'px';
	            //         oSon.style.top='0px';
	            //         break;
	            //     case 1:
	            //         oSon.style.left='0px';
	            //         oSon.style.top=aLi[0].offsetWidth+'px';
	            //         break;
	            //     case 2:
	            //         oSon.style.left=-aLi[0].offsetWidth+'px';
	            //         oSon.style.top='0px';
	            //         break;
	            //     case 3:
	            //         oSon.style.left='0px';
	            //         oSon.style.top=-aLi[0].offsetWidth+'px';
	            //         break;
	            // }
	            move(oSon,{'left':0,'top':0},{'duration':400,'easing':'linear'});
			}
			aLi[i].onmouseleave =function(ev){
				var oEvent = ev || event;
				var oSon = this.children[0];
				// switch(hoverDir(this,oEvent)){
				// 	case 0:
				// 		move(oSon,{'top':0,'left':aLi[0].offsetWidth},{'duration':400,'easing':'linear'});
				// 		break;
				// 	case 1:
				// 		move(oSon,{'top':aLi[0].offsetWidth,'left':0},{'duration':400,'easing':'linear'});
				// 		break;
				// 	case 2:
				// 		move(oSon,{'top':0,'left':-aLi[0].offsetWidth},{'duration':400,'easing':'linear'});
				// 		break;
				// 	case 3:
				// 		move(oSon,{'top':-aLi[0].offsetWidth,'left':0},{'duration':400,'easing':'linear'});
				// 		break;
				// }
				move(oSon,{'left':0,'top':aLi[0].offsetWidth},{'duration':400,'easing':'linear'});
			}	
		}
	})();
}