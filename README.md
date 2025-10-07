# Kenneth Sullivan's Portfolio

A modern, responsive portfolio website showcasing my skills, interests, and projects as a Computer Science graduate from the University of Rhode Island.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.1.5-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8?style=flat&logo=tailwind-css)

## 🌟 Features

- **Dark/Light Mode Toggle**: Custom BB-8 themed theme switcher with smooth transitions
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS
- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Styled Components**: Mix of Tailwind CSS and styled-components for flexible styling
- **Social Integration**: Direct links to GitHub, LinkedIn, Instagram, and resume
- **Type-Safe**: Full TypeScript implementation for robust code quality

## 🛠️ Technology Stack

- **Framework**: [Next.js 15.1.5](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library**: [React 19.0.0](https://react.dev/)
- **Styling**: 
  - [Tailwind CSS 3.4.1](https://tailwindcss.com/)
  - [styled-components 6.1.14](https://styled-components.com/)
- **Theme Management**: [next-themes 0.4.4](https://github.com/pacocoursey/next-themes)
- **Font**: Geist font family (optimized with `next/font`)
- **Linting**: ESLint with Next.js configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 20.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For version control

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kmsull/ksullivanportfolio.git
   cd ksullivanportfolio/sullivan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your specific configuration.

## 💻 Development Workflow

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser. The page auto-reloads when you make changes.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `.next` folder.

### Start Production Server
```bash
npm start
```
Runs the production build locally (requires `npm run build` first).

### Lint Code
```bash
npm run lint
```
Runs ESLint to check for code quality issues and enforce style guidelines.

## 📁 Project Structure

```
sullivan-portfolio/
├── app/                      # Next.js App Router directory
│   ├── layout.tsx           # Root layout with metadata and fonts
│   ├── page.tsx             # Homepage component
│   ├── providers.tsx        # Theme provider wrapper
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── HeaderInfo/          # Header with social links and theme toggle
│   ├── MyInfoCard/          # Personal information card
│   ├── InterestsLIst/       # Interests and passions list
│   ├── LanguageList/        # Skills and technologies list
│   ├── LightDark/           # BB-8 themed dark/light mode toggle
│   ├── SocialButton/        # Social media button components
│   └── images/              # Image assets
├── public/                  # Static assets
├── .gitignore              # Git ignore rules
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), the platform created by the makers of Next.js.

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Environment Variables in Production

If using environment variables, add them in your Vercel project settings under "Environment Variables".

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on:
- Code of conduct
- Development process
- How to submit pull requests
- Coding standards

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kenneth Sullivan**
- GitHub: [@kmsull](https://github.com/kmsull)
- Portfolio: [Live Demo](https://ksullivanportfolio.vercel.app) _(update with actual URL)_

## 📧 Contact

For questions or feedback, feel free to reach out through:
- GitHub Issues
- LinkedIn _(add link)_
- Email _(add email)_

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for the Geist font family
- The open-source community for inspiration and tools

---

Built with ❤️ by Kenneth Sullivan
