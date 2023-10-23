import React from 'react'
import Image from 'next/image'
import * as events from './eventsmobile.module.css'

const EventItem = ({ name, desc, image, top, left }) => {
  return (
    <>
      <div
        className={events.itemContainer}
        style={{ top: top, left: left }}
        suppressHydrationWarning
      >
        <div className={events.itemImage}>
          <Image draggable={false} src={image} alt="Street Dance"></Image>
        </div>
        <div className={events.itemContent}>
          <h2>{name}</h2>
        </div>
      </div>
    </>
  )
}

export default EventItem
