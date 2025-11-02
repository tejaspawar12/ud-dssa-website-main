# Member Portfolios Directory

This folder contains individual portfolio files for each UDSSA member.

## 📁 File Structure

```
src/data/members/
├── README.md              (This file - instructions)
├── template.ts            (Copy this to create your portfolio)
├── example-tejas.ts       (See a real example)
├── index.ts               (Exports all members - you'll update this)
└── [your-name].ts         (Your portfolio file)
```

## 🚀 Quick Start Guide

### Step 1: Copy the Template

1. Open `template.ts` in this folder
2. Copy the entire file
3. Create a new file named: `[your-firstname-lastname].ts`
   - Example: If your name is John Smith, name it: `john-smith.ts`
   - Use lowercase letters and hyphens (no spaces!)

### Step 2: Fill In Your Information

Open your new file and replace all the placeholder text with your actual information:

- Look for `YOUR...` or `your...` - replace these with your info
- Keep the quotes (`'` or `"`) around your text!
- Required fields MUST be filled in
- Optional fields can be left empty or removed

### Step 3: Update index.ts

After creating your portfolio file:

1. Open `index.ts`
2. Add an import at the top:
   ```typescript
   import { yourFirstNameLastName } from './your-firstname-lastname';
   ```
3. Add your member object to the array:
   ```typescript
   export const members: Member[] = [
     tejasPawar,
     yourFirstNameLastName,  // ← Add your name here
   ];
   ```

### Step 4: Test Locally (Optional)

If you have the project running locally, you can check your portfolio appears correctly.

### Step 5: Commit and Push

Follow the main CONTRIBUTING.md guide to commit your changes and create a pull request.

## 📝 Required Fields

These fields MUST be filled in:

- `id`: Your firstname-lastname (lowercase, hyphens)
- `fullName`: Your full name
- `email`: Your UD email address
- `major`: Your major
- `graduationMonth`: "May" or "December"
- `graduationYear`: Your graduation year

## ✅ Optional Fields

These are optional but recommended:

- `bio`: Tell us about yourself (2-3 sentences)
- `linkedin`: Your LinkedIn profile URL
- `github`: Your GitHub profile URL
- `website`: Your personal website
- `skills`: List of your technical skills
- `projects`: Show off your work!
- `experience`: Work experience, internships, etc.
- `education`: Your degrees
- `achievements`: Awards, recognitions, etc.

## 📚 Example

See `tejas-pawar.ts` for a complete real-world example of a filled-out portfolio.

## 🆘 Need Help?

1. Check `template.ts` for detailed comments on each field
2. Look at `tejas-pawar.ts` to see a complete example
3. Review the main `CONTRIBUTING.md` in the project root
4. Ask for help if you're stuck!

## ⚠️ Common Mistakes to Avoid

### ❌ Wrong:
```typescript
fullName: John Doe  // Missing quotes!
```

### ✅ Correct:
```typescript
fullName: 'John Doe'  // Quotes required!
```

---

### ❌ Wrong:
```typescript
skills: 'Python, Machine Learning'  // Wrong format!
```

### ✅ Correct:
```typescript
skills: ['Python', 'Machine Learning']  // Use brackets and quotes!
```

---

### ❌ Wrong:
```typescript
id: 'John Smith'  // Has spaces and capital letters!
```

### ✅ Correct:
```typescript
id: 'john-smith'  // Lowercase, use hyphens!
```

## 💡 Tips

1. **Keep it simple**: Just replace the placeholder text - you don't need to write code!
2. **Use quotes**: Always put quotes around text values (`'your text'`)
3. **Check spelling**: Typos in field names will cause errors
4. **Test links**: Make sure your URLs work before submitting
5. **Be honest**: Only list skills/projects you actually have

Good luck creating your portfolio! 🎉

