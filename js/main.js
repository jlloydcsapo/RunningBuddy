function loadMap(){
    require(["esri/config",    
            "esri/Map",
            "esri/WebMap",
            "esri/views/MapView",
            "esri/widgets/Search",
            "esri/widgets/Editor",
            "esri/widgets/Legend",
            "esri/layers/FeatureLayer"
          ], 
            
    function(esriConfig, 
            Map, 
            WebMap,
            MapView,
            Search,
            Editor,
            Legend,
            FeatureLayer
            ) {   
        
      esriConfig.apiKey = "AAPKdd7c255c653b4b2789e0123c1107c197dv1Ropz0dQZOy89fge9jPPo3WaNTVC2kYIVE-3jKjxEPlZIYYXI7-zrRXkKGPB-z"

      //pull in webmap with running layer and pop-up config
      const webmap = new WebMap({
        portalItem: {
          id: "9d79b0a89bca4489a1fb233383366d3a"
        }
      });

      const view = new MapView({
        container: "viewDiv",
        center: [-83.708720,42.801880],
        zoom: 12,
        map: webmap
      });

      //add search
      const searchTool = new Search({
          view: view,
      });

      view.ui.add(searchTool, {
          position: "top-left",
          index: 0
      });

      //create new feature layer
      const runsLayer = new FeatureLayer({
        url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Runs/FeatureServer",
        // renderer: renderer
      });

      const lineInfos = {
            layer: runsLayer
          };

    //add editor widget
      const editor = new Editor({
        view: view,
        layerInfos: [lineInfos],
        container: document.getElementById("editorDiv"),
        toolTips: {
          enabled: true
        }
      });

      //add legend
      const legend = new Legend({
        view: view,
        container: document.getElementById("legendDiv")
      });

      legend.style = {
        type: "card",
        layout: "auto"
      }
      
    }); 

};

document.addEventListener('DOMContentLoaded', loadMap);