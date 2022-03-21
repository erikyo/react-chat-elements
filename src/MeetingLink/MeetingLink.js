import React from 'react';
import './MeetingLink.css';

import { MdOutlineVideoCall } from 'react-icons/md';

function MeetingLink({meetingID, title, onMeetingMoreSelect}) {
  const onHandleClick = () => {
    onMeetingMoreSelect(meetingID);
  }

  return (
    <div className='rce-mtlink'>
      <div className='rce-mtlink-content'>
        <div className='rce-mtlink-item'>
          <div className='rce-mtlink-title'>
            {title}
          </div>
        </div>
        <div className='rce-mtlink-btn' onClick={onHandleClick}>
          <MdOutlineVideoCall className='rce-mtlink-svg'/>
        </div>
      </div>
    </div>
  );
}

MeetingLink.defaultProps = {
  meetingID: '',
  title: '',
  onMeetingMoreSelect: () => void(0),
};

export default MeetingLink;