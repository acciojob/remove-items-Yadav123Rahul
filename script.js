//your JS code here. If required.
 function removeSelectedColor() {
            // Get a reference to the select element
            var selectElement = document.getElementById("colorSelect");
            
            // Get the selected index
            var selectedIndex = selectElement.selectedIndex;
            
            // Check if an option is selected
            if (selectedIndex !== -1) {
                // Remove the selected option from the list
                selectElement.remove(selectedIndex);
            }
        }