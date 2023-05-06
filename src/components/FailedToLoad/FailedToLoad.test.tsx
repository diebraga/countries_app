import { render, screen } from '@testing-library/react';
import { FailedToLoad } from './FailedToLoad';

describe('FailedToLoad', () => {
  it('Should render "Failed to load"', () => {
    render(<FailedToLoad />);

    const messageElement = screen.getByText('Failed to load');
    expect(messageElement).toBeDefined();
  });
});
