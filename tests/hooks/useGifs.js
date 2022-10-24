import { renderHook, waitFor } from '@testing-library/react';
import { useGifs } from '../../src/hooks/useGifs';


describe("pruebas en hook useGifs()", () => {

  test("debe de regresar el estado inicial", () => {
    // useGifs();

    const { result } = renderHook(() => useGifs('zombie'));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de gifs y el isLoading en falso", async () => {
    const { result } = renderHook(() => useGifs('zombie'));

    await waitFor(() =>
      expect(result.current.gifs.length).toBeGreaterThan(0)
    );

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

});