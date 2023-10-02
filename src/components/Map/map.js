import { GoogleMap } from "@react-google-maps/api"
import { useRef, useCallback, React } from "react";
import { mapStyle } from "./theme";
import './map.css'


const Map = ({ center }) => {

	const mapRef = useRef(undefined)

	const containerStyle = {
		width: '100%',
		height: '100%'
	};

	const defaultOptions = {
		panControl: true,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		clickableIcons: false,
		keyboardShortcuts: false,
		scrollwhell: false,
		disableDoubleClickZoom: true,
		styles: mapStyle

	}

	const onLoad = useCallback(function callback(map) {
		mapRef.current = map
	}, [])

	const onUnmount = useCallback(function callback(map) {
		mapRef.current = undefined
	}, [])

	return (
		<div className="container">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={4}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={defaultOptions}
			>
				{ /* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</div>

	)
}

export default Map;