import folium
import pandas

data = pandas.read_csv("Volcanoes.txt", delimiter=",")

lat = list(data['LAT'])
lon = list(data['LON'])
elev = list(data['ELEV'])
name = list(data['NAME'])

html = """
Volcano name:<br>
<a href="https://www.google.com/search?q=%%22%s%%22" target="_blank">%s</a><br>
Height: %s m
"""

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

for lt, ln, ele, name in zip(lat, lon, elev, name):
    iframe = folium.IFrame(html=html % (name, name, str(ele)), width=200, height=100)
    fg.add_child(folium.Marker(location=(lt, ln), popup=folium.Popup(iframe), icon=folium.Icon(color=color_generator(ele))))

map.add_child(fg)

map.save("Volcanoes3.html")