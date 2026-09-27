import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  // Booking states
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");

  return (
    
    <main>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          LUMI<span>É</span>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#booking" className="nav-book-btn">
          Book Appointment
        </a>
      </header>

      <Navbar />
      <Hero />
      {/* Services */}
      <Services
        selectedService={selectedService}
        onSelectService={setSelectedService}
      />

      {/* Booking */}
      <Booking
        selectedService={selectedService}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        customerName={customerName}
        onDateChange={setSelectedDate}
        onTimeChange={setSelectedTime}
        onNameChange={setCustomerName}
      />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;