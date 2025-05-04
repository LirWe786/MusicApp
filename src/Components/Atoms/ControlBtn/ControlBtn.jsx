import './ControlBtn.css'

const ControlBtn = (props) => {
    const {src,handleClick} = props;

return(

    <button className='control-btn' onClick={handleClick} >
        <img src={src} alt=""  />
    </button>
)
}
export default ControlBtn