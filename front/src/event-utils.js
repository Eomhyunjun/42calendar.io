import {createEventId} from "./CreateEventId"

//let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  
  {
    "id": createEventId(),
    "title": "이노콘",
    "start": "2020-12-08"
  },
  {
    "id": createEventId(),
    "title": "3기 Final Exam",
    "start": "2020-12-11"
  },
  {
    "id": createEventId(),
    "title": "해커톤 물품수령",
    "start": "2020-12-14",
    "end": "2020-12-16"
  },
  {
    "id": createEventId(),
    "title": "hekangton",
    "start": "2020-12-16",
    "end": "2020-12-19",
    "color": "green"
  },
  {
    "id": createEventId(),
    "title": "크리스마스",
    "start": "2020-12-25",
    "color": "red",
    "textcolor": "green"
  }
]
