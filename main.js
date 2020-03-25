var inputBinary = document.querySelector('#binary');
    var outputDecimal = document.querySelector('#decimal');
    var btnConvert = document.querySelector('#btnConvert');

    function verify(txtBinary){
        if(txtBinary==='') return false;
        for(let i=0,size = txtBinary.length; i<size;i++){
            if(txtBinary[i]!=='0' && txtBinary[i]!=='1'){
                return false;
            }
        }
        return true;
    }

    btnConvert.onclick = function(){
        var textBinary = (inputBinary.value).trim();
        if(verify(textBinary)){
            var decimal = parseInt(textBinary,2);
            outputDecimal.value = decimal;
        }
        else{
            outputDecimal.value = '';
            alert("Enter a binary number");
        }
    }