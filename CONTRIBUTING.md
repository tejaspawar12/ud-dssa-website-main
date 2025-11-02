# Contributing to UDSSA Website

Thank you for contributing to the UDSSA website! This guide will help you add your portfolio.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Adding Your Portfolio](#adding-your-portfolio)
- [Creating a Pull Request](#creating-a-pull-request)
- [Common Questions](#common-questions)
- [Need Help?](#need-help)

---

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- Basic text editor (VS Code, Notepad++, or any editor)

### Step 1: Clone the Repository

1. Open your terminal/command prompt
2. Navigate to where you want to save the project (e.g., `cd Documents`)
3. Clone the repository:
   ```bash
   git clone https://github.com/your-org/ud-dssa-website.git
   ```
   (Replace with the actual repository URL)

4. Navigate into the project:
   ```bash
   cd ud-dssa-website
   ```

### Step 2: Install Dependencies

```bash
npm install
```

---

## ✨ Adding Your Portfolio

### Step 1: Create a New Branch

**Important:** Always create a new branch before making changes!

```bash
# Create and switch to a new branch
git checkout -b portfolio/your-firstname-lastname
```

Example:
```bash
git checkout -b portfolio/john-smith
```

### Step 2: Copy the Template

1. Navigate to `src/data/members/` folder
2. Open `template.ts`
3. Copy the entire file
4. Create a new file: `[your-firstname-lastname].ts`
   - Example: `john-smith.ts`
   - Use lowercase, no spaces, use hyphens!

### Step 3: Fill In Your Information

1. Open your new file in a text editor
2. Replace all placeholder text with your actual information:
   - Look for `YOUR...` or `your...` and replace with your info
   - **Keep the quotes** around your text!
   - Required fields MUST be filled in
   - Optional fields can be removed if you don't have them

**See the template file for detailed instructions on each field!**

### Step 4: Update index.ts

1. Open `src/data/members/index.ts`
2. Add an import at the top:
   ```typescript
   import { yourFirstNameLastName } from './your-firstname-lastname';
   ```
   (Change variable name to match what you used in your file)

3. Add your member to the array:
   ```typescript
   export const members: Member[] = [
     tejasPawar,
     yourFirstNameLastName,  // ← Add your name here
   ];
   ```

### Step 5: Test Locally (Optional)

If you want to see how your portfolio looks:

```bash
npm run dev
```

Then open http://localhost:3000/members in your browser and look for your name!

---

## 🔀 Creating a Pull Request

### Step 1: Stage Your Changes

```bash
# Add your new files
git add src/data/members/your-firstname-lastname.ts
git add src/data/members/index.ts
```

### Step 2: Commit Your Changes

```bash
git commit -m "Add portfolio for [Your Name]"
```

Example:
```bash
git commit -m "Add portfolio for John Smith"
```

### Step 3: Push Your Branch

```bash
git push origin portfolio/your-firstname-lastname
```

If this is your first push, Git might ask you to set the upstream:
```bash
git push -u origin portfolio/your-firstname-lastname
```

### Step 4: Create Pull Request on GitHub

1. Go to the repository on GitHub
2. You should see a banner saying "Compare & pull request" - click it
3. Fill in the pull request:
   - **Title:** `Add portfolio for [Your Name]`
   - **Description:** Briefly describe what you added
   - Check the checklist (if provided)
4. Click "Create Pull Request"

### Step 5: Wait for Review

- Someone will review your portfolio
- They might ask for changes (that's normal!)
- Once approved, your portfolio will be merged and go live! 🎉

---

## ❓ Common Questions

### Q: I don't know Git. Can I still contribute?

**A:** Yes! We'll help you. You can:
- Follow this guide step-by-step
- Ask for help if you get stuck
- We're happy to walk you through it!

### Q: What if I make a mistake?

**A:** No problem! You can:
- Fix it and commit again
- Ask for help in the PR
- We'll guide you through fixing it

### Q: Do I need to know coding?

**A:** Not really! You just need to:
- Copy a template file
- Replace placeholder text with your info
- Follow the format (we have examples!)

### Q: What if I don't have some information (like GitHub, projects, etc.)?

**A:** That's fine! Optional fields can be:
- Left empty
- Removed entirely
- Added later when you have them

### Q: Can I update my portfolio later?

**A:** Yes! Just:
- Create a new branch
- Edit your portfolio file
- Create another PR
- We'll merge the updates

### Q: How long until my portfolio goes live?

**A:** Usually within 1-2 days after your PR is approved. We'll try to review quickly!

---

## 🆘 Need Help?

If you're stuck, don't hesitate to ask for help!

- **Email:** dsi-info@udel.edu
- **GitHub Issues:** Create an issue in the repository
- **In Person:** Ask during UDSSA meetings

We're here to help! Everyone was a beginner once. 😊

---

## ✅ Checklist Before Submitting

Before creating your PR, make sure:

- [ ] You created a new branch (not working on `main`!)
- [ ] You filled in all required fields
- [ ] Your file is named correctly (`firstname-lastname.ts`)
- [ ] You updated `index.ts` to include your portfolio
- [ ] All your links work (test them!)
- [ ] No placeholder text left (like "YOUR NAME HERE")
- [ ] Your commits are clear and descriptive

---

## 🎉 Thank You!

Thank you for contributing to the UDSSA website! Your portfolio helps showcase the amazing talent in our community.

Good luck! 🚀

