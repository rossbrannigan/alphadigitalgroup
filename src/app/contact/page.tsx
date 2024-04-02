import React from 'react';

export default function ContactPage() {
  return (
    <form
      method="POST"
      name="contact-form"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <div>
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}