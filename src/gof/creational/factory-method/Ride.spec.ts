import Location from "./Location";
import Ride, { DistanceRide, TimeRide } from "./Ride";
import { DistanceSegment, TimeSegment } from "./Segment";

test("Deve criar e calcular a tarifa de uma corrida por distância", function () {
  const lastLocation = new Location(
    -27.584905257808835,
    -48.545022195325124,
    new Date("2021-03-01T12:00:00")
  );
  const ride = DistanceRide.create(
    lastLocation.coord.lat,
    lastLocation.coord.long,
    lastLocation.date
  );
  const newLocation = new Location(
    -27.496887588317275,
    -48.522234807851476,
    new Date("2021-03-01T12:00:00")
  );
  const segment = new DistanceSegment(
    ride.rideId,
    ride.lastLocation,
    newLocation
  );
  ride.updateLocation(newLocation);
  const fare = ride.calculateFare([segment]);
  expect(fare).toBe(40);
});

test("Deve criar e calcular a tarifa de uma corrida por tempo", function () {
  const lastLocation = new Location(
    -27.584905257808835,
    -48.545022195325124,
    new Date("2021-03-01T12:00:00")
  );

  const ride = TimeRide.create(
    lastLocation.coord.lat,
    lastLocation.coord.long,
    new Date("2021-03-01T12:00:00")
  );

  const newLocation = new Location(
    -27.496887588317275,
    -48.522234807851476,
    new Date("2021-03-01T14:00:00")
  );

  const segment = new TimeSegment(ride.rideId, ride.lastLocation, newLocation);
  ride.updateLocation(newLocation);
  const fare = ride.calculateFare([segment]);
  expect(fare).toBe(120);
});
