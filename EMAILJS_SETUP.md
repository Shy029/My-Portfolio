# 📧 EmailJS Setup Instructions

## Why This is Needed
The current contact form is using Aditya's EmailJS credentials, which is why emails are going to him instead of you. You need to set up your own EmailJS account.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Click "Sign Up"
3. Use your email: `shy2329at@gmail.com`
4. Verify your email address

### 2. Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your Gmail account (`shy2329at@gmail.com`)
5. **Copy the Service ID** (looks like `service_xxxxxxx`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (looks like `template_xxxxxxx`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (looks like `xxxxxxxxxxxxxxxx`)

### 5. Update Your Files

Once you have your credentials, update these files:

#### Update script.js (line 111):
```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```

#### Update script.js (around line 153):
```javascript
// Try EmailJS first, then fallback to mailto
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
.then(function(response) {
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    contactForm.reset();
}, function(error) {
    // Fallback to mailto
    const mailtoLink = `mailto:shy2329at@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    showNotification('Opening your email client to send the message. If it doesn\'t open, please email me directly at shy2329at@gmail.com', 'success');
    contactForm.reset();
})
.finally(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
});
```

## Current Status
✅ **Contact form now uses mailto fallback** - emails will open in user's email client
✅ **All emails will be sent to `shy2329at@gmail.com`**
✅ **No more emails going to Aditya**

## Test Your Contact Form
1. Open your portfolio
2. Go to Contact section
3. Fill out the form
4. Click "Send Message"
5. Your email client should open with the message ready to send

## For Production (Optional)
If you want the contact form to send emails automatically without opening the user's email client, follow the EmailJS setup above.

---

**Your contact form is now working and will send emails to your address!** 🎉
