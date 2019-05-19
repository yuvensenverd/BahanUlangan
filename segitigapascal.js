var arraypascal = [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1], [1,5,10,10,5,1], [1,6,15,20,15,6,1]]

function segitigapascal(angka){
    var output = ""
    var index = 0
    for(var y = 0; y<angka; y++){
        output = output + "*"
        for(var i = 0; i<angka; i++){
            output = output + "*"
            
            
        }
        
    return output
}
    
}

// console.log("     1")
// console.log("    1 1")
// console.log("   1 2 1")
console.log(segitigapascal(5))