import { render } from '@testing-library/react';
import JSONSchema from '../';

describe('JSONSchema component', () => {
  it('renders without crashing', () => {
    expect(render.bind(null, <JSONSchema />))
      .not
      .toThrow();
  });

  describe('no JSON', () => {
    it('renders as expected', () => {
      const { container } = render(<JSONSchema />);
      expect(container.firstChild)
        .toMatchSnapshot();
    });
  });

  describe('given JSON', () => {
    it('renders as expected', () => {
      const org = {
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        '@id': 'https://acme.com',
        url: 'https://acme.com',
        name: 'ACME'
      };

      const { container } = render(<JSONSchema json={ org } />);

      expect(container.firstChild)
        .toMatchSnapshot();
    });
  });
});

