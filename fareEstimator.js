// CodeSignal put out a challenge by Uber that involves writing a "fare estimator" that involves a function dependent on cost per minute, cost per mile, ride time and ride distance.

// The formula is along the lines of:
// fare = (cost per minute) * (ride time) + (cost per mile) * (ride distance)

// fare = (cost per minute) * (ride time) + (cost per mile) * (ride distance)
// where ride time and ride distance are constant integers (or floats) and cost per minute and cost per mile are lists of integers and floats (as cost per minute and cost per mile depend on the car type).

function Solution(rideTime,rideDistance,costPerMinute,costPerMile){
  return costPerMile.map((rideMileCost,index)=>{
    const rideMinuteCost= costPerMinute[index]
    return rideMinuteCost * rideTime + rideMileCost * rideDistance
  })
}
