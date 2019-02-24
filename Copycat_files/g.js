<html>
<body onload='rfiFirePixels()'>
<script type="text/javascript">

window.rfiEventHandler = function(obj, type, handler) {
    if (obj.addEventListener) {
        obj.addEventListener(type, handler, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + type, handler);
    }
    obj['on' + type] = handler;
};

window.rfiFirePixels = function() {
    var data = new Object();
    var timeout = 15000, collectStats = !0, statsDone = !1;
    var pixels = [{"b":17243,"s":"http://ib.adnxs.com/setuid?entity=18&code=1637410308621958697"}, {"b":51433,"s":"http://pixel.rubiconproject.com/tap.php?v=13490&nid=2596&put=1637410308621958697&expires=30&next="}, {"b":54855,"s":"http://image2.pubmatic.com/AdServer/Pug?vcode=bz0yJnR5cGU9MSZjb2RlPTI3MzkmdGw9MTU3NjgwMA==&piggybackCookie=1637410308621958697&r="}, {"b":53935,"s":"http://dpm.demdex.net/ibs:dpid=1121&dpuuid=1637410308621958697&redir="}, {"b":55507,"s":"http://ckm-m.xp1.ru4.com/cx?_i=57753720&_u=1637410308621958697&redirect="}, {"b":54651,"s":"http://pixel.advertising.com/ups/55856/sync?uid=1637410308621958697&_origin=1"}, {"b":52220,"s":"http://dsum.casalemedia.com/rum?cm_dsp_id=57&external_user_id=1637410308621958697&forward="}, {"b":55065,"s":"http://soma.smaato.net/oapi/idsync?redirect=http%3A%2F%2Fp.rfihub.com%2Fcm%3Fpub%3D720%26partnerId%3DSomaCookieUserId"}, {"b":42261,"s":"http://us-u.openx.net/w/1.0/sd?id=537073062&val=1637410308621958697&r="}, {"b":50495,"s":"http://e.nexac.com/e/rocketfuel_sync.xgi?na_exid=1637410308621958697"}, {"b":53707,"s":"http://sync.search.spotxchange.com/partner?adv_id=7180&uid=1637410308621958697&img=1"}, {"b":54497,"s":"http://aa.agkn.com/adscores/g.pixel?sid=9212192898&rf=1637410308621958697"}, {"b":54645,"s":"http://tapestry.tapad.com/tapestry/1?ta_partner_id=937&ta_partner_did=1637410308621958697&ta_format=gif"}, {"b":56659,"s":"http://x.bidswitch.net/sync?dsp_id=119&user_id=1637410308621958697&expires=30"}, {"b":57419,"s":"http://trc.taboola.com/sg/rocketfuel-network/1/rtb-h/?taboola_hm=1637410308621958697"}, {"b":57795,"s":"http://mid.rkdms.com/bct?pid=b151435b-9c0e-4361-9268-647f8ff9b20c&puid=1637410308621958697&_ct=img"}, {"b":58143,"s":"http://contextual.media.net/cksync.php?cs=3&type=rkt&ovsid=1637410308621958697"}];
    var fbPixels = [
        
    ];
    var additionalHtml = "";
    var pixelId = 2039;
    var debugInfo = null;
    var total = additionalHtml !== "" ? 1 : 0;
    var timer = null;
    pixels = pixels || [];
    pixels = pixels.concat(fbPixels);
    data.id = "383,2039,c8b28f0b88292ddcf440e77301ee4841";
    data.saveUuid = !1;

    var sendMsg = function(type, data) {
        var msg = new Object();
        msg.type = type;
        msg.id = pixelId;
        if (data != null) {
            msg.data = data;
        }
        window.parent.postMessage(msg, '*');
    };

    if (debugInfo != null) {
        var inIframe = (function() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        })();

        if (!inIframe) {
            console.log(JSON.stringify(debugInfo));
        } else {
            sendMsg(3, debugInfo);
        }
    }

    if (additionalHtml !== "") {
        var d = document.createElement("div");
        d.id = "rfiAddH";
        d.innerHTML = additionalHtml;
        document.body.appendChild(d);
    }

    if (collectStats) {
        data.stats = new Object();
        for (i in pixels) {
            data.stats[pixels[i].b] = "";
        }
    }

    var recordTime = function(elem, type) {
        if (collectStats) {
            data.stats[elem.elemId] = (new Date().getTime() - elem.initTime) + "," + type;
        }
        total--;
        if (total <= 0) {
            sendStats();
            sendMsg(1, data);
            timer && clearTimeout(timer);
        }
    };

    for (i in pixels) {
        var img = document.createElement('IMG');
        img.onload = function() {
            recordTime(this, 1);
        };
        img.onerror = function() {
            recordTime(this, 2);
        };
        img.onabort = function() {
            recordTime(this, 3);
        };
        img.elemId = pixels[i].b;
        img.src = pixels[i].s;
        var t = new Date().getTime();
        img.initTime = t;
        document.body.appendChild(img);
        total++;
    }

    var sendStats = function() {
        sendMsg(2, data);
    };

    timer = setTimeout(function() {
        sendStats();
        sendMsg(1, data);
        timer = null;
    }, timeout);

    var unloadEventHandler = function(event) {
        if (collectStats && !statsDone) {
            sendStats();
            statsDone = !0;
        }
    };

    rfiEventHandler(window, "unload", unloadEventHandler);
    rfiEventHandler(window, "beforeunload", unloadEventHandler);
};
</script>
</body>
</html>
