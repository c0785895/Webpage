$(function (){
    $('.nav').hide(); // hide main menu
    $('.menu-btn').click(function (){ // select menu-button
        $('.nav').toggle(300); // expands menu
    });

    $('.sub-menu').hide(); // hides sub-menu
    $('.nav li.expand').click(function(){ // selects button to expand menu
        $('.sub-menu').toggle(300); // shows sub-menu
    });

});
