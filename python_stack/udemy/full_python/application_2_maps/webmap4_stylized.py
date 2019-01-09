import folium
import pandas

data = pandas.read_csv("Volcanoes.txt", delimiter=",")

lat = list(data['LAT'])
lon = list(data['LON'])
elev = list(data['ELEV'])
html = """<h4>Volcano information:</h4>
Height: %s m
"""

map = folium.Map((45,-115), width="50%", height="50%", zoom_start=2, tiles="Mapbox Bright")
fg = folium.FeatureGroup(name="map_features")

# stylize the popup with an html element, using iFrame folioum method

for lt, ln, ele in zip(lat, lon, elev):
    iframe = folium.IFrame(html=html % str(ele), width=200, height=100)
    fg.add_child(folium.Marker(location=(lt, ln), popup=folium.Popup(iframe), icon=folium.Icon(color="darkgreen")))

map.add_child(fg)

map.save("Volcanoes2.html")