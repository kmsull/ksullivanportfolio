# Contributing to Kenneth Sullivan's Portfolio

Thank you for considering contributing to this project! This document outlines the guidelines and best practices for contributing.

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## 🎯 How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs. actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node.js version)

Use the bug report template when creating an issue.

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

- Use the feature request template
- Provide a clear use case for the enhancement
- Explain why this would be useful to most users
- Include mockups or examples if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Follow the development setup** instructions in the README
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Update documentation** if needed
6. **Submit a pull request** using the PR template

## 🛠️ Development Process

### Setting Up Your Development Environment

1. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ksullivanportfolio.git
   cd ksullivanportfolio/sullivan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

### Branch Naming Convention

- **Features**: `feature/description` (e.g., `feature/add-blog-section`)
- **Bug Fixes**: `fix/description` (e.g., `fix/theme-toggle-bug`)
- **Documentation**: `docs/description` (e.g., `docs/update-readme`)
- **Refactoring**: `refactor/description` (e.g., `refactor/component-structure`)

### Coding Standards

#### TypeScript/React

- Use **TypeScript** for all new files
- Follow **functional components** with hooks
- Use **named exports** for components (except default for pages)
- Add **JSDoc comments** for complex functions and components
- Follow **React best practices** and hooks rules

#### Styling

- Use **Tailwind CSS** utility classes for most styling
- Use **styled-components** only for complex animations or dynamic styles
- Follow existing **dark mode** patterns using `next-themes`
- Ensure **responsive design** for all screen sizes

#### Code Quality

- Run **ESLint** before committing:
  ```bash
  npm run lint
  ```

- Fix auto-fixable issues:
  ```bash
  npm run lint -- --fix
  ```

- Ensure **no TypeScript errors**:
  ```bash
  npm run build
  ```

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(components): add project gallery component
fix(theme): resolve dark mode toggle issue on mobile
docs(readme): update installation instructions
```

### Testing

- Test your changes in **development mode**:
  ```bash
  npm run dev
  ```

- Test **production build**:
  ```bash
  npm run build
  npm start
  ```

- Test in **different browsers** (Chrome, Firefox, Safari)
- Test **responsive behavior** on various screen sizes
- Test **dark and light modes**

## 📝 Documentation

When adding new features or changing existing functionality:

- Update the **README.md** if setup/usage changes
- Add **JSDoc comments** to new functions/components
- Update **inline comments** for complex logic
- Add examples in comments where helpful

## 🔍 Pull Request Process

1. **Update documentation** as needed
2. **Run linting** and fix issues
3. **Test thoroughly** in dev and production builds
4. **Fill out the PR template** completely
5. **Link related issues** using keywords (e.g., "Closes #123")
6. **Request review** from maintainers
7. **Address review feedback** promptly

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] No ESLint errors or warnings
- [ ] TypeScript compiles without errors
- [ ] Changes tested in dev and production builds
- [ ] Documentation updated
- [ ] Commit messages follow conventions
- [ ] PR description is clear and complete

## 🐛 Bug Triage

Bugs are triaged based on:
- **Severity**: Critical, High, Medium, Low
- **Impact**: Number of users affected
- **Reproducibility**: Can it be consistently reproduced?

Critical and high-severity bugs affecting many users are prioritized.

## 💬 Questions?

If you have questions:
- Check existing **documentation** first
- Search **closed issues** for similar questions
- Open a **new issue** with the question label
- Be specific about what you need help with

## 🎨 Design Decisions

When proposing UI/UX changes:
- Maintain consistency with existing design
- Consider dark mode compatibility
- Ensure accessibility (WCAG guidelines)
- Keep performance in mind
- Provide mockups or examples

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [styled-components Documentation](https://styled-components.com/docs)

## 🙏 Thank You!

Your contributions help make this project better for everyone. Thank you for taking the time to contribute!

---

**Note**: This is a personal portfolio project, so contributions are accepted at the discretion of the project owner. Not all suggestions or PRs may be merged, but all are appreciated!
