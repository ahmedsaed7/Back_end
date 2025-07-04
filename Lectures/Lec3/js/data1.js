const fs = require('fs');
const addPerson = (FN,LN)=>{
    const AllData = LoadData();
    const Person = {
        id : AllData.length+1,
        Fname : FN,
        Lname : LN
    }
    AllData.push(Person);
    SaveData(AllData);
    return Person;
}

const LoadData =()=>{
    try{
        const Datajson = fs.readFileSync('data.json').toString();
        const DataObject = JSON.parse(Datajson)
        return DataObject;
    }catch(err){
        return [];
    }
    
}

const SaveData = (Data)=>{
    const Datajson = JSON.stringify(Data);
    fs.writeFileSync('data.json',Datajson);
}

const DeletePerson = (id)=>{
    const AllData = LoadData();
    const index = AllData.findIndex((Person)=>Person.id === id);
    if(index === -1){
         return {error: `No item found with id ${id}`};
    }

    const deletedItem = AllData.splice(index, 1)[0];
    SaveData(AllData);
    return deletedItem;
}

const getPersonById = (id)=>{
    const AllData = LoadData();
    const Person = AllData.find((Person)=>Person.id === id);
    return Person;
}

const readData = (id)=>{
    const AllData = LoadData();
    const  itemNeeded = AllData.find((item) => { 
        return item.id  == id 
    })

    if(itemNeeded){
        console.log(itemNeeded)
    }else{
        console.log(`Error the data with id ${id} is  not found `);
    }
}

const ListDataFromID = (id)=>{
    const AllData = LoadData();
    const AllDataFromID = {}
    for( let i = id ; i<AllData.length ;i++){
        AllData.map((item) => {
            return AllDataFromID.push(item.id == id )           
        })
    } 
    if(AllDataFromID){
        console.log(AllDataFromID)
    }else{
        console.log(`Error the data with id ${id} is  not found `);
    }
}

const List = ()=>{
    const AllData = LoadData();
    AllData.forEach((item)=>{
        console.log(`the id is ${item.id} ,first name is ${item.Fname} and the last name is ${item.Lname}`)
    })
}

module.exports = {
    addPerson,
    DeletePerson,
    getPersonById,
    readData,
    ListDataFromID,
    List
}