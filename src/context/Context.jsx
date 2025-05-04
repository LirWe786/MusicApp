import React, { createContext } from 'react'
import { useState } from 'react'
import { music_list } from '../Data'

export const AppContext = createContext(null);

const  AppProvider = ({ children }) => {
    const [musicList, setMusicList] = useState(music_list)
    const [play, setPlay] = useState(false)
    const [value, setValue] = useState(30)
    const [index, setIndex] = useState(Math.floor(musicList.length / 2))

   


    return (
        <AppContext.Provider value={{ musicList, play, index, value, setPlay, setIndex}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider
