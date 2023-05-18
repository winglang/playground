export class CompilationRequest {
  code: string;
  target: string;
  constructor(code: string, target: string) {
    this.code = code;
    this.target = target;
  }

  async sha() {
    const encoder = new TextEncoder();
    const data = encoder.encode(`${this.target}.${this.code}`);
    const hash = await crypto.subtle.digest('SHA-256', data);
    const resultBytes = [...new Uint8Array(hash)];
    return resultBytes.map(x => x.toString(16).padStart(2, '0')).join("");
  }
}