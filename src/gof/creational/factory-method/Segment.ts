import Location from "./Location";

export abstract class Segment {
  constructor(
    readonly rideId: string,
    readonly from: Location,
    readonly to: Location
  ) {}
}

export class DistanceSegment extends Segment {
  constructor(rideId: string, from: Location, to: Location) {
    super(rideId, from, to);
  }

  getDistance() {
    const earthRadius = 6371;
    const degreesToRadians = Math.PI / 180;
    const deltaLat =
      (this.to.coord.lat - this.from.coord.lat) * degreesToRadians;
    const deltaLon =
      (this.to.coord.long - this.from.coord.long) * degreesToRadians;
    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(this.from.coord.lat * degreesToRadians) *
        Math.cos(this.to.coord.lat * degreesToRadians) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(earthRadius * c);
  }
}

export class TimeSegment extends Segment {
  getDiffInMinutes(): number {
    return (this.to.date.getTime() - this.from.date.getTime()) / (1000 * 60);
  }
}
