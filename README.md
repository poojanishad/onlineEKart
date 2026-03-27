# OnlineEKart App

A modern eCommerce application built using ReactJS.
This project demonstrates best practices in React development, state management, routing, and performance optimization.

---
##  Setup Instructions

### 1️ Clone repository

```bash
git clone https://github.com/poojanishad/onlineEKart.git
cd your-repo
```

### 2️ Install dependencies

```bash
npm install
```

### 3️ Run project

```bash
npm run dev
```

##  Tech Stack ##

### Frontend

* **ReactJS (Vite)**
* **React Router** – routing between pages
* **Redux Toolkit** – global state management (products + cart)
* **React Context API** – UI state (theme, refs)
* **Styled Components + CSS** – styling approach

### Performance Optimizations

* `React.lazy` + `Suspense` (code splitting)
* `useMemo`, `useCallback` (optimization)
* Infinite scroll using `IntersectionObserver`
* Debounced search input

---

##  Additional Notes

* The API used does not provide real clothing sizes.
  Therefore, **sizes are simulated based on product category and ID** for UI demonstration.

* The application is focused on **clothing-related categories**, but the API includes other categories as well.

* Size filter is **conditionally shown only for supported categories**:

  * `mens-shirts`
  * `mens-shoes`

* No traditional pagination is used; instead, **infinite scrolling** is implemented for better UX.

---
## Author
Pooja Nishad
---
