import React from 'react'
import CV from '../../assets/CV Agustin Luna.pdf'

const CTA = () => {
  return (
      <div className="cta mt-5 ">
          <a href={CV} download className="btn m-2">Descargar CV</a>
          <a href="#contact" className="btn btn-primary m-2">Hablemos</a>
    </div>
  )
}

export default CTA