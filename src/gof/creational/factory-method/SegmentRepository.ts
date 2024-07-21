import { Segment } from "./Segment";

export default interface SegmentRepository {
  save(segment: Segment): Promise<void>;
  listByRideId(rideId: string): Promise<Array<Segment>>;
}

export class SegmentRepositoryMemory implements SegmentRepository {
  segments: Array<Segment>;

  constructor() {
    this.segments = new Array<Segment>();
  }

  async save(segment: Segment): Promise<void> {
    this.segments.push(segment);
  }

  async listByRideId(rideId: string): Promise<Array<Segment>> {
    return this.segments.filter((segment) => segment.rideId === rideId);
  }
}
