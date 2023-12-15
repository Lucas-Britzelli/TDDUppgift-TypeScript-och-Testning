import { createHeadings } from '../Functions/createHeadings';

describe('makeHeading', () => {
    it('creates an h1 heading', () => {
      expect(createHeadings('Hello', 1)).toBe('<h1>Hello</h1>');
    });

    it('creates an h2 heading', () => {
      expect(createHeadings('Next level', 2)).toBe('<h2>Next level</h2>');
    });

});
