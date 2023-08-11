window.onscroll = function() {
    const myHeader = document.getElementById('header');
    const scrollTop = window.scrollY;

  if (scrollTop >= 50) {
    myHeader.classList.add("sticky");
  } else {
    myHeader.classList.remove("sticky");
  }
}