// PCのみ慣性スクロール効果適用(luxy.js)
if (!(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
    luxy.init();
}

// 定義
const nav = document.querySelector('.humberger-menu');
const btn = document.querySelector('.toggle_btn');
const el = document.querySelector('.load-anim');
const op = document.querySelector('.top-op');
const kv = document.querySelector('.kv-img');
const kvsp = document.querySelector('.kv-sp-img')
const copy = document.querySelector('.copy-wrapper');
const ipad = document.querySelector('.mission-wrapper__ipad');
const service = document.querySelector('.service-wrapper__layout');
const subtitle = document.querySelector('.pc-subtitle');
const text = document.querySelector('.mission-wrapper__layout');
const bg = document.querySelector('.service-wrapper__sp-bg');
const iMac = document.querySelector('.work-wrapper__iMac');
const iMacsp = document.querySelector('.work-wrapper__iMac--sp');
const second = document.querySelector('.second');
const work = document.querySelectorAll('.work-wrapper__block');
const contact = document.querySelector('.contact-wrapper__img-block');
const context = document.querySelector('.contact-wrapper__layout');
const undercopy = document.querySelector('.under-copy-wrapper');


btn.addEventListener('click', function(){
    nav.classList.toggle("open");
    btn.classList.toggle('open');
});

// トップページロード時のクラス付与
window.addEventListener('load', function() {
    op.classList.add("op-load");
});

// ロードアニメーションが終了後クラス付与
el.addEventListener('animationend', function() {
    op.classList.add("is-hide");
    kv.classList.add("open");
    kvsp.classList.add("open");
    const open = function() {
        copy.classList.add('open')
    };
    setTimeout(open, 500);
});

// ロード時にスクロールトップに移動
$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});

// スクロール検知
const cb = function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {

        }
    });
}
// スクロール検知オプションパラメータ
const options = {
    rootMargin: "-45% 0px",
};

// スクロール検知初期化
const io = new IntersectionObserver(cb, options);

io.observe(ipad);
io.observe(text);
io.observe(service);
// io.observe(subtitle);
io.observe(iMac);
io.observe(iMacsp);
io.observe(contact);
io.observe(bg);
work.forEach(el => io.observe(el));

// service.addEventListener('transitionend', function() {
//     subtitle.classList.add('active')
// });


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

// 文字分割対象宣言
const copySplit = new TextAnimation('.copy-split');
const copySplit2 = new TextAnimation('.copy-split2');
const missionSplit = new TextAnimation('.mission-wrapper__split');
const missionSplit2 = new TextAnimation('.mission-wrapper__split2');
const subSplit = new TextAnimation('.mission-wrapper__subtitle');
const serviceSplit = new TextAnimation('.service-wrapper__split');
const workSplit = new TextAnimation('.work-wrapper__split');
const workSplit2 = new TextAnimation('.work-wrapper__split2');
const contactSplit = new TextAnimation('.contact-wrapper__split');

