import React, { useState, useEffect } from "react";
import {
  getGeoLocationDetail,
  updateGeoLocationDetail,
} from "../../../../services/apis";
import GeolocationView from "./geolocationtab.view";

import { Coordinates } from "../../settings.model";

let marker: any;

const GeolocationTab = () => {
  //Const
  const bengaluru: Coordinates = {
    lat: 13.009827916423317,
    lng: 77.59233856010005,
  };

  //State
  const [coordinates, setCoordinates] = useState(bengaluru);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    getGeoLocationDetail()
      .then((result) => {
        const { geo_latitude, geo_longitude } = result;
        if (geo_latitude && geo_longitude) {
          setCoordinates({
            lat: parseFloat(geo_latitude),
            lng: parseFloat(geo_longitude),
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  //Event Handlers
  const handleApiLoaded = (map: any, maps: any) => {
    marker = new maps.Marker({
      position: coordinates,
      map,
      title: "Store Location",
    });
    google.maps.event.addListener(map, "center_changed", function () {
      const center = map.getCenter();
      setCoordinates(center.toJSON());
      marker.setPosition(center);
    });
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    });
    let markers: google.maps.Marker[] = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  };
  return (
    <>
      <GeolocationView
        bengaluru={bengaluru}
        coordinates={coordinates}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        handleApiLoaded={handleApiLoaded}
        updateGeoLocationDetail={updateGeoLocationDetail}
      />
    </>
  );
};

export default GeolocationTab;
