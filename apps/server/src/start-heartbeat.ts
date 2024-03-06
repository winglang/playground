import isUrl from "is-url-superb"
import ky from "ky-universal"

const startHeartbeat = async url => {
	return new Promise(async (resolve) => {
		const response = await ky.get(`${url}/heartbeat`, {
			throwHttpErrors: false,
		})
    resolve(response.ok);
	})
}

export default startHeartbeat