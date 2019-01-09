import folium

map = folium.Map((14.6261887,-90.5626019), width="50%", height="50%", zoom_start=2, tiles="Mapbox Bright")

fg = folium.FeatureGroup(name="map_features")

# add multiple locations with a for loop

locations = [
    {
        'key':(44.97399,-93.2299172), 
        'val': "Born here in 1974"
    },
    {
        'key':(14.6357891,-90.5149832),
        'val': "Grew up here until  2006"
    },
    {
        'key':(29.8168824,-95.681492),
        'val': "Lived here since between 2008 and 2017"
    },
    {
        'key':(25.6718497,-80.3820902),
        'val': "Lived here for a bit in 2017"
    },
    {
        'key':(19.0399944,-98.3330542),
        'val': "Lived here for a bit in 2016"
    },
    {
        'key':(35.6189578,-97.4742407),
        'val': "Lived here since 2017"
    }
    ]

for loc in locations:
    fg.add_child(folium.Marker(loc['key'], popup=loc['val'], icon=folium.Icon(color="green")))

map.add_child(fg)

map.save("Map2.html")