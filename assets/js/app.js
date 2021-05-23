$(function () {

  $('#all-chaki').hide();
  $('#all-tem').hide();
  $('.chakitem-slide').hide();

  $('#chaki-h2').on('click', function () {
    // console.log("hello");
    $('#all-chaki').slideDown();
  });
  $('#tem-h2').on('click', function () {
    // console.log("hello");
    $('#all-tem').slideDown();
  });
  $('#chakitem').on('click', function () {
    // console.log("hello");
    $('.chakitem-slide').slideDown();
  });

});

// 共通ヘッダー;
function header() {
  $.ajax({
    url: "header.html",
    cache: false,
    success: function (html) {
      document.write(html);
    }
  });
}
