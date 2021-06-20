import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUpNumber = ({ description, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    // <p>SI</p>
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h4 ref={countUpRef} style={{
                color: "#065BE7",
                fontSize: "50px",
                fontWeight: "bold",
                margin: 0,
                textAlign: 'center'

              }} />
              <p style={{ fontSize: 25, textAlign: 'center' }}> {description} </p>
            </div>
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default CountUpNumber;