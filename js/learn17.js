let sudents = [
    {
        fName:"Suresh",
        lName:"Thakare",
        class:1
    },{
        fName:"Ramesh",
        lName:"Thakare",
        class:3
    },{
        fName:"Sandesh",
        lName:"Thakare",
        class:2
    },{
        fName:"Sandip",
        lName:"Thakare",
        class:4
    },{
        fName:"Sudesh",
        lName:"Thakare",
        class:3
    }
];

let recToDisplay = '';
for(let i=0; i< sudents.length; i++){
    recToDisplay = recToDisplay + `
    <tr>
        <th scope="row">${i+1}</th>
        <td>${sudents[i].fName}</td>
        <td>${sudents[i].lName}</td>
        <td>${sudents[i].class}</td>
    </tr>
    `;
}

document.getElementById("studRecords").innerHTML = recToDisplay;