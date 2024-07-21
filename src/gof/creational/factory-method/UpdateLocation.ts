import Location from "./Location";
import RideRepository from "./RideRepository";
import { DistanceSegment } from "./Segment";
import SegmentRepository from "./SegmentRepository";

export class UpdateLocation {
  constructor(
    private readonly rideRepository: RideRepository,
    private readonly segmentRepository: SegmentRepository
  ) {}

  async execute(input: Input): Promise<void> {
    const ride = await this.rideRepository.getById(input.rideId);
    const newLocation = new Location(input.lat, input.long, input.date);
    const segment = ride.createSegment(ride.lastLocation, newLocation);
    ride.updateLocation(newLocation);
    await this.rideRepository.save(ride);
    await this.segmentRepository.save(segment);
  }
}

type Input = {
  rideId: string;
  lat: number;
  long: number;
  date: Date;
};
