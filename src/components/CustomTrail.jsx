'use client'

import { MouseTrail } from '@stichiboi/react-elegant-mouse-trail'
import { useWindowSize } from 'rooks'

export default function CustomTrail({ children }) {
  const { innerWidth } = useWindowSize()

  const trailProps = {
    lineDuration: 3,
    lineWidthStart: 10,
    strokeColor: '#5DB3F1',
    lag: 0,
  }
  return <>{innerWidth > 820 && <MouseTrail {...trailProps} />}</>
}
