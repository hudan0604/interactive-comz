import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentsListing from './CommentsListing';

describe('<CommentsListing />', () => {
  test('it should mount', () => {
    render(<CommentsListing />);
    
    const commentsListing = screen.getByTestId('CommentsListing');

    expect(commentsListing).toBeInTheDocument();
  });
});