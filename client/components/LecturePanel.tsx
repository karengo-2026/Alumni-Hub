// Issue
// LecturePanel.tsx – YouTube embed (youtube-nocookie.com/embed/ + youtubeId)
// List of the lesson's other lectures to switch between, "Watch on YouTube" link
// Mock data been used in this file

import { useEffect, type ReactNode } from 'react'

interface Props {
  onClose: () => void
  children: ReactNode
  title: ReactNode
}

export default function LecturePanel({ onClose, children, title }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="panels relative ml-auto">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 z-10 rounded-full p-2"
      >
        X
      </button>
      {title}
      {children}
    </div>
  )
}

{
  /* <iframe
 src={`https://www.youtube-nocookie.com/embed/${lecture.youtubeId}`}
  title={lecture.title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="aspect-video w-full"
/> */
}
