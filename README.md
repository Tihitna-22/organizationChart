# Organization-Chart

[![Screenshot-4.png)](https://i.ibb.co/CMM1K1G/Screenshot-4.png)]

## Table of content

- [Description](#Description)
- [Technology](#technology)
- [Installation](#installation)
- [API](#API)

## Description

Organization-chart is a web application for registering organization's employee hierarchy in the form of parent child relation where the CEO is the root for the chart. From this SPA we can select, edit and delete a single employee

## Technology

- React.js

## Installation

To install it, simply clone this repository. You can start the app locally by downloading the neccessary dependencies fand start the app using the command "npm run dev".

```
git clone https://github.com/Tihitna-22/organizationChart.git
```

install dependencies

```
npm install
```

Start the dev server

```
npm run dev
```

## API

I used a mock api created with mockapi.io with the following key value pairs

```json
[
  {
    "label": "Sean Koch",
    "discription": "CEO",
    "id": "1"
  },
  {
    "createdAt": "2022-12-17T13:43:02.003Z",
    "label": "Gilberto ",
    "id": "2",
    "parentId": "1",
    "discription": "CTO"
  },
  {
    "createdAt": "2022-12-17T22:54:54.479Z",
    "label": "Clayton Me",
    "id": "3",
    "parentId": "1",
    "discription": "CFO"
  },
  {
    "createdAt": "2022-12-18T04:12:08.310Z",
    "label": "Perr",
    "id": "4",
    "parentId": "2",
    "discription": "Product Manager"
  },
  {
    "createdAt": "2022-12-18T07:27:17.174Z",
    "label": "Justin Herman",
    "id": "5",
    "parentId": "3",
    "discription": " Chef Accountant"
  },
  {
    "createdAt": "2022-12-17T20:35:40.310Z",
    "label": "Floyd Brakus",
    "id": "6",
    "parentId": "3",
    "discription": "Internal Audit"
  },
  {
    "createdAt": "2022-12-17T18:50:23.320Z",
    "label": "Mrs. Brent Nolan IV",
    "id": "8",
    "parentId": "4",
    "discription": "Product Owner"
  },
  {
    "createdAt": "2022-12-18T07:02:26.168Z",
    "label": "Daniel Zboncak",
    "id": "9",
    "parentId": "5",
    "discription": "Financial Analyst"
  },
  {
    "createdAt": "2022-12-17T23:45:45.454Z",
    "label": "Dr. Tamara Mitchell",
    "id": "10",
    "parentId": "5",
    "discription": "Account and Payable"
  }
]
```
