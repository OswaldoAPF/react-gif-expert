import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
/* EX7vWfqwJQtbS8UfbLkAkTtI4WE9uF3R */

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( [ 'Dragon Ball' ] )

  const onAddCategory = ( newCategory ) => {

    if(  categories.includes( newCategory ) ) return;


    setCategories([ newCategory, ...categories ]);
  }


  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory onNewAddCategory={ onAddCategory } />


      { 
        categories.map( category => (
          <GifGrid key={ category } category={ category } />

        ))
      }


    </>
  )
}




