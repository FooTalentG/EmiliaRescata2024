'use client'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Carousel from 'react-material-ui-carousel'
import imagesDogs from '@/data/imagesDogs.js'
import { useEffect, useState } from 'react'
import Images from './Imagesdogs'

const CarouselDog = () => {
  const [iconStyle, setIconStyle] = useState({
    fontSize: '5rem',
    color: 'white'
  })

  const [indicatorStyle, setIndicatorStyle] = useState({
    marginBottom: '20px'
  })

  const [updateKey, setUpdateKey] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setIconStyle({
          fontSize: '2rem',
          color: 'white'
        })
        setIndicatorStyle({ marginBottom: '10px' })
      } else if (window.innerWidth < 768) {
        setIconStyle({
          fontSize: '3.5rem',
          color: 'white'
        })
        setIndicatorStyle({ marginBottom: '12px' })
      } else {
        setIconStyle({
          fontSize: '5rem',
          color: 'white'
        })
        setIndicatorStyle({ marginBottom: '20px' })
      }
      setUpdateKey((prevKey) => prevKey + 1)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="overflow-hidden"
      key={updateKey}
    >
      <Carousel
        NextIcon={<ArrowForwardIosIcon style={iconStyle} />}
        PrevIcon={<ArrowBackIosNewIcon style={iconStyle} />}
        navButtonsAlwaysVisible={true}
        transitionDuration={4000}
        className="relative"
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }
        }}
        indicatorIconButtonProps={{
          style: {
            padding: '5px',
            color: 'white',
            margin: 'auto 0'
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: '#6D0401',
            color: 'transparent',
            width: 50,
            height: 10,
            borderRadius: '10px',
            margin: 'auto 0'
          }
        }}
        indicatorContainerProps={{
          style: indicatorStyle,
          className: 'absolute inset-x-0 bottom-0 z-10 flex justify-center space-x-2'
        }}
      >
        {imagesDogs.map((item) => (
          <Images
            key={item.id}
            item={item}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselDog
