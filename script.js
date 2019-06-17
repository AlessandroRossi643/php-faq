$(document).ready(function(){
  $('.header_list ul li').click(function(){
    var scheda_corrente=$('.textaperto');
    $(this).addClass("textaperto");
    console.log($(this).attr("data-scheda"));
    $('.container').children().hide();
    $(scheda_corrente).removeClass("textaperto");
  });

  $('.header_list ul li[data-scheda=4]').click(function(){
      $('.container').children().show();
  });
});
