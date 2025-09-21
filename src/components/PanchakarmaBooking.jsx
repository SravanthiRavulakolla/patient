import React, { useState } from "react";
import { centers, therapyTypes, slots } from "./panchakarmaData";
import { FiSearch, FiMapPin, FiClock, FiArrowLeft } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-4">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b mb-6 -mx-4 px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Panchakarma Centers
            </h1>
            {/* Search Bar */}
            <div className="relative w-1/3">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search centers..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        {!selectedCenter && (
          <div className="space-y-4">
            {filteredCenters.map((center) => (
              <div
                key={center.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 cursor-pointer border border-gray-100"
                onClick={() => setSelectedCenter(center)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {center.name}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-3">
                      <FiMapPin className="mr-2" />
                      {center.location}
                    </div>
                    <p className="text-sm text-gray-500">
                      {center.therapies.length} therapies available
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-purple-600 font-medium">
                      Starting from
                      <div className="text-lg">
                        ₹{Math.min(...center.therapies.map(t => t.cost))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredCenters.length === 0 && (
              <div className="text-center py-10">
                <div className="text-gray-400 text-lg">No centers found</div>
              </div>
            )}
          </div>
        )}

        {/* Therapies for Selected Center */}
        {selectedCenter && !selectedTherapy && (
          <div className="animate-fadeIn">
            <button
              className="mb-6 flex items-center text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setSelectedCenter(null)}
            >
              <FiArrowLeft className="mr-2" />
              Back to Centers
            </button>
            
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCenter.name}</h2>
              <div className="flex items-center text-gray-600 mb-4">
                <FiMapPin className="mr-2" />
                {selectedCenter.location}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">Available Therapies</h3>
            <div className="space-y-4">
              {selectedCenter.therapies.map((therapy) => (
                <div
                  key={therapy.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-100"
                  onClick={() => setSelectedTherapy(therapy)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{therapy.name}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">{therapy.description}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FiClock className="mr-1" />
                        {therapy.duration} minutes
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-purple-600 font-semibold text-lg">
                        <BiRupee className="text-xl" />
                        {therapy.cost}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Package Details & Booking */}
        {selectedTherapy && (
          <div className="animate-fadeIn">
            <button
              className="mb-6 flex items-center text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setSelectedTherapy(null)}
            >
              <FiArrowLeft className="mr-2" />
              Back to Therapies
            </button>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedTherapy.name}</h2>
              <div className="prose prose-purple mb-4">
                <p className="text-gray-700">
                  {showFullDesc
                    ? selectedTherapy.description
                    : selectedTherapy.description.slice(0, 100) + (selectedTherapy.description.length > 100 ? "..." : "")}
                  {selectedTherapy.description.length > 100 && (
                    <button
                      className="ml-2 text-purple-600 hover:text-purple-700 text-sm font-medium"
                      onClick={() => setShowFullDesc((v) => !v)}
                    >
                      {showFullDesc ? "Show less" : "Read more"}
                    </button>
                  )}
                </p>
              </div>
              
              <div className="flex gap-8 mb-6 text-gray-700">
                <div className="flex items-center">
                  <FiClock className="mr-2 text-purple-600" />
                  <span>{selectedTherapy.duration} minutes</span>
                </div>
                <div className="flex items-center">
                  <BiRupee className="mr-1 text-xl text-purple-600" />
                  <span className="text-lg font-semibold">{selectedTherapy.cost}</span>
                </div>
              </div>

              {/* Slot Picker */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Select Your Preferred Time</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      className={`
                        py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200
                        ${selectedSlot === slot 
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-200" 
                          : "bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                        }
                      `}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <button
                className={`
                  w-full md:w-auto px-8 py-3 rounded-lg font-medium transition-all duration-200
                  ${!selectedSlot 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                    : "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200"
                  }
                `}
                disabled={!selectedSlot}
                onClick={handleBook}
              >
                Book Appointment
              </button>
            </div>

            {/* Booking Confirmation */}
            {bookingConfirmed && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800 animate-fadeIn">
                <div className="font-semibold text-lg mb-2">Booking Confirmed! 🎉</div>
                <p>
                  Your appointment for <span className="font-medium">{selectedTherapy.name}</span> has been scheduled for{" "}
                  <span className="font-medium">{selectedSlot}</span> at{" "}
                  <span className="font-medium">{selectedCenter.name}</span>.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PanchakarmaBooking;