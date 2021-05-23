
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



// ------------------------about us終わり-------------------------


// 共通ヘッダー;
// function header() {
//   $.ajax({
//     url: "header.html",
//     cache: false,
//     success: function (html) {
//       document.write(html);
//     }
//   });
// }


