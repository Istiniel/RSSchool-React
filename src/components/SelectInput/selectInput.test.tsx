import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectInput from './index';

describe('DateInput', () => {
  it('show error message if validation failed', () => {
    const dateRef = React.createRef<HTMLSelectElement>();
    render(<SelectInput name="test" refSelect={dateRef} validationMessage={'error'} />);

    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });
});
