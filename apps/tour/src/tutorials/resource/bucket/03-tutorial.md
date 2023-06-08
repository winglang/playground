# Populating objects during deployment

If you have static data that you want to upload to the bucket each time your app is deployed, you can call the preflight method `addObject`:

1. Click on the Bucket resource in the Wing Simulator.
2. Notice that the `my-file.txt` file is already pre-populated.
3. Click on the AWS/TERRAFORM compilation output and explore the `s3 object` terraform asset which is responsible for uploading it.
  
Learn more about `terraform s3_object` [here](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_object).
