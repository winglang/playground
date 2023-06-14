bring cloud;

let b1 = new cloud.Bucket() as "a private bucket";
let b2 = new cloud.Bucket(
  public: true // optional, defaults to `false`
) as "a public bucket";
