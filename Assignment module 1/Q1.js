function calculateDiscount(totalPurchaseAmount) {
    let discountedAmount = 0;
    
    if (totalPurchaseAmount >= 51 && totalPurchaseAmount <= 100) {
      discountedAmount = totalPurchaseAmount * 0.05;
    } else if (totalPurchaseAmount > 101 && totalPurchaseAmount <= 200) {
      discountedAmount = totalPurchaseAmount * 0.1;
    } else if (totalPurchaseAmount > 201) {
      discountedAmount = totalPurchaseAmount * 0.15;
    }
    return discountedAmount;
  }
  const totalPurchaseAmount1 = 37;
  const totalPurchaseAmount2 = 77;
  const totalPurchaseAmount3 = 165;
  const totalPurchaseAmount4 = 220;
  
  const discount1 = calculateDiscount(totalPurchaseAmount1);
  const discount2 = calculateDiscount(totalPurchaseAmount2);
  const discount3 = calculateDiscount(totalPurchaseAmount3);
  const discount4 = calculateDiscount(totalPurchaseAmount4);
  
  console.log("Discounted amount for $" + totalPurchaseAmount1 + ": $" + discount1);
  console.log("Total amount + discount for $" + totalPurchaseAmount1 + ": $" + (totalPurchaseAmount1 - discount1));
  
  console.log("Discounted amount for $" + totalPurchaseAmount2 + ": $" + discount2);
  console.log("Total amount + discount for $" + totalPurchaseAmount2 + ": $" + (totalPurchaseAmount2 - discount2));
  
  console.log("Discounted amount for $" + totalPurchaseAmount3 + ": $" + discount3);
  console.log("Total amount + discount for $" + totalPurchaseAmount3 + ": $" + (totalPurchaseAmount3 - discount3));
  
  console.log("Discounted amount for $" + totalPurchaseAmount4 + ": $" + discount4);
  console.log("Total amount + discount for $" + totalPurchaseAmount4 + ": $" + (totalPurchaseAmount4 - discount4));  