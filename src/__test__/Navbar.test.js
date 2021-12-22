import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('render the component to the DOM', () => {
  test('matches to snapshot', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
