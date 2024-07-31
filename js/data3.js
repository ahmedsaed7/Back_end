const fs =  require("fs")
const addPerson = (ID , FName , LName , Age , City )=>{
    const allData = loadData() // object
    const duplicatedData = allData.filter((obj) => {
        return obj.id === ID 
    })
    // console.log(duplicatedData)
    if(duplicatedData.length === 0){
        allData.push({ 
            id : ID ,
            FName : FName ,
            LName : LName ,
            age : Age ,
            city: City
           
        })
        saveAllData(allData)
    }else{
        console.log("Error the id already exist")
    } 
}

const loadData =()=>{
    try{
         const DataJson = fs.readFileSync("data1.json").toString() //read data from the file
        return JSON.parse(DataJson) // turn data to object
    }
    catch{
        return []
    }
}

const saveAllData =(allData)=>{
    const allDataJson = JSON.stringify(allData) // json
    fs.writeFileSync("data1.json",allDataJson) // storage in file as json
}

const deleteData=(id)=>{
    const allData = loadData() // object
    const DataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })
    // console.log(DataToKeep)
    console.log("you have already deleted an item with ID : " + id)
    saveAllData(DataToKeep)
}

const readData =(id)=>{
    const allData = loadData() 
    const DataToRead = allData.find((obj)=>{
        return obj.id === id
    })
    if(DataToRead){
        console.log("The items with id = " + id + " is " )
        console.log(DataToRead)
    }else{
        console.log("ERROR The items with id = " + id + " is not found ")
    }
}

const ListData=()=>{
    const allData = loadData()
    allData.forEach((obj) => {
        // console.log("the data you want to list FName , LName , Age And  City is ")
        console.log("The First Name :- " + obj.FName ," &&  The Last Name :- " +  obj.LName ," &&  The Age :- " +  obj.age ," &&  The City : " +  obj.city)
    });
}

module.exports={
    addPerson,
    deleteData,
    readData,
    ListData
}
