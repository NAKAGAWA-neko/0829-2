<Fragment>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta content="IE=edge" {...{ "http-equiv": "X-UA-Compatible" }} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/** googlfont */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Aoboshi+One&display=swap"
        rel="stylesheet"
      />
      {/** googlfont */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="js/jquery.bgswitcher.js"></script>

      <title>宇宙人と待ち合わせ</title>
    </head>
    <body>
      <section id="top">
        <div class="ba-image">
          <div class="top-all">
            <header>
              {/** ロゴ */}
              <div class="logo">
                <a href="index.html">
                  <img
                    class="logo-img"
                    src="images/logo_y.png"
                    alt="トップページへ"
                  />
                </a>
              </div>
              {/** PCナビ */}
              <navi class="navi-pc">
                <ul>
                  <li class="navi-con">
                    <a href="#alien">宇宙人一覧</a>
                  </li>
                  <li class="navi-con">
                    <a href="#enjoy">宇宙人と行く日本</a>
                  </li>
                  <li class="navi-button">
                    <a href="#inquiry">お問い合わせ</a>
                  </li>
                </ul>
              </navi>

              {/** SPナビ ボタン*/}
              <div class="navi-sp-main">
                <img
                  class="menu-sp"
                  src="./images/bars_24.svg"
                  alt="ナビゲーションを開く"
                  onclick="document.getElementById('nav-sp').style.display = 'block'"
                />

                <navi id="nav-sp">
                  <img
                    class="close"
                    src="./images/908_x_f.svg"
                    alt="ナビゲーションを閉じる"
                    onclick="document.getElementById('nav-sp').style.display = 'none'"
                  />

                  <div class="menu-main">
                    <a
                      class="menu"
                      href="#alien"
                      onclick="document.getElementById('nav-sp').style.display = 'none'"
                    >
                      宇宙人一覧
                    </a>

                    <a
                      class="menu"
                      href="#enjoy"
                      onclick="document.getElementById('nav-sp').style.display = 'none'"
                    >
                      宇宙人と行く日本
                    </a>

                    <a
                      class="menu"
                      href="#inquiry"
                      onclick="document.getElementById('nav-sp').style.display = 'none'"
                    >
                      お問い合わせ
                    </a>
                  </div>
                </navi>
              </div>
              <script>
                {() => {
                  jQuery(function ($) {
                    $(".ba-image").bgSwitcher({
                      images: [
                        "images/main_back.jpg",
                        "images/main_back2.jpg",
                        "images/main_back3.jpg",
                        "images/main_back4.jpg",
                        "images/main_back5.jpg",
                      ],
                      interval: 3000,
                      loop: true,
                      shuffle: false,
                      effect: "drop",
                      duration: 500,
                      easing: "swing", // エフェクトのイージングをlinear,swingから指定
                    });
                  });
                }}
              </script>
            </header>

            <main>
              <div class="top-main">
                <h1>
                  高速で
                  <br />
                  美しい宇宙人が
                  <br />
                  来ています
                </h1>
                <div class="motto-btn-main">
                  <div>
                    <button
                      class="mottomiru-btn"
                      type="button"
                      onclick="location.href='#alien'"
                    >
                      <img src="./images/ufo256.png" alt="UFO" />
                      もっと見る
                    </button>
                  </div>
                  <div>
                    <a href="##" class="mottomiru-btn2 btn2-rotate">
                      <span class="btn-sp-1">宇宙人に会う？</span>
                      <span class="btn-sp-2">
                        <img src="./images/alienface.png" alt="UFO" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/** alienページ */}
      <section id="alien">
        <div class="alien-main">
          <h2>宇宙人一覧</h2>
          <h3>私が会ってきた宇宙人がこちらです。</h3>
          <div class="alien-photo-main">
            <a class="alien-photo" href="#">
              <img src="./images/alien00001.jpg" alt="宇宙人" />
            </a>
            <a class="alien-photo" href="#">
              <img src="./images/alien00007.jpg" alt="宇宙人" />
            </a>
            <a class="alien-photo" href="#">
              <img src="./images/alien00003.jpg" alt="宇宙人" />
            </a>
            <a class="alien-photo" href="#">
              <img src="./images/alien00004.jpg" alt="宇宙人" />
            </a>
            <a class="alien-photo" href="#">
              <img src="./images/alien00005.jpg" alt="宇宙人" />
            </a>
            <a class="alien-photo" href="#">
              <img src="./images/alien00006.jpg" alt="宇宙人" />
            </a>
          </div>
        </div>
      </section>

      {/** enjoyページ */}
      <section id="enjoy">
        <div class="enjoy-main">
          <h2>宇宙人と行く日本</h2>
          <h3>私が宇宙人と5年間以上で遊びに行った日本です。</h3>

          <div class="enjoy-item-main">
            <div class="enjoy-photo">
              <img src="./images/alien00009.jpg" alt="浅草" />
            </div>

            <div class="enjoy-item">
              <h4>浅草寺</h4>
              <div class="item-c">
                <a class="btn-s-1 bgskew">
                  <span class="s-1">賽銭箱の魅力</span>
                </a>
                <a class="btn-s-2 bgcenterout">
                  <span class="s-2">おみくじをする意味</span>
                </a>
              </div>
              <p>お寺好き宇宙人。普段は人間になりすましてお寺で働いてます</p>
            </div>
          </div>

          <div class="enjoy-item-main">
            <div class="enjoy-photo">
              <img src="./images/alien00008.jpg" alt="浅草" />
            </div>

            <div class="enjoy-item">
              <h4>居酒屋</h4>
              <div class="item-c">
                <a class="btn-s-1 bgskew">
                  <span class="s-1">焼き鳥</span>
                </a>
                <a class="btn-s-2 bgcenterout">
                  <span class="s-2">ハイボール濃いめ</span>
                </a>
              </div>
              <p>
                毎回同じものを注文。だいたい３杯飲んだら地球っていいよなって言ってくる
              </p>
            </div>
          </div>

          <div class="enjoy-item-main">
            <div class="enjoy-photo">
              <img src="./images/alien00010.jpg" alt="浅草" />
            </div>

            <div class="enjoy-item">
              <h4>電車</h4>
              <div class="item-c">
                <a class="btn-s-1 bgskew">
                  <span class="s-1">顔は下向き</span>
                </a>
                <a class="btn-s-2 bgcenterout">
                  <span class="s-2">吊り革の革はどこ</span>
                </a>
              </div>
              <p>電車移動が好きな宇宙人。UFOは自動で呼べるらしい</p>
            </div>
          </div>
        </div>
      </section>

      {/** inquiry（お問い合わせ）ページ */}
      <section id="inquiry">
        <div class="inquiry-main">
          <h2>お問い合わせ</h2>
          <p>宇宙人が気になる方はご連絡ください。</p>
        </div>

        <form>
          <div class="form-item-main">
            <div class="form-item-title">
              <label>お名前</label>
            </div>
            <div class="form-content">
              <input
                class="contact-textbox"
                type="text"
                name="name"
                placeholder="宇宙人太郎"
              />
            </div>
          </div>

          <div class="form-item-main">
            <div class="form-item-title">
              <label>好きな数字</label>
            </div>
            <div class="form-content">
              <input
                class="contact-textbox"
                type="text"
                pattern="^[0-9]+$"
                name="name"
                placeholder="9"
              />
            </div>
          </div>

          <div class="form-item-main">
            <div class="form-item-title">
              <label>郵便番号</label>
            </div>
            <div class="form-content">
              <input
                class="contact-textbox"
                type="text"
                pattern="\d{3}-\d{4}"
                name="name"
                placeholder="000-0000"
              />
            </div>
          </div>

          <div class="form-item-main">
            <div class="form-item-title">
              <label>日本に来た日</label>
            </div>
            <div class="form-content">
              <input
                class="contact-textbox"
                type="date"
                name="name"
                value="2000-01-01"
              />
            </div>
          </div>

          <div class="form-item-main">
            <div class="form-item-title">
              <label>メールアドレス</label>
            </div>
            <div class="form-content">
              <input
                class="contact-textbox"
                type="email"
                pattern="^[a-zA-Z]{1}[0-9a-zA-Z]+[\w\.-]+@[\w\.-]+\.\w{2,}$"
                name="name"
                placeholder="uchu@jin.com"
              />
            </div>
          </div>

          <div class="form-item-main">
            <div class="form-item-title">
              <label>宇宙人ですか？</label>
            </div>
            <div class="form-content">
              <input class="radiobutton" type="radio" name="name" value="yes" />
              <label>宇宙人です</label>
              <input
                class="radiobutton"
                type="radio"
                name="name"
                value="no"
                checked
              />
              <label>宇宙人っぽくない</label>
              <input
                class="radiobutton"
                type="radio"
                name="name"
                value="free"
              />
              <label>仕事柄</label>
            </div>
          </div>

          <div class="form-item-main">
            <div class="form-item-title">
              <label>
                メッセージ
                <br />
                （5文字以上）
              </label>
            </div>
            <div class="form-content">
              <input
                class="contact-textbox"
                type="text"
                pattern=".{5,}"
                name="message"
                placeholder="ワレワレハ"
              />
            </div>
          </div>

          <input class="contact-submit" type="submit" value="送信" action="#" />
        </form>
      </section>

      <footer></footer>
    </body>
  </html>
</Fragment>;
