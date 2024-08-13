import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import PropTypes from 'prop-types'

const LoadingSpinner = ({ loading }) => {
  return (
        <div style={{ margin: 'auto', width:"100%" }}>
        <ClipLoader
          color={'green'}
          loading={loading}
          cssOverride={{ height: '45px', width: '45px' }}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
  )
}

LoadingSpinner.propTypes = {
  loading: PropTypes.boolean
}

export default LoadingSpinner