import { useParams } from 'react-router'
import { useLesson } from '../hooks/useLesson'

export function LessonPage() {
  const { id } = useParams()

  const { data: lessons, isLoading, error } = useLesson(Number(id))

  if (isLoading) {
    return <p>Loading....</p>
  }

  if (error) {
    return <p> {error.message}</p>
  }  

  if(!lessons){
    return <p>No lessons found</p>
  }

  const currentLesson = lessons.lesson
  // const currentResources = lessons.resources
  // const currentLectures = lessons.lectures


  return (
    <>
      <p>Lesson description: {currentLesson.description}</p>
    </>
  )
}

export default LessonPage
