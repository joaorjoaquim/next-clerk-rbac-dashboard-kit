# Next.js RBAC Dashboard with Clerk

A modern, secure, and scalable dashboard application built with Next.js, featuring Role-Based Access Control (RBAC) powered by Clerk authentication.

## 🚀 Features

- 🔐 **Secure Authentication**: Powered by Clerk for enterprise-grade authentication
- 👥 **Role-Based Access Control**: Fine-grained permissions and access management
- 📊 **Modern Dashboard**: Clean and intuitive user interface
- 📱 **Responsive Design**: Works seamlessly across all devices
- 🎨 **Beautiful UI**: Built with TailwindCSS and Radix UI components
- 📈 **Data Visualization**: Interactive charts and graphs using Recharts
- 🔄 **State Management**: Efficient state handling with Redux Toolkit
- 📝 **Form Handling**: Advanced form management with React Hook Form
- 🛠 **Type Safety**: Full TypeScript support for better development experience

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

This project uses Clerk for authentication and implements a role-based access control system. The middleware (`middleware.ts`) handles route protection and role verification.

## 🎨 UI Components

The application uses a combination of:

- Radix UI for accessible primitives
- Custom components built with TailwindCSS
- Recharts for data visualization
- Remix Icons for iconography

## 📊 Data Visualization

The dashboard includes various data visualization components using Recharts:

- Line charts
- Bar charts
- Pie charts
- Area charts

## 🧪 Testing

To run tests:

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
