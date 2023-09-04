$('.header_menu').hide();
$('.header_menu_div').hide();
$('.block5_tagP').hide();
$('main').hide();
$('footer').hide();

$('.banner img').hide().fadeIn(2000);
$('.banner h2').hide().fadeIn(2500);
$('.btn_banner').hide().slideToggle(3000);

$('.btn_banner').click(function () {
    $('header').hide(1000);
    $('main').show();
    $('footer').show();
});

$('.headDiv_block2').click(function () {
    $('main').animate({
        opacity: 0.2,
    }, 2000);
    $('.header_menu').slideToggle(1000).animate({
        opacity: 1,
    }, 1000);
    $('.headDiv_block2').fadeOut(1500);
    $('.header_menu_div').fadeIn(2000)
});

$('.header_menu_div').click(function () {
    $('.headDiv_block2').fadeIn(2000);
    $('.header_menu').slideToggle(1000)
    $('main').animate({
        opacity: 1,
    }, 2000)
    $('.header_menu_div').fadeOut(1000)
});


let flag = true;

$('.btn_block5').dblclick(function AddDelete() {
    if (flag) {
        $('.block5_tagP').show(3000);
        $('.btn_block5').text('Double click to hide');
    }
    else {
        $('.block5_tagP').hide(3000);
        $('.btn_block5').text('Double click to show more');
    }
    flag = !flag;
});


$ ('.headDiv_block1').click(function () {
    $('main').animate({
        opacity: 0.1,
    }, 1000);
    $('.auth_main').fadeIn(2000);
});
$('.div_check').click(function () {
    $('.auth_main').fadeOut(2000);
    $('main').animate({
        opacity: 1,
    }, 1000);
});
$('.auth_btn').click(function () {
    $('.auth_main').fadeOut(2000);
    $('main').animate({
        opacity: 1,
    }, 1000);
    setTimeout(function () {
        if ($('#auth').val() == '' || $('#auth2').val() == '' || $('#auth3').val() == '') {
            alert('It is not enough. You need to fill out the form in full!')
        } else {
            alert('You are WELCOME!')
        }
    }, 2000)
});

$('.btn_foot_div1').click(function () {
    if ($('.text1').val() == "" || $('.text2').val() == "") {
        alert("To receive the newsletter you need to fill out the form in full!");
    } else {
        alert ("We will write to You right away!");
    }
});

