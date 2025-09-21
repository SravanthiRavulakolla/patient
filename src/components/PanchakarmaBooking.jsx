import React, { useState } from "react";
import { centers, therapyTypes, slots } from "./panchakarmaData";
// shadcn/ui imports (assume installed):
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectItem } from "@/components/ui/select";

const PanchakarmaBooking = () => {
  const [search, setSearch] = useState("");
  const [therapyFilter, setTherapyFilter] = useState("");
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Filter centers by search and therapy
  const filteredCenters = centers.filter((center) => {
    const matchesSearch =
      center.name.toLowerCase().includes(search.toLowerCase()) ||
      center.location.toLowerCase().includes(search.toLowerCase());
    const matchesTherapy =
      !therapyFilter ||
      center.therapies.some((t) => t.name === therapyFilter);
    return matchesSearch && matchesTherapy;
  });

  // Handle booking
  const handleBook = () => {
    setBookingConfirmed(true);
    setTimeout(() => setBookingConfirmed(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Panchakarma Appointment Booking</h1>
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by center or location"
          className="border rounded px-3 py-2 w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2 w-full md:w-1/3"
          value={therapyFilter}
          onChange={(e) => setTherapyFilter(e.target.value)}
        >
          <option value="">All Therapies</option>
          {therapyTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Center List */}
      {!selectedCenter && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="border rounded-lg shadow hover:shadow-lg p-4 cursor-pointer bg-white"
              onClick={() => setSelectedCenter(center)}
            >
              <h2 className="font-semibold text-lg">{center.name}</h2>
              <p className="text-gray-600">{center.location}</p>
              <div className="mt-2">
                <span className="font-medium">Therapies:</span>
                <ul className="list-disc ml-5 text-sm">
                  {center.therapies.map((t) => (
                    <li key={t.id}>{t.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {filteredCenters.length === 0 && (
            <div className="col-span-2 text-center text-gray-500">No centers found.</div>
          )}
        </div>
      )}

      {/* Therapies for Selected Center */}
      {selectedCenter && !selectedTherapy && (
        <div>
          <button
            className="mb-4 text-blue-600 hover:underline"
            onClick={() => setSelectedCenter(null)}
          >
            ← Back to Centers
          </button>
          <h2 className="text-xl font-semibold mb-2">{selectedCenter.name} Therapies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedCenter.therapies.map((therapy) => (
              <div
                key={therapy.id}
                className="border rounded-lg p-4 bg-white shadow hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedTherapy(therapy)}
              >
                <h3 className="font-medium">{therapy.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{therapy.description}</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Duration: {therapy.duration} min</span>
                  <span>₹{therapy.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Package Details & Booking */}
      {selectedTherapy && (
        <div>
          <button
            className="mb-4 text-blue-600 hover:underline"
            onClick={() => setSelectedTherapy(null)}
          >
            ← Back to Therapies
          </button>
          <div className="border rounded-lg p-6 bg-white shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">{selectedTherapy.name}</h2>
            <p className="text-gray-700 mb-2">
              {showFullDesc
                ? selectedTherapy.description
                : selectedTherapy.description.slice(0, 60) + (selectedTherapy.description.length > 60 ? "..." : "")}
              {selectedTherapy.description.length > 60 && (
                <button
                  className="ml-2 text-blue-500 text-xs underline"
                  onClick={() => setShowFullDesc((v) => !v)}
                >
                  {showFullDesc ? "View Less" : "View More"}
                </button>
              )}
            </p>
            <div className="flex gap-6 mb-2">
              <span>Duration: <b>{selectedTherapy.duration} min</b></span>
              <span>Cost: <b>₹{selectedTherapy.cost}</b></span>
            </div>
          </div>

          {/* Slot Picker */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Select Slot:</label>
            <div className="flex gap-2 flex-wrap">
              {slots.map((slot) => (
                <button
                  key={slot}
                  className={`px-4 py-2 rounded border ${selectedSlot === slot ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            disabled={!selectedSlot}
            onClick={handleBook}
          >
            Book Now
          </button>

          {/* Booking Confirmation */}
          {bookingConfirmed && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded text-green-800">
              Appointment booked for <b>{selectedTherapy.name}</b> at <b>{selectedSlot}</b> in <b>{selectedCenter.name}</b>!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PanchakarmaBooking;
