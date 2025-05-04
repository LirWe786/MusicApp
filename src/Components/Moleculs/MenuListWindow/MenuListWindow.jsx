import { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import MenuListInput from "../../Atoms/MenuListInput/MenuListInput";
const MenuListWindow = (props) => {


    const { musicList } = useContext(AppContext);
    const [inpValue, setInpValue] = useState('');
    const [platList, setPlatList] = useState(musicList);

    function liveSearch() {
        const filtredTracks = musicList.filter((n) => {
            const values = n.singer + n.title; + + n.album;
            const found = values.toLowerCase().includes(inpValue.toLowerCase());
            console.log(inpValue, found, values);
            if (found) {
                return n;
            } else {
                console.log('not found')
            }
        })
        setPlatList(filtredTracks)
        console.log(platList);
    }
    return (
        <div className="menu-list-window">
            <input type="text" onInput={(e) => {
                setInpValue(prev => e.target.value)
                liveSearch()
            }} />
            {platList.map((track) => {
                console.log(track);
                return (
                    <div className="menu-list-item">
                        <div className="menu-list-item-img">
                            <img src={track.img} alt="" />
                        </div>
                        <div>
                            <p>{track.singer}</p>
                            <p>{track.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default MenuListWindow;