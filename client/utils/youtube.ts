export function getYouTubeId(value: string): string | null {
  try {
    const url = new URL(value)
    const hostname = url.hostname.toLowerCase()

    if (!['https:', 'http:'].includes(url.protocol)) {
      return null
    }

    let videoId: string | null = null

    if (hostname === 'youtu.be') {
      videoId = url.pathname.split('/')[1] ?? null
    } else if (
      ['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(hostname)
    ) {
      if (url.pathname === '/watch') {
        videoId = url.searchParams.get('v')
      } else {
        const [, format, id] = url.pathname.split('/')

        if (['embed', 'shorts', 'live'].includes(format)) {
          videoId = id ?? null
        }
      }
    }

    return videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId) ? videoId : null
  } catch {
    return null
  }
}
