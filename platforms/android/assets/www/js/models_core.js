// the MD2 animation player instance
var md2_player = 
	(function createPlayer() {
		// construct the viewer instance
		var jsc_viewer = new JSC3D.Viewer(document.getElementById('cv'));
		jsc_viewer.setParameter('ModelColor', '#9F9F9F');
		jsc_viewer.setParameter('InitRotationY', -60);
		jsc_viewer.setParameter('BackgroundColor1', '#FFFFFF');
		jsc_viewer.setParameter('BackgroundColor2', '#383840');
		jsc_viewer.setParameter('RenderMode', 'texture');
		jsc_viewer.init();
		jsc_viewer.update();

		return new JSC3D.Md2Player(jsc_viewer);
	}) ();

function loadModel(aModel) {
	if(models.length > 0) {
		if(aModel < models.length - 1) {
			var selectedModel = models[aModel];
			md2_player.replaceSceneFromUrls(selectedModel[1], selectedModel[2], selectedModel[3], selectedModel[4]);
		}
	}
}