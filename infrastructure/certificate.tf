# Certificate

resource "aws_acm_certificate" "main" {
  provider = aws.virginia

  domain_name = var.domain
  subject_alternative_names = [
    "*.${var.domain}"
  ]
  validation_method = "DNS"

  tags = var.tags
}

resource "aws_route53_record" "certificate_validation" {
  for_each = {
    for record in aws_acm_certificate.main.domain_validation_options :
    record.domain_name => {
      name   = record.resource_record_name
      type   = record.resource_record_type
      record = record.resource_record_value
    }
  }

  zone_id         = aws_route53_zone.main.zone_id
  allow_overwrite = true

  name    = each.value.name
  records = [each.value.record]
  ttl     = 3600
  type    = each.value.type
}

resource "aws_acm_certificate_validation" "main" {
  provider = aws.virginia

  certificate_arn = aws_acm_certificate.main.arn
  validation_record_fqdns = [
    for record in aws_route53_record.certificate_validation :
    record.fqdn
  ]
}
