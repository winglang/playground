cp ~/wing/apps/wing/winglang-0.0.0.tgz .
cp ~/wing/libs/wingsdk/winglang-sdk-0.0.0.tgz .

rm -rf package
rm -rf sdk

tar -xzvf ./winglang-sdk-0.0.0.tgz
mv package sdk
rm winglang-sdk-0.0.0.tgz
tar -zcvf winglang-sdk-0.0.0.tgz sdk
rm -rf sdk

tar -xzvf ./winglang-0.0.0.tgz
mv package winglang
rm winglang-0.0.0.tgz
tar -zcvf winglang-0.0.0.tgz winglang
rm -rf winglang
