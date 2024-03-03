import { isFormInvalid } from '../utils/isFormInvalid'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { InputError } from './InputError'
import { findInputError } from '../utils/findInputError'

export const Input = ({ label, type, id, placeholder, validation, name, aclaracion, handleChange, esTexto }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext({ shouldUnregister: false })

  const text = esTexto ? "w-[100%]" : "w-[33.3%]"
  const text2 = esTexto ? "w-[100%] h-[200px] mb-16" : "w-[90%] mb-4"

  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)
  // PASAJES A PARTIR DE FEBRERO
  const currentDate = new Date().toISOString().split('T')[0]
  return (
    <div className={`${text} text-lg max-md:w-[100%]`}>
          <label htmlFor={id} className="font-semibold mb-8 text-[#626262] ">
            {label}
          </label>
          <p>{aclaracion}</p>
          <AnimatePresence mode="wait" initial={false}>
            {isInvalid && (
              <InputError
                message={inputError.error.message}
                key={inputError.error.message}
              />
            )}
          </AnimatePresence>
        <input
          id={id}
          type={type}
          min = {currentDate}
          placeholder={placeholder}
          onInput={handleChange}
          className={`${text2}  mt- text-[#626262] boxshadow max-md:w-[100%]
           bg-[rgb(255,255,255)] border-[#EBEBEB] mt-4 p-2`}
          {...register(name, validation, { shouldUnregister: false })}
        />
      </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  aclaracion: PropTypes.string,
  validation: PropTypes.Object,
  handleChange: PropTypes.func
}