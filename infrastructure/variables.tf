variable "domain" {
  description = "The website domain name."
  type        = string
}

variable "dns_records_path" {
  description = "The relative path of the YAML file containing the DNS records."
  type        = string
}

variable "tags" {
  description = "The environment-specific tags for the website resources."
  type        = map(string)
}
