/*
Function: getOrderIdsForCity(orders, targetCity)

Input Format:
orders: A list of orders. Each order is an object with these properties:
orderId (number): A unique ID for the order.
city (string): The city where the order is being delivered.
productName (string): The name of the product being ordered.
targetCity (string): The city you want to find orders for.

Output Format: Return a new list containing only the orderId values of orders going to the targetCity.

Example Test Cases:
Input 1:
const orders = [
  { orderId: 101, city: "Mumbai", productName: "Laptop" },
  { orderId: 102, city: "Delhi", productName: "Phone" }
];
const targetCity = "Mumbai";
Output 1: [101]
Explanation: Only order 101 is going to Mumbai.
*/

function getOrderIdsForCity(orders, targetCity){
    const filterOrder = orders.filter((order)=>{
        return order.city === targetCity
    })
    const orderIds = filterOrder.map((order)=>{
        return order.orderId
    })
    return orderIds
}
const orders = [
    { orderId: 103, city: "Chennai", productName: "Tablet" },
    { orderId: 104, city: "Chennai", productName: "Charger" },
    { orderId: 105, city: "Kolkata", productName: "Keyboard" }
  ];
  const targetCity = "Chennai";
  
console.log(getOrderIdsForCity(orders,targetCity))
