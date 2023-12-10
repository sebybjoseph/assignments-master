/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.lentgh === 0){
    return [];
  }
  let tempJSON = {};
  let result = [];
  transactions.forEach(function (transaction) {
    let category = transaction['category'];
    let price = transaction['price'];

    if (tempJSON[category]) {
      tempJSON[category] += price;
    } else {
      tempJSON[category] = price;
    }
    
  });

  for (const category in tempJSON) {
    let tempObj = {"category": category, "totalSpent": tempJSON[category]};
    result.push(tempObj);
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
