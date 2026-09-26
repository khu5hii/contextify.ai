# Contextify.ai

**Contextify.ai is an AI-powered company research platform built for job seekers.**

It takes a company's website URL and generates structured **company context** such as its industry, mission, vision, company overview, and unique selling points. The generated context helps users quickly understand a company before applying, preparing for interviews, or writing application responses.

## Features

* Company website analysis
* AI-generated company context
* Industry, mission, vision, and USP extraction
* Save and revisit company analyses
* User authentication

## Tech Stack

* Next.js
* React
* Tailwind CSS
* JavaScript
* Prisma
* PostgreSQL
* Supabase
* NextAuth.js

## How It Works

```text
Company URL
     ↓
Website Analysis
     ↓
Generated Company Context
     ↓
View / Save Analysis
```

## Screenshots

<img width="1891" height="867" alt="image" src="https://github.com/user-attachments/assets/17f35208-6c46-48b0-aeee-a01ba84c0814" />
<br> <br>
<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/6295d8f2-3e08-44e6-92f3-59ef3d3aa53c" />
<br> <br>
<img width="1919" height="919" alt="image" src="https://github.com/user-attachments/assets/a2800c51-26d6-4f60-ad57-156486dfc4d7" />
<br> <br>
<img width="1919" height="917" alt="image" src="https://github.com/user-attachments/assets/66ac7177-eb82-48dd-9caf-c48732284259" />
<br> <br>
<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/b122b7c8-db22-4a3b-a702-0e224c71e483" />
<br> <br>
<img width="1919" height="927" alt="image" src="https://github.com/user-attachments/assets/57b48717-410c-4845-acb6-420b4d554304" />
<br> <br>
<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/52cf2c55-0958-4d47-bda1-30331c28d86b" />
<br> <br>
<img width="1900" height="924" alt="image" src="https://github.com/user-attachments/assets/92318fb4-5f5c-4dd0-bc32-88b7587a7ac7" />
<br> <br>
<img width="1901" height="926" alt="image" src="https://github.com/user-attachments/assets/c5d85153-520d-499e-9e21-9bc6dd8af4cf" />
<br> <br> 
<img width="1885" height="926" alt="image" src="https://github.com/user-attachments/assets/e22eb993-3d93-4d0b-9757-4a3ece2be4eb" />
<br> <br> 
<img width="1897" height="934" alt="image" src="https://github.com/user-attachments/assets/aaf4c2e7-2c9e-4a8a-ac15-1c76158d05c1" />
<br> <br>
<img width="1919" height="925" alt="image" src="https://github.com/user-attachments/assets/20a401d8-521e-4cdc-9795-37fd5220bbe5" />

## Getting Started

### Installation

```bash
git clone <repository-url>
cd contextify.ai
npm install
```

Create a `.env` file:

```env
DATABASE_URL="your-database-url"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"
GEMINI_API_KEY="your_gemini_api_key"
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Future Plans

* Resume-based personalization
* Job description analysis
* Application question generation
* Company-specific cover letters

## Status

**In Development**

## Author

**Khushi Patil**
