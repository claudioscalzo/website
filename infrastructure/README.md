# 🏗 Infrastructure

The website infrastructure is managed with [Terraform](https://github.com/hashicorp/terraform), by using the official [AWS Provider](https://github.com/hashicorp/terraform-provider-aws).

## 🚀 Deploy

```sh
terraform init -upgrade
terraform workspace select <ENV>
terraform apply -var-file="vars/<ENV>.tfvars.json"
```
