import { screen, render, cleanup } from '@testing-library/react';
import CountryCard from '../components/CountryCard';
// import renderer from 'react-test-renderer';

afterEach(() => {
  cleanup();
});

// const country = [
//   {
//     people_partially_vaccinated: '256252',
//     administered: '25652',
//     population: '85585',
//     life_expectancy: '85585',
//   },
//   {
//     people_partially_vaccinated: '256252',
//     administered: '25652',
//     population: '85585',
//     life_expectancy: '85585',
//   },
//   {
//     people_partially_vaccinated: '256252',
//     administered: '25652',
//     population: '85585',
//     life_expectancy: '85585',
//   },

// ];

describe('render detail page to the screen', () => {
  test('render component to the DOM', async () => {
    render(<CountryCard />);
    const countryDetailElement = await screen.findByText('COUNTRY BREAKDOWN');
    expect(countryDetailElement).toBeVisible();
  });
});
