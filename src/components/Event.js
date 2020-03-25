import React, { useContext } from 'react';

import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils.js';

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(`Do you delete event id=${id}?`);
    // const DELETE_EVENT = 'DELETE_EVENT';
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベントid=${id}を削除しました`,
        operatedAt: timeCurrentIso8601()
      });
    }
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
