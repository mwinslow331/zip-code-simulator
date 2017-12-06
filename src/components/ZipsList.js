import React from 'react';

const ZipsList = props => {
  let startZipCode = props.startZips.map(starting => {
    return(
      <li>{starting.startZip}</li>
    )
  });
  let destinationZip = props.endZips.map(ending => {
    return(
      <li>{ending.endZip}</li>
    )
  });

  return (
    <div>
      <h3 className="first-zip">Starting Zip</h3>
        <ul>{startZipCode}</ul>
      <h3 className="second-zip">Destination Zip</h3>
        <ul>{destinationZip}</ul>
    </div>
  );
}


export default ZipsList;
