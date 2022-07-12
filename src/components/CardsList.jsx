import React, { useEffect, useState } from 'react'
// import { getCards, getTypes } from '../api/requests'
import axios from 'axios'
import Card from './Card'

import { getTypes } from '../api/requests'

export default function CardsList() {
  const [data, setData] = useState([])
  const [types, setTypes] = useState([])
  const [name, setName] = useState('')
  const [rarity, setRarity] = useState('')
  const [type, setType] = useState('')

  const urlTypes = getTypes()

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

  useEffect(() => {
    const fetchTypes = async () => {
      const res = await axios.get(urlTypes)
      console.log(res)
      setTypes(res.data)
    }
    fetchTypes()
  }, [])

  if (!data.cards || !types.types) return <div>LOADING ...</div>

  return (
    <div>
      <>
        <div className="flex justify-center">
          <div className="w-1/3">
            <label>
              Name : &nbsp;
              <input
                onChange={e => setName(e.target.value)}
                name="name"
                type="text"
                className="border-black-100 border mt-10 mb-10"
              />
            </label>
          </div>
          <div className="w-1/3 mt-10 mb-10">
            <select
              onChange={e => setType(e.target.value)}
              name="types"
              class="form-multiselect block w-full border mt-1"
            >
              <option disabled className="bg-gray-400 text-black-100">
                Select a type (use ctrl)
              </option>
              <option value="All">All</option>
              {types.types.map(item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-1/3">
            <label>
              Rarety : &nbsp;
              <input
                onChange={e => setRarity(e.target.value)}
                type="text"
                className="border-black-100 border mt-10 mb-10"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {data.cards.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>
      </>
    </div>
  )
}
