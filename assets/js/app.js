
$(function () {
  


// ------------------------about us-------------------------
 $('#all-chaki').hide();
 $('#all-tem').hide();
 $('.chakitem-slide').hide();



  $(function () {

  $('#all-chaki').hide();
  $('#all-tem').hide();
  $('.chakitem-slide').hide();

  $('#chaki-h2').on('click', function () {
    $('#all-chaki').slideDown();
  });

  $('#tem-h2').on('click', function () {
    $('#all-tem').slideDown();
  });

  $('#chakitem').on('click', function () {
    $('.chakitem-slide').slideDown();
  });

});

});

// トップへ戻るh1のaboutにつけた
// $('#q9-btn').on('click', function() {
//   $('body, html').animate({scrollTop: 0}, 500);
// });

// ------------------------about us終わり-------------------------


// 共通ヘッダー;
function header(){
  $.ajax({
      url: "header.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}
// function header() {
//   $.ajax({
//     url: "header.html",
//     cache: false,
//     success: function (html) {
//       document.write(html);
//     }
//   });
// }


