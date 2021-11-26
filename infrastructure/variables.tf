variable "domain" {
  description = "The website domain name."
  type        = string
}

variable "allowed_countries_path" {
  description = "The path containing the list of allowed countries."
  type        = string
}

variable "tags" {
  description = "The environment-specific tags for the website resources."
  type        = map(string)
}
