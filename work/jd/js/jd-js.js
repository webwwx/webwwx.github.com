//我的京东、网址导航等
function nr(nrbtn,nrshow){
	var oNr1=document.getElementById(nrbtn)
	var oNr1show=document.getElementById(nrshow)
	oNr1.onmouseover=function(){
		oNr1show.style.display='block'
		oNr1.style.background='#fff'
		oNr1.style.color='#000'
	}
	oNr1.onmouseout=function(){
		oNr1show.style.display='none'
		oNr1.style.background=''
		oNr1.style.color=''
	}
}
//家用电器、手机数码等
function con1(con1btn,con1show){
	var oCon1L1=document.getElementById(con1btn)
	var oL1show=document.getElementById(con1show)
	oCon1L1.onmouseover=function(){
		oL1show.style.display='block'
		//oCon1L1.style.background='#fff'
		//oCon1L1.style.color='#c81623' 失败

	}
	oCon1L1.onmouseout=function(){
		oL1show.style.display='none'

	}
}
//轮播图
	function ban(tuTitle,tuImg){
			var oTuTitle = document.getElementById(tuTitle);
			var aLi = oTuTitle.getElementsByTagName('li');
			var oTuImg = document.getElementById(tuImg);
			var aDiv = oTuImg.getElementsByTagName('div');

			for(var i = 0; i < aLi.length; i++){
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					for(var a = 0; a < aLi.length; a++){
						aLi[a].className = '';
						aDiv[a].style.display = 'none';
					}
					this.className = 'on';
					aDiv[this.index].style.display='block';
				}
			}
		}
//服务
	function ser(serTitle,serCon){
			var oSerTitle = document.getElementById(serTitle);
			var aLi = oSerTitle.getElementsByTagName('li');
			var oSerCon = document.getElementById(serCon);
			var aDiv = oSerCon.getElementsByTagName('div');

			for(var i = 0; i < aLi.length; i++){
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					for(var a = 0; a < aLi.length; a++){
						aLi[a].className = '';
						aDiv[a].style.display = 'none';
					}
					this.className = 'on';
					aDiv[this.index].style.display='block';
				}
			}
		}
// 1F轮播图
	function con5(con5Txt,con5Img){
			var oCon5Txt = document.getElementById(con5Txt);
			var aLi = oCon5Txt.getElementsByTagName('li');
			var oCon5Img = document.getElementById(con5Img);
			var aDiv = oCon5Img.getElementsByTagName('div');

			for(var i = 0; i < aLi.length; i++){
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					for(var a = 0; a < aLi.length; a++){
						aLi[a].className = '';
						aDiv[a].style.display = 'none';
					}
					this.className = 'on';
					aDiv[this.index].style.display='block';
				}
			}
		}


window.onload=function(){
//我的京东、网址导航等
	nr('nr1','nr1show')
	nr('nr2','nr2show')
	nr('nr3','nr3show')
	nr('nr4','nr4show')
	nr('nr5','nr5show')
//家用电器、手机数码等
	con1('con1-l1','l1show')
	con1('con1-l2','l2show')
	con1('con1-l3','l3show')
	con1('con1-l4','l4show')
	con1('con1-l5','l5show')
	con1('con1-l6','l6show')
	con1('con1-l7','l7show')
	con1('con1-l8','l8show')
	con1('con1-l9','l9show')
	con1('con1-l10','l10show')
	con1('con1-l11','l11show')
	con1('con1-l12','l12show')
	con1('con1-l13','l13show')
	con1('con1-l14','l14show')
	con1('con1-l15','l15show')
//轮播图
	ban('tu-title','tu-img');
//服务
	ser('ser-title','ser-con');
// 1F轮播图
	con5('con5-c2-txt','con5-c2-img');
// 1F模块



//送至
	var oNshow=document.getElementById('nav-show')
	var oNout=document.getElementById('nav-out')
	var aLi=oNout.getElementsByTagName('li')
	oNshow.onclick=function(){
		oNout.style.display='block'
	}
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick=function(){
			oNshow.innerHTML=this.innerHTML;
			oNout.style.display='none';
		}
	}

//购物车

	var oShopBar=document.getElementById('shopbar')
	var oSbshow=document.getElementById('sbshow')
	oShopBar.onmouseover=function(){
		oSbshow.style.display='block'
		oShopBar.style.background='#fff'
	}
	oShopBar.onmouseout=function(){
		oSbshow.style.display='none'
		oShopBar.style.background=''
	}



}


