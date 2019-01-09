import folium
import pandas

data = pandas.read_csv("Volcanoes.txt", delimiter=",")

lat = list(data['LAT'])
lon = list(data['LON'])
elev = list(data['ELEV'])

def color_generator(elevation):
    color = "red"
    if elevation < 1000:
        color = "green"
        return color
    elif 1000 <= elevation < 3000:
        color = "orange"
        return color
    else:
        return color

map = folium.Map((45,-115), zoom_start=5, tiles="Mapbox Bright")
fg = folium.FeatureGroup(name="map_features")

# stylize the popup with an html element, using iFrame folioum method

for lt, ln, ele in zip(lat, lon, elev):
    fg.add_child(folium.CircleMarker(location=(lt, ln), radius=6, popup=str(ele) + " m", fill_color=color_generator(ele), color='grey',fill_opacity=0.7))

map.add_child(fg)

map.save("Volcanoes4.html")