$(function() {
  var href = window.location.href;
    console.log(1);
  $('li.nav-item').each(function(e,i) {
          console.log(2);
    if (href.indexOf($(this).find("a").attr('href')) >= 0) {
      $(this).addClass('active');
        console.log(this);
    }
  });
});