// Code your solution here:
function driversWithRevenueOver(driverArray, revenueThreshold){
  
  return driverArray.filter(function(driver){
    if(driver.revenue > revenueThreshold){ return driver; }
  });
}

function driverNamesWithRevenueOver(driverArray, revenueThreshold){
  
  return driversWithRevenueOver(driverArray, revenueThreshold).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, driverAttribute){
  
  return drivers.filter(function(driver){
    let isMatch = false;
  });
}