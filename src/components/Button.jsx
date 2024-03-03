import PropTypes from 'prop-types'

const Button = ({text,color = "white",onClick}) => {

  const border = {
    "green":"text-black bg-t-greens",
    "white": "bg-white text-black"
  }
  return (
    <button onClick = {()=>onClick()}className ={`${border[color]}  bg-t-green font-semibold px-14 py-3 w-[fit-content] flex tetext-center border-spacing-6 border-0 text-sm  leading-none mt-2`}>
        {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  };

export default Button