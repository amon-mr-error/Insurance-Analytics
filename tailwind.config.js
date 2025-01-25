/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dashboard: {
          background: '#f4f4f7',
          primary: '#3b82f6',
          secondary: '#6366f1',
          accent: '#10b981'
        },
        risk: {
          low: '#4CAF50',
          medium: '#FFC107',
          high: '#F44336'
        }
      },
      boxShadow: {
        'dashboard': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)'
      },
      borderRadius: {
        'dashboard': '12px'
      }
    },
  },
  plugins: [],
}