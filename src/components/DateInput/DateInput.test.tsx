import React from 'react';
import { render, screen } from '@testing-library/react';
import DateInput from './index';

describe('DateInput', () => {
  it('show error message if validation failed', () => {
    const dateRef = React.createRef<HTMLInputElement>();
    render(<DateInput name="test" refDate={dateRef} validationMessage={'error'} />);

    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });
});
