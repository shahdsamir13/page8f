




//dark
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})


    
    //scrol

let btn2 = document.getElementById('btn2');



btn2.addEventListener('click', function () {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'
    })

})