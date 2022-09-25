export default class WorkoutTracker {
    static LOCAL_STORAGE_DATA_KEY = "workout-tracker-entries";

    constructor(root) {
        this.root = root;
        this.root.insertAdjacentHTML("afterbegin", WorkoutTracker.html());
        this.entries = [];

        this.loadEntries();
        this.updateView();

        this.root.querySelector(".tracker__add").addEventListener("click", () => {
            const date = new Date();
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const day = date.getDate().toString().padStart(2, "0");

            this.addEntry({
                date: `${year}-${month}-${day}`,
                workout: "walking",
                duration: 30,
            });
        });
    }

    static html() {
        return `
            <table class="tracker">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Workout</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody class="tracker__entries"></tbody>

                <tbody>
                    <tr class="tracker__row tracker__row--add">
                        <td colspan="4">
                            <span class="tracker__add">Add Entry &plus;</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    static rowHTML() {
        return `
            <tr class="tracker__row">
                <td>
                    <input type="date" class="tracker__date" />
                </td>

                <td>
                    <select class="tracker__workout">
                        <option value="walking">Walking</option>
                        <option value="running">Running</option>
                        <option value="outdoor-cycling">Outdoor Cycling</option>
                        <option value="indoor-cycling">Indoor Cycling</option>
                        <option value="swimming">Swimming</option>
                        <option value="yoga">Yoga</option>
                    </select>
                </td>

                <td>
                    <input type="number" class="tracker__duration" />
                    <span class="tracker__duration">minutes</span>
                </td>
                
                <td>
                    <button type="button" class="tracker__button tracker__delete">&times;</button>
                </td>
            </tr>
        `;
    }

    loadEntries() {
        this.entries = JSON.parse(localStorage.getItem(WorkoutTracker.LOCAL_STORAGE_DATA_KEY) || "[]");
    }

    saveEntries() {
        localStorage.setItem(WorkoutTracker.LOCAL_STORAGE_DATA_KEY, JSON.stringify(this.entries));
    }

    updateView() {
        const tableBody = this.root.querySelector(".tracker__entries");

        const addRow = (entry) => {
            const template = document.createElement("template");
            let row = null;

            template.innerHTML = WorkoutTracker.rowHTML().trim();
            row = template.content.firstElementChild;

            row.querySelector(".tracker__date").value = entry.date;
            row.querySelector(".tracker__workout").value = entry.workout;
            row.querySelector(".tracker__duration").value = entry.duration;

            row.querySelector(".tracker__date").addEventListener("change", (e) => {
                entry.date = e.target.value;
                this.saveEntries();
            });

            row.querySelector(".tracker__workout").addEventListener("change", (e) => {
                entry.workout = e.target.value;
                this.saveEntries();
            });

            row.querySelector(".tracker__duration").addEventListener("change", (e) => {
                entry.duration = e.target.value;
                this.saveEntries();
            });

            row.querySelector(".tracker__delete").addEventListener("click", () => {
                this.deleteEntry(entry);
            });

            tableBody.appendChild(row);
        };

        const tableRows = tableBody.querySelectorAll(".tracker__row");

        tableRows.forEach((row) => {
            row.remove();
        });

        // for every entrie (object inside the entries array) fetched from the localStorage, add a row to the table
        this.entries.forEach((entry) => addRow(entry));
    }

    addEntry(entry) {
        this.entries.push(entry);

        this.saveEntries();
        this.updateView();
    }

    deleteEntry(entryToDelete) {
        // we keep every entry that is not the entryToDelete
        this.entries = this.entries.filter((entry) => entry !== entryToDelete);

        this.saveEntries();
        this.updateView();
    }
}
