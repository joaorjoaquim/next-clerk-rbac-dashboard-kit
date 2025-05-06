# Contributing to Next.js RBAC Dashboard Starter Kit

Thank you for your interest in contributing to this dashboard starter kit! This document provides guidelines and instructions for contributing to the project.

## 🎯 Project Goals

This starter kit aims to:

- Provide a solid foundation for building any type of dashboard application
- Showcase modern web development practices and patterns
- Demonstrate clean architecture and best practices
- Serve as a learning resource for developers

## 📋 Contribution Guidelines

### 1. Code of Conduct

Please be respectful and considerate of others when contributing to this project.

### 2. How to Contribute

#### Reporting Issues

- Use the issue tracker to report bugs or suggest features
- Include detailed information about the issue
- Provide steps to reproduce if reporting a bug
- Include screenshots or code snippets when relevant

#### Feature Requests

- Clearly describe the feature you'd like to see
- Explain why this feature would be valuable
- Provide examples of how the feature would work

#### Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix
3. Make your changes
4. Test your changes thoroughly
5. Submit a pull request with a clear description

### 3. Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/next-clerk-rbac-dashboard-kit.git
   cd next-clerk-rbac-dashboard-kit
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your Clerk credentials:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```

4. **Start the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

### 4. Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Follow the existing project structure

### 5. Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Follow the existing testing patterns

### 6. Documentation

- Update relevant documentation when adding features
- Add comments for complex code
- Keep the README up to date

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages and layouts
├── components/       # Reusable UI components
├── core/            # Core business logic and utilities
├── lib/             # Shared libraries and utilities
└── middleware.ts    # Authentication and route protection
```

## 🛠 Development Workflow

1. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   - Follow the code style
   - Write tests
   - Update documentation

3. **Commit your changes**

   ```bash
   git commit -m "feat: add your feature description"
   ```

4. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Wait for review

## 📝 Commit Message Format

Use the following format for commit messages:

```
type(scope): description

[optional body]
[optional footer]
```

Types:

- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: code style changes
- refactor: code refactoring
- test: test changes
- chore: maintenance tasks

## 🔍 Review Process

1. Pull requests will be reviewed by maintainers
2. Feedback will be provided if changes are needed
3. Once approved, your changes will be merged

## 🙏 Thank You

Thank you for contributing to this project! Your contributions help make this starter kit better for everyone.

## 📞 Questions?

If you have any questions, feel free to:

- Open an issue
- Contact the maintainers
- Join the discussion in the repository
