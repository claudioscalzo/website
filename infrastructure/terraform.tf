terraform {
  required_version = "~> 1"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4"
    }
  }

  backend "s3" {
    region = "eu-south-1"

    bucket               = "claudioscalzo-terraform-states"
    workspace_key_prefix = "env"
    key                  = "website.json"

    dynamodb_table = "terraform-state-locks"
  }
}

provider "aws" {
  region = "eu-south-1"
}

provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}
