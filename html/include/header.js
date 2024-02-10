function includeHeader() {
  let str = `
<header id="header" class="header">
  <div class="inner">
    <h1 class="h1"><a href="main.html" aria-label="홈페이지 바로가기">박은교 포트폴리오</a></h1>
    <div class="right">
      <button type="button" aria-label="메뉴 열기" class="btn-menu">
        <strong>MENU</strong>
        <span aria-hidden="true" class="gnb-icon"> </span>
      </button>
      <nav class="commonGnb">
        <ol>
          <li class="menu-li"><a href="about.html">About</a></li>
          <li class="menu-li"><a href="work.html">Work</a></li>
          <li class="menu-li"><a href="contact.html">Contact</a></li>
        </ol>
        <a href="https://hiuxc.com/wp/COMPANY%20BRIEF_HIUX.pdf" target="_blank" aria-label="본사소개서 다운로드" class="btn-download">Company Brief</a>
      </nav>
    </div>
  </div>
</header>`;
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
}
includeHeader();
