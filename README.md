# Kanban Board

This project is a Kanban board application built with React, Supabase, React Query, React Hook Form, Tailwind CSS, and React Router. It allows users to manage tasks across different columns, such as "To Do," "In Progress," and "Done."

## Features

- **User Authentication**: Secure user authentication using Supabase.
- **Task Management**: Create, update, and delete tasks.
- **Drag-and-Drop**: Easily move tasks between columns using drag-and-drop functionality.
- **Real-time Updates**: Live updates to the board using Supabase's real-time capabilities.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **Routing**: Smooth navigation within the application using React Router.
- **Form Validation**: Efficient form handling and validation using React Hook Form.

## Tech Stack

- **Frontend**: React
- **State Management**: React Query
- **Form Management**: React Hook Form
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Backend**: Supabase

## Installation

1. Clone the repository:
   ```bash
       git clone https://github.com/DevHeris/Kanban-task-management-web-app.git
   ```
2. Install the dependencies:
   ```bash
       npm install
   ```
3. Configure Supabase:
   - Go to the [Supabase website](https://supabase.io/) and sign up for an account if you don't have one.
   - Create a new project in Supabase.
   - In the Supabase dashboard, go to the "Settings" tab and find your `API URL` and `anon key`.
   - Create a `.env` file in the root of your project and add the following environment variables, replacing `your-supabase-url` and `your-supabase-anon-key` with your actual Supabase credentials:
   ```env
       REACT_APP_SUPABASE_URL=your-supabase-url
           REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. Start the development server:
   ```bash
       npm run dev
   ```

## Usage

1.  **Sign Up / Login**: Create an account or log in using the authentication form.
2.  **Create Tasks**: Add new tasks to the "To Do" column.
3.  **Move Tasks**: Drag and drop tasks between columns to update their status.
4.  **Edit Tasks**: Click on a task to edit its details.
5.  **Delete Tasks**: Remove tasks that are no longer needed.

## Folder Structure

```plaintext
src/
├── components/         # React components
├── pages/              # Page components for routing
├── hooks/              # Custom hooks
├── styles/             # Tailwind CSS styles
├── utils/              # Utility functions
├── App.js              # Main application component
├── main.js            # Entry point
└── ...
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



<!-- Users should be able to:

 View the optimal layout for the app depending on their device's screen size
 See hover states for all interactive elements on the page
 Create, read, update, and delete boards and tasks
 Receive form validations when trying to create/edit boards and tasks
 Mark subtasks as complete and move tasks between columns
 Hide/show the board sidebar
 Toggle the theme between light/dark modes
 Bonus: Allow users to drag and drop tasks to change their status and re-order them in a column
 Bonus: Keep track of any changes, even after refreshing the browser (localStorage could be used for this if you're not building out a full-stack app)
 Bonus: Build this project as a full-stack application
Expected Behaviour
Boards
 Clicking different boards in the sidebar will change to the selected board.
 Clicking "Create New Board" in the sidebar opens the "Add New Board" modal.
 Clicking in the dropdown menu "Edit Board" opens up the "Edit Board" modal where details can be changed.
 Columns are added and removed for the Add/Edit Board modals.
 Deleting a board deletes all columns and tasks and requires confirmation.
Columns
 A board needs at least one column before tasks can be added. If no columns exist, the "Add New Task" button in the header is disabled.
 Clicking "Add New Column" opens the "Edit Board" modal where columns are added.
Tasks
 Adding a new task adds it to the bottom of the relevant column.
 Updating a task's status will move the task to the relevant column. If you're taking on the drag and drop bonus, dragging a task to a different column will also update the status. -->
