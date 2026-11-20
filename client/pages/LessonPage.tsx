import { useParams } from 'react-router'
import { useLesson } from '../hooks/useLesson'
import LecturePanel from '../components/LecturePanel'

export function LessonPage() {
  const { id } = useParams()

  const { data: lessons, isLoading, error } = useLesson(Number(id))

  if (isLoading) {
    return <p>Loading....</p>
  }

  if (error) {
    return <p> {error.message}</p>
  }

  if (!lessons) {
    return <p>No lessons found</p>
  }

  const currentLesson = lessons.lesson
  const currentLectures = lessons.lectures

  return (
    <>
      {/* Hard coded into return for now */}
      <LecturePanel
        lectures={currentLectures}
        onClose={() => {}}
      >
        <p>{currentLesson.name}</p>
      </LecturePanel>
    </>
  )
}

export default LessonPage
