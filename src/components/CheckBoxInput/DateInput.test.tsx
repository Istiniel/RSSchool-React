import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBoxInput from './index';

describe('CheckBoxInput', () => {
  it('show error message if validation failed', () => {
    const dateRef = React.createRef<HTMLInputElement>();
    render(<CheckBoxInput name="test" refCheck={dateRef} validationMessage={'error!'} />);

    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });
});
