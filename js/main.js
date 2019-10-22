/*Р”Р°РЅРЅС‹Р№ С€Р°Р±Р»РѕРЅ Р±С‹Р» РїСЂРёРѕР±СЂРµС‚С‘РЅ РЅР° СЃР°Р№С‚Рµ Landistore.com*/
/*Landistore - РёРЅС‚РµСЂРЅРµС‚-РјР°РіР°Р·РёРЅ РєР°С‡РµСЃС‚РІРµРЅРЅС‹С… СЃР°Р№С‚РѕРІ РґР»СЏ РІР°С€РµРіРѕ Р±РёР·РЅРµСЃР°*/
/*(СЃ) Р’СЃРµ РїСЂР°РІР° Р·Р°С‰РёС‰РµРЅС‹*/
$(document).ready(function() {

    $('#popular-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<span class='pe-7s-angle-left'></span>", "<span class='pe-7s-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    })
    $('#review-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav: true,
        navText: ["<span class='pe-7s-angle-left'></span>","<span class='pe-7s-angle-right'></span>"],
        items: 1
    })
    $("form").submit(function() {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function(data) {
                $('.modal').modal('hide');
                $('body').css('padding-right', '0');
                $('#modal-thank').modal('show');
            },
            error: function(jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });
    jQuery(function($) {
        $(".phone-mask").mask("+8 (999) 999-99-99");
    });
    $(".animate-scroll").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 56
        }, 1500);
    });
});