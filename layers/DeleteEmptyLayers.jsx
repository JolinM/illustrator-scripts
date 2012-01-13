// LayersDeleteEmpty
// Deletes all layers which do not have content (empty layers) in the active document
// Nathaniel Vaughn KELSO
// 2007.July.8 
// at Hyattsville, MD
// Version 0.1

// only do for the active document
if(documents.length > 0) {
	doc = activeDocument;
}

// Flag to determine if LAYERS only or also look at empty Sublayers
//  WARNING pageItems does NOT include sublayer if they are present!
var doSubLayers = 1;

var subLayersDeleted = 0;


// Loop through layers from the back, to preserve index
// TODO: Only looks one level of sublayers deep!!!


	// For completely empty layers
	if ( layerObjects == 0 && targetLayer.layers.length==0 ) {

	// What if the layer has sublayers?
	// TODO: Only looks one level of sublayers deep!!!
		var subLayerCount = targetLayer.layers.length;
		for (var iii = subLayerCount - 1; iii >= 0; iii-- ) {

			// For completely empty layers
			if ( subLayerObjects == 0 && targetSubLayer.layers.length==0) {
			}
		}
		// Check again to see if the layer is now empty if all the empty sublayer have beeen deleted
		// For completely empty layers
		if ( layerObjects == 0 && targetLayer.layers.length==0 ) {
		}
	}