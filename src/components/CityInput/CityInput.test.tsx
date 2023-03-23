import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CityInput from './index';

describe('CityInput', () => {
  it('shows input value', () => {
    const cityRef = React.createRef<HTMLInputElement>();
    render(<CityInput name="test" refCity={cityRef} validationMessage={''} />);

    const cityInput = screen.getByTestId<HTMLLIElement>('input-city');
    fireEvent.change(cityInput, { target: { value: 'NewValue' } });

    expect(cityInput.value).toBe('NewValue');
  });
});
