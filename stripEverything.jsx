/*

	"Strip Everything"
	Produced by Eric Asp

	A simple script to clean up the files while exporting images before delivery
	It removes guidelines, paths, alpha channels, layer comps and color samples

	CHANGELOG:
		v 0.3
			- Added separation within the Script menu with the ID 'Workflow Resources'
			- Cleaned up the function to use less code
			- Removed a JS variable dependency

		v 0.2
			- Updated as a function with AM-code, recorded with ScriptingListenerJS

		v 0.1
			- The original, most basic script

*/

/*

<javascriptresource>
	<name>Strip Everything</name>
	<category>Workflow Resources</category>
</javascriptresource>

*/

function stripEverything() {
	displayDialogs = DialogModes.NO,
	app.activeDocument.guides.removeAll(),
	app.activeDocument.pathItems.removeAll(),
	app.activeDocument.channels.removeAll(),
	app.activeDocument.layerComps.removeAll(),
	app.activeDocument.colorSamplers.removeAll()
}

stripEverything();
