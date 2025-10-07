This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Development Tools

This project uses several development tools to ensure code quality and consistency:

### Code Formatting

- **Prettier** - Automatic code formatting
  - Run `npm run format` to format all files
  - Run `npm run format:check` to check formatting without changes
  - VS Code: Format on save is enabled (see `.vscode/settings.json`)

### Code Quality

- **ESLint** - Linting and code quality checks
  - Run `npm run lint` to check for issues
  - Run `npm run lint:fix` to auto-fix issues
  - Integrated with Prettier to avoid conflicts

- **TypeScript** - Type checking
  - Run `npm run type-check` to check types without building

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically check code before commits:

- **Pre-commit**: Runs Prettier and ESLint on staged files
- **Commit-msg**: Validates commit messages follow conventional commit format

Example commit message formats:

- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update README`
- `style: format code`
- `refactor: restructure component`
- `test: add unit tests`
- `chore: update dependencies`

### Pre-build Checks

Before building for production, run all checks:

```bash
npm run pre-build
```

This runs formatting check, linting, and type checking in sequence.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
