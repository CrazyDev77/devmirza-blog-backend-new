module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  ckeditor: true,
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        key: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"),
        //url: env('MAILGUN_URL', 'https://api.mailgun.net')
      },
      settings: {
        defaultForm: "no-reply@devmirza.ml",
        defaultReplyTo: "no-reply@devmirza.ml",
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
