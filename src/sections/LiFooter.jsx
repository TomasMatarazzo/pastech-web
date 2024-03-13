import PropTypes from 'prop-types'

const LiFooter = ({titulo,elementos}) => {
  return (
    <ul className=" flex flex-col justify-start items-start w-1/3 max-md:items-center max-md:w-[90%]">
      <h1 className="text-white text-2xl font-normal py-3 max-md:text-center">{titulo}</h1>
      {
      elementos.map((elemento,i) => {
          return <li key = {i} className="py-0 my-2 text-lg font-thin text-[rgb(135,147,145)] hover:text-white hover:border-white cursor-pointer border-b-2 border-transparent">{elemento}</li>
          })
      }
  </ul>
  )
}

LiFooter.propTypes = {
    elementos:PropTypes.string,
    titulo:PropTypes.string,
  };

export default LiFooter