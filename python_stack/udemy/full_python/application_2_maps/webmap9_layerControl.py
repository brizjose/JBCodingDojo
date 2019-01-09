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
fgv = folium.FeatureGroup(name="Volcanoes")

for lt, ln, ele in zip(lat, lon, elev):
    fgv.add_child(folium.CircleMarker(location=(lt, ln), radius=6, popup=str(ele) + " m", fill_color=color_generator(ele), color='grey',fill_opacity=0.7))

fgp = folium.FeatureGroup(name="Population")

fgp.add_child(folium.GeoJson(data=(open('world.json', 'r', encoding='utf-8-sig').read()), style_function=lambda x: {'fillColor':'green' if x['properties']['POP2005'] < 10000000 else 'orange' if 10000000 <= x['properties']['POP2005'] < 20000000 else 'red'}))

map.add_child(fgv)
map.add_child(fgp)

# order matters, add the LayerControl() after the FeatureGroup has been added for it to work.
# what LayerControl does is looks for layers added to map through the add_child method
# so that we can add and remove layers independently, we create feature groups independently

map.add_child(folium.LayerControl())

map.save("Volcanoes6.html")