# 🎓 India Colleges Explorer

A fast, filterable web platform to search and explore **39,000+ Indian colleges** sourced from the official AICTE dashboard. Built with Next.js and React.

![Home](./public/home-1.png)

---

## ✨ Features

- **Smart Search** — Find colleges by name with debounced live search
- **Cascading Filters** — Filter by State → District → Institution Type → University → Degree → Programme, with each filter contextually narrowing the next
- **Auto-location Detection** — Automatically selects the user's state on first load using IP geolocation
- **Course Viewer** — View all available programmes and courses offered by any college in a modal dialog
- **One-click Copy** — Copy any college field (name, address, university, etc.) to clipboard directly from the card
- **Google Maps Integration** — Open any college location in Google Maps with a single click
- **Export to Excel** — Download the current filtered results as a styled `.xlsx` file
- **Active Filter Badges** — See all active filters at a glance with live results count
- **Dark UI** — Polished dark-mode interface with glassmorphism styling

---

## 🖼️ Screenshots

**Home**
![Home](./public/home-1.png)

![Home](./public/home-3.png)

**College Cards**
![College Card](./public/collegecard.png)

**Course Dialog**
![Course](./public/course.png)

**Filtered Colleges**
![Home](./public/home-2.png)

**Downloaded Excel sheet**
![Home](./public/downloaded-excelsheet.png)


**About**
![Home](./public/about.png)

**Api Documentation**
![Home](./public/api-documentation-screenshot.png)
---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Select Inputs | [React Select](https://react-select.com/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| Excel Export | [ExcelJS](https://github.com/exceljs/exceljs) + [FileSaver.js](https://github.com/eligrey/FileSaver.js) |
| Data API | [Indian Colleges List API](https://indian-colleges-list.vercel.app/api) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anburocky3/indian-colleges-data-ui.git
cd college-api-nextjs

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🔌 API Reference

This project consumes the public **[Indian Colleges List (Datasets)](https://indian-colleges-list.vercel.app/)**:


---

## 📤 Excel Export

The filtered college list can be exported as a styled `.xlsx` file with the following columns:

- **Name** — College name (title-cased)
- **District**
- **State**
- **Type** — Institution type (e.g., Government, Private)
- **University** — Affiliated university
- **Address**

Headers are styled with a sky-blue background and white bold text.

---

## 👥 Contributors

| Name | Role | Links |
|---|---|---|
| Devaprabhu P | Fullstack Developer | [GitHub](https://github.com/deva-p-stack) · [LinkedIn](https://linkedin.com/in/deva-web) |
| Dhinakaran Y | Fullstack Developer | [GitHub](https://github.com/dhinakaran-Y) · [LinkedIn](https://linkedin.com/in/dhinakaran-laran) |

---

## 👤 Author

**Anbuselvan Annamalai** — [anbuselvan-annamalai.com](https://anbuselvan-annamalai.com/)

---

## 📄 License

This project is private. All rights reserved.
