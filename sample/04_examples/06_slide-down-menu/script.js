// ページが読みこまれたら処理を開始します
$(document).ready(function () {

  //
  // jQuery では $('xxxxxx') とかくことで、
  // html の要素を選び出すことができます。
  // 詳しくは 「jQuery セレクタ」 などで検索するといろいろ出てきます。
  //
  // jQuery には slideDown, slideUp, faceIn, fadeOut など
  // さまざまなアニメーションにまつわる機能が備わっています。
  // 今回は 「上下に開閉する」 動きなので、slideDown, slideUp をつかいます。
  //

  var $menu = $('.js-menu');          // js-menu というクラス名のついた要素を取得
  var $btnOpen = $('.js-open');       // js-open というクラス名のついた要素を取得
  var $closeOpen = $('.js-close');    // js-close というクラス名のついた要素を取得


  // $btnOpen をクリックしたら
  $btnOpen.on("click", function(){

    // メニューをスライドダウンさせて表示する
    $menu.slideDown({
      duration: 300
    })
  });

  // $btnClose をクリックしたら
  $closeOpen.on("click", function(){

    // メニューをスライドアップさせて隠す
    $menu.slideUp({
      duration: 300
    })
  });
})
