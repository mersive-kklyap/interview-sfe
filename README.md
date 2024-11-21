### Task 1: Filtering by Company

**User Story:**
As a user, I want to be able to filter people based on the selected company.

**Subtasks:**

1. create possibility to filter people by company name (eg. “Johns Group” or “Deckow-Crist”)
2. add reset filters button

### Task 2: Toggle View (Grid and List View)

**User Story:**
As a user, I want to be able to toggle between a grid view and a list view to see users in different layouts.

**Subtasks:**

1. Add a button that toggles the layout between a grid view (current view) and a list view (vertical stacked items).
2. Ensure the view persists after sorting or filtering operations (the layout should not reset).

### Task 3: Remove User

**User Story:**

As a user, I want to be able to remove a user from the list by clicking a "Remove" button.

**Subtasks:**

1. Add a "Remove" button to each user's card.
2. When the button is clicked, remove the user from the list and update the filtered list (if a filter is applied).

### Task 4: Create a Custom Fetch Hook

**User Story:**

As a developer, I want to create a custom hook that fetches data from an API and handles loading, success, and error states.

**Subtasks:**

1. Create a custom hook (`useFetch`) that takes an API URL as input and returns the data, loading state, and error state.
2. Update the component to use this hook for fetching users and display appropriate loading and error messages.

### Task 5: Users' Detail Page

**User Story:**
As a user, I want to be able to click on a User Item and proceed to the page where I can view the user’s detailed information.