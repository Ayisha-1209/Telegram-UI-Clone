# Telegram Clone Project

This project is a clone of the Telegram UI, developed using ReactJS and styled with Tailwind CSS. The application fetches data from two special APIs to simulate chat and message functionality.

Link to the live Project : https://telegram-ui-clone-q9im20zuq-ayushis-projects-deb3b39a.vercel.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [APIs Used](#apis-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [License](#license)

## Features

- Clone of Telegram UI
- Fetches and displays list of chats
- Fetches and displays messages within a chat
- Supports scrolling with floating date indicators
- Responsive design for desktop and mobile views

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **React Icons**: Icons used within the application.

## APIs Used

### API Endpoint 1

- **Description**: Returns a list of chats (paginated API)
- **URL**: `https://devapi.beyondchats.com/api/get_all_chats?page=1`
- **Type**: GET Request

### API Endpoint 2

- **Description**: Returns a list of messages given a `chat_id`
- **URL**: `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`
- **Type**: GET Request

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/telegram-clone.git

2. **Navigate to the project directory**:
   ```sh
   cd telegram-clone

3. **Install dependencies**:
   ```sh
   npm install

4. **Start the development server**:
   ```sh
   npm start

The application will be available at http://localhost:3000.

## Usage

Once the application is running, you can:
- View a list of chats fetched from the API.
- Select a chat to view its messages.
- Send messages within a chat (simulated).

## Components

## Main Components

- ChatWindow: Displays the messages of a selected chat with a floating date indicator.
- MessageBubble: Represents individual messages in the chat window.
- TitleBar: Contains the header of the chat window with chat details.

## Utility Functions
- convertDate: Converts date to a readable format.
- getTimeFromDate: Extracts time from a date.
- sortAndGroupMessagesByDate: Sorts and groups messages by date.
