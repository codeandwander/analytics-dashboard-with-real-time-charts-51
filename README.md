# Analytics Dashboard with Real-time Charts

## Project Overview
This project is an interactive analytics dashboard that displays key business metrics. The dashboard includes:

1. A header with company branding and user profile dropdown
2. Sidebar navigation with icons for different sections (Overview, Sales, Users, Reports)
3. Main dashboard area with:
   - KPI cards showing total revenue, active users, conversion rate, and growth percentage
   - Interactive line chart showing revenue trends over the past 12 months
   - Bar chart comparing product sales by category
   - Real-time activity feed showing recent transactions
4. Responsive design that works on desktop and mobile
5. Dark mode toggle in the header
6. Export functionality to download charts as images or PDF

The charts update dynamically when filtering by date range, and the application uses modern web technologies with smooth animations and transitions.

## Getting Started

### Prerequisites
- Node.js (version 12 or later)
- npm (version 6 or later)

### Installation
1. Clone the repository:
```
git clone https://github.com/your-username/analytics-dashboard.git
```
2. Navigate to the project directory:
```
cd analytics-dashboard
```
3. Install the dependencies:
```
npm install
```

### Running the Application
1. Start the development server:
```
npm start
```
2. Open your web browser and navigate to `http://localhost:3000`.

### Building for Production
1. Create a production build:
```
npm run build
```
2. The optimized production files will be generated in the `build` directory.

## API Documentation

The Analytics Dashboard API provides endpoints for retrieving and managing the data displayed in the dashboard. The following endpoints are available:

### `GET /api/metrics`
Retrieves the current values for the KPI metrics (total revenue, active users, conversion rate, growth percentage).

**Response**:
```json
{
  "totalRevenue": 1234567.89,
  "activeUsers": 12345,
  "conversionRate": 0.15,
  "growthPercentage": 0.08
}
```

### `GET /api/revenue-trends`
Retrieves the revenue trends for the past 12 months.

**Response**:
```json
[
  { "month": "Jan", "revenue": 100000 },
  { "month": "Feb", "revenue": 120000 },
  { "month": "Mar", "revenue": 150000 },
  // ... data for the past 12 months
]
```

### `GET /api/product-sales`
Retrieves the sales data for each product category.

**Response**:
```json
[
  { "category": "Electronics", "sales": 500000 },
  { "category": "Apparel", "sales": 300000 },
  { "category": "Home Goods", "sales": 200000 },
  { "category": "Sports", "sales": 150000 }
]
```

### `GET /api/activity-feed`
Retrieves the latest transactions for the real-time activity feed.

**Response**:
```json
[
  { "id": 1, "timestamp": "2023-04-01T12:34:56Z", "product": "TV", "customer": "John Doe", "amount": 499.99 },
  { "id": 2, "timestamp": "2023-04-01T13:15:22Z", "product": "Shirt", "customer": "Jane Smith", "amount": 29.99 },
  { "id": 3, "timestamp": "2023-04-01T14:22:11Z", "product": "Laptop", "customer": "Bob Johnson", "amount": 999.99 }
]
```

## User Guide

### Overview
The Analytics Dashboard provides a comprehensive view of your business metrics, sales performance, and user activity. You can navigate through the different sections using the sidebar menu.

### KPI Cards
The KPI cards in the main dashboard area display the current values for total revenue, active users, conversion rate, and growth percentage. These metrics are updated in real-time.

### Revenue Trends
The line chart in the main dashboard area shows the revenue trends over the past 12