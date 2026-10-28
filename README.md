# Harly

Responsive web and Android application for promoting luxury apartments. Users can browse and filter properties, view apartment details, save favourites, and request information through a contact form.

Apartment data is loaded from a local JSON file using fetch. Favourites persist through localStorage and are shared using Context API. Contact submissions are simulated; no messages are sent to a server.

## Technologies

- React, TypeScript and Vite.
- React Router.
- CSS Modules and Lucide React.
- Capacitor for Android.

## Installation

Requirements: Node.js and pnpm. Android Studio is required to run the Android application.

```bash
git clone https://github.com/dilanrojas/hotel-landing-page.git
cd hotel-landing-page
pnpm install
```

## Commands

```bash
pnpm dev      # Start the development server
pnpm build    # Generate the production build in dist/
pnpm preview  # Preview the production build locally
pnpm lint     # Run ESLint checks
```

## Android

Build the web application, synchronize the Android project, and open it in Android Studio:

```bash
pnpm build
pnpm exec cap sync android
pnpm exec cap open android
```

In Android Studio, select an emulator or connected Android device and run the application.

## Links

- [Live website](https://hotel-landing-page-ashy-ten.vercel.app/)
- [GitHub repository](https://github.com/dilanrojas/hotel-landing-page)
