socket.on("cellClickEvent" , (e)=>{
    if(document.querySelector(".realtime-selection")){
        document.querySelector(".collaborator").remove();
        document.querySelector(".realtime-selection").classList.remove("realtime-selection");
    }

    let cell = document.querySelector(`div[rowid="${e.rowId}"][colid="${e.colId}"]`);
    cell.classList.add("realtime-selection");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("collaborator");
    nameDiv.textContent = e.username;

    cell.append(nameDiv);
}) 