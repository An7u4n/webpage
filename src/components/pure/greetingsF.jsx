import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GreetingsF(props) {
  const [id, setid] = useState(1);

  const plusId = () => {
    setid(id + 1);
  };

  return (
    <div>
      <h1 className="greetings">
        id: {id}, name: {props.name}
        {<button onClick={plusId}>Plus</button>}
      </h1>
    </div>
  );
}

GreetingsF.propTypes = {
  name: PropTypes.string,
};

export default GreetingsF;
