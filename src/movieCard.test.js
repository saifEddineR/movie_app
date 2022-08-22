import React from 'react';
import ReactDOM from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieCardmui from './components/movieCard/MovieCardmui';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<MovieCardmui />);
  //   ReactDOM.unmountComponentAtNode(root);
});

it('renders movieCard correctly', () => {
  render(
    <MovieCardmui
      movie={{
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        thumbnail: '2.jpg',
        likes: 2,
        dislikes: 0,
      }}
    />
  );
  const movieTitle = screen.getByTestId('movie-title');
  expect(movieTitle).toHaveTextContent('Midnight Sun');
});
