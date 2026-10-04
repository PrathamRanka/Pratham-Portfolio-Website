'use client';

import { FormEvent, useState } from 'react';

export function ContactDraftForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get('website')) return;
    setStatus('Preparing a reviewed email draft...');

    const response = await fetch('/api/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'contact',
        subject: form.get('subject'),
        message: form.get('message'),
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || 'Could not prepare the message.');
      return;
    }
    setStatus('Draft ready. Your email app will open for review.');
    window.location.href = result.mailto;
  }

  return (
    <form className="contact-draft-form" onSubmit={handleSubmit}>
      <label>
        Subject
        <input name="subject" maxLength={160} placeholder="Engineering opportunity" />
      </label>
      <label>
        Message
        <textarea name="message" required maxLength={4000} rows={4} placeholder="Tell me what you are building..." />
      </label>
      <label className="contact-form-trap" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button-primary" type="submit">Prepare email</button>
      <p role="status">{status}</p>
    </form>
  );
}
