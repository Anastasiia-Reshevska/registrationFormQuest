# Registration Form Quest

This project is a multi-step conference registration form built using modern front-end tools. It includes form validation, country and phone number input, image uploading, a dynamic table of attendees, and a Google map.

## Features
- Multi-step registration form with validation (Parsley.js)
- International phone input (intl-tel-input)
- Datepicker (bootstrap-datepicker)
- Image upload with preview
- Dynamic country list loading from API
- Members table with photos and report subjects
- Social media sharing buttons
- Responsive design (Bootstrap 4)
- SCSS support for custom styles

## Technologies Used
- Vite
- JavaScript (ES6 modules)
- SCSS (compiled to CSS)
- Bootstrap 4
- jQuery
- Parsley.js
- intl-tel-input
- bootstrap-datepicker
- Axios (for API requests)

### Installation
1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. To run the project in development mode:
   ```sh
   npm run dev
   localhost:3000/
   
4. To build for production:
   ```sh
   npm run build
   ```

## Project Structure
- `index.html` — Main HTML file
- `src/` or `css/` — SCSS/CSS source files
- `js/` — JavaScript source files
- `dist/` — Production build output

## API
- Countries and members are loaded from `http://quest-registration-api.groupbwt.com/api/`
