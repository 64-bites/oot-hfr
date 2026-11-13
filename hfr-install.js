/* Checks the player's ROM, converts its byte order, applies the patch and checks the result. Runs in the browser and in Node. */
(function (root) {
	'use strict';

	const SOURCE_MD5 = '5bd1fe107bf8106b2ab6650abecd54d6'; // USA 1.0 in .z64 byte order

	const InstallError = function (code, message) {
		this.code = code;
		this.message = message;
	};

	const detectByteOrder = function (u8) {
		if (u8.length < 4)
			return null;
		const first = ((u8[0] << 24) | (u8[1] << 16) | (u8[2] << 8) | u8[3]) >>> 0;
		if (first === 0x80371240)
			return 'z64';
		if (first === 0x37804012)
			return 'v64';
		if (first === 0x40123780)
			return 'n64';
		return null;
	};

	/* Returns a copy in .z64 byte order. The bytes passed in are not changed. */
	const toZ64 = function (u8, order) {
		const out = new Uint8Array(u8.length);
		let i;

		if (order === 'z64') {
			out.set(u8);
		} else if (order === 'v64') {
			for (i = 0; i + 1 < u8.length; i += 2) {
				out[i] = u8[i + 1];
				out[i + 1] = u8[i];
			}
		} else {
			for (i = 0; i + 3 < u8.length; i += 4) {
				out[i] = u8[i + 3];
				out[i + 1] = u8[i + 2];
				out[i + 2] = u8[i + 1];
				out[i + 3] = u8[i];
			}
		}
		return out;
	};

	/* tools: { BinFile, VCDIFF }. Returns { rom: Uint8Array, byteOrder }, or throws InstallError. */
	const install = function (romBytes, patchBytes, targetMd5, tools) {
		const order = detectByteOrder(romBytes);

		if (order === null)
			throw new InstallError('NOT_N64', 'This file is not an N64 ROM.');

		const z64 = toZ64(romBytes, order);
		const romFile = new tools.BinFile(z64.buffer);

		if (romFile.hashMD5() !== SOURCE_MD5)
			throw new InstallError('WRONG_ROM', 'This ROM is not the USA 1.0 version this patch needs. Your file was not changed.');

		const patched = new tools.VCDIFF(new tools.BinFile(patchBytes.buffer.slice(patchBytes.byteOffset, patchBytes.byteOffset + patchBytes.byteLength))).apply(romFile, false); // The MD5 check below covers the whole result

		if (patched.hashMD5() !== targetMd5)
			throw new InstallError('BAD_RESULT', 'The patched ROM failed its check, so it was not saved. Please report this.');
		return { rom: patched._u8array, byteOrder: order };
	};

	/* The options a player can choose are config.options, in order. config.builds holds one build (patch file, MD5 of
	   the result, name of the saved file) for each combination of options. A combination's key is the ids of its
	   chosen options, in the order of config.options, joined by '+'. The key of "no option" is ''. */
	const comboKey = function (config, chosenIds) {
		return config.options.map(function (o) { return o.id; }).filter(function (id) { return chosenIds.indexOf(id) >= 0; }).join('+');
	};

	/* Every combination's key: 2 to the power of the number of options. */
	const allKeys = function (config) {
		let keys = [[]];

		config.options.forEach(function (o) {
			keys = keys.concat(keys.map(function (k) { return k.concat([o.id]); }));
		});
		return keys.map(function (k) { return comboKey(config, k); });
	};

	/* Returns the build for the chosen options, or throws InstallError. */
	const pickBuild = function (config, chosenIds) {
		const known = config.options.map(function (o) { return o.id; });
		const key = comboKey(config, chosenIds);

		if (chosenIds.some(function (id) { return known.indexOf(id) < 0; }) || !Object.prototype.hasOwnProperty.call(config.builds, key))
			throw new InstallError('NO_BUILD', 'This choice of options has no patch. Please report this.');
		return config.builds[key];
	};

	const api = { SOURCE_MD5, InstallError, detectByteOrder, toZ64, install, comboKey, allKeys, pickBuild };

	if (typeof module !== 'undefined' && module.exports)
		module.exports = api;
	else
		root.HfrInstall = api;
})(this);
