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

module.exports = {
    addPerson,
    DeletePerson,
    getPersonById
}