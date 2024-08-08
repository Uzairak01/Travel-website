const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


window.addEventListener('scroll', function () {
    const upbtnScroll = document.querySelector('.upbtn');
    if(window.scrollY > 100){
        upbtnScroll.classList.add('upbtnScrolled');
    }else{
        upbtnScroll.classList.remove('upbtnScrolled');
    }
});