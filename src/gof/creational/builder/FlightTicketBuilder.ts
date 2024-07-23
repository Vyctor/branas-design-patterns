import FlightTicket from "./FlightTicket";

export default class FlightTicketBuilder {
  fromAirport!: string;
  toAirport!: string;
  airline!: string;
  flightCode!: string;
  passengerName!: string;
  passengerEmail!: string;
  passengerDocument!: string;
  passengerGender!: string;
  emergencyContactName!: string;
  emergencyContactPhone!: string;
  hasCheckin!: boolean;
  terminal!: string;
  gate!: string;
  priorityBoarding!: number;
  seat!: string;
  checkedBags!: number;

  setFlight(airline: string, flightCode: string): this {
    this.airline = airline;
    this.flightCode = flightCode;
    return this;
  }

  setTrip(from: string, to: string): this {
    this.fromAirport = from;
    this.toAirport = to;
    return this;
  }

  setPassenger(
    name: string,
    email: string,
    document: string,
    gender: string
  ): this {
    this.passengerName = name;
    this.passengerEmail = email;
    this.passengerDocument = document;
    this.passengerGender = gender;
    return this;
  }

  setEmergencyContact(name: string, telephone: string): this {
    this.emergencyContactName = name;
    this.emergencyContactPhone = telephone;
    return this;
  }

  setCheckinInformation(
    hasCheckin: boolean,
    terminal: string,
    gate: string
  ): this {
    this.hasCheckin = hasCheckin;
    this.terminal = terminal;
    this.gate = gate;
    return this;
  }

  setPriorityBoarding(priorityBoarding: number): this {
    this.priorityBoarding = priorityBoarding;
    return this;
  }

  setSeat(seat: string): this {
    this.seat = seat;
    return this;
  }

  setCheckedBags(checkedBags: number): this {
    this.checkedBags = checkedBags;
    return this;
  }

  getFlightTicket(): FlightTicket {
    return new FlightTicket(this);
  }
}
