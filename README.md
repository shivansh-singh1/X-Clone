# X (Twitter) Clone

A frontend-focused clone of X (formerly Twitter) built using HTML, Tailwind CSS, and vanilla JavaScript. This project replicates the core UI and interactions of X, including posting content, media previews, responsive sidebars, and basic user interactions.

---

## Features

* Create text posts dynamically
* Upload and preview images or videos before posting
* Responsive left and right sidebars (mobile & desktop)
* Follow / Unfollow UI interactions
* Like posts with interactive icons
* Hamburger menu and drawer navigation for mobile
* Trending and "Who to follow" sections (UI-based)
* Clean, modern UI inspired by X (Twitter)

---

## Tech Stack

* HTML5
* Tailwind CSS
* JavaScript (Vanilla)
* Font Awesome Icons
* Express.js (basic server setup)

---

## Project Structure

```
X-Clone/
│
├── index.html        # Main HTML file
├── script.js         # Frontend logic and interactions
├── output.css        # Tailwind CSS build file
├── server.js         # Basic Express server
└── README.md         # Project documentation
```

---

## How to Run Locally

### Frontend

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/X-Clone.git
   ```
2. Open the project folder
3. Open `index.html` in your browser

### Backend (Optional)

1. Install dependencies

   ```bash
   npm install
   ```
2. Start the server

   ```bash
   node server.js
   ```
3. Server will run at `http://localhost:3000`

---

## Notes

* This is a UI-focused project; no real authentication or database is used
* All posts and interactions are handled on the client side
* Media uploads are preview-only and not stored permanently
* Built for learning frontend structure, UI logic, and interactivity

---

## What I Learned

* Building complex responsive layouts with Tailwind CSS
* Managing UI state with vanilla JavaScript
* Handling file uploads and previews
* DOM manipulation and event delegation
* Structuring a frontend-heavy project

---

## Future Improvements

* User authentication
* Backend integration with the database
* Persistent posts and users
* Real-time updates
* Improved accessibility

---

## License

This project is open-source and available for educational use.
