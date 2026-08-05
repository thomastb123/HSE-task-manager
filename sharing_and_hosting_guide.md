# How to Share HSE Task Manager Web Link via Email (Multi-User Data Sync)

To share the **HSE Task Manager** web link with other team members via email so they can **monitor, read, and add data centrally**, follow these simple steps depending on your environment.

---

## 🌟 Method 1: Shared Local / Company Network Server (Recommended for Office / Intranet)

We have included a built-in central server file ([server.js](file:///a:/Applications%20developed%20by%20me/HSE%20task%20manager/server.js)) inside your project folder. When running, anyone on your office network or VPN can open the web link in their browser via email!

### Steps to Run & Share:

1. **Start the Network Server**:
   Open Command Prompt or Terminal in `a:\Applications developed by me\HSE task manager` and run:
   ```bash
   node server.js
   ```
   *(Or double-click `start_server.bat` if provided)*

2. **Find Your Computer's IP Address**:
   - Open Command Prompt and type: `ipconfig`
   - Look for **IPv4 Address** (e.g. `192.168.1.50` or `10.15.20.105`).

3. **Email the Web Link to Team Members**:
   Send an email to your officers and Department Head with the link:
   > **Web Link**: `http://<YOUR-IP-ADDRESS>:3000`  
   > *(Example: `http://192.168.1.50:3000`)*

4. **How It Works**:
   - Anyone opening `http://192.168.1.50:3000` on their PC, laptop, or mobile phone will instantly see the web dashboard.
   - When **anyone adds a job, leave, or officer**, the server automatically updates `data/hse_database.json` in your local project folder in real time!

---

## 🌐 Method 2: Free Online Cloud Hosting (Vercel / Netlify / Firebase)

If team members need to access the web link **from anywhere outside the office network (e.g. from home or mobile data)**:

1. **Deploy to Vercel or Netlify**:
   - Upload the project folder to GitHub or directly to [Vercel](https://vercel.com) / [Netlify](https://netlify.com).
   - Vercel/Netlify gives you a free public web link e.g. `https://bpcl-hse-task-manager.vercel.app`.

2. **Email the Public Link**:
   - Email `https://bpcl-hse-task-manager.vercel.app` to all officers.
   - Users can click **`💾 Save Data File`** or **`📂 Load Data File`** at the top of the header to share database files seamlessly via email attachments or shared network drives!

---

## Summary of Data Flow
- **Central Storage File**: [data/hse_database.json](file:///a:/Applications%20developed%20by%20me/HSE%20task%20manager/data/hse_database.json)
- **Central Server File**: [server.js](file:///a:/Applications%20developed%20by%20me/HSE%20task%20manager/server.js)
