import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('matches snapshot', () => {
  test('matches to snapshot', () => {
    const title = 'Africa';
    const tree = renderer.create(<Router><Navbar title={title} /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
