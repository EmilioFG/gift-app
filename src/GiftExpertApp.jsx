import { useState } from 'react'

import { AddCategory, GifGrid } from './components';


export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['dragon ball z']);

  const handleAddCategory = (newCategory) => {
    const currentCategories = [...categories].map((category) => (category.toLowerCase()));
    if (currentCategories.includes(newCategory.toLowerCase()))
      return alert(`la categoría ${newCategory} ya existe`);

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={handleAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}