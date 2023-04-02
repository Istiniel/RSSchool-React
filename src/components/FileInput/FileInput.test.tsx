import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FileInput from './index';

describe('FileInput', () => {
  it('check file uploading', async () => {
    const dateRef = React.createRef<HTMLInputElement>();
    render(<FileInput name="test" refFileUpload={dateRef} validationMessage={''} />);

    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

    const fileInput = screen.getByTestId<HTMLInputElement>('input-file');

    await waitFor(() =>
      fireEvent.change(fileInput, {
        target: { files: [file] },
      })
    );
    expect(fileInput.files![0].name).toBe('chucknorris.png');
  });
});
