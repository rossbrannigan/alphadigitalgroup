import React from "react";
const ContactPage = () => {
const ContactForm = (
<form
  method="POST"
  name="contact-form"
  action="contact/?success=true"
  data-netlify="true"
>
<input type="hidden" name="form-name" value="contact-form" />
    <label htmlFor="name">Name *</label>
    <input
      id="name"
      name="name"
      required
      type="text"
    />
    <label htmlFor="company">Company *</label>
    <input id="company" name="company" required type="text" />
    <label htmlFor="email">E-mail Address *</label>
    <input id="email" type="email" name="email" required />
    <label htmlFor="message">Message *</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Submit</button>
  </form>
);
 
 return (
   <div>
     <h1>Contact Us</h1>
     {ContactForm}
   </div>
 );
};
 
export default ContactPage;