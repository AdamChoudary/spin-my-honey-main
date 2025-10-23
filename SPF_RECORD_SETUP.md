# SPF Record Setup Guide

## What is an SPF Record?

SPF (Sender Policy Framework) is a DNS record that helps prevent email spoofing by specifying which mail servers are authorized to send emails on behalf of your domain (hihoney.site).

## Why You Need This

Without an SPF record:

- ❌ Spammers can easily send fake emails claiming to be from hihoney1146@gmail.com
- ❌ Your legitimate emails may be marked as spam
- ❌ Email deliverability will be poor
- ❌ SEO tools flag this as a security issue

With an SPF record:

- ✅ Only authorized servers can send emails from your domain
- ✅ Improved email deliverability
- ✅ Better security posture
- ✅ SEO compliance

---

## Step-by-Step Setup

### 1. Find Your Domain Registrar

Your domain `hihoney.site` is registered with a domain registrar. Common ones include:

- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Name.com

### 2. Access DNS Settings

1. Log in to your domain registrar account
2. Find your domain `hihoney.site`
3. Look for one of these menu options:
   - "DNS Settings"
   - "DNS Management"
   - "Manage DNS"
   - "Name Servers"
   - "Advanced DNS"

### 3. Add TXT Record

Click "Add Record" or "Add DNS Record" and enter:

```
Record Type: TXT
Name/Host: @ (or leave blank, or use root/apex)
Value/Data: v=spf1 include:_spf.google.com ~all
TTL: 3600 (or Auto/Default)
```

#### Important Notes:

- **Name field:** Use `@` symbol, which represents the root domain
- **Value field:** Must be exactly: `v=spf1 include:_spf.google.com ~all`
- **No quotes:** Don't add quotes around the value
- **Case sensitive:** Use lowercase as shown

### 4. Save Changes

Click "Save" or "Add Record"

### 5. Wait for Propagation

DNS changes take time to spread across the internet:

- **Minimum:** 30 minutes
- **Typical:** 2-4 hours
- **Maximum:** 48 hours

---

## Verification

After waiting for propagation, verify the record is working:

### Method 1: Online Tool

Visit: https://mxtoolbox.com/spf.aspx
Enter: `hihoney.site`
Click: "SPF Record Lookup"

### Method 2: Command Line (Windows)

```powershell
nslookup -type=txt hihoney.site
```

### Method 3: Command Line (Mac/Linux)

```bash
dig TXT hihoney.site
```

### Expected Result

You should see: `v=spf1 include:_spf.google.com ~all`

---

## Common Issues & Solutions

### Issue: "Record already exists"

**Solution:** You may already have an SPF record. Edit the existing one instead of adding new.

### Issue: "Multiple SPF records found"

**Solution:** You can only have ONE SPF record. Combine them into a single record:

```
v=spf1 include:_spf.google.com include:other-service.com ~all
```

### Issue: "SPF record not found after 24 hours"

**Solutions:**

1. Check the Name/Host field - try these variations:
   - `@`
   - (leave blank)
   - `hihoney.site`
   - `hihoney.site.` (with trailing dot)
2. Verify TTL is not set too high
3. Contact your registrar support

### Issue: "DNS propagation is slow"

**Solution:** This is normal. Give it 48 hours before troubleshooting.

---

## Registrar-Specific Guides

### GoDaddy

1. My Products → DNS → Manage DNS
2. Add → Type: TXT → Name: @ → Value: (SPF record) → Save

### Namecheap

1. Domain List → Manage → Advanced DNS
2. Add New Record → Type: TXT Record → Host: @ → Value: (SPF record) → Save

### Cloudflare

1. DNS → Add record
2. Type: TXT → Name: @ → Content: (SPF record) → Save

### Google Domains

1. DNS → Custom records → Manage custom records
2. Create new record → Type: TXT → Host: @ → Data: (SPF record) → Add

---

## Understanding the SPF Record

Breaking down: `v=spf1 include:_spf.google.com ~all`

- **v=spf1** - SPF version 1 (current standard)
- **include:\_spf.google.com** - Authorize Google's mail servers (for Gmail)
- **~all** - Soft fail for unauthorized servers (recommended)

### Other Options (Don't Use Unless Needed)

- **-all** - Hard fail (strict, may block legitimate email)
- **+all** - Allow all (defeats the purpose, don't use)
- **?all** - Neutral (no recommendation)

---

## After Setup Checklist

- [ ] SPF record added to DNS
- [ ] Waited at least 2 hours for propagation
- [ ] Verified record using online tool or command line
- [ ] Tested sending email from hihoney1146@gmail.com
- [ ] Checked email headers show SPF: PASS

---

## Need Help?

1. **Check DNS propagation status:** https://dnschecker.org
2. **SPF Record validator:** https://mxtoolbox.com/spf.aspx
3. **Contact your registrar's support** if you're stuck

---

## Priority

**SEO Impact:** LOW
**Security Impact:** MEDIUM
**Recommended Timeframe:** Complete within 1-2 weeks

This is not urgent for website functionality but important for email security and SEO compliance.

---

**Last Updated:** October 23, 2025
