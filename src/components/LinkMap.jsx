import React from 'react'

const LinkMap = ({lat, lng}) => {
  return (
    <iframe
      src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Maps"
    />  
  )
}

export default LinkMap
