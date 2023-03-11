import { CSSProperties } from 'react'
import { getFirstTwoChars } from '../../utils'
import { AvatarSizeTypes } from '../types'
import './style.css'

interface AvatarProps {
  size: AvatarSizeTypes
  name: string
  url?: string
  style?: CSSProperties
}

function Avatar({
  size,
  url,
  name,
  style,
}: AvatarProps) {
  if (!url) {
    return (
      <div className={`avatar ${size}`} style={style}>
        <span>{getFirstTwoChars(name)}</span>
      </div>
    )
  }

  return (
    <div className={`avatar ${size}`} style={style}>
      <img src={url} alt={name} />
    </div>
  )
}

export default Avatar;