import { render, screen, cleanup } from '@testing-library/react';
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

  test('matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
