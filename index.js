const yargs = require("yargs")
const transactions = require("./transaction")

// console.log(yargs.argv)
yargs.command({
    command:"add",
    describe:"add a new transaction",

    builder:{
      title:{
        describe:"title of transaction",
        type:'string'
      },
      type:{
        describe:"transaction type",  
        demandOption:true,
        type:"string"
      },
      token:{
        describe:"token type",  
        demandOption:true,
        type:"string"
      },
      timestamp:{
        describe:"timestamp",
        type:"datetime"
      },
      
    },

    handler : function(argv){
    console.log("adding a new transaction", argv.title)
    transactions.addTransaction(argv.title, argv.type, argv.token, argv.timestamp)
    }
})
// console.log(yargs.argv)
yargs.parse();