# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy your Service ID** (you'll need this later)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: New message from {{from_name}} - {{subject}}

### Template Content:
```
Hello Edgar,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy your Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key**
3. **Copy your Public Key**

## Step 5: Update Your Code
Open `src/pages/contact.js` and replace these values:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID  
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

## Step 6: Test Your Form
1. Run your React app: `npm start`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the message
5. Check browser console for any errors

## Example Configuration:
```javascript
// Example values (yours will be different)
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'user_def456';
```

## Troubleshooting:
- **Form not sending**: Check console for errors, verify all IDs are correct
- **Not receiving emails**: Check spam folder, verify email service setup
- **Template variables not working**: Make sure template uses exact variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

## Free Plan Limits:
- 200 emails per month
- Perfect for a portfolio website

## Security Note:
- Public Key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose
- Never expose your Private Key in frontend code

Your contact form will now send real emails! 🎉 