input1 = document.getElementById('input1');
            input2 = document.getElementById('input2');
            input1.addEventListener('input' ,function(){
                let c = input1.value
                let f = (9/5 * c) + 32
                input2.value = f.toFixed(4)
            });
            input2.addEventListener('input' , function(){
                let f = input2.value
                let c = 5/9*(f - 32)
                input1.value = c.toFixed(4)
            });