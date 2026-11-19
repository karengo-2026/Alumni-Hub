// SidePanel.tsx – slide-in drawer: title, Close button, Esc to close, renders children
import { useEffect, type ReactNode } from 'react'

interface Props {
  onClose: () => void
  children: ReactNode
  title: ReactNode
}

export default function SidePanel({ onClose, children, title }: Props) {
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
    <div className="relative">
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
