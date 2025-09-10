<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>fiction</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- ここにページの中身（スライダーとか）がくる -->

  <!-- ✅ JavaScriptはここに書く！ -->
  <script>
    const carousel = document.querySelector('.highlight-carousel');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');

    btnLeft.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  </script>

</body>
</html>
