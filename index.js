// Code your solution here:
function driversWithRevenueOver(driverArray, revenue){
  
  return driverArray.map(function(driver){
    if(driver.revenue > revenue){ return driver; };
  });
}