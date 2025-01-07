export default function ContactOverlay() {
  return (
    <div className="contact-overlay">
      <h3>Connect With Me</h3>
      <img src="" alt="" /> {/* this is the close btn */}
      <form action="my email stuff.com" method="post">
        <div id = "email-input-container" className="left-icon-right-input">
          <img src="" alt="" />
          <input
            type="email"
            name="email-input"
            id="contact-popup-email-input"
          />
        </div>
        <div id = "phone-input-container" className="left-icon-right-input">
          <img src="" alt="" />
          <input type="number" />
          {/* could convert this to three to make code easier but that could alter the visual on screen */}
        </div>
        <div id="message-input-container" className = "top-icon-botton-input">
            <img src="" alt="" /> {/* this might turn to a "message" instead */}
            <textarea name="message-input" id="message-input" placeholder = "ask me anything."/>
        </div>

      </form>
    </div>
  );
}
