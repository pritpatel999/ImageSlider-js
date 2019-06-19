(function(){
    const picture=[
        'img/ps1',
        'img/ps2',
        'img/ps3',
        'img/ps4',
        'img/ps5',
        'img/ps6'
    ];

    let counter = 0;
    const btn = document.querySelectorAll('.btn');

    btn.forEach(function(bt){
        bt.addEventListener('click',function(event){
            const value = event.target;
            // console.log(value);
                
        if(value.classList.contains('fa-caret-left')){
            counter--;
            if(counter<0){
                counter = picture.length -1;
            }
            //console.log(counter);
            const abc = document.querySelector('.img-container')
            abc.style.background = `url('${picture[counter]}.JPG')center/contain fixed no-repeat`;
        }
        if(value.classList.contains('fa-caret-right')){
            counter++;
            if(counter>picture.length-1){
                counter = 0;
            }
            //console.log(counter);
            const abc = document.querySelector('.img-container')
            abc.style.background = `url('${picture[counter]}.JPG')center/contain fixed no-repeat`;
        }
     });

    });
})();






