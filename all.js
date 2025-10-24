
// --------產品總表--------------------
  //篩選
  function openPopup() {
    const bk = document.querySelector('#bk');
    const popup = document.querySelector('#popup');
    bk.classList.add('active');
    popup.classList.add('active');
  }
  function closePopup() {
    const bk = document.querySelector('#bk');
    const popup = document.querySelector('#popup')
    bk.classList.remove('active');
    popup.classList.remove('active');
  }