AllowBinaryOnly();

function AllowBinaryOnly(){
    document.getElementById('binary-input').addEventListener('keydown', function(e){
        let zero = e.key != 0;
        let one = e.key != 1;
        let backspace = e.key != 'Backspace';
        let deleteKey = e.key != 'Delete';
        let arrowL = e.key != 'ArrowLeft';
        let arrowR = e.key != 'ArrowRight';

        if(zero && one && backspace && deleteKey && arrowL && arrowR){
            console.log(e.key);
            e.preventDefault();
        }
    });
}

function BinaryToDecimal(binary){
    let binaryArray = binary.split('');
    binaryArray.reverse();
    let value = 1;
    let decimal = 0;

    for(let i = 0; i <= binaryArray.length; i++){
        if (binaryArray[i] == '1'){
            decimal += value;
        }
        value = value * 2;
    }

    return decimal;
}

function Convert(){
    let decimal = BinaryToDecimal(document.getElementById('binary-input').value);
    document.getElementById('result').innerHTML = decimal;
}
