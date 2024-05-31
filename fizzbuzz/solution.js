function fizzbuzz(){
    const results = [];
    for (let i=1;i<=100; i++){

        if (i % 3 === 0 && i % 5 ===0){
            results.push('FIZZBUZZ');
        }else if (i % 3 ===0){
            results.push('FIZZ');
        }else if (i % 5 === 0 ){
            results.push('BUZZ');
        }else{
            results.push(i);
        }

        
    }
    return results;
}
console.log (fizzbuzz(100));