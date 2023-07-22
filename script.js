const rating = document.querySelectorAll('.ratings span');
const rate_point = document.getElementById('rate');
const submit_btn = document.querySelector('.submit_btn');
const rating_section = document.querySelector('.rating_section');
const thank_section = document.querySelector('.thank_section');

let rate = null;

rating.forEach((option) => {
    option.addEventListener('click', (e) => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add('checked');
        rate = e.target.innerText;
    })
})

submit_btn.addEventListener('click',()=>{
    if(rate){
        rate_point.innerText = rate;
        rating_section.classList.add("hidden");
        thank_section.classList.remove('hidden');
    }
})