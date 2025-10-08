# Dark Mode / Light Mode Text Visibility Fix Plan

## Problem
When switching from dark mode to light mode, some text becomes invisible and makes parts of the site unreadable. This is caused by hardcoded color classes that don't respond to theme changes.

## Root Causes

1. **MyInfoCard Component** (`components/MyInfoCard/MyInfoCard.tsx`)
   - Uses `dark:bg-gray-800` (only shows background in dark mode)
   - Uses `text-white` (always white text)
   - In light mode: no background + white text = invisible white text on white background

2. **LanguageList Component** (`components/LanguageList/LanguageList.tsx`)
   - Uses `bg-gray-800` (always dark gray background)
   - Uses `text-white` (always white text)
   - In light mode: dark background with white text (readable but inconsistent with light theme)

3. **InterestsList Component** (`components/InterestsLIst/InterestsList.tsx`)
   - Uses `bg-gray-800` (always dark gray background)
   - Uses `text-white` (always white text)
   - Same issue as LanguageList

4. **HeaderInfo Component** (`components/HeaderInfo/HeaderInfo.tsx`)
   - May have similar issues with border visibility

## Proposed Solution

### Strategy
Use Tailwind's dark mode classes to provide appropriate colors for both light and dark themes:
- Light mode: light backgrounds with dark text
- Dark mode: dark backgrounds with light text

### Component Updates

#### 1. MyInfoCard Component
**Current:**
```tsx
<div className="... dark:bg-gray-800 ... text-white ...">
```

**Fixed:**
```tsx
<div className="... bg-gray-100 dark:bg-gray-800 ... text-gray-900 dark:text-white ...">
```

Apply to all text elements within the component.

#### 2. LanguageList Component
**Current:**
```tsx
<div className="... bg-gray-800 ... text-white ...">
```

**Fixed:**
```tsx
<div className="... bg-gray-100 dark:bg-gray-800 ... text-gray-900 dark:text-white ...">
```

#### 3. InterestsList Component
**Current:**
```tsx
<div className="... bg-gray-800 ... text-white ...">
```

**Fixed:**
```tsx
<div className="... bg-gray-100 dark:bg-gray-800 ... text-gray-900 dark:text-white ...">
```

#### 4. HeaderInfo Component (if needed)
Check and update border colors to be visible in both modes if necessary.

### Color Scheme Details

**Light Mode:**
- Background: `bg-gray-100` (very light gray)
- Text: `text-gray-900` (very dark gray, almost black)
- Borders: `border-gray-400` (medium gray)

**Dark Mode:**
- Background: `dark:bg-gray-800` (dark gray)
- Text: `dark:text-white` (white)
- Borders: `dark:border-gray-400` or `dark:border-gray-600` (may adjust for better visibility)

## Implementation Steps

1. Update MyInfoCard component with dual-theme classes
2. Update LanguageList component with dual-theme classes
3. Update InterestsList component with dual-theme classes
4. Test light mode rendering
5. Test dark mode rendering
6. Test theme switching between light and dark modes
7. Verify all text is readable in both modes

## Expected Outcome

After implementing these changes:
- ✅ All text will be visible in light mode
- ✅ All text will be visible in dark mode
- ✅ Theme switching will work smoothly
- ✅ The site will maintain a consistent look in each mode
- ✅ No text will be invisible on backgrounds
