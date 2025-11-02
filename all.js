//header-----------//nav hamburger 
//----------首頁-----------------
$(function () {
  $('.stores div').click(function () {
    $(this).toggleClass('active')
    $('.stores div').not(this).removeClass('active')
    let store = $(this).attr('class')
    switch (store) {
      case 'thr active':
        $('.map').html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6633078996942!2d121.5313187!3d25.0454978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97b582d5a73%3A0x9b1e56ab48807d62!2z5LiJ5Ym155Sf5rS75ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1761801825008!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break
      case 'wes active':
        $('.map').html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.694663319551!2d121.50298627435483!3d25.04443413787324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9091dd7f5bf%3A0x30504efa8f2de2b5!2z6Kqg5ZOB55Sf5rS76KW_6ZaA!5e0!3m2!1szh-TW!2stw!4v1761802030940!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break
      case 'dre active':
        $('.map').html(`<iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5782905588803!2d120.30317917427107!3d22.594870532155802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0372ebc9d327%3A0x92317d11de68daf9!2z5aSi5pmC5Luj6LO854mp5Lit5b-DL-e1seS4gOaZguS7o-eZvuiyqOmrmOmbhOW6lw!5e0!3m2!1szh-TW!2stw!4v1760006012620!5m2!1szh-TW!2stw"
          width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break
    }
    $(document).click(function (e) {
      if (!$(e.target).closest('.stores').length) {
        $('.stores div').removeClass('active');
      }
    })
  })
})

$(function () {
  $('.prod li a').click(function (e) {
    e.preventDefault()
    $(this).toggleClass('active')//可複選
    $(document).click(function (e) {
      if (!$(e.target).closest('.prod').length) {
        $('.prod li a').removeClass('active');
      }
    })
  })
})



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
//產品列表排列 //產品列表標題
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



$(function () {
  $('.page .dot').first().addClass('active')//預設第一頁先active
  // 左右切頁面
  $('.page dir:first').click(function () {
    let now = $('.page .dot.active')
    let toPrev = now.prev('.dot')


  })
  $('.page .dot').click(function () {
    $(this).addClass('active')
    $('.page .dot').not(this).removeClass('active')
  })
  $(document).click(function (e) {
    if (!$(e.target).closest('.page').length) {
      $('.page .dot').removeClass('active')
    }
  })
})

// -----------------個別產品頁---------------
$(function () {
  // $('img物件').attr(`src`, `路徑+檔名`)
  $('.pics>img').click(function () {
    newImg = $(this).attr('src');
    $('.big').attr('src', newImg);
  });
});