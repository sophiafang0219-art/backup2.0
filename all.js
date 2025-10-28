
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

//產品列表排列
$(function () {
  function adjustWidth() {
    let windowWidth = $(window).width();
    console.log('目前視窗寬度:', windowWidth);
    
    if (windowWidth <= 800) {
      console.log('執行 ≤800 的設定');
      $('.prodAll .list').css('width', '360px');
    } else if (windowWidth <= 1170) {
      console.log('執行 ≤1170 的設定');
      $('.prodAll .list').css('width', 'calc(360px * 2 + 36px)');
    } else {
      console.log('執行 >1170 的設定');
      $('.prodAll .list').css('width', 'calc(360px * 3 + 36px * 2)');
    }
  }
  
  adjustWidth();
  $(window).resize(adjustWidth);
});
// $(function () {
//   if ($(window).width() <= 800) {
//     $('.prodAll list').css('width', '360px')
//   }
//   else if ($(window).width() <= 1170) {
//     $('.prodAll list').css('width', 'calc(360px * 2 + 36px)')

//   }
// })

// .css({
// 					left: e.pageX + 10,
// 					top: e.pageY + 10,

// 				})
// -----------------個別產品頁---------------
$(function () {
  // $('img物件').attr(`src`, `路徑+檔名`)
  $('.pics>img').click(function () {
    newImg = $(this).attr('src');
    $('.big').attr('src', newImg);
  });
  // $('.pics .up').click(function () {
  //   let preImg = newImg.prev().attr('src');
  //   $('.big').attr('src', preImg);
  // });


});