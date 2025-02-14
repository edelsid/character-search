export default function Scrollup() {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className='scroll-up' type='button' onClick={scroll}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 49.69 52.72"
        className="scroll-up__arrow">
        <path 
          className="cls-1" 
          d="M208,274.74l-23.77,50.43L208,313l23.77,12.18Q219.88,300,208,274.74Z" 
          transform="translate(-183.15 -273.57)"
        />
      </svg>
    </button>
  )
}
