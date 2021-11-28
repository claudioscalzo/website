# 🏗 Infrastructure

The website infrastructure is managed by [Terraform](https://github.com/hashicorp/terraform), by using the official [AWS Provider](https://github.com/hashicorp/terraform-provider-aws).

## 📁 Layout

<big>
<pre>
infrastructure/
├── <a href="./bucket.tf">bucket.tf</a>
├── <a href="./cdn.tf">cdn.tf</a>
├── <a href="./certificate.tf">certificate.tf</a>
├── <a href="./dns.tf">dns.tf</a>
├── <a href="./common.tf">common.tf</a>
├── terraform.tf
├── variables.tf
├── vars/
└── data/
</pre>
</big>

## 🚀 Deploy

```sh
terraform init -upgrade
terraform workspace select <ENV>
terraform apply -var-file="vars/<ENV>.tfvars.json"
```
