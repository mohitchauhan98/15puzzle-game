import React, { useState } from 'react'
import './Board.css'
import Overlay from '../Overlay/Overlay'
import Tile from '../Tile/Tile'

const Board = () => {
    const shuffle = () => 
        new Array(16).fill().map((_ , i) => i + 1).sort(() => Math.random() - .5).map((x , i) => ({value : x , index : i}))
    
    const [numbers , setNumbers] = useState(shuffle())

    const moveTile = tile => {
        const i16 = numbers.find(n => n.value === 16).index
        if(![i16 - 1 , i16+1, i16-4,i16+4].includes(tile.index))
            return

        const newNumbers = 
        [...numbers].map(number => {
            if(number.index !== i16 && number.index !== tile.index)
                return number
            else if(number.value === 16)
                return {value : 16 , index:tile.index}

            return {value : tile.value , index:i16}
        })
        setNumbers(newNumbers)
    }
  return (
    <>
        <div>
            <div>
                <span>Fifteen Puzzle Game</span>
            </div>
        </div>
        <div className='game'>
            <div className='board'>
                <Overlay />
                {numbers.map((x , i) => (
                    <Tile key = {i} number = {x} moveTile = {moveTile}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Board