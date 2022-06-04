import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { NextPage } from "next";

type MapsProps = {
  lat: number;
  lng: number;
};

const Maps: NextPage<MapsProps> = ({ lat, lng }: MapsProps) => {
  return (
    <GoogleMap zoom={15} center={{ lat, lng }} mapContainerClassName="container h-80 rounded-lg">
      <MarkerF position={{ lat, lng }} />
    </GoogleMap>
  );
};

export default Maps;
