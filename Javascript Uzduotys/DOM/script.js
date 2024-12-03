let rezultatas = '';

for (const produktas of produktai.products) {
    rezultatas += `
            <tr>
                <th><img src="${produktas.thumbnail}"></th>
                <th>
                    <h2>${produktas.title}</h2>
                    <div>${produktas.rating}</div>
                    <p>${produktas.description}</p>
                </th>
                <th> 
                    <p><span style="color:red;">$${(produktas.price - produktas.discountPercentage).toFixed(2)}</span> <sup style="color:gray;text-decoration: line-through;">$${produktas.price}</sup></p>
                    <button>Mygtukas</button>
                </th>
            </tr>
            `;
}

document.querySelector('.produktas').innerHTML = `
            <table class="table">
                <tbody>
                    ${rezultatas}
                </tbody>
            </table>
        `;

