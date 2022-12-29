locals {
  github = {
    website_repo = "claudioscalzo/website"
    oidc_provider = {
      thumbprint = "6938fd4d98bab03faadb97b34396831e3780aea1"
      url        = "https://token.actions.githubusercontent.com"
    }
  }
}


# GitHub OIDC Provider

resource "aws_iam_openid_connect_provider" "github" {
  url = local.github.oidc_provider.url

  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [local.github.oidc_provider.thumbprint]
}


# OIDC IAM Resources

data "aws_iam_policy_document" "allow_website_releases" {
  statement {
    actions = [
      "s3:GetBucketLocation",
      "s3:ListBucket",
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject",
      "cloudfront:CreateInvalidation",
    ]
    resources = [
      aws_s3_bucket.main.arn,
      "${aws_s3_bucket.main.arn}/*",
      aws_cloudfront_distribution.main.arn,
    ]
  }
}

data "aws_iam_policy_document" "trust_github_repo" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${local.github.website_repo}:*"]
    }

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }
  }
}

resource "aws_iam_role" "website_release_manager" {
  name = "WebsiteReleaseManager"

  assume_role_policy = data.aws_iam_policy_document.trust_github_repo.json
}

resource "aws_iam_role_policy" "allow_website_releases" {
  name = "AllowWebsiteReleases"

  policy = data.aws_iam_policy_document.allow_website_releases.json
  role   = aws_iam_role.website_release_manager.id
}
