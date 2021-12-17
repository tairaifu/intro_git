// ハンバーガーメニュー
$(function(){
    var $nav   = $('.humberger-menu');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
        $nav.toggleClass('open');
        $btn.toggleClass('open');
    });
});

// PCのみ慣性スクロール効果適用(luxy.js)
if (!(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
    luxy.init();
}

// ページ遷移時にフワッと表示
$(function() {
	$('.under').fadeIn(1000); //1秒かけてフェードイン！
});

// 定義
const contact = document.querySelector('.contact-wrapper__img-block');
const undercopy = document.querySelector('.under-copy-wrapper');
const context = document.querySelector('.contact-wrapper__layout');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const nexta = document.querySelector('.next-contents');
const clist = document.querySelector('.company-list');
const slist = document.querySelector('.underlayer-wrapper__service-list');
const rlist = document.querySelector('.recruit-list');
const dlink = document.querySelector('.detail-link');
const flow = document.querySelector('.underlayer-wrapper__service');
const svimg =  document.querySelector('.underlayer-wrapper__img-layout');
const sbtn =  document.querySelector('.underlayer-wrapper__btn');
const works =  document.querySelectorAll('.underlayer-wrapper__works-item');
const wcategory = document.querySelectorAll('.underlayer-wrapper__works-category');
const ucontext =  document.querySelector('.under-contact-text');
const form =  document.querySelector('.underlayer-wrapper__form');
const pabout = document.querySelectorAll('.underlayer-wrapper__privacy-about');
const pblock = document.querySelectorAll('.underlayer-wrapper__privacy-block');
const ttext = document.querySelector('.underlayer-wrapper__terms-about');
const tblock = document.querySelectorAll('.underlayer-wrapper__terms-block');
const tokushoho = document.querySelectorAll('.underlayer-wrapper__tokushoho-block');
const layout = document.querySelector('.underlayer-wrapper__layout');
// const split = document.querySelector('.underlayer-wrapper__split');
// const split2 = document.querySelector('.underlayer-wrapper__split3');
// ページロード完了後にクラス付与
window.addEventListener('load', function() {
    setTimeout(function() {
        undercopy.classList.add("open")
    }, 500);
});

// スクロール監視
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {

        }
    });
}
// スクロール監視開始ポイント
const options = {
    rootMargin: "-45% 0px",
};
const io = new IntersectionObserver(cb, options);

// コンタクトセクションスクロール監視
io.observe(contact);

// コンタクトロゴ表示後にクラス付与
contact.addEventListener('transitionend', function() {
    const active = function() {
        context.classList.add('active')
    };
    setTimeout(active, 400);
});

// 文字分割クラス関数定義
class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this.chars.reduce((acc, curr) => {
            curr = curr.replace(' ', '&nbsp;')
            return `${acc}<span>${curr}</span>`;
        }, "");
    }
}


// 個別ページ読み込み条件分岐
window.onload = ()=> {
    // パスの取得
    let path = location.pathname
    // aboutページ
    if (path == "/c_piyont/about/about.html") {
        // io.observe(layout);
        io.observe(first);
        io.observe(second);
        io.observe(nexta);
        const Split = new TextAnimation('.underlayer-wrapper__split');
        const Split2 = new TextAnimation('.underlayer-wrapper__split2');
        const Split3 = new TextAnimation('.underlayer-wrapper__split3');
        const Split4 = new TextAnimation('.underlayer-wrapper__split4');
    } 
    // サービスページ
    else if (path == "/c_piyont/service/service.html") {
        io.observe(first);
        io.observe(second);
        io.observe(nexta);
        const Split = new TextAnimation('.underlayer-wrapper__split');
        const Split2 = new TextAnimation('.underlayer-wrapper__split2');
        const Split3 = new TextAnimation('.underlayer-wrapper__detail-split');
        const Split4 = new TextAnimation('.underlayer-wrapper__detail-split2');
    } 
    // クライアントワークページ
    else if (path == "/c_piyont/service/client_work.html") {
        io.observe(first);
        io.observe(second);
        io.observe(flow);
        io.observe(nexta);
        const Split = new TextAnimation('.underlayer-wrapper__split');
        const Split2 = new TextAnimation('.underlayer-wrapper__split2');
        const Split3 = new TextAnimation('.underlayer-wrapper__detail-split-h3');
    }
    // スタートアップページ
    else if (path == "/c_piyont/service/startup.html") {
        io.observe(first);
        io.observe(second);
        io.observe(svimg);
        io.observe(slist);
        io.observe(sbtn);
        io.observe(nexta);
        const Split = new TextAnimation('.underlayer-wrapper__split');
        const Split2 = new TextAnimation('.underlayer-wrapper__split2');
        const Split3 = new TextAnimation('.underlayer-wrapper__detail-split-h3');
    }  
    // worrksページ
    else if (path == "/c_piyont/works/works.html") {
        works.forEach(el => io.observe(el));
        wcategory.forEach(el => io.observe(el));
        io.observe(nexta);
    }  
    // companyページ
    else if (path == "/c_piyont/company/company.html") {
        io.observe(slist);
        io.observe(first);
        io.observe(nexta);
    } 
    // recruitページ
    else if (path == "/c_piyont/recruit/recruit.html") {
        io.observe(first);
        io.observe(slist);
        io.observe(nexta);
        io.observe(sbtn);
    } 
    // contactページ
    else if (path == "/c_piyont/contact/contact.html") {
        io.observe(first);
        io.observe(form);
    } 
    // privacyページ
    else if (path == "/c_piyont/privacy/privacy.html") {
        io.observe(layout);
        pabout.forEach(el => io.observe(el));
        pblock.forEach(el => io.observe(el));
    } 
    // termsページ
    else if (path == "/c_piyont/terms/terms.html") {
        io.observe(layout);
        io.observe(ttext);
        tblock.forEach(el => io.observe(el));
    } 
    // termsページ
    else if (path == "/c_piyont/terms/tokushoho.html") {
        io.observe(layout);
        tokushoho.forEach(el => io.observe(el));
    } 
}


const copySplit = new TextAnimation('.copy-split');
const contactSplit = new TextAnimation('.contact-wrapper__split');




