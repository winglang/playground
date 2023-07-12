import { Buffer } from 'node:buffer'

export type Browser = "chrome" | "opera" | "safari" | "edge" | "unknown"

export function getBrowser() : Browser {

  const windw: any = window;
  var isChromium = windw.chrome;
  var winNav = windw.navigator;
  var vendorName = winNav.vendor;

  var isOpera = typeof windw.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (
    isIOSChrome ||
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
    return "chrome";
  }
  if (isOpera) {
    return "opera";
  }
  if (isIEedge) {
    return "edge";
  }
  if (navigator.userAgent.indexOf("Safari") > -1) {
    return "safari";
  }
  return "unknown";
}

export function isWorkingWithWebContainer() {
	return true;
	const browser = getBrowser();
	return browser === "chrome" || browser === "safari";
}

export const Base64Binary = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	/* will return a  Uint8Array type */
	decodeArrayBuffer: function(input: string) {
		var bytes = (input.length/4) * 3;
		var ab = new ArrayBuffer(bytes);
		this.decode(input, ab);

		return ab;
	},

	removePaddingChars: function(input: string) {
		var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
		if(lkey == 64){
			return input.substring(0,input.length - 1);
		}
		return input;
	},

	decode: function (input: string, arrayBuffer: ArrayBuffer | null): Buffer {
		//get last chars to see if are valid
		input = this.removePaddingChars(input);
		input = this.removePaddingChars(input);

		var bytes = parseInt((input.length / 4) * 3 as any, 10);

		var uarray;
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		var j = 0;

		if (arrayBuffer)
			uarray = new Uint8Array(arrayBuffer);
		else
			uarray = new Uint8Array(bytes);

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		for (i=0; i<bytes; i+=3) {
			//get the 3 octects in 4 ascii chars
			enc1 = this._keyStr.indexOf(input.charAt(j++));
			enc2 = this._keyStr.indexOf(input.charAt(j++));
			enc3 = this._keyStr.indexOf(input.charAt(j++));
			enc4 = this._keyStr.indexOf(input.charAt(j++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			uarray[i] = chr1;
			if (enc3 != 64) uarray[i+1] = chr2;
			if (enc4 != 64) uarray[i+2] = chr3;
		}

    function toBuffer(view: Uint8Array) {
      const buffer = Buffer.alloc(view.byteLength);
      for (let i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }

      return buffer;
    }

		return toBuffer(uarray);
	}
}
