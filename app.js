let switch1 = document.querySelector('.switch-on');
const switch2 = document.querySelector('.switch-off');
switch1.addEventListener('click', ()=> {
    document.querySelector('.bulb-on').style.backgroundColor = 'white';
    switch1.style.boxShadow = 'none'
    if(switch2.style.boxShadow = 'none') {
        switch2.style.boxShadow = '3px 2px 2px rgb(167, 146, 146)';
        switch1.style.boxShadow = 'none';
    }
})
switch2.addEventListener('click', ()=> {
    document.querySelector('.bulb-on').style.backgroundColor = 'black';
    if (switch1.style.boxShadow = 'none') {
        switch1.style.boxShadow = '3px 2px 2px rgb(167, 146, 146)';
        switch2.style.boxShadow = 'none';
    }
})
let dayTime = document.querySelector('.toggle');
let image = document.querySelector('img');
dayTime.addEventListener('click', ()=> {
    image.style.display = 'block';
})