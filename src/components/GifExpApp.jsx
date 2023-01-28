
import { useState } from "react"
import { AddCategorys } from "./AddCategorys";
import { GifGrid } from "./GifGrid";
export const GifExpApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory)=>{
        
        if (categories.includes(newCategory)) return;

        setCategories(cat =>[newCategory,...categories,]);
    } 
    return(
        <>
      
        <h1>GifExpertApp</h1>
       
        <AddCategorys onNewCategory = { onAddCategory} />
        
         {categories.map((category)=> (
            <>
                <GifGrid 
                key = { category }
                category = { category}
                />
            </>
            )
            )}
        
        </>
        )
}
