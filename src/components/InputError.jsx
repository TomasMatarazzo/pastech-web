import React from 'react'
import { motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import PropTypes from 'prop-types'

export const InputError = ({ message }) => {
  return (
        <motion.p
          className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md mb-3"
          {...framerError}
        >
          {message}
        </motion.p>
  )
}

const framerError = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}

InputError.propTypes = {
  message: PropTypes.string
}