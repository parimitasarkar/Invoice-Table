document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const sortButton = document.getElementById('sortButton');
    const tableBody = document.querySelector('#invoiceTable tbody');
    let rows = Array.from(tableBody.querySelectorAll('tr'));
    let isAscending = true;

    // Search functionality
    searchBar.addEventListener('input', function() {
        const searchQuery = this.value.toLowerCase();
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const match = Array.from(cells).some(cell =>
                cell.textContent.toLowerCase().includes(searchQuery)
            );
            row.style.display = match ? '' : 'none';
        });
    });

    // Sort functionality
    sortButton.addEventListener('click', () => {
        rows.sort((a, b) => {
            const aText = a.querySelector('td').textContent.trim();
            const bText = b.querySelector('td').textContent.trim();
            return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
        });
        isAscending = !isAscending;
        tableBody.innerHTML = '';
        rows.forEach(row => tableBody.appendChild(row));
    });
});
