const FN = "islam"
const LN = "Mohamed"
const AGE = "25"
const City = "cairo"
const Country = "Egypt"

// module.exports = FN 
// module.exports = LN 

function mul(x,y){
    console.log(x*y)
}

function add(x,y){
    console.log(x+y)
}

function sub(x,y){
    console.log(x-y)
}

module.exports = {
    fName : FN ,
    LName : LN ,
    age : AGE ,
    city : City,
    country:Country,
    fun1 : mul,
    fun2:add,
    fun3:sub,
} 