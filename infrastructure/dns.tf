locals {
  default_name = ""
  default_ttl  = 3600

  records = [
    {
      type = "MX"
      records = [
        "10 mx01.mail.icloud.com.",
        "10 mx02.mail.icloud.com.",
      ]
    },
    {
      type = "TXT"
      records = [
        "apple-domain=oEIuGE8eyTdOc3yf",
        "v=spf1 redirect=icloud.com",
      ]
    },
    {
      name = "sig1._domainkey"
      type = "CNAME"
      records = [
        "sig1.dkim.claudioscalzo.com.at.icloudmailadmin.com."
      ]
    },
    {
      name    = "www"
      type    = "CNAME"
      records = [var.domain]
    }
  ]
}


# Zone

resource "aws_route53_zone" "main" {
  name    = var.domain
  comment = "Public zone for the `${var.domain}` domain."

  tags = var.tags
}


# Records

resource "aws_route53_record" "record" {
  for_each = {
    for record in local.records :
    join("_", [try(record.name, "@"), lower(record.type)]) => record
  }

  zone_id = aws_route53_zone.main.zone_id

  name = join(".", compact([
    try(each.value.name, local.default_name),
    var.domain
  ]))
  type    = each.value.type
  ttl     = try(each.value.ttl, local.default_ttl)
  records = each.value.records
}


# DNSSEC

data "aws_iam_policy_document" "dnssec" {
  statement {
    actions = [
      "kms:DescribeKey",
      "kms:GetPublicKey",
      "kms:Sign",
    ]
    resources = ["*"]

    principals {
      type        = "Service"
      identifiers = ["dnssec-route53.amazonaws.com"]
    }
  }

  statement {
    actions   = ["kms:CreateGrant"]
    resources = ["*"]

    principals {
      type        = "Service"
      identifiers = ["dnssec-route53.amazonaws.com"]
    }

    condition {
      test     = "Bool"
      variable = "kms:GrantIsForAWSResource"
      values   = [true]
    }
  }

  statement {
    actions   = ["kms:*"]
    resources = ["*"]

    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]
    }
  }
}

resource "aws_kms_key" "dnssec" {
  provider = aws.virginia

  description              = "${var.domain}-dnssec"
  key_usage                = "SIGN_VERIFY"
  customer_master_key_spec = "ECC_NIST_P256"
  deletion_window_in_days  = 7

  policy = data.aws_iam_policy_document.dnssec.json

  tags = var.tags
}

resource "aws_route53_key_signing_key" "dnssec" {
  name = "${var.domain}-dnssec"

  hosted_zone_id             = aws_route53_zone.main.id
  key_management_service_arn = aws_kms_key.dnssec.arn
}

resource "aws_route53_hosted_zone_dnssec" "main" {
  hosted_zone_id = aws_route53_key_signing_key.dnssec.hosted_zone_id
}
