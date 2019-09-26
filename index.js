// Code your solution here:
function driversWithRevenueOver(driverArray, revenue){
  
  return driverArray.map(function(driver){
    return driver.revenue > revenue;
  });
}