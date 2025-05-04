import MenuListBtn from "../../Moleculs/MenuListBtn/MenuListBtn"
import MenuListWindow from "../../Moleculs/MenuListWindow/MenuListWindow"

const MenuList = (props) => {
    const { handleClick,musicPlayList,active,setActive } = props
    return (
        <>
            <MenuListBtn func={handleClick} />
            {/* {
                <MenuListWindow
                    list={musicPlayList} />
            } */}
            {
             active &&  <MenuListWindow
                list={musicPlayList} />
            }

        </>
    )
}
export default MenuList