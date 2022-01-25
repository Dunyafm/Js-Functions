//Task2:Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapin:
let arr =[1,3,7,12,14,15,18,21,33,77];

function devidedOdd(arr) {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%3==0 && arr[i]%7==0) {
            count=(arr[i]);
            console.log(count);
        }
}   }

devidedOdd(arr)

