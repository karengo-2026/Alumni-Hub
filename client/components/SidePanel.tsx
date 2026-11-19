// Issue
// SidePanel.tsx – slide-in drawer: title, Close button, Esc to close, renders children
import { useEffect } from 'react'

interface Props {
  onClose: () => void
}

export default function SidePanel({ onClose }: Props) {
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
