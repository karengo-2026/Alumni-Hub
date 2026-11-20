import { useParams } from 'react-router'
import { useLesson } from '../hooks/useLesson'

export function LessonPage() {
  const id = useParams()

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

  return (
    <>
      <p></p>
    </>
  )
}

export default LessonPage
