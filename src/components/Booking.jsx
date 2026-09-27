function Booking({
  selectedService,
  selectedDate,
  selectedTime,
  customerName,
  onDateChange,
  onTimeChange,
  onNameChange,
}) {
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  return (
    <section className="booking-section" id="booking">
      <div className="booking-heading">
        <p className="section-eyebrow">BOOK YOUR VISIT</p>

        <h2>
          Your beauty moment,
          <br />
          <span>starts here.</span>
        </h2>

        <p>
          Choose your service, preferred date and time,
          then enter your details to continue.
        </p>
      </div>

      <div className="booking-container">
        {/* Selected Service */}
        <div className="booking-card">
          <div className="booking-step">
            <span>01</span>
            <div>
              <h3>Selected Service</h3>
              <p>Choose a service from our services section.</p>
            </div>
          </div>

          {selectedService ? (
            <div className="selected-service">
              <div>
                <strong>{selectedService.name}</strong>
                <p>
                  {selectedService.duration} ·{" "}
                  {selectedService.category}
                </p>
              </div>

              <strong>
                Rs. {selectedService.price.toLocaleString()}
              </strong>
            </div>
          ) : (
            <div className="empty-service">
              No service selected yet.
            </div>
          )}
        </div>

        {/* Date */}
        <div className="booking-card">
          <div className="booking-step">
            <span>02</span>
            <div>
              <h3>Choose Date</h3>
              <p>Select your preferred appointment date.</p>
            </div>
          </div>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="booking-input"
          />
        </div>

        {/* Time */}
        <div className="booking-card">
          <div className="booking-step">
            <span>03</span>
            <div>
              <h3>Choose Time</h3>
              <p>Select an available appointment time.</p>
            </div>
          </div>

          <div className="time-grid">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                className={`time-slot ${
                  selectedTime === time ? "active" : ""
                }`}
                onClick={() => onTimeChange(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Details */}
        <div className="booking-card">
          <div className="booking-step">
            <span>04</span>
            <div>
              <h3>Your Details</h3>
              <p>Enter your name for the appointment.</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Your full name"
            value={customerName}
            onChange={(e) => onNameChange(e.target.value)}
            className="booking-input"
          />
        </div>

        {/* Summary */}
       {/* Booking Summary */}
<div className="booking-summary">
  <div>
    <p>BOOKING SUMMARY</p>

    <h3>
      {selectedService
        ? selectedService.name
        : "Select a service"}
    </h3>

    <span>
      {selectedDate || "Date not selected"}
      {selectedTime && ` · ${selectedTime}`}
    </span>
  </div>

  <div className="summary-action">
    <div className="summary-price">
      {selectedService
        ? `Rs. ${selectedService.price.toLocaleString()}`
        : "—"}
    </div>

    <button
      type="button"
      className="whatsapp-btn"
      disabled={
        !selectedService ||
        !selectedDate ||
        !selectedTime ||
        !customerName
      }
      onClick={() => {
        const whatsappNumber = "923001234567";

        const message = `
Hello Lumié Salon,

I would like to book an appointment.

Name: ${customerName}
Service: ${selectedService.name}
Date: ${selectedDate}
Time: ${selectedTime}
Price: Rs. ${selectedService.price.toLocaleString()}

Please confirm my appointment.

Thank you.
        `;

        const whatsappUrl =
          `https://wa.me/${whatsappNumber}?text=` +
          encodeURIComponent(message.trim());

        window.open(whatsappUrl, "_blank");
      }}
    >
      Confirm via WhatsApp →
    </button>
  </div>
</div> 
      </div>
    </section>
  );
}

export default Booking;