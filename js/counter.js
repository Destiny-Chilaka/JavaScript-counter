const number = document.getElementById('number')    ,
      resetBtn = document.getElementById('reset-btn'),
      IncreaseBtn = document.getElementById('increase-btn'),
      DecreaseBtn = document.getElementById('decrease-btn');

     let display = 0;

      resetBtn.addEventListener('click', function(){
        display = 0;
        number.textContent = display;

      });

        IncreaseBtn.addEventListener('click', function(){
             display ++;
             number.textContent = display;
      });

        DecreaseBtn.addEventListener('click', function(){
            display --;
            number.textContent = display;
      });

      