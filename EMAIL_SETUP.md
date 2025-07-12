# Email Functionality Setup

## Overview
Your portfolio now has email functionality for both the contact form and newsletter subscription.

## Contact Form Email Setup

### 1. Get a Resend API Key
1. Sign up at [Resend](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the API key

### 2. Set up Environment Variables
Create a `.env.local` file in your project root and add:

```
RESEND_API_KEY=your_resend_api_key_here
```

Replace `your_resend_api_key_here` with your actual Resend API key.

### 3. Verify Your Domain (Optional but Recommended)
1. In your Resend dashboard, go to Domains
2. Add and verify your domain
3. Update the `from` email in `src/app/api/contact/route.ts`:
   ```javascript
   from: 'Portfolio Contact Form <noreply@yourdomain.com>'
   ```

### 4. Test the Contact Form
- Fill out the contact form on your portfolio
- Emails will be sent to `vmjohnson999@gmail.com`
- Check your email for the contact form submissions

## Newsletter Subscription Setup

The newsletter subscription form now:
- Validates email addresses
- Redirects users to your Substack subscription page
- Pre-fills the email address in the Substack form

### How it works:
1. User enters email in the newsletter form
2. Form validates the email
3. User is redirected to: `https://vanessamj99.substack.com/subscribe?email=user@example.com`
4. Substack form opens with the email pre-filled

## Development vs Production

### Development
- Emails will be sent using your Resend API key
- You can test the functionality locally

### Production
- Make sure your Resend API key is set in your hosting environment
- Consider using a verified domain for better deliverability
- Monitor your email sending limits

## Troubleshooting

### Contact Form Issues
- Check that `RESEND_API_KEY` is set correctly
- Verify your domain in Resend (if using custom domain)
- Check the browser console for errors
- Check your Resend dashboard for sending logs

### Newsletter Subscription Issues
- The form redirects to Substack, so issues would be on Substack's side
- Make sure the Substack URL is correct in the API route

## Security Notes
- Never commit your API keys to version control
- Use environment variables for all sensitive data
- Consider rate limiting for the contact form in production 