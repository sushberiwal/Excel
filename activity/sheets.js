let addSheetButton = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheets-list");
let currentSheetId = 0;

addSheetButton.addEventListener("click" , function(e){
    currentSheetId++;
    
    //remove active-sheet class from currently active sheet is sheetsList
    document.querySelector(".active-sheet").classList.remove("active-sheet");

    let sheetDiv = document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sheetid" , currentSheetId);
    sheetDiv.textContent = `Sheet ${currentSheetId+1}`;    

    sheetsList.append(sheetDiv);
})

// clicking on sheet and change active sheet !!
sheetsList.addEventListener("click" , function(e){
    // check if clicked on remaining area on sheets list
    // other than sheet
    if(e.target.classList.contains("sheets-list")){
        return;
    }
    //remove active-sheet class from currently active sheet is sheetsList
    document.querySelector(".active-sheet").classList.remove("active-sheet");

    let sheetClicked = e.target;
    sheetClicked.classList.add("active-sheet");
})