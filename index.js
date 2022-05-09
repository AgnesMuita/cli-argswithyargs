const yargs = require("yargs")

// console.log(yargs.argv)
yargs.command({
    command:"add",
    describe:"add a new transaction",

    builder:{
      title:{
        describe:"transaction type",  
        demandOption:true,
        type:"string"
      },
      token:{
        describe:"token type",  
        demandOption:true,
        type:"string"
      }
    },

    handler : function(argv){
    console.log("adding a new transaction", argv.title)
    }
})
console.log(yargs.argv)