import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**File 4:** `src/App.js`
→ **Copy the full RACM artifact code** and paste it here

**Step 3 — Back to Vercel**

1. On the Vercel page you're on, click **"Continue with GitHub"**
2. Authorize Vercel to access your GitHub
3. Find and select your **`sap-racm`** repository
4. Click **"Import"**
5. Leave all settings as default
6. Click **"Deploy"**

Within 1–2 minutes you'll get your live URL like:
```
https://sap-racm.vercel.app
