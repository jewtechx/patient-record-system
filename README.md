# Patient Record System

A simple Patient Record System API built with Node.js, Express, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Routes](#api-routes)
  - [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Getting Started
All routes and endpoints together with things you need to install and the prerequisites needed are provided in this documentation. 

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Make sure MongoDB server is running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jewtechx/patient-record-system.git
   ```

2. Change directory to project folder

   ```bash
   cd patient-record-system
   npm install
   ```
3. Run the server

  ```bash
   npm run dev
  ```


## Usage

### API Routes

1. **Create Patient**
   - **Endpoint:** `POST /api/patients/create_patient`

   - **Request body:**
     ```bash
     {
       "patientID": "12345",
       "surname": "Doe",
       "other_names": "John",
       "gender": "Male",
       "phone_number": 1234567890,
       "residential_address": "123 Main St, City",
       "emergency_name": "Emergency Contact",
       "contact": "9876543210",
       "relationship": "Friend"
     }
     ```

2. **Get Patients**
   - **Endpoint:** `GET /api/patients`

   - **Response body:**
   ```bash
  {
    "patientID": "12345",
    "surname": "Doe",
    "other_names": "John",
    "gender": "Male",
    "phone_number": 1234567890,
    "residential_address": "123 Main St, City",
    "emergency_name": "Emergency Contact",
    "contact": "9876543210",
    "relationship": "Friend"
    }
     ```

1. **Create Visitation**
   - **Endpoint:** `POST /api/visitations/create_visitation`

   - **Request body:**
     ```bash
     {
      "patientID": "12345",
      "date_and_time": "2023-12-18T14:30:00",
      "type_of_encounter": "Regular Checkup"
     }
     ```

2. **Get Visitations**
   - **Endpoint:** `GET /api/visitations`

   - **Response body:**
     ```bash
  {
    "patientID": "12345",
    "date_and_time": "2023-12-18T14:30:00",
    "type_of_encounter": "Regular Checkup"
  },

     ```

1. **Create Patient Vitals**
   - **Endpoint:** `POST /api/patient_vitals/create_patient_vitals`

   - **Request body:**
     ```bash
     {
       "patientID": "12345",
  "blood_pressure": "120/80",
  "temperature": "98.6",
  "pulse": "72",
  "spo2": "98%"
     }
     ```

2. **Get Patients Vitals**
   - **Endpoint:** `GET /api/patient_vitals`

   - **Response body:**
     ```bash
  {
     "patientID": "12345",
    "blood_pressure": "120/80",
    "temperature": "98.6",
    "pulse": "72",
    "spo2": "98%"
  },

     ```


## Examples
 - **Creaate Patient**
  `
  {curl -X POST -H "Content-Type: application/json" -d '{
  "patientID": "12345",
  "surname": "Doe",
  "other_names": "John",
  "gender": "Male",
  "phone_number": 1234567890,
  "residential_address": "123 Main St, City",
  "emergency_name": "Emergency Contact",
  "contact": "9876543210",
  "relationship": "Friend"
  }'
 http://localhost:8080/api/patients/create_patient}

  `

- **Get Patients**

  `curl http://localhost:8080/api/patients`


## Contributing
Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the [MIT License]


