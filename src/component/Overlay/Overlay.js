import './Overlay.css'

const Overlay = () => {
  return (
    <div className="overlay-container">
        {new Array(16).fill().map((_ , i) => (
            <div key = {i} className='overlay'></div>
        ))}
    </div>
  )
}

export default Overlay