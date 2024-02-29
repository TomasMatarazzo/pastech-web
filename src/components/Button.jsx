import PropTypes from 'prop-types'

const Button = ({text,color = "white"}) => {

  const border = {
    "green":" border-[#02936E] text-[#02936E] ",
    "white": " border-white text-white"
  }
  return (
    <button className ={`${border[color]} w-[fit-content] flex tetext-center py-[13px] px-[19px] border-spacing-6 border-2 bg-transparent text-sm  leading-none mt-2`}>
        {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  };

export default Button