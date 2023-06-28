import isUrl from "is-url-superb"
import ky from "ky-universal"

const urlExist = async url => {
	return new Promise(async (resolve) => {
		let cancel = setTimeout(() => {
			console.log('verify timeout...');
			resolve(true);
		}, 4000);
		if (typeof url !== "string") {
			throw new TypeError(`Expected a string, got ${typeof url}`)
		}
	
		if (!isUrl(url)) {
			return false
		}
	
		const response = await ky.head(url, {
			throwHttpErrors: false
		})
	
		clearTimeout(cancel);
		const res = response !== undefined && (response.status < 400 || response.status >= 500)
		console.log('verify result, clear timeout...', res);
		resolve(res);
	})
}

export default urlExist