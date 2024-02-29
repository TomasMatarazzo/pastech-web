import PropTypes from 'prop-types'

const Button2 = ({text}) => {
  return (
    <button className = " border-black w-[fit-content] flex tetext-center py-[13px] px-[19px] border-spacing-6 border-2 bg-transparent text-sm text-black leading-none mt-2">
        {text}
    </button>
  )
}

Button2.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  };

export default Button2