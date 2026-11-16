# Hostinger Premium migration (work in progress)

This PHP API is designed for Hostinger shared hosting and stores leads in a private directory outside the public web root. No MySQL or Supabase is required.

## Security and deployment

Upload `hostinger/api` to `public_html/api`. Create a directory named `sa-home-private` alongside `public_html` (not inside it). Create `sa-home-private/config.php` containing:

```php
<?php
return [
  'email' => 'YOUR_ADMIN_EMAIL',
  'password_hash' => 'OUTPUT_OF_PASSWORD_HASH',
];
```

Generate the password hash using PHP's `password_hash('YOUR_STRONG_PASSWORD', PASSWORD_DEFAULT)` on a trusted local machine or hosting terminal. Never commit the config file or your password.

The API exposes `/api/index.php?action=submit`, `login`, `logout`, `session`, `leads`, and `update`. The client-side TanStack app must be converted to a static SPA and wired to these endpoints before deployment. Do not deploy the existing Nitro output on Premium PHP hosting. Do not claim this branch is production ready until the static build and end-to-end auth/lead flow are verified.
