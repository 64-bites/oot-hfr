/* The patcher page's builds. An add-on adds one entry to options, and one build for each new combination of options.
   A build's key is the ids of its chosen options, in the order of options, joined by '+'. '' is no option. */
const HFR_CONFIG = {
	version: 'v0.6.0',
	options: [
		{ id: 'textspeed', label: 'Text Speed', description: 'Adds a Text speed option to the game (Standard, 2x, 4x, Instant). Message boxes print faster. Timed text keeps its own pace.' }
	],
	builds: {
		'': { patch: 'hfr.xdelta', targetMd5: 'a416425c8d439d4a455b17982d16e43d', outputName: 'OoT HFR.z64' },
		'textspeed': { patch: 'hfr-textspeed.xdelta', targetMd5: '18dcedb44e848bfd48ecccfdfaf03129', outputName: 'OoT HFR Text Speed.z64' },
	}
};
