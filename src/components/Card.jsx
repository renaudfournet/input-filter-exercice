import React from 'react'

export default function Card(data) {
  // console.log('DATA PROPS', data)
  return (
    <div
      style={{
        backgroundColor:
          data.data.rarity === 'Rare'
            ? '#ffca00'
            : data.data.rarity === 'Common'
            ? '#2e2e2e'
            : data.data.rarity === 'Uncommon'
            ? '#ababab'
            : data.data.rarity === 'Mythic rare'
            ? '#ff8600'
            : data.data.rarity === 'Special'
            ? '#ff8600'
            : data.data.rarity === 'Basic Land'
            ? '#000000'
            : ''
      }}
      className={`text-black-100 rounded-lg m-2 p-4 h-72 w-60 card relative`}
    >
      <div className="text-xl font-black">{data.data.name}</div>
      <div className="font-bold">{data.data.types}</div>
      <div>
        <p className="italic text-sm">{data.data.text}</p>
      </div>
      <div className="absolute bottom-0 right-0 m-2">
        <p>{data.data.rarity}</p>
      </div>
    </div>
  )
}
