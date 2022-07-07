import React, { useEffect, useState } from 'react'
import { getCards } from '../api/requests'
import axios from 'axios'

export default function CardsList() {
  const [card, setCard] = useState(null)
  const [search, setNewSearch] = useState('')

  const url = getCards()

  useEffect(() => {
    async function fetchCards() {
      const request = await axios.get(url)

      setCard(request.data)
      return request
    }
    fetchCards()
  }, [url])

  const handleSearchChange = e => {
    setNewSearch(e.target.value)
  }

  const rarety = [
    { name: 'Rare' },
    { name: 'Common' },
    { name: 'Uncommon' },
    { name: 'Mythic rare' },
    { name: 'Special' },
    { name: 'Basic Land' }
  ]

  const filtered = !search
    ? rarety
    : rarety.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))

  if (!card) return <div className="bg-black-300 relative">Loading ...</div>

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <label>
            Name
            <input type="text" className="border-black-100 border m-10" />
          </label>
        </div>
        <div>
          <label>
            Types
            <input type="text" className="border-black-100 border m-10" />
          </label>
        </div>
        <div>
          <label>
            Rarety
            <input
              value={search}
              onChange={handleSearchChange}
              autoComplete=""
              type="text"
              className="border-black-100 border m-10"
            />
          </label>
        </div>
      </div>
      {filtered.map(item => {
        return (
          <div className="flex flex-wrap justify-center">
            {card.cards.map(item => (
              <div
                style={{
                  backgroundColor:
                    item.rarity === 'Rare'
                      ? '#ffca00'
                      : item.rarity === 'Common'
                      ? '#2e2e2e'
                      : item.rarity === 'Uncommon'
                      ? '#ababab'
                      : item.rarity === 'Mythic rare'
                      ? '#ff8600'
                      : item.rarity === 'Special'
                      ? '#ff8600'
                      : item.rarity === 'Basic Land'
                      ? '#000000'
                      : ''
                }}
                className={`text-black-100 rounded-lg m-2 p-4 h-72 w-60 card relative`}
              >
                <div className="text-xl font-black">{item.name}</div>
                <div className="font-bold">{item.types}</div>
                <div>
                  <p className="italic text-sm">{item.text}</p>
                </div>
                <div className="absolute bottom-0 right-0 m-2">
                  <p>{item.rarity}</p>
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
