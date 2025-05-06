# Next.js RBAC Dashboard Starter Kit

A comprehensive, production-ready dashboard starter kit built with Next.js and Clerk, designed to serve as a foundation for building any type of dashboard application. This project showcases modern web development practices, clean architecture, and robust authentication with Role-Based Access Control (RBAC).

## 🎯 Project Goals

- **Dashboard Starter Kit**: Provide a solid foundation for building any type of dashboard application
- **Portfolio Showcase**: Demonstrate professional development skills and best practices
- **Learning Resource**: Serve as a reference for implementing modern web development patterns
- **Production-Ready**: Include all necessary features for a real-world application

## 🚀 Key Features

- 🔐 **Enterprise-Grade Authentication**: Powered by Clerk with RBAC implementation
- 🎨 **Modern UI/UX**: Clean, responsive design with TailwindCSS and Radix UI
- 📊 **Data Visualization**: Ready-to-use chart components with Recharts
- 🔄 **State Management**: Scalable state handling with Redux Toolkit
- 📝 **Form Management**: Advanced form handling with React Hook Form
- 🛠 **Type Safety**: Full TypeScript implementation
- 🧪 **Testing Ready**: Set up for comprehensive testing
- 📱 **Responsive Design**: Mobile-first approach with responsive layouts
- 🔒 **Security**: Built-in authentication and authorization patterns

## 🛠 Tech Stack

- **Framework**: Next.js 15.2.3
- **Language**: TypeScript
- **Authentication**: Clerk
- **Styling**: TailwindCSS 4
- **State Management**: Redux Toolkit
- **UI Components**: Radix UI
- **Data Visualization**: Recharts
- **Form Handling**: React Hook Form
- **Code Quality**: Biome (formatter and linter)

## 🌐 Live Demo

Check out the live demo at [https://repo-clerk.joaorjoaquim.dev/](https://repo-clerk.joaorjoaquim.dev/)

## 📦 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Clerk account and API keys

## 🚀 Getting Started

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
   Create a `.env.local` file in the root directory and add your Clerk credentials:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```

4. **Run the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages and layouts
├── components/       # Reusable UI components
├── core/            # Core business logic and utilities
├── lib/             # Shared libraries and utilities
└── middleware.ts    # Authentication and route protection
```

## 🔒 Authentication & Authorization

This project implements a robust authentication system using Clerk, featuring:

- Role-Based Access Control (RBAC)
- Protected routes
- User session management
- Role-based UI rendering
- Secure API endpoints

## 🎨 UI Components

The starter kit includes a comprehensive set of UI components:

- Dashboard layouts
- Data tables
- Form components
- Modal dialogs
- Navigation menus
- Loading states
- Error boundaries
- Toast notifications

## 📊 Data Visualization

Ready-to-use chart components:

- Line charts
- Bar charts
- Pie charts
- Area charts
- Custom chart configurations
- Responsive chart layouts

## 🧪 Testing

The project is set up for comprehensive testing:

```bash
yarn test
# or
npm test
```

## 🏗 Building for Production

```bash
yarn build
# or
npm run build
```

## 📝 How to Use This Starter Kit

1. **Clone and Customize**: Use this as a base for your dashboard project
2. **Extend Features**: Add your specific business logic and features
3. **Customize UI**: Modify the design to match your brand
4. **Add New Charts**: Extend the data visualization components
5. **Implement New Roles**: Add custom roles and permissions

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Recharts](https://recharts.org/)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## 👨‍💻 Author

João Joaquim - [GitHub](https://github.com/yourusername) - [Portfolio](https://joaorjoaquim.dev)
