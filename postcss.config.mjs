import '../app/profile/global.css';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
