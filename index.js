// Code your solution here:
function driversWithRevenueOver(driverArray, revenueThreshold){
  
  return driverArray.filter(function(driver){
    if(driver.revenue > revenueThreshold){ return driver; }
  });
}