export interface LectureData {
  lessonId: number
  position: number
  title: string // 'Unit 1 - T3: Data Types, Functions and Modules'
  youtubeId: string // 'oG94i3F9NyA', used for the embed and the watch link
  length: string // '1:07:30'
}

export interface Lecture extends LectureData {
  id: number
}