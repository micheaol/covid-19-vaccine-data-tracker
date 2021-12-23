import {
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
import store from '../redux/configureStore';

afterEach(() => {
  cleanup();
});

describe('render component to the DOM', () => {
  test('render home to the screen', () => {
    render(<Provider store={store}><Home /></Provider>);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });

  test('render input to the screen', () => {
    render(<Provider store={store}><Home /></Provider>);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('fire onChange event', () => {
    render(<Provider store={store}><Home /></Provider>);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Nigeria' } });
    expect(inputElement.value).toEqual('Nigeria');
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
