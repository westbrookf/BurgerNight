setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'f8a60c74f6eb4be583138b4ec95dbb2c',
                comparisonItems:[{name : 'cmp', value : 10251826},{name : 'plmt', value : 12003107}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1550984874258402');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbsr;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("f8a60c74f6eb4be583138b4ec95dbb2c",false);var dvObj=$dvbsr;var impId='f8a60c74f6eb4be583138b4ec95dbb2c';var htmlRate=10;var runTag=-1;var lab=0;var sources=0;var adid='8689202661874910511';var urlTypeId=1033;var ddt=1;var date='20190224';var prefix='ch201902';dvObj.pubSub.subscribe('BeforeDecisionRender',impId,'AttributeCollection',function(){try{try{!function(){var r=window,e=0;try{for(;r.parent&&r!=r.parent&&r.parent.document&&(r=r.parent,!(10<e++)););}catch(e){}var a=0;function t(e,t){t&&(a=(a|1<<e)>>>0)}var n=r.document;t(0,r==window.top),t(1,""==n.title),t(2,r.innerWidth>r.screen.width);try{t(3,n.querySelector('script[src*="/coinhive"]')||r.Miner||r.CoinHive||function(){try{return r.localStorage.getItem("coinhive")}catch(e){return!1}}()),t(4,n.querySelector('script[src*="videoadtest.com"]')),t(5,r.CustomWLAdServer&&r.CustomWLAdServer.passbackCallbacks),t(7,n.querySelector('script[src*="algovid.com"]')),t(8,r.ddcQueryStr&&r.handleFileLoad&&r.handleComplete),t(9,r.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/)),t(10,-1!=n.title.indexOf("</>"));for(var o=n.getElementsByTagName("script"),i=0;i<o.length;i++)-1!=o[i].src.indexOf("172.93.96.99")&&t(11,!0),-1!=o[i].src.indexOf("104.243.38.59")&&t(12,!0);if(t(13,I=n.getElementById("adloaderframe")),t(14,function(){try{var e=n.getElementById("adloaderframe").previousElementSibling,t="VIDEO"==e.tagName&&"none"==e.style.display&&"DIV"==e.previousElementSibling.tagName?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(e){return!1}}()),I){var c=I.previousElementSibling;for(i=0;i<5;i++)t(15,function(){try{var e='<video muted="muted"></video>'==c.outerHTML&&"DIV"==c.previousElementSibling.tagName?c.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(e){return!1}}()),c=c.previousElementSibling}if(t(16,n.querySelector('iframe[id="adloaderframe"][style*="display: none"]')),t(17,function(){try{return null!=n.querySelector('#header[class="kk"]')&&"rgb(0, 255, 255)"==getComputedStyle(document.body).backgroundColor}catch(e){}}()),t(18,function(){try{return/<!--(.|\n)*checklength(.|\n)*function timer(.|\n)*aol3\.php(.|\n)*--\>/.test(document.documentElement.outerHTML)}catch(e){}}()),t(20,function(){try{return null!=n.querySelector('div[id="kt_player"][hiegth]')}catch(e){}}()),t(21,function(){try{return null!=n.querySelector('div[id="kt_player"][width]')}catch(e){}}()),r.top==r&&0<r.document.getElementsByClassName("asu").length)for(var d=r.document.styleSheets,l=0;l<d.length;l++)try{for(var s=r.document.styleSheets[l].cssRules,u=0;u<s.length;u++)if("div.kk"==s[u].selectorText||"div.asu"==s[u].selectorText){t(19,!0);break}}catch(e){}t(22,function(){try{return null!=n.querySelector('script[src*="./newplayer.js"]')}catch(e){}}());o=Array.from(r.document.getElementsByTagName("script"));for(var p in o)if((-1!=o[p].innerText.indexOf("ga_pa.push('ga_")||-1!=o[p].innerText.indexOf("apntag.showTag('ga_"))&&"DIV"==o[p].parentElement.tagName&&o[p].parentElement.id&&-1!=o[p].parentElement.id.indexOf("ga_")&&("TH"==o[p].parentElement.parentElement.tagName||"TD"==o[p].parentElement.parentElement.tagName)){t(23,!0);break}t(24,function(){try{return r.top==r&&(0<r.document.getElementsByClassName("asu").length||r.document.getElementsByClassName("kk").length)}catch(e){}}()),t(25,r._gaUserPrefs&&"function"==typeof r._gaUserPrefs.ioo)}catch(e){}var m=Object.prototype.toString,g=Function.prototype.toString,h=/^\[object .+?Constructor\]$/,f=RegExp("^"+String(m).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v(e){var t=typeof e;return"function"==t?f.test(g.call(e)):e&&"object"==t&&h.test(m.call(e))||!1}var y=window,w=0,b=!1,E=!1;try{for(;y.parent&&y!=y.parent&&y.parent.document&&(E|=!v(r.document.hasFocus),y=y.parent,b|=v(window.document.hasFocus)!=v(y.document.hasFocus),!(10<w++)););}catch(e){}t(26,r==window.top&&!v(y.document.hasFocus)),t(27,E),t(28,b);var _={dvp_acv:a,dvp_acifd:e};new Date;if(r==window.top){_.dvp_mref=(refm=n.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),null!=refm&&3==refm.length?refm[2]:"");var S=n.head;S&&(S.children&&(_.dvp_acc=S.children.length),S.outerHTML&&(_.dvp_acl=S.outerHTML.length)),r.external&&(_.dvp_acwe=Object.keys(r.external).length);var x=r.innerWidth>r.innerHeight,k=r.screen[x?"height":"width"];if(n.body.offsetWidth>k&&(_.dvp_vpos=n.body.offsetWidth+"-"+k+"-"+(x?1:0)),navigator&&navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices){var T=[];navigator.mediaDevices.enumerateDevices().then(function(e){e.forEach(function(e){T.push(-1<e.kind.toLowerCase().indexOf("audio")?1:-1<e.kind.toLowerCase().indexOf("video")?2:0)})}).then(function(){dvObj.registerEventCall(impId,{dvp_dvcs:T.join(",")})}).catch(function(e){dvObj.registerEventCall(impId,{dvp_dvcs:encodeURIComponent(e.message)})})}else _.dvp_dvcs="na"}if(dvObj.registerEventCall(impId,_),(new Date).getTime()%100<htmlRate&&(1==lab||1==runTag&&0==(2&urlTypeId)&&(0==sources||0<(sources&a)))){function C(e,t){var n=new XMLHttpRequest;n.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+r.location.hostname+"/"+a+"_"+adid+"_"+impId+"_"+t+".html",!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.setRequestHeader("x-amz-acl","public-read"),n.send(e.document.documentElement.outerHTML)}var I;C(r,"top"),r!=window&&C(window,"iframe_tag"),r!=window.parent&&C(window.parent,"iframe_tag_parent"),r!=window.parent.parent&&C(window.parent.parent,"iframe_tag_parent_parent"),(I=n.getElementById("adloaderframe"))&&C(I.contentWindow,"iframe_top_child")}}()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}});


try{__tagObject_callback_744106714273({ImpressionID:"f8a60c74f6eb4be583138b4ec95dbb2c", ServerPublicDns:"tps705.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "f8a60c74f6eb4be583138b4ec95dbb2c");}catch(e){}
try{__verify_callback_744106714273({
ResultID:2,
Passback:"",
AdWidth:728,
AdHeight:90});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "f8a60c74f6eb4be583138b4ec95dbb2c");}catch(e){}
