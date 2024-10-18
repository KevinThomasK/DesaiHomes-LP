"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });
  const [ipAddress, setIpAddress] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const router = useRouter(); // To handle redirection

  // Get the user's IP address
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIpAddress(response.data.ip);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
    setSourceUrl(window.location.href); // Get the current page's URL
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  //   const handleSubmit = async () => {
  //     if (!formData.name || !formData.phone) {
  //       alert("Please fill in both your name and phone number.");
  //       return; // Do not proceed if validation fails
  //     }
  //     try {
  //       const response = await axios.post(
  //         "https://dashboard.omnisellcrm.com/api/store",
  //         {
  //           name: formData.name,
  //           phone_number: formData.phone,
  //           email: formData.email,
  //           location: null,
  //           company_name: "Nirmala",
  //           lead_types_id: "nirmala_ireland",
  //           requirement: "",
  //           ip_address: ipAddress, // Set IP address from API
  //           source_url: sourceUrl, // Set source URL
  //           source_app: null,
  //           source_website: "", // LP URL
  //           original_source: null,
  //           utm_source: null,
  //           utm_medium: null,
  //           utm_campaign: null,
  //           gclid: null,
  //           verified: 0,
  //           api: true,
  //         }
  //       );

  //       if (response.status === 200) {
  //         router.push("thank-you"); // Redirect to the Thank You page on success
  //       } else {
  //         alert("Failed to submit the form.");
  //       }
  //     } catch (error) {
  //       console.error("There was an error submitting the form:", error);
  //       alert("Error submitting form, please try again.");
  //     }
  //   };

  return (
    <div className="container my-1">
      <div
        className="contact-form rounded"
        style={{
          backgroundColor: "#e0f7f1", // Light background color
          padding: "20px",
        }}
      >
        <h3
          className="text-center"
          style={{
            marginBottom: "10px",
            color: "#333333", // Darker text color
            fontSize: "25px",
          }}
        >
          Book A Project Now
        </h3>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name - Full Width */}
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ color: "#555" }}
            >
              Name
            </label>
            <input
              type="text"
              className="form-control premium-input"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                backgroundColor: "white", // Light background for inputs
                border: "1px solid #ccc", // Subtle border
                color: "#333", // Darker text color
              }}
            />
          </div>

          {/* Phone and Email - Half Width Each */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label
                htmlFor="phone"
                className="form-label"
                style={{ color: "#555" }}
              >
                Phone
              </label>
              <input
                type="text"
                className="form-control premium-input"
                id="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  color: "#333",
                }}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#555" }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control premium-input"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  color: "#333",
                }}
              />
            </div>
          </div>

          {/* Message - Textarea */}
          <div className="mb-3">
            <label
              htmlFor="message"
              className="form-label"
              style={{ color: "#555" }}
            >
              Message
            </label>
            <textarea
              className="form-control premium-input"
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              style={{
                height: "70px",
                backgroundColor: "white",
                border: "1px solid #ccc",
                color: "#333",
              }}
            />
          </div>

          {/* Centered Button */}
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary premium-btn"
              style={{
                backgroundColor: "darkblue", // Green background for button
                border: "none",
                padding: "10px 20px",
                fontSize: "20px",
                width: "100%",
                marginTop: "20px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
