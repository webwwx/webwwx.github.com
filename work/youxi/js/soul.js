
	// 轮播图、新闻、职业介绍、玩家交流、媒体专区、视觉欣赏
	function tab(btn,con) {
		var oBtnBox = document.getElementById(btn);
		var aBtn = oBtnBox.getElementsByTagName('li');
		var oImgBox = document.getElementById(con);
		var aImg = oImgBox.getElementsByTagName('li');
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index=i;
			aBtn[i].onmouseover= function(){
				for (var j = 0; j < aBtn.length; j++) {
					aBtn[j].className='';
					aImg[j].style.display='none';
				}
				this.className='on';
				aImg[this.index].style.display='block';
			}
		}
	}
	

window.onload =function(){
	// 传参
	tab('ka_tit','ka_con');
	tab('tu_btn','tu_img');
	tab('voca_btn','voca_img');
	tab('exch_btn','exch_img');
	tab('media_btn','media_img');
	tab('vis_btn','vis_img');

	// 顶部导航
	var oNavBox = document.getElementById('navigation');
	var aNavBtn = oNavBox.getElementsByTagName('li');
	var aNavCon = oNavBox.getElementsByTagName('div');
	for (var i = 0; i < aNavBtn.length; i++) {
		aNavBtn[i].index=i;
		aNavBtn[i].onmouseover= function(){
			for (var j = 0; j < aNavBtn.length; j++) {
				aNavCon[j].style.display='none';
			}
			aNavCon[this.index].style.display='block';
		}
		aNavBtn[i].onmouseout =function(){
			aNavCon[this.index].style.display='none';
		}
	}
	// 中部导航
	var oNav = document.getElementById('nav-list');
	var aLi = oNav.getElementsByTagName('li');
	var aDiv = oNav.getElementsByTagName('div');
	for (var i = 1; i < aLi.length; i++) {
		aLi[i].index=i;
		aLi[i].onmouseover =function(){
			for (var j = 1; j < aLi.length; j++) {
				aDiv[j].style.display='none';
			}
			aDiv[this.index].style.display='block';
		}
		aLi[i].onmouseout =function(){
			aDiv[this.index].style.display='none';
		}
	}
	// 活动中心
	var oCenBox = document.getElementById('cen_box');
	var aCenImg = oCenBox.getElementsByTagName('div');
	var aCenBtn = oCenBox.getElementsByTagName('p');
	for (var i = 0; i < aCenBtn.length; i++) {
		aCenBtn[i].index=i;
		aCenBtn[0].style.background='url(image/sprite-2.jpg) -319px -530px no-repeat';
		aCenBtn[i].onmouseover =function(){
			for (var j = 0; j < aCenBtn.length; j++) {
				aCenBtn[j].style.background='url(image/sprite-2.jpg) 0 -530px no-repeat';
				aCenImg[j].style.display='none';
			}
			this.style.background='url(image/sprite-2.jpg) -319px -530px no-repeat';
			aCenImg[this.index].style.display='block';
		}
	}
	//媒体合作上方的图
	var oL2Box = document.getElementById('l2_box');
	var aL2 = oL2Box.getElementsByTagName('li');
	var oLeft = oL2Box.getElementsByTagName('em')[0];
	var oRight = oL2Box.getElementsByTagName('em')[1];
	var iNow=0;
	var timer = null;
	for (var i = 0; i < aL2.length; i++) {
		aL2[i].index=i;
		aL2[i].onclick =function(){
		    iNow = this.index; 
			l2show();
		}
	}

	function l2show(){
		for (var i = 0; i < aL2.length; i++) {
				aL2[i].style.display='none';
			}
		aL2[iNow].style.display='block';
	}

	oLeft.onclick =function(){
		iNow--;
		if(iNow==-1){
			iNow=aL2.length-1;
		}
		l2show();
	}

	oRight.onclick = Right;
	function Right(){
		iNow++;
		if(iNow==aL2.length){
			iNow=0;
		}
		l2show();
	}

	timer = setInterval(Right,1000);
	oL2Box.onmouseover =function(){
		clearInterval(timer);
	}
	oL2Box.onmouseout =function(){
		timer = setInterval(Right,1000);
	}

	// 媒体合作
	var oPreBox = document.getElementById('prefecture');
	var aPreCon = oPreBox.getElementsByTagName('div')[0];
	oPreBox.onmouseover =function(){
		aPreCon.style.display='block';
	}
	oPreBox.onmouseout =function(){
		aPreCon.style.display='none';
	}

}