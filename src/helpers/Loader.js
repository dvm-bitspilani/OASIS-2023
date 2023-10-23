import React, { useState, useEffect, useRef } from 'react'

export default function Loader(props) {
  const { isLoading, setIsLoading } = props
  const regLoaderRef = useRef(null)
  const [loaderLoaded, setLoaderLoaded] = useState(false)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  useEffect(() => {
    const assets = [regLoaderRef.current]
    let assetsLoaded = 0

    const handleAssetLoad = () => {
      assetsLoaded++
      if (assetsLoaded === assets.length) {
        setTimeout(() => {
          setLoaderLoaded(true)
        }, 1000)
      }
    }

    assets.forEach((asset) => {
      if (
        asset &&
        (asset.complete || asset.readyState === 4 || asset.tagName === 'LINK')
      ) {
        handleAssetLoad()
      } else {
        if (asset) {
          asset.addEventListener('load', handleAssetLoad)
          asset.addEventListener('error', handleAssetLoad)
        }
      }
    })

    const cleanup = () => {
      assets.forEach((asset) => {
        if (asset) {
          asset.removeEventListener('load', handleAssetLoad)
          asset.removeEventListener('error', handleAssetLoad)
        }
      })
    }

    return cleanup
  }, [setLoaderLoaded])
  useEffect(() => {
    if (loaderLoaded) {
      const assets = document.querySelectorAll('img', 'font', 'style', 'iframe')

      let assetsLoaded = 0

      const handleAssetLoad = () => {
        assetsLoaded++
        if (assetsLoaded === assets.length) {
          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
        }
      }

      assets.forEach((asset) => {
        if (
          asset &&
          (asset.complete || asset.readyState === 4 || asset.tagName === 'LINK')
        ) {
          handleAssetLoad()
        } else {
          if (asset) {
            asset.addEventListener('load', handleAssetLoad)
            asset.addEventListener('error', handleAssetLoad)
          }
        }
      })

      const cleanup = () => {
        assets.forEach((asset) => {
          if (asset) {
            asset.removeEventListener('load', handleAssetLoad)
            asset.removeEventListener('error', handleAssetLoad)
          }
        })
      }

      return cleanup
    }
  }, [loaderLoaded, setIsLoading])

  return (
    <>
      {isLoading && (
        <div className="loaderContainer">
          <video
            ref={regLoaderRef}
            src={require('../../public/static/images/loadervideo.mp4')}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            width="100%"
          />
        </div>
      )}
    </>
  )
}
