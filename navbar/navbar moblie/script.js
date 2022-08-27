selector(".menu").addEventListner('click', function () {
    this.class.toggle('open');
    selector('header').classList.toggle('open');
    selector('overlay').classList.toggle('open');
});



function selector(s) {
    return document.querySelector(s)
}
