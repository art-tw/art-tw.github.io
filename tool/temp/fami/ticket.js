$(document).ready(function () {
    $("#barcode,.scale").on("click", function () {
        $(".img-scale").show();
    });

    $(".img-close").on("click", function () {
        $(".img-scale").hide();
    });

    $(".unexchange").on("click", function () {
        var pincode = $(this).attr("pincode");
        console.log(pincode.length)

        var title =
            '<h2 class="title font-orange font-normal">列印實體單兌換</h2>';

        if(pincode.length==19){
            var content =
                    `           
            <p class="text-left" style='line-height:24px'>1.請至全家各門市FamiPort機台</p>

            <p class="text-left" style='line-height:24px'>2.點選『紅利』>『紅利PIN碼』>『實體卡補印』</p>
            <p class="text-left" style='line-height:24px'>3.輸入19碼補印序號『<span style="color:#008cd5;" class="unable_pincode">` +
                    pincode +
                    `</span>』</p>
            <p class="text-left" style='line-height:24px'>4.確認商品並列印兌換券</p>
            <p class="text-left" style='line-height:24px'>5.提供給店員掃描即完成兌換</p>`;
        }else{
            var content =
                    `           
            <p class="text-left" style='line-height:24px'>1.請至全家各門市FamiPort機台</p>

            <p class="text-left" style='line-height:24px'>2.點選『紅利』>『紅利PIN碼』>『PIN碼補開通』</p>
            <p class="text-left" style='line-height:24px'>3.輸入開通紅利PIN碼『<span style="color:#008cd5;" class="unable_pincode">` +
                    pincode +
                    `</span>』</p>
            <p class="text-left" style='line-height:24px'>4.『確認開通』>『輸入已開通PIN碼』</p>
            <p class="text-left" style='line-height:24px'>5.確認商品並列印兌換券</p>
            <p class="text-left" style='line-height:24px'>6.提供給店員掃描即完成兌換</p>`;
        }

        $.alert(content, title, function () {});
    });
});
