const calculation =(argumants,...others)=>{
    console.log(others.length);
    let sum =0;
    others.map(number=>{
        sum = sum + number;
    })

    console.log("Ths sum is: ",sum + argumants)
}

calculation(1,2,3,4,5,6,9,5,21,6,6,6,6,5);