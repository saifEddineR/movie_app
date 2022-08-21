import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieCard from './components/MovieCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<MovieCard />);
  //   ReactDOM.unmountComponentAtNode(root);
});

it('renders movieCard correctly', () => {
  render(
    <MovieCard
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
  screen.getByTestId('button');
});
