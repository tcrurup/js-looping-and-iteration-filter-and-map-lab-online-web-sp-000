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

function exactMatch(drivers, driverAttributes){
  
  return drivers.filter(function(driver){
    
    
    const matching = driverAttributes.map(function(key){
      driver[key] === driverAttributes[key]
    });
    
    return !matching.include?(false)
  });
}