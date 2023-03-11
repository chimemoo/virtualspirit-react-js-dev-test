import { CSSProperties } from 'react'
import { AvatarSizeTypes } from '../types'
import './style.css'

interface AvatarProps {
  size: AvatarSizeTypes
  url: string
  style?: CSSProperties
}

function Avatar({
  size,
  url,
  style,
}: AvatarProps) {
  return (
    <div className={`avatar ${size}`} style={style}>
      <img src={url} />
    </div>
  )
}

export default Avatar;