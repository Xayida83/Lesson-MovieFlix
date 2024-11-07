import { describe, it, beforeEach } from "vitest";
import { render, screen } from '@testing-library/react';

import { MoviesPage } from "./MoviesPage";

beforeEach(()=> render(<MoviesPage />));

describe('MoviesPage component', () => {
  it('should have a heading whit text', () => { 
    screen.getByRole('heading', {name: /filmer$/i});
  });
  it('should display image for each movie', () => {});
})