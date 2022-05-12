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
      console.log(transactions)
      saveTransaction(transactions)
      console.log("Transaction deleted successfully")
    }else{
      console.log('Transaction does not exist')
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
  removeTransaction:removeTransaction
}