import React, { useContext } from 'react';

import { DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(`Do you delete event id=${id}?`);
    // const DELETE_EVENT = 'DELETE_EVENT';
    if (result) dispatch({ type: DELETE_EVENT, id });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default Event;
