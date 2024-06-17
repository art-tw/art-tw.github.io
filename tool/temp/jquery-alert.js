var closeBase64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgBjdLbDYAgDAVQLpP6wxzCGvAjkzkKtgYMgRZp4uvSE4GAGOMN4HLOBbNRKaWT+g9Lt0zfnoMdxL2llIwaeHq8ofbnhugK1OPRDah4RJxhaJiwhCY44hpNSIQDNhLiskauoryb1VS/NdVI3DBoqE1P222sUDc2YfwhDWMHSdjSuTt2EFftCXzIH8+3cRVZ5+fQAAAAAElFTkSuQmCC";

$.extend({
    alert: function (message, title, confirmCb, cancelCb, options) {
        $(document.body).css("overflow", "hidden");
        message = message || "";
        title = title || "";
        confirmCb = confirmCb || null;
        cancelCb = cancelCb || null;
        options = options || {};
        var timestamp = new Date().getTime();
        var cancelHtml = `<div class="cancel" style="width: 47%; color: #444;text-align: center;line-height: 42px;border: 1px solid #9B9B9B;font-size: 15px;border-radius: 30px;">${
            options.cancelText ? options.cancelText : "取消"
        }</div>`;
        var confirmHtml = `<div class="confirm" style="width: 47%; color: white;text-align: center;line-height: 44px;font-size: 15px;border-radius: 30px;background: #018DD6;">${
            options.confirmText ? options.confirmText : "確認"
        }</div>`;
        var html = `<div id="alert-${timestamp}" style="background: rgba(0, 0, 0, 0.5);position: fixed;width: 100%;height: 100%;top: 0;left: 0;z-index: 9999;">
        <div style="padding: 20px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);width: 70%;background: white;border-radius: 10px;">
            <div class='close'  style="text-align: right;position:absolute;right:15px;${options.hideClose ? 'display:none;' : ''}"><span style='display:block;float:right;width:13px;height:13px;background:url(${closeBase64}) center center no-repeat'></span></div>
            <div style="font-size: 15px;line-height:20px; color:#007bca;text-align: center;">${title}</div>
            <div style="margin: 20px 0;text-align:center;font-size:13px">${message}</div>
            <div style="display: flex;flex-direction:row;justify-content: space-around;">
                ${cancelCb ? cancelHtml : ""}
                ${confirmCb ? confirmHtml : ""}
            </div>
        </div>
    </div>`;

        var loadinghtml = `<div id="loading-${timestamp}" style="background: rgba(0, 0, 0, 0.5);position: fixed;width: 100%;height: 100%;top: 0;left: 0;z-index: 9999;">
      <img src='/static/v2/images/Rolling.gif' width=50 height=50 style='position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);'/>
    </div`;

        var dom = $(html);
        var loadingDom = $(loadinghtml);

        $.fn.hideLoading = function () {
            loadingDom.remove();
        };

        if (confirmCb) {
            dom.on("click", ".confirm", function () {
                confirmCb();
                close();
                if (options.hasOwnProperty("showLoading")) {
                    options.showLoading && $(document.body).append(loadingDom);
                }
            });
        }
        if (cancelCb) {
            dom.on("click", ".cancel", function () {
                cancelCb();
                close();
            });
        }
        dom.on("click", ".close", function () {
            if (options.hasOwnProperty("closeHref")) {
                window.location.href = options.closeHref;
            } else {
                close();
            }
        });
        $("body").append(dom);
        function close() {
            $(document.body).attr("style", "");
            dom.remove();
        }

        return dom;
    },
});
