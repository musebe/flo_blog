## [Documentation](/DOCUMENTATION.md)

NOTE:

1. puppeteer causes problem some time to fix it you may need to apply:

- try to on/off your network connection
- restart your device
  if not solve then try to run

```
PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors yarn
or
sudo npm install puppeteer --unsafe-perm=true --allow-root
```
Before running any template you need to set some `env` values on `.env.development` file which is define within every package's root.

```bash
GATSBY_DISQUS_NAME="put_your_disqus_name_here"
MAILCHIMP_ENDPOINT="put_your_mailchimp_endpoint_here"
GOOGLE_ANALYTICS_TRACKING_ID="put_your_google_analytics_tracking_id_here"
INSTAGRAM_USER_NAME="put_your_instagram_user_name_here"
INSTAGRAM_USER_NAME_ID="put_your_instagram_user_name_id_here"
INSTAGRAM_ID="put_your_instagram_id_here"
INSTAGRAM_ACCESS_TOKE="put_your_instagram_access_token_here"
```