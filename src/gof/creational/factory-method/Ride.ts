import Location from "./Location";
import crypto from "crypto";
import { DistanceSegment, Segment, TimeSegment } from "./Segment";

export default abstract class Ride {
  lastLocation: Location;
  readonly rideId: string;

  constructor(rideId: string, lat: number, long: number, date: Date) {
    this.rideId = rideId;
    this.lastLocation = new Location(lat, long, date);
  }
  updateLocation(newLocation: Location) {
    this.lastLocation = newLocation;
  }

  abstract calculateFare(segments: Array<Segment>): number;
  abstract createSegment(from: Location, to: Location): Segment;
}

export class DistanceRide extends Ride {
  static create(lat: number, long: number, date: Date): DistanceRide {
    const rideId = crypto.randomUUID();
    return new DistanceRide(rideId, lat, long, date);
  }

  calculateFare(segments: Array<DistanceSegment>): number {
    return segments.reduce((prev, next) => prev + next.getDistance() * 4, 0);
  }

  createSegment(from: Location, to: Location): Segment {
    return new DistanceSegment(this.rideId, from, to);
  }
}

export class TimeRide extends Ride {
  static create(lat: number, long: number, date: Date): TimeRide {
    const rideId = crypto.randomUUID();
    return new TimeRide(rideId, lat, long, date);
  }

  calculateFare(segments: Array<TimeSegment>): number {
    return segments.reduce((prev, next) => prev + next.getDiffInMinutes(), 0);
  }

  createSegment(from: Location, to: Location): Segment {
    return new TimeSegment(this.rideId, from, to);
  }
}
