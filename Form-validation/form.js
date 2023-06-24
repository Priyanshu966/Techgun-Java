let input1 = document.getElementById('input1');
            let input2 = document.getElementById('input2');
            let valid;
            function validation(){
                if(input1.value == ""){
                    document.getElementById('p1').innerHTML = 'User Name is empty'
                    valid = 0
                }
                else if(input1.value.length <= 4){
                    document.getElementById('p1').innerHTML = 'User name must have 5 character'
                    valid = 0
                }
                else{
                    document.getElementById('p1').innerHTML = ''
                    valid = 1
                }
                if(input2.value == ""){
                    document.getElementById('p2').innerHTML = 'Password is empty'
                    valid = 0
                }
                else if(input2.value.length <= 8){
                    document.getElementById('p2').innerHTML = 'Password must have 8 character'
                    valid = 0
                }
                else{
                    document.getElementById('p2').innerHTML = ''
                    valid = 1
                }
                if(valid == 0){
                    return false
                }
                else{
                    return true
                }
            }