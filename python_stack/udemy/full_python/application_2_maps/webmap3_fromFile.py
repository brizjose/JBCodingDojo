# import folium for mapping
# import pandas to read file

import folium
import pandas

# get data from the file

data = pandas.read_csv("Volcanoes.txt", delimiter=",")

# to get the titles of the colums:

# print(data.columns)

lat = list(data['LAT'])
lon = list(data['LON'])
elev = list(data['ELEV'])

# create the map features where volcanoes will be appendend

map = folium.Map((45,-115), width="50%", height="50%", zoom_start=2, tiles="Mapbox Bright")
fg = folium.FeatureGroup(name="map_features")

# iterate through two or more lists at the same time with zip()

for lt, ln, ele in zip(lat, lon, elev):
    fg.add_child(folium.Marker(location=(lt, ln), popup="Elevation: " + str(ele) + " m", icon=folium.Icon(color="darkgreen")))

map.add_child(fg)

map.save("Volcanoes.html")


