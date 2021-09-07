import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import { PhotoViewer } from './components/PhotoViewer';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

describe("My Component", () => {
  it("Should match snapshot without name prop", async () => {
    const tree = renderer.create(<PhotoViewer/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("My Component", () => {
  it("Should match snapshot without name prop", async () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
