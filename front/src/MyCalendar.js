import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import koLocale from '@fullcalendar/core/locales/ko';
import { INITIAL_EVENTS } from './event-utils';
import { createEventId } from './CreateEventId';
import PopUp from './Popup_2';
import axios from 'axios';
import moment from 'moment';

export default class MyCalendar extends React.Component {
  constructor() {
    super(); // this is required
    this.state = {
      currentEvent: [],
      seen: false,
      startStr: 20201010,
      endStr: 20201010,
      sel: ''
    };
    this.handleDateSelect = this.handleDateSelect.bind(this.selectInfo)
    const formatEnd = function (end) {
      const splitted = end.split('-');
      const newnum = parseInt(splitted[2], 10) + 1;

      return `${splitted[0]}-${splitted[1]}-${newnum}`;
    };
    this.getData = function (a, b, c) {
      // console.log({start, end, timezone, callback})
      const data = axios.get('https://sheetdb.io/api/v1/mr4ghbp4mbpcz')
        .then((data) => {
          console.log(data);
          const formatted =
            data.data.map((item) => {
              return {
                ...item,
                id: createEventId(),
                title: item.id,
                end: formatEnd(item.end),
                description: item.contents,
              };
            });
          console.log(formatted);
          b(formatted);
        });

      // return data;
    }

  }
  render() {
    return (
      <div className='app'>
        <div className='app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: ''
            }}
            contentHeight="80vh"
            initialView='dayGridMonth'
            //'dayGridMonth', 'dayGridWeek', 'timeGridWeek'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            // initialEvents={this.getData()} // alternatively, use the `` setting to fetch from a feed
            events={this.getData}
            select={this.togglePop}
            //select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.openCurret}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            locale={koLocale}
          />
          {this.state.seen ? <PopUp toggle={this.togglePop} start={this.state.startStr} end={this.state.endStr} title={this.state.title} contents={this.state.contents} name_="hekang" /> : null}
        </div>

        <div className='app-main_v'>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
            views={{
              listDay: { buttonText: '일' },
              listWeek: { buttonText: '주' },
              listMonth: { buttonText: '월' }
            }}
            headerToolbar={{
              left: '',
              center: '',
              right: 'listDay,listWeek,listMonth'
            }}
            contentHeight="80vh"
            initialView='listWeek'
            //'dayGridMonth', 'dayGridWeek', 'timeGridWeek'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={this.getData}
            select={this.togglePop}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            locale={koLocale}
          />
        </div>
      </div>
    )

  }


  togglePop = (selectInfo) => {
    console.log(selectInfo);
    this.setState({
      startStr: selectInfo.startStr,
      endStr: selectInfo.endStr,
      sel: selectInfo
    }
    );
    this.setState({
      seen: !this.state.seen
    });
  };

  openCurret = (clickEvent, a, b, c) => {
    console.log({ clickEvent, a, b, c })
    const {event} = clickEvent;
    const { endStr, startStr } = clickEvent.event;
    console.log({ endStr, startStr });
    this.setState({
      startStr,
      endStr,
      contents: event.extendedProps.description,
      title: event.title,
            // startStr: moment(startStr).format('YYYY-MM-DD'),
      // endStr:  moment(endStr).format('YYYY-MM-DD'),
      sel: clickEvent.view,
    });
    this.setState({
      seen: !this.state.seen,
    });
  }


  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')

    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }

  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}  