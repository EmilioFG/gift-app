import { render, screen } from '@testing-library/react';
import { Gif } from '../../src/components';


describe("Pruebas en <Gif />", () => {

  const title = 'zombie';
  const url = 'https://emiliogonzalez.dev';

  test("debe de hacer match con el snapchot", () => {
    const { container } = render(<Gif title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<Gif title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    const { src, alt } = screen.getByRole('img');

    // TODO: se hace esto para quitar un caracter adicional '/' que agregar src que se obtiene a travéz de screen
    expect(src.substring(0, src.length - 1)).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el título en el componente", () => {
    render(<Gif title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

});
