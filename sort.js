var arraytosort = [2,3,6,7,3,4,4,6,7,3,2,3,1,6,7,2,9,0,0]

function sort1(arraytosort){
    for(var i = arraytosort.length; i>0;i --){
        for(var y=0; y<i;y++){
            if(arraytosort[y] > arraytosort[y+1]){
                var ex = arraytosort[y]
                arraytosort[y] = arraytosort[y+1]
                arraytosort[y+1] = ex
            }
        }
    }
    return arraytosort
}
console.log(sort1(arraytosort))


function sort2(arraytosort){
    for(var i =0; i<arraytosort.length;i ++){
        for(var y=i+1; y<arraytosort.length-1;y++){
            if(arraytosort[i] > arraytosort[y]){
                var ex = arraytosort[i]
                arraytosort[i] = arraytosort[y]
                arraytosort[y] = ex
            }
        }
    }
    return arraytosort
}

console.log(sort2(arraytosort))


// for(var i = 0; i<arraytosort.length; i++){

//     for(var y = i+1; y<arraytosort.length-1; y++){

    
//     if(arraytosort[i] % 2 == 0 && arraytosort[y] % 2 == 1){
//         var xd = arraytosort[i] 
//         arraytosort[i] = arraytosort[y]
//         arraytosort[y] = xd
        

//     }
// }
    
// }


