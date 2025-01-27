<!-- Search Button -->
<button (click)="onSearch()">Search</button>

<!-- Card container -->
<div *ngIf="showCard" class="card">
  <!-- Table inside card -->
  <table *ngIf="tableData.length > 0" class="table">
    <thead>
      <tr>
        <th>Workflow Step</th>
        <th>Admin List</th>
        <th>Add/Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of tableData; let i = index">
        <td>{{ row.workflowStep }}</td>
        <td>{{ row.adminAction }}</td>
        <td>
          <input type="checkbox" [(ngModel)]="row.selected" />
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Select/Deselect All Button -->
  <button (click)="toggleSelectAll()">Select/Deselect All</button>

  <!-- Buttons after the table -->
  <div class="button-container">
    <button (click)="addAction()">Add</button>
    <button (click)="updateAction()">Update</button>
    <button (click)="deleteAction()">Delete</button>
  </div>
</div>

<!-- Popup Card for Add Action -->
<div *ngIf="showPopup" class="popup-card">
  <div class="popup-content">
    <p>Add Button Clicked</p>
    <button (click)="closePopup()">Close</button>
  </div>
</div>














import { Component } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent {
  showCard = false;
  showPopup = false;  // Flag for showing popup
  tableData = [
    { workflowStep: 'Step 1', adminAction: 'Add', addDelete: 'add', selected: false }, 
    { workflowStep: 'Step 2', adminAction: 'Delete', addDelete: 'delete', selected: false }
  ];

  onSearch() {
    this.showCard = true;
  }

  addAction() {
    this.showPopup = true; // Show popup on Add button click
    console.log('Add clicked');
  }

  updateAction() {
    console.log('Update clicked');
  }

  deleteAction() {
    console.log('Delete clicked');
  }

  toggleSelectAll() {
    const selectAll = this.tableData.some(row => !row.selected);
    this.tableData.forEach(row => row.selected = selectAll);
  }

  closePopup() {
    this.showPopup = false;
  }
}









.card-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 400px;
  max-width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;  /* Centering text */
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.table th, .table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 14px;
}

button:hover {
  background-color: #0056b3;
}

.popup-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.popup-content p {
  margin: 10px 0;
}









@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']  // This points to your CSS file
})
export class CardTableComponent {
  // Component logic here...
}




<head>
  <link rel="stylesheet" href="path-to-your-stylesheet/card-table.component.css">
</head>
