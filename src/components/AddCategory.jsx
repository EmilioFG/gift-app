import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  const handleChange = ({ target }) => setInputValue(target.value)

  return (
    <>
      <h3>Agregar Categoría</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </>
  )
}