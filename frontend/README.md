# 🌍 Frontend

The website code is generated with the help of the [Gatsby Web Framework](https://github.com/gatsbyjs/gatsby), using [Yarn](https://github.com/yarnpkg/yarn) as a package manager.

## 📁 Layout

<big>
<pre>
frontend/
├── <a href="./gatsby-config.js">gatsby-config.js</a>
├── <a href="./package.json">package.json</a>
└── <a href="./src/">src/</a>
</pre>
</big>

## ⚙️ Develop

```
yarn install
yarn develop
```

## 🚀 Deploy

```sh
yarn install --frozen-lockfile --prod
yarn build
yarn deploy
yarn invalidate-cache
```

### 🪄 CI

The deploy steps are automatically handled by a CI pipeline, described by a [GitHub Action Workflow](../.github/workflows/release.yaml).

### 🔑 Permissions

The following permissions are needed to properly deploy to the S3 bucket and invalidate the CloudFront cache.

```json
{
  "Effect": "Allow",
  "Action": [
    "s3:GetBucketLocation",
    "s3:ListBucket",
    "s3:GetObject",
    "s3:PutObject",
    "s3:DeleteObject",
    "cloudfront:CreateInvalidation"
  ],
  "Resource": [
    "arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DISTRIBUTION_ID>",
    "arn:aws:s3:::<BUCKET_NAME>/*",
    "arn:aws:s3:::<BUCKET_NAME>"
  ]
}
```
