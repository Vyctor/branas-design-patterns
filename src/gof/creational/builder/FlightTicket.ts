import FlightTicketBuilder from "./FlightTicketBuilder";

export default class FlightTicket {
  airline: string;
  fromAirport: string;
  toAirport: string;
  flightCode: string;
  passengerName: string;
  passengerEmail: string;
  passengerDocument: string;
  passengerGender: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  seat: string;
  checkedBags: number;
  hasCheckin: boolean;
  terminal: string;
  gate: string;
  priorityBoarding: number;

  constructor(builder: FlightTicketBuilder) {
    this.airline = builder.airline;
    this.fromAirport = builder.fromAirport;
    this.toAirport = builder.toAirport;
    this.flightCode = builder.flightCode;
    this.passengerName = builder.passengerName;
    this.passengerEmail = builder.passengerEmail;
    this.passengerDocument = builder.passengerDocument;
    this.passengerGender = builder.passengerGender;
    this.emergencyContactName = builder.emergencyContactName;
    this.emergencyContactPhone = builder.emergencyContactPhone;
    this.seat = builder.seat;
    this.checkedBags = builder.checkedBags;
    this.hasCheckin = builder.hasCheckin;
    this.terminal = builder.terminal;
    this.gate = builder.gate;
    this.priorityBoarding = builder.priorityBoarding;
  }
}
