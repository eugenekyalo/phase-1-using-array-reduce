//  Calculate total price of grocery items
const products = [
    { name: "Shampoo", price: 4.99 },
    { name: "Donuts", price: 7.99 },
    { name: "Cookies", price: 6.49 },
    { name: "Bath Gel", price: 13.99 },
  ];
  
  function getTotalAmountForProducts(products) {
    return products.reduce((totalPrice, product) => totalPrice + product.price, 0);
  }
  
  console.log(getTotalAmountForProducts(products));
  
  //  Countingthe ammount of coupons
  const couponLocations = [
    { room: "Living room", amount: 5 },
    { room: "Kitchen", amount: 2 },
    { room: "Bathroom", amount: 1 },
    { room: "Master bedroom", amount: 7 },
  ];
  
  const couponTotal = couponLocations.reduce((total, location) => total + location.amount, 0);
  console.log(couponTotal);
  
  // operations(neumerical)
  const doubledAndSummed = [1, 2, 3].reduce((accumulator, element) => element * 2 + accumulator, 0);
  console.log(doubledAndSummed);
  
  // Count of letters
  const letters = ["a", "b", "c", "b", "a", "a"];
  const letterCount = letters.reduce((countObj, letter) => {
    countObj[letter] = (countObj[letter] || 0) + 1;
    return countObj;
  }, {});
  
  console.log(letterCount); // Output letters
  
  // show assignment for students
  const artsShowcases = {
    Dance: [],
    Visual: [],
    Music: [],
    Theater: [],
    Writing: [],
  };
  
  const incomingStudents = ["John", "Alice", "Bob", "Emma"];
  
  const studentSorter = {
    showcaseAssign(studentName) {
      // Logic for assigning showcase
    
      return Math.random() < 0.5 ? "Dance" : "Visual";
    }
  };
  
  incomingStudents.reduce((showcases, student) => {
    showcases[studentSorter.showcaseAssign(student)].push(student);
    return showcases;
  }, artsShowcases);
  
  console.log(artsShowcases); //  students assignment

  const batteryBatches = [5, 6, 7, 8, 5]; // values to match expected total
  const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);
  console.log(totalBatteries);  //Total number of assembled batteries
  
