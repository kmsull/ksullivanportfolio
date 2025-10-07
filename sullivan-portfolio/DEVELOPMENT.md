# Development Tooling Setup Guide

This document provides an overview of the development tooling configured for this project.

## Tools Installed

### 1. Prettier (Code Formatting)

- **Version**: ^3.6.2
- **Purpose**: Automatic code formatting for consistent style
- **Configuration**: `.prettierrc`
- **Ignore patterns**: `.prettierignore`

**Configuration Highlights**:

- Semicolons enabled
- Double quotes for strings
- 80 character line width
- 2 spaces for indentation
- LF line endings (cross-platform compatibility)

### 2. ESLint (Code Quality)

- **Integration**: eslint-config-prettier, eslint-plugin-prettier
- **Purpose**: Code linting with Prettier integration
- **Configuration**: `eslint.config.mjs`

**Features**:

- Next.js optimized rules
- TypeScript support
- Prettier integration (no conflicts)
- Unused variable warnings (with underscore prefix exception)

### 3. Husky (Git Hooks)

- **Version**: ^9.1.7
- **Purpose**: Manage Git hooks for pre-commit and commit-msg validation
- **Configuration**: `.husky/` directory

**Hooks Configured**:

- `pre-commit`: Runs lint-staged on staged files
- `commit-msg`: Validates commit messages against conventional commit format

### 4. lint-staged

- **Version**: ^16.2.3
- **Purpose**: Run linters on staged files only
- **Configuration**: `package.json` (lint-staged section)

**Tasks**:

- JavaScript/TypeScript files: Prettier format + ESLint fix
- Other files (JSON, CSS, MD): Prettier format

### 5. Commitlint

- **Version**: @commitlint/cli ^20.1.0, @commitlint/config-conventional ^20.0.0
- **Purpose**: Enforce conventional commit messages
- **Configuration**: `commitlint.config.js`

**Commit Types**:

- feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert

## NPM Scripts

### Code Formatting

```bash
npm run format          # Format all files
npm run format:check    # Check formatting without changes
```

### Linting

```bash
npm run lint           # Check for linting issues
npm run lint:fix       # Auto-fix linting issues
```

### Type Checking

```bash
npm run type-check     # Run TypeScript type checking
```

### Pre-build Validation

```bash
npm run pre-build      # Run all checks (format, lint, type-check)
```

## VS Code Integration

### Settings (`.vscode/settings.json`)

- Format on save enabled
- Prettier as default formatter
- ESLint auto-fix on save
- Consistent line endings (LF)
- Trailing whitespace trimming
- Final newline insertion

### Recommended Extensions (`.vscode/extensions.json`)

1. **Prettier** (esbenp.prettier-vscode)
2. **ESLint** (dbaeumer.vscode-eslint)
3. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
4. **Auto Rename Tag** (formulahendry.auto-rename-tag)
5. **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)

## Workflow

### For Developers

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Make code changes**: VS Code will auto-format on save

3. **Stage changes**:

   ```bash
   git add .
   ```

4. **Commit** (triggers pre-commit hook):

   ```bash
   git commit -m "feat: add new feature"
   ```

   - Pre-commit hook runs lint-staged (format + lint on staged files)
   - Commit-msg hook validates conventional commit format

5. **Push changes**:
   ```bash
   git push
   ```

### Pre-deployment Checks

Before creating a production build, run:

```bash
npm run pre-build
```

This ensures:

- All code is properly formatted
- No linting errors exist
- No TypeScript type errors exist

## Conventional Commit Examples

✅ **Valid commits**:

- `feat: add user authentication`
- `fix: resolve navigation bug`
- `docs: update README with new scripts`
- `style: format code with prettier`
- `refactor: simplify component logic`
- `test: add unit tests for utils`
- `chore: update dependencies`

❌ **Invalid commits**:

- `Added new feature` (no type)
- `FEAT: add feature` (uppercase type)
- `fix` (no description)

## Benefits

1. **Consistency**: All code follows the same style guidelines
2. **Quality**: Automated checks catch issues before they reach the repo
3. **Efficiency**: Format and fix issues automatically on commit
4. **Collaboration**: Easier code reviews with consistent formatting
5. **Documentation**: Clear commit history with conventional commits

## Troubleshooting

### Husky hooks not running

The hooks should be automatically configured when you run `npm install`. If they're not working:

```bash
cd sullivan-portfolio
npm run prepare
```

This will configure git to use the hooks in `sullivan-portfolio/.husky`.

You can verify the hooks are configured by running:

```bash
git config core.hooksPath
# Should output: sullivan-portfolio/.husky
```

### Prettier conflicts with ESLint

The configuration is already set up to avoid conflicts. If issues arise:

```bash
npm run lint:fix
npm run format
```

### VS Code not formatting on save

1. Install the Prettier extension
2. Reload VS Code window
3. Check `.vscode/settings.json` is present
