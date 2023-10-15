import React from 'react'

function CardComponent() {
  return (
    <div className="rounded">
        <img src="https://images6.alphacoders.com/785/thumb-1920-785425.png" alt="Card 1" className="w-full h-48 object-cover rounded-lg" />
        <div className="flex ">
        <p className="px-4 my-4 text-sm bg-gen rounded-lg mx-2">Status</p>            
        <p className="px-4 my-4 text-sm bg-gen rounded-lg mx-2">Movie</p>         
        </div>
        <h2 className="p-2 font-bold ">Fate Stay Night Unlimited Blade Works</h2>
    </div>
  )
}

export default CardComponent