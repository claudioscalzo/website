# Policies

data "aws_cloudfront_cache_policy" "default" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_origin_request_policy" "default" {
  name = "Managed-CORS-S3Origin"
}

data "aws_cloudfront_response_headers_policy" "default" {
  name = "Managed-SimpleCORS"
}


# Origin Access Identity

resource "aws_cloudfront_origin_access_identity" "main" {
  comment = "${var.domain}-oai"
}


# Distribution

resource "aws_cloudfront_distribution" "main" {
  comment = "Public distribution for the `${var.domain}` domain."

  enabled             = true
  wait_for_deployment = false
  price_class         = "PriceClass_100"

  aliases = [var.domain]
  viewer_certificate {
    # to create the distribution only after the cert validation, we take the cert arn from this resource 👇
    acm_certificate_arn = aws_acm_certificate_validation.main.certificate_arn

    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  default_root_object = "index.html"
  origin {
    domain_name = aws_s3_bucket.main.bucket_regional_domain_name
    origin_id   = "${var.domain}@s3"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    target_origin_id       = "${var.domain}@s3"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    cache_policy_id            = data.aws_cloudfront_cache_policy.default.id
    origin_request_policy_id   = data.aws_cloudfront_origin_request_policy.default.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.default.id
  }

  custom_error_response {
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 60
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  tags = var.tags
}


# DNS Records

resource "aws_route53_record" "cdn" {
  zone_id = aws_route53_zone.main.zone_id

  name = var.domain
  type = "A"

  alias {
    name                   = aws_cloudfront_distribution.main.domain_name
    zone_id                = aws_cloudfront_distribution.main.hosted_zone_id
    evaluate_target_health = false
  }
}
