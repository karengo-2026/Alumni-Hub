// Issue
// LecturePanel.tsx – YouTube embed (youtube-nocookie.com/embed/ + youtubeId)
// List of the lesson's other lectures to switch between, "Watch on YouTube" link

import { useEffect } from 'react'

interface Props {
  onClose: () => void
}

export default function LecturePanel({ onClose }: Props) {
  useEffect(() => {
    const KeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    return () => {
      window.removeEventListener('keydown', KeyDown)
    }
  }, [onClose])

  return (
    <div className="relative">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 z-10 rounded-full p-2"
      >
        X
      </button>
    </div>
  )
}
