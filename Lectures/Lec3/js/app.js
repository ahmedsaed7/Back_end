const data = require("./data1")
const yargs = require("yargs")
yargs.command({
    command: "add",
    describe: "add a new item",
    builder: {
        FName:{
            describe: "this the first name description in add command ",
            demandOption: true,
            type: "string",
        },
        LName:{
            describe: "this the Last name description in add command ",
            demandOption: true,
            type: "string",
        }
    },
    handler:(x)=> {
        data.addPerson(x.FName , x.LName )
        console.log("data added successfully")
        console.log(x)
    },
})

yargs.command({
    command: "delete",
    describe: "the item is deleted ",
    builder: {
        Id: {
            describe: "ID of the item to delete",
            demandOption: true,
            type: "number" 
        }
    },
    handler:(x)=> {
        const deleteResult = data.DeletePerson(x.id);
        if (deleteResult.error) {
            console.log(deleteResult.error);
        } else {
            console.log(`Deleted item: ${deleteResult.Fname} ${deleteResult.Lname} (ID: ${deleteResult.id}) successfully`);
        }
        
    },
})

yargs.command({
    command: "read",
    describe: "to read data ",
    builder:{
        id:{
            describe:"this is id desc in read command",
            demandOption: true,
            type: "String",
        }
    },
    handler:(x)=> {
            const item = data.readData(x.id);
    }
})

yargs.command({
    command: "listfrom",
    describe: "to list All data from the id to the end  ",
    builder:{
        id:{
            describe:"this is id desc in read command",
            demandOption: true,
            type: "String",
        }
    },
    handler:()=> {
        const ListData = data.ListDataFromID(x.id)
    },
})

yargs.command({
    command: "list",
    describe: "to list All data ",
    handler:()=> {
        data.List()
    },
})

yargs.parse()