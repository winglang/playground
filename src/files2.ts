interface FileContent {
  contents: string;
}
interface File {
  file: FileContent;
}

const out: { [id: string] : File; } = {}

const g = import.meta.glob('../node_modules/bn.js/**/*')
let i = 0
for (const key in g) {
  if (Object.prototype.hasOwnProperty.call(g, key)) {
    // const element = g[key];
    const v = await import(key + "?raw").then((i) => i.default)    
    // console.log(v)

    out[`${i++}.js`] = {
      file: {
        contents: v
      }
    }
  }
}

export default out