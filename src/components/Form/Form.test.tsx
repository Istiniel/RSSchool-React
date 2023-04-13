import React from 'react';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Form from './index';
import { renderTestWithStore } from '../../helpers/renderTestWithStore';

describe('Form', () => {
  window.URL.createObjectURL = vi.fn();
  const mockOnSubmit = vi.fn();

  it('with valid inputs calls onSubmit func', async () => {
    renderTestWithStore(<Form callback={mockOnSubmit} />);

    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

    await waitFor(async () => {
      fireEvent.change(screen.getByLabelText('City:'), { target: { value: 'Paris' } });
      fireEvent.change(screen.getByTestId('dateInput'), { target: { value: '2020-12-07' } });
      fireEvent.change(screen.getByTestId('selectInput'), {
        target: { value: 'telegram' },
      });
      fireEvent.click(screen.getByTestId('termsCheckBox'));
      fireEvent.click(screen.getByLabelText('Female'));
      fireEvent.change(screen.getByLabelText('Upload image:'), { target: { files: [file] } });
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Create' }));
    });

    expect(mockOnSubmit.mock.calls).toHaveLength(1);
  });

  it('with invalid renders validation errors', async () => {
    const { getByRole, getByLabelText, container } = renderTestWithStore(
      <Form callback={mockOnSubmit} />
    );
    await act(async () => {
      fireEvent.change(getByLabelText('City:'), { target: { value: 'abc' } });
    });

    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'Create' }));
    });

    expect(container.innerHTML).toMatch('Enter city name');
  });
});
