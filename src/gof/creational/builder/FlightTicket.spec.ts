import FlightTicket from "./FlightTicket";
import FlightTicketBuilder from "./FlightTicketBuilder";

test("Deve criar uma passagem aérea", () => {
  const builder = new FlightTicketBuilder();
  builder
    .setFlight("GOL", "1234")
    .setTrip("GRU", "CGH")
    .setPassenger("John doe", "johndoe@gmail.com", "111-111-111-11", "M")
    .setEmergencyContact("Jane doe", "222-222-222-22")
    .setCheckinInformation(true, "T1", "G1")
    .setSeat("1A")
    .setCheckedBags(2)
    .setPriorityBoarding(1);

  const flightTicket = new FlightTicket(builder);
  expect(flightTicket.passengerName).toBe("John doe");
  expect(flightTicket.passengerEmail).toBe("johndoe@gmail.com");
  expect(flightTicket.passengerDocument).toBe("111-111-111-11");
  expect(flightTicket.passengerGender).toBe("M");
  expect(flightTicket.emergencyContactName).toBe("Jane doe");
  expect(flightTicket.emergencyContactPhone).toBe("222-222-222-22");
  expect(flightTicket.hasCheckin).toBe(true);
  expect(flightTicket.terminal).toBe("T1");
  expect(flightTicket.gate).toBe("G1");
  expect(flightTicket.seat).toBe("1A");
  expect(flightTicket.checkedBags).toBe(2);
  expect(flightTicket.priorityBoarding).toBe(1);
  expect(flightTicket.airline).toBe("GOL");
  expect(flightTicket.flightCode).toBe("1234");
  expect(flightTicket.fromAirport).toBe("GRU");
  expect(flightTicket.toAirport).toBe("CGH");
});
