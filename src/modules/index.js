export const handleAction = (setPlay) => {
    setPlay(prev => !prev)
}

export const handleNext = (setIndex,musicList) => {
    setIndex(prev=>(prev+1) % musicList.length);
}
export const handlePrev = (setIndex,musicList) => {
  setIndex(prev=>(prev-1 + musicList.length) % musicList.length);

}

