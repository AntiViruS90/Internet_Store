$(document).ready(function () { 

    $('.img1').click(function () {
        $('.photo').fadeIn()
        $('.photo_text').animate ({
            opacity : 0.1 ,
        });
        $('.photo_menu_div').hide().fadeIn();
    });

    $('.img2').click(function () {
        $('.photo_img2').fadeIn()
        $('.photo_text').animate ({
            opacity : 0.1 ,
        });
        $('.photo_menu_div').hide().fadeIn();
    });
    $('.img3').click(function () {
        $('.photo_img3').fadeIn()
        $('.photo_text').animate ({
            opacity : 0.1 ,
        });
        $('.photo_menu_div').hide().fadeIn();
    });
    $('.img4').click(function () {
        $('.photo_img4').fadeIn()
        $('.photo_text').animate ({
            opacity : 0.1 ,
        });
        $('.photo_menu_div').hide().fadeIn();
    });

    $('.photo_line a').click(function (e) {
        e.preventDefault();
            if ($('.photo_screen img').attr('src') != $(this).attr('href')) {
                $('.photo_screen img').hide().attr('src', $(this).attr('href')).fadeIn(500).css({
                    width: '100%',
                    height: '100%'
                });
            }
    });

    $('.photo_line a').click(function (e) {
        e.preventDefault();
    });

    $('.photo_menu_div').click(function () {
        $('.photo').fadeOut();
        $('.photo_text').animate ({
            opacity : 1,
        });
    })
    $('.photo_menu_div').click(function () {
        $('.photo_img2').fadeOut();
        $('.photo_text').animate ({
            opacity : 1,
        });
    })
    $('.photo_menu_div').click(function () {
        $('.photo_img3').fadeOut();
        $('.photo_text').animate ({
            opacity : 1,
        });
    })
    $('.photo_menu_div').click(function () {
        $('.photo_img4').fadeOut();
        $('.photo_text').animate ({
            opacity : 1,
        });
    })
    $('.img_info').click(function () {
        $('.description_main').fadeIn(1000);
    });
    $('.description img').click(function () {
        $('.description_main').fadeOut(1000);
    });



















});