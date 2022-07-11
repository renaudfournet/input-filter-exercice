import React, { useEffect, useState } from 'react'
// import { getCards, getTypes } from '../api/requests'
import axios from 'axios'

export default function CardsList() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [rarity, setRarity] = useState('')
  const [type, setType] = useState('')
  // const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true)

  // const url = getCards()
  // const urlTypes = getTypes()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.magicthegathering.io/v1/cards?name=${name}&type=${type}&rarity=${rarity}`
      )
      console.log(res.data.cards)
      setData(res.data)
    }
    fetchData()
  }, [name, type, rarity])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     try {
  //       const { data: response } = await axios.get(
  //         `https://api.magicthegathering.io/v1/cards?name=${name}`
  //       )
  //       console.log(response)
  //       setCard(response)
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //     setLoading(false)
  //   }

  //   fetchData()
  // }, [name])

  // useEffect(() => {
  //   const fetchTypes = async () => {
  //     setLoading(true)
  //     try {
  //       const { data: response } = await axios.get(urlTypes)
  //       console.log('TYPES', response)
  //       setTypes(response)
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //     setLoading(false)
  //   }

  //   fetchTypes()
  // }, [])

  // const rarety = [
  //   { name: 'Rare' },
  //   { name: 'Common' },
  //   { name: 'Uncommon' },
  //   { name: 'Mythic rare' },
  //   { name: 'Special' },
  //   { name: 'Basic Land' }
  // ]

  if (!data.cards) return <div>LOADING ...</div>

  return (
    <div>
      <>
        <div className="flex justify-center">
          <div>
            <label>
              Name
              <input
                onChange={e => setName(e.target.value)}
                name="name"
                type="text"
                className="border-black-100 border m-10"
              />
            </label>
          </div>
          <div>
            <label>
              Types
              <input
                onChange={e => setType(e.target.value)}
                type="text"
                className="border-black-100 border m-10"
              />
            </label>
          </div>
          <div>
            <label>
              Rarety
              <input
                onChange={e => setRarity(e.target.value)}
                type="text"
                className="border-black-100 border m-10"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {data.cards.map(item => (
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
      </>
    </div>
  )
}
