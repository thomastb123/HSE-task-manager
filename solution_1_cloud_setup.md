# 24/7 Cloud Setup Guide for HSE Task Manager (Solution 1)

Follow this step-by-step guide to get a **permanent web link** that works **24/7, 365 days a year**—even when your laptop is completely switched off!

---

## 📌 STEP 1: Deploy to Free 24/7 Web Hosting (Netlify or Vercel)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (or [https://vercel.com](https://vercel.com)).
2. Sign up for a free account.
3. Drag and drop your folder: `a:\Applications developed by me\HSE task manager`.
4. Netlify/Vercel will instantly publish your site and give you a **permanent web link** e.g.:
   > **`https://bpcl-hse-task-manager.netlify.app`**

You can now copy and email this link to anyone!

---

## 📌 STEP 2: Enable 24/7 Central Cloud Sync (Supabase or Firebase - 100% Free)

To ensure data added by any user from their phone or PC is stored centrally in the cloud 24/7:

### Option A: Using Supabase (Recommended - Takes 3 Minutes)

1. Go to [https://supabase.com](https://supabase.com) and click **"Start your project"** (Free).
2. Click **"New Project"**, name it `hse-task-manager`, and set a password.
3. Go to **Project Settings ➔ API** and copy:
   - **Project URL** (e.g. `https://xyzcompany.supabase.co`)
   - **anon / public Key** (e.g. `eyJh...`)
4. In your app, open **`js/store.js`** and paste your URL & Key in `CLOUD_CONFIG`:
   ```javascript
   const CLOUD_CONFIG = {
     ENABLED: true,
     SUPABASE_URL: 'https://xyzcompany.supabase.co',
     SUPABASE_KEY: 'eyJh...'
   };
   ```

---

## 📌 STEP 3: Email the Web Link to Everyone!

Send an email to your officers and Department Head:

> **Subject**: HSE Task Manager Dashboard Link  
> **Body**:  
> Dear Team,  
> Please find the web link for the HSE Task Manager dashboard:  
> **`https://bpcl-hse-task-manager.netlify.app`**  
>  
> You can view leave plans, job planning, routine tasks, and officer work reports 24/7 from any PC or mobile phone.  
>  
> Regards,  
> HSE Department Header

---

## Benefits of Solution 1:
- ✅ **Works 24/7/365** even when your laptop is turned off.
- ✅ **No software needed** on anyone's PC (works in Chrome, Edge, Safari).
- ✅ **Central Cloud Storage**: All changes sync live for everyone automatically.
