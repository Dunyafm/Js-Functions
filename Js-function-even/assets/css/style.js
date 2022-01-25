//Task1:Arrayin icindeki cut ededlerin kvadratlarinin cemini hesabla:

let arr =[2,3,5,1,4,6,8,7];
let sum=0;
function squereArr(arr){
   let count=0; 

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]%2==0) {
            
            count=((arr[i])*(arr[i]))
            sum+=count;
            
            
            
            
        }
        
        
    }
    console.log(sum);
}
squereArr(arr);   

