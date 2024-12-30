var qrcode = false;
var barcode = false;
var famiCode = false;
window.onload = function () {
    if (/[?&]sign=/.test(location.href)) {
        /*驗證碼取CODE--跨域issue
        const urlsign = location.href.match(/[?&]sign=([^&]+)/);
        if (urlsign) {
            var signature = urlsign[1];
            //blocked by CORS policy,->gas->getkey->url+return_key
            location.href = 'https://script.google.com/macros/s/AKfycbwhxHZQ4zOkJ6d4j9hXih3tpk6eC0MlDAQnij2EdIGLwkteksGOq1PYom-2fBwNS0-w/exec?v=' + signature;
       
            }
        */
    } else {
        if (/[?&]code=/.test(location.href)) {
            const urlcode = location.href.match(/[?&]code=([^&]+)/);
            if (urlcode) {
                var codes = urlcode[1].split(',').map(i => i.trim());
                var output = document.getElementById('entercode');
                output.value = codes.join('\n');
            }
        }
        if (/[?&]mode=/.test(location.href)) {
            const urlmode = location.href.match(/[?&]mode=([^&]+)/);
            if (urlmode) {
                var mode = urlmode[1];
                console.log(mode);
                if (mode == 'bar') {
                    document.querySelector('#mode').innerText = '1';
                    var el = document.querySelector('.modebtn');
                    el.innerHTML = 'QRcode<hr>一維條碼';
                    qrcode = true;
                    barcode = true;
                }
                if (mode == 'qr') {
                    document.querySelector('#mode').innerText = '2';
                    var el = document.querySelector('.modebtn');
                    el.innerHTML = 'QRcode';
                    qrcode = true;
                    barcode = false;
                }/*else{
                    alert('預設為：QRcode及一維條碼')
                }*/
            }
        }
        if (/[?&]fami=/.test(location.href)) {
            const urlfami = location.href.match(/[?&]fami=([^&]+)/);
            if (urlfami) {
                var fami = urlfami[1];
                if (fami == 'y') {
                    famiCode = true;
                    document.querySelector('.famibtn').style.display = 'inline';
                    document.querySelector('.famibtn').style.backgroundColor = '#ff0000';
                    qrcode = true;
                    barcode = false;
                    document.querySelector('.modebtn').style.display = 'none';
                }
                if (fami == 'n') {
                    document.querySelector('.famibtn').style.display = 'none';
                    famiCode = false;
                    document.querySelector('.famibtn').style.backgroundColor = '#969696';
                }
            }
        }
    }
}