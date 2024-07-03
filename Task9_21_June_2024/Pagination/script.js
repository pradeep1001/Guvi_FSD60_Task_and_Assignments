function createNewElement(element, element_value = "", atbt, atbt_Val) {
    let newElement = document.createElement(element);
    newElement.setAttribute(atbt, atbt_Val);
    newElement.innerHTML = element_value;
    return newElement;
}

fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
    .then(response => response.json())
    .then(data => {
        const itemsPerPage = 10;
        let currentPage = 1;

        function displayData(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = data.slice(startIndex, endIndex);

            const tableBody = document.querySelector('#content tbody');
            tableBody.innerHTML = '';

            pageData.forEach(item => {
                const row = createNewElement('tr', '');
            
                const idCell = createNewElement('td', item.id, 'textContent', '');
                row.appendChild(idCell);
            
                const nameCell = createNewElement('td', item.name, 'textContent', '');
                row.appendChild(nameCell);
            
                const emailCell = createNewElement('td', item.email, 'textContent', '');
                row.appendChild(emailCell);
            
                tableBody.appendChild(row);
            });
        }

        function setupPagination() {
            const pageCount = Math.ceil(data.length / itemsPerPage);
            const paginationElement = document.getElementById('pagination');
            paginationElement.innerHTML = '';

            const addPageButton = (page, text) => {
                const button = createNewElement('button', text, 'innerText', '');
                if (page === currentPage) {
                    button.classList.add('active');
                }
                button.addEventListener('click', () => {
                    currentPage = page;
                    displayData(currentPage);
                    setupPagination();
                });
                const li = createNewElement('li','');
                li.appendChild(button);
                paginationElement.appendChild(li);
            };

            addPageButton(1, 'First');
            addPageButton(Math.max(1, currentPage - 1), 'Previous');

            for (let i = Math.max(1, currentPage - 2); i <= Math.min(pageCount, currentPage + 2); i++) {
                if (i === 1) {
                    continue;
                }
                addPageButton(i, i.toString());
            }

            addPageButton(Math.min(pageCount, currentPage + 1), 'Next');
            addPageButton(pageCount, 'Last');
        }

        // Initial setup
        displayData(currentPage);
        setupPagination();
    })
    .catch(error => {
        console.error('Error:', error);
    });
   
