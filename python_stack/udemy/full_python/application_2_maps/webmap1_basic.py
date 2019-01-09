# folium is the library used for maps, it creates maps with js, css, html in the browser via Python
# pip install folium

import folium

# get help with 
# dir(folium) to get list of all available objects; Map is the class that creates the map; Marker is used to add markers and popups 
# help(folium.Map) tells you the parameters that the Map class takes, including which tiles (layers like terrain, streets) you want in it

# create a map object
map = folium.Map((14.6261887,-90.5626019), width="50%", height="50%", zoom_start=2, tiles="Mapbox Bright")

# add child objects to the map object with Marker:

# step 1, create a feature group where all the map features will be appended
fg = folium.FeatureGroup(name="map_features")

# step 2, create a feature and add it as child of the feature group
fg.add_child(folium.Marker(location=(44.97399,-93.2299172), popup="Born here!", icon=folium.Icon(color="green")))
fg.add_child(folium.Marker(location=(14.6357891,-90.5149832), popup="Grew up here!", icon=folium.Icon(color="blue")))
fg.add_child(folium.Marker(location=(35.6189578,-97.4742407), popup="Now live here!", icon=folium.Icon(color="red")))

# step 3, add the feature group to the Map object
map.add_child(fg)

# save the map object in a file, this will create it in the folder where this .py file resides

map.save("Map1.html")