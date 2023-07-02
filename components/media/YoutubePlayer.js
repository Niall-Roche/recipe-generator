'use client'

const {useMemo} = require('react')
import YouTube from 'react-youtube'

const YoutubePlayer = ({title, url}) => {
  const id = useMemo(() => url.split('/watch?v=')[1], [url])

  return (
    <YouTube
      videoId={id}
      title={title}
    />
  )
}

export default YoutubePlayer