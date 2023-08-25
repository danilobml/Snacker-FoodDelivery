import { useEffect, useState } from "react";

import * as Location from 'expo-location';

const POSITION_API_KEY = process.env.EXPO_PUBLIC_POSITION_API_KEY;

export function useLocation() {
  const [location, setLocation] = useState(null);

  const positionApiUrl = `http://api.positionstack.com/v1/reverse?access_key=${POSITION_API_KEY}&query=`

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const response = await fetch(`${positionApiUrl}${latitude},${longitude}`);
      const data = await response.json();
      setLocation({city: data.data[0].locality, lat: latitude, lng: longitude});
    })();    
  }, []);

  return { location };
}
