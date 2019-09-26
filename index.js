// Code your solution here:
function driversWithRevenueOver(driverArray, revenueThreshold){
  
  return driverArray.map(function(driver){
    if(driver.revenue > revenueThreshold){ return driver; }
  });
}