variable "domain" {
  description = "The website domain name."
  type        = string
}

variable "tags" {
  description = "The environment-specific tags for the website resources."
  type        = map(string)
}
