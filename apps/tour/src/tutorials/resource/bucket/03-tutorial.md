## Populating objects during deployment

If you have static data that you need to upload consistently to the 
bucket each time your application is deployed, you can leverage the preflight method, `addObject`.

### Use `addObect` 

The following preflight code will upload `my-file.txt` during deployment

```wing 
bucket.addObject(
  "my-file.txt",
  "This file was uploaded on deployment"
);
```

### Exploring the simulator

To find the file, click on the `cloud.Bucket` resource in the Wing Simulator. 
Here, you'll see that `my-file.txt` has already been pre-populated for you.

### AWS compilation output

Next, take a moment to examine the AWS/Terraform compilation output. 
In this section, you can investigate the `s3 object` Terraform asset which 
represents the uploaded file Terraform instruction.


You can delve deeper into the workings of `terraform s3_object` through this [link](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_object).
