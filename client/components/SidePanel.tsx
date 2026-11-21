import type { Resource } from '../../models/resource.ts'
import { getYouTubeId } from '../utils/youtube.ts'
import LecturePanel from './LecturePanel.tsx'
import HandbookPanel from './HandbookPanel.tsx'

interface Props {
  resource: Resource
  onClose: () => void
}

export default function SidePanel({ resource, onClose }: Props) {
  const youtubeId = getYouTubeId(resource.url)

  let handbookUrl: string | null = null

  try {
    const url = new URL(resource.url)

    if (
      url.protocol === 'https:' &&
      url.hostname === 'student-handbook.devacademy.life'
    ) {
      handbookUrl = url.href
    }
  } catch {
    handbookUrl = null
  }

  const Panel = youtubeId ? LecturePanel : HandbookPanel

  return (
    <aside
      aria-labelledby="resource-preview-heading"
      className="mt-6 rounded-lg border border-gray-300 bg-white p-6"
    >
      <Panel
        onClose={onClose}
        title={<h2 id="resource-preview-heading">{resource.title}</h2>}
      >
        {youtubeId && (
          <iframe
            key={youtubeId}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={`Video: ${resource.title}`}
            className="my-4 aspect-video min-h-[200px] w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        {handbookUrl && (
          <iframe
            key={handbookUrl}
            src={handbookUrl}
            title={`Reading: ${resource.title}`}
            className="my-4 h-[65vh] w-full border-0"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}

        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          Open original resource (new tab)
        </a>
      </Panel>
    </aside>
  )
}
