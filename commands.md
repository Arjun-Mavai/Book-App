Start project with after vite build process is done ---------- 

# ############  ----------  Tailwind installation steps with pnpm ----------------------


# pnpm install
# pnpm install tailwindcss postcss-cli autoprefixer
# pnpm exec tailwindcss init -p
# pnpm add --save-dev postcss




 # Add these to your tailwind.css file and add this file to our main.jsx file 
  /* src/styles.css */
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';

   /* Your custom CSS styles go here */


# ############### Add this to your postcss.config file --  

export default {
  plugins: {
    'postcss-import':{},
    tailwindcss: {},
    autoprefixer: {},
  },
}













# ########################################################### Project structure and its commands ##############

- src/
  - components/
    - Header.js
    - Sidebar.js
    - Footer.js
    - Home.js
    - Books.js
    - Authors.js
  - App.js
  - index.js
- db.json
- package.json

changed from this structure to this one after react router v6 addition
rendering all childrens in the outlet placeholder in the mail Layout component

my-library-app/
|-- src/
|   |-- components/
|   |   |-- Navbar.js
|   |   |-- Menu.js
|   |   |-- Footer.js
|   |   |-- ErrorBoundary.js
|   |-- pages/
|   |   |-- Home.js
|   |   |-- Users.js
|   |   |-- Products.js
|   |   |-- Orders.js
|   |   |-- Login.js
|   |   |-- NotFound.js
|   |-- App.js
|-- package.json


# ############## commands -------------

1. npm create vite@latest Book-App -- --template react

2. pnpm install react-router-dom react-query   // started using pnpm after vite build
3. create a mock server(db.json file at the root level)
4. pnpm install json-server --save-dev (To simulate a server, you can use a package like json-server to serve the db.json file.) Mock server
5. "scripts": {
  "server": "json-server --watch db.json --port 5000",      // script added
  // ... other scripts
}
6. pnpm run server // Your mock server will now be running at http://localhost:5000.

7. pnpm run dev     ---------- command to run the project in dev mode
8. pnpm install react-player // for react player
9. pnpm install antd --save // for antd design dropdown
10. pnpm install @ant-design/icons --save
11. pnpm install dotenv --save-dev // information available below , and put the .env in gitignore






##  
Root Directory:

    node_modules/: Dependencies
    public/: Static assets like images
    src/: Source code
    db.json: Mock database file
    index.html: Entry HTML file
    package.json: Project metadata and dependencies
    vite.config.js: Vite configuration

Inside src/:

    components/: Reusable UI components (e.g., BookCard.jsx)
    pages/: Route-specific components (e.g., Home.jsx)

    Analogy:

Imagine you're baking a cake (building a component) and you need sugar (another component). You go to the kitchen cabinet (import statement) to get the sugar (Button component).



# #############  
Use dotenv (Optional):
If you want to continue using the dotenv package in your local development environment to load environment variables from the .env file, follow these steps:

Install the dotenv package as a development dependency:

bash
Copy code
npm install dotenv --save-dev
In your main application file (e.g., index.js or App.js), import and configure dotenv at the top:

javascript
Copy code
require('dotenv').config();
This step ensures that your local development environment can still access the environment variables from the .env file.


