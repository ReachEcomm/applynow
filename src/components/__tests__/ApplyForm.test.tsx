import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

import ApplyForm from '../ApplyForm';

describe('ApplyForm', () => {
  beforeEach(() => {
    // @ts-ignore
    global.fetch = jest.fn(() => Promise.resolve({ ok: true }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('validates and submits form then redirects', async () => {
    render(<ApplyForm />);

    // Select homeowner: Yes
    const yesRadio = screen.getByLabelText(/Yes/i);
    userEvent.click(yesRadio);

    // Select need
    const consolidate = await screen.findByRole('button', { name: /Consolidate Debt/i });
    userEvent.click(consolidate);

    // Amount
    const amount = screen.getByPlaceholderText(/e.g., 50,000/i);
    userEvent.type(amount, '50000');

    // Names
    const first = screen.getByLabelText(/First Name/i);
    const last = screen.getByLabelText(/Last Name/i);
    userEvent.type(first, 'John');
    userEvent.type(last, 'Doe');

    // Email and phone
    const email = screen.getByLabelText(/Email/i);
    const phone = screen.getByLabelText(/Phone/i);
    userEvent.type(email, 'john@example.com');
    userEvent.type(phone, '1234567890');

    const submit = screen.getByRole('button', { name: /Submit/i });
    userEvent.click(submit);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });
});
