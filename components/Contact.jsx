import React from "react";
import contact_us from './img/contact_us.jpg'

export default function Contact() {
  return (
    <>
      <div
        className="form-container"

      >
        <h2 style={{ color: "#FF406E", marginTop: -550}}>Contact Us</h2>
        <form className="form" action="#" method="post">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required=""
            style={{
              display: "flex",
              height: 48,
              padding: 12,
              alignItems: "center",
              gap: 8,
              alignSelf: "stretch",
              border: "1px solid rgba(0, 0, 0, 0.20)",
              background: "var(--White, #FFF)",
              width: "150%"
            }}
          />
          <br></br>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required=""
            style={{
              display: "flex",
              height: 48,
              padding: 12,
              alignItems: "center",
              gap: 8,
              alignSelf: "stretch",
              border: "1px solid rgba(0, 0, 0, 0.20)",
              background: "var(--White, #FFF)",
              width: "150%"
            }}
          />
          <br></br>
          <textarea
            placeholder="Message"
            name="message"
            rows={5}
            style={{
              display: "flex",
              height: 180,
              padding: 12,
              alignItems: "flex-start",
              alignSelf: "stretch",
              border: "1px solid rgba(0, 0, 0, 0.20)",
              background: "var(--White, #FFF)",
              width: "150%"
            }}
            defaultValue={""}
          />
          <div id="submit" className="submit-button" style={{ marginTop: 20 }}>
            Submit
          </div>
        </form>
      </div>
      <div className="image-container" style={{ flex: 1 }}>
        <img
          src={contact_us}
          alt="contact_us"
          style={{ width: 616, height: 665 , marginLeft: 700, marginTop: -750 }}
        />
      </div>
    </>

  );
}
