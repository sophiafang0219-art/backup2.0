//---------nav hamburger-------------
$(function () {

  // alert('dasdd')

console.log('start');

})
// $(".menu").on("click", function () {
//   $(this).toggleClass('active')
// });
// $('.menu').on().click(function () {
// })


// --------產品總表--------------------
//篩選
function openPopup() {
  const bk = document.querySelector('#bk');
  const popup = document.querySelector('#popup');
  bk.classList.add('active');
  popup.classList.add('active');
};
function closePopup() {
  const bk = document.querySelector('#bk');
  const popup = document.querySelector('#popup')
  bk.classList.remove('active');
  popup.classList.remove('active');
};
//產品列表標題




//產品列表排列
$(function () {
  function adjustWidth() {
    let windowWidth = $(window).width();
    if (windowWidth <= 535) {
      $('.prodAll h2:nth-child(1)').html(`產品列表<br>（閱讀器及周邊）`)
      $('.prodAll .list').css('width', '360px');
    } else if (windowWidth <= 800) {
      $('.prodAll .list').css('width', '360px');
    } else if (windowWidth <= 1170) {
      $('.prodAll .list').css('width', 'calc(360px * 2 + 36px)');
    } else {
      $('.prodAll .list').css('width', 'calc(360px * 3 + 36px * 2)');
    }
  }
  adjustWidth();
  $(window).resize(adjustWidth);
});

// -----------------個別產品頁---------------
$(function () {
  // $('img物件').attr(`src`, `路徑+檔名`)
  $('.pics>img').click(function () {
    newImg = $(this).attr('src');
    $('.big').attr('src', newImg);
  });
});