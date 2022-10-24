import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useGifs} from '../../src/hooks/useGifs';

jest.mock('../../src/hooks/useGifs');


describe("Pruebas en <GifGrid />", () => {

  const category = 'zombie';

  test("debe de hacer match con el snapchot", () => {

    useGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    const { container } = render(<GifGrid category={category} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el loading inicial", () => {

    useGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByText('...loading'));
    expect(screen.getByText(category));
  });

  test("debe mostrar gifs cuando se cargan las imágenes useGifs()", () => {

    const gifs = [
      { id: 'aaa', title: 'zombie', url: 'http://emiliogonzalez.dev'},
      { id: 'bbb', title: 'goku', url: 'http://emiliogonzalez.dev'},
    ];

    useGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    // screen.debug()

  });

});
