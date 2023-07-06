import isUrl from "is-url-superb"
import ky from "ky-universal"

const urlExist = async url => {
	return new Promise(async (resolve) => {
		if (typeof url !== "string") {
			throw new TypeError(`Expected a string, got ${typeof url}`)
		}
	
		if (!isUrl(url)) {
			return false
		}
	
		const response = await ky.head(url, {
			throwHttpErrors: false,
			// timeout: 5000
		})
	
		const res = response !== undefined && (response.status < 400 || response.status >= 500)
		resolve(res);
	})
}

export default urlExist