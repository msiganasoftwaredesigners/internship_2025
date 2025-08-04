# internship_2025

## Running Locally

Follow these steps to run on your local machine:

### 1. Clone the repository

```sh
git clone https://github.com/msiganasoftwaredesigners/internship_2025.git
cd internship_2025
```

### 2. Install dependencies

Make sure you have Node.js and npm installed. Then run:

```sh
npm install
```

### 3. Start the development server

Start your local server with:

```sh
npm run dev
```

### 4. Run Tailwind CSS in watch mode

In a separate terminal window, run:

```sh
npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch
```

### 5. Open your project

Open your main HTML file in your browser (typically in the root or public directory).

---

> **Note:**  
> - Ensure your HTML files link to `./build/css/style.css`.
