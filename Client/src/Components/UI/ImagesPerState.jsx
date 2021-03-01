import React from 'react'
import Figure from 'react-bootstrap/Figure'
import { aboutImgStyle, aboutCaptionStyle } from '../../Styles/Pages/AboutPage.Styles'

const ImagesPerState = ({ stateAPI, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      { stateAPI.map(({stateImages}, i) => {
        return <Figure key={ i } className="col-12 text-success">
          { stateImages.map((url, img) => {
              return <Figure.Image key={ img } src={ url } style={ aboutImgStyle } alt="man in big tree"/>
            })
          }
            <Figure.Caption style={ aboutCaptionStyle } className="mb-3">
              This is an image shot from our sponsored location.
            </Figure.Caption>
          </Figure>
        })
      }
    </>
  )
}

export default ImagesPerState
