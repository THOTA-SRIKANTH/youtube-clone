import Button from './Button'
import React from 'react'
import '../styles/ButtonList.css'

const ButtonList = () => {


  const buttonNames = ["All" , "Gaming" , "songs" , "news" , "Live" , "React" ,"Coding" , "FAANG" ,"motivational" , "comedy" ,"Consistency" ,"DSA" ,"Interview","Interview","Interview","Interview"]
  return (
    <div className="button-list-scroll flex overflow-x-scroll whitespace-nowrap mt-16">

      {buttonNames.map((name) => {

        return <Button key={name}  name={name}/>
      })}
    </div>
  )
}

export default ButtonList
