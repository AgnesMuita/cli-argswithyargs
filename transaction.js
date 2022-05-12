const fs = require('fs');
const allTransactions = [];
//add  transaction
const addTransaction = function(title,type, token, timestamp){
  const transactions = loadTransactions();  
  const duplicateTransaction = transactions.filter(function(transaction)
    {
      return transaction.title === title;
    });
    if(duplicateTransaction.length==0){
      transactions.push({title:title,type:type,token:token,timestamp:timestamp})
      saveTransaction(transactions)
      console.log("New transaction added successfully")
    }
    else{
      console.log("Transaction already added")
    }
}

//remove transaction
const removeTransaction = function(title){
    const transactions = loadTransactions();
    const removeTransaction = transactions.filter(function(transaction)
    {
      return transaction.title === title
    });
    if(removeTransaction.length ==1){
      var idx = transactions.indexOf(removeTransaction);
      transactions.splice(idx,1)
      saveTransaction(transactions)
      console.log("Transaction deleted successfully")
    }else{
      console.log('Transaction does not exist')
    }
}

//list transactions
const listTransactions = function(){
    const transactions = loadTransactions();
    transactions.forEach(element => {
        console.log("Transaction number: " + element.title + " with Token:" + element.token + " of amount:" + element.amount + " took place on:"+ element.timestamp)
    });
    // console.log(transactions)
}

//read transactions
const readTransactions = function(title){
    const transactions = loadTransactions();
    const transaction = transactions.find((transaction)=>transaction.title===title)
    if(transaction){
      console.log(transaction)
    }else{
      console.log("Transaction not found")
    }
}


//loadTransactions returns an array
const loadTransactions = function()
{
  try{
      const dataBuffer = fs.readFileSync('transactions.json');
      const dataJSON = dataBuffer.toString(); 
      return JSON.parse(dataJSON)
  }
  catch(e){
      return []
  }
}

//save transaction
const saveTransaction=function(transactions){
  const dataJSON = JSON.stringify(transactions)
  fs.writeFileSync('transactions.json',dataJSON)
}

module.exports = {
  addTransaction:addTransaction,
  removeTransaction:removeTransaction,  
  listTransactions:listTransactions,
  readTransactions:readTransactions
}