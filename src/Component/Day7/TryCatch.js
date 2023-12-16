import React from 'react'

export default function TryCatch({veg}) {
    try{
        if(veg==="Apple")
        {
            throw new Error("Not a Vegetable")
        }
    }
    catch(Error)
    {
        document.write(Error)
    }
    
    finally{
        document.write("Executed successfully")
    }
  return (
    <div>
      {veg}
    </div>
  )
}
