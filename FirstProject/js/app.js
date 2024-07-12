const yargs = require("yargs")
const data3 = require("./data3")
yargs.command({
    command: "add",
    describe: "add a new item",
    builder: {
       ID:{
           describe: "this the ID description in add command ",
           demandOption: true,
           type: "string",
        },
        FName:{
            describe: "this the first name description in add command ",
            demandOption: true,
            type: "string",
        },
        LName:{
            describe: "this the Last name description in add command ",
            demandOption: true,
            type: "string",
        },
        Age:{
            describe: "this the Age description in add command ",
            demandOption: true,
            type: "string",
        },
        City:{
            describe: "this the City description in add command ",
            demandOption: true,
            type: "string",
        },
    },
    handler:(x)=> {
        data3.addPerson(x.ID , x.FName , x.LName ,x.Age , x.City)
    }
})

yargs.command({
    command: "delete",
    describe: "delete an item ",
    builder:{
        id:{
            describe:"this is id describe in delete command",
            demandOption: true,
            type: "String",
        }
    },
    handler:(x)=> {
        data3.deleteData(x.id)
    },
})

yargs.command({
    command: "read",
    describe: "read an item  ",
    builder:{
        id:{
            describe:"this is id describe in read command",
            demandOption: true,
            type: "String",
        }
    },
    handler:(x)=> {
        data3.readData(x.id)
    },
})

yargs.command({
    command: "list",
    describe: "to list data ",
    handler:()=> {
        data3.ListData()
    },
})

yargs.parse()



