import { render, screen } from '@testing-library/react';
import { Country } from '@/@types';
import { CountryCard } from './CountryCard';

describe('CountryCard', () => {
  const country: Country = {
    cca3: 'USA',
    name: { common: 'United States' },
    flag: 'us-flag',
  } as any

  it('Should render the component with country details', () => {
    render(<CountryCard country={country} />);

    expect(screen.getByText('United States')).toBeDefined();
  });
});
