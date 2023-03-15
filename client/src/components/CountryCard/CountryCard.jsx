import React from 'react'
import './CountryCard.css'
import { useDispatch } from 'react-redux'
import { getCountryID } from '../../store/reducer/thunk'
import { useNavigate } from 'react-router-dom'

const CountryCard = ( {name , image , continent , cca3 , setImageInfo} ) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = (cca3) =>{
    dispatch(getCountryID(cca3))
    setImageInfo(image)
    navigate(`/viewCountry/${cca3}`)
  }

  return (
    <div className='country'>
      <div className='country__Container'>
        <img src={image} alt="" className='country__image' onClick={()=>handleClick(cca3)} />
      </div>
        <h3 className='country__name'>{name}</h3>
        <h4 className='country__continent'>{continent}</h4>
    </div>
  )
}

export {CountryCard}