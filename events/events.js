var event_url = location.href.split('/');
var event_name = event_url[event_url.length - 1];
var event_items = event_name.split('_');
var event_class = '';
switch (event_items[3]) {
    case 'lineshopping':
    event_class = "購物";
    break;
    case 'linesticker':
    event_class = "貼圖最前線";
    break;
    case 'lineshoppingbrandstore':
    event_class = "購物品牌名店";
    break;
    case 'lineshoppingtopic':
    event_class = "購物夯話題";
    break;
    case 'linetravel':
    event_class = "旅遊";
    break;
    default:
    event_class = "???";

}

document.getElementsByTagName('h1')[0].innerHTML = "20" + event_items[0] + "/" + event_items[1].slice(0, 2) + "/" + event_items[1].slice(2, 4) + "<br>LINE" + event_class + "分享活動(" + event_items[4].split('.')[0] + "次)";

function share() {
    var content = prompt('請輸入分享內容(可填/不填)\n實際分享為：(您輸入的內容+目前網頁網址)\n');
    if (content == null || content == "") {
        window.location.href = "http://line.naver.jp/R/msg/text/?" + location.href;
    } else {
        window.location.href = "http://line.naver.jp/R/msg/text/?" + content + "%0d%0a" + location.href;
    }

}
