# How to Setup MongoDB Atlas (Free Cloud Database)

Since you cannot run MongoDB locally, follow these steps to set up a free cloud database.

## Phase 1: Create Account & Cluster
1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2.  **Sign up** with Google or your email.
3.  You may be asked to fill in a short questionnaire (you can skip or select "Learning").
4.  On the **Deploy a database** screen:
    *   Select **M0 Free** (the free tier).
    *   Select a **Provider** (AWS is fine) and a **Region** close to you (e.g., N. Virginia, Frankfurt, Mumbai).
    *   Click **Create Deployment** (or "Create Cluster").

## Phase 2: Security Setup (Crucial!)
You needs to create a user and allow your computer to connect.

1.  **Quickstart Menu**: You will likely see a "Security Quickstart" popup.
2.  **Username & Password**:
    *   Username: `admin` (or whatever you prefer).
    *   Password: **Create a simple password** (e.g., `password123`). **WRITE THIS DOWN**.
    *   Click **Create Database User**.
3.  **IP Access List**:
    *   Find the section "Where would you like to connect from?".
    *   Select **"Allow Access from Anywhere"** (or add `0.0.0.0/0`).
    *   *Note: This ensures you don't get blocked if your WiFi IP changes.*
    *   Click **Add Entry**.
4.  Click **Finish and Close**.

## Phase 3: Get Connection String
1.  Go to the **Database** tab (left sidebar) -> click **Connect** button on your cluster card.
2.  Select **Drivers**.
3.  Ensure **Node.js** is selected.
4.  **COPY the connection string**. It will look somewhat like this:
    ```text
    mongodb+srv://admin:<db_password>@cluster0.abcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    ```

## Phase 4: Validating the URL
1.  Paste the string into a temporary text file (Notepad).
2.  **Replace `<db_password>`** with the password you created in Phase 2.
    *   *Example*: If password is `hero123`, the part becomes `admin:hero123@...`
    *   *Remove the `< >` brackets!*

## Phase 5: Update Project
1.  Open your project inside VS Code.
2.  Open `server/.env`.
3.  Update the `MONGO_URI` variable:
    ```env
    MONGO_URI=your_copied_string_here
    ```
4.  Save the file.

## Phase 6: Restart Server
1.  Go to your backend terminal.
2.  If it's running/crashing, stop it (Ctrl+C).
3.  Run `npm run dev`.
4.  It should now say: `MongoDB Connected: ...`
