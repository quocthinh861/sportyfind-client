import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps"

const Map = (props) => {
  return (
    <div>
      <GoogleMap
          defaultZoom={18}
          defaultCenter={{ lat: props.lat, lng: props.lng }}
        >
            <Marker position={{ lat: props.lat, lng: props.lng }} />
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));
