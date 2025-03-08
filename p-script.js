document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const sidebar = document.querySelector('.sidebar');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarKeywords = document.getElementById('sidebar-keywords');
    const sidebarDescription = document.getElementById('sidebar-description');
    const sidebarTools = document.getElementById('sidebar-tools');
    const closeBtn = document.querySelector('.close-btn');
    const inventoryIcon = document.querySelector('.inventory-icon-container');
  
    projects.forEach(project => {
      project.addEventListener('click', function() {
        const title = this.getAttribute('data-title') || "N/A";
        const keywords = this.getAttribute('data-keywords') || "N/A";
        const description = this.getAttribute('data-description') || "N/A";
        const tools = this.getAttribute('data-tools') || "N/A";
        
        // Limit description to 3000 characters
        let shortDescription = description;
        if (description.length > 3000) {
          shortDescription = description.substring(0, 3000) + "...";
        }
        
        sidebarTitle.textContent = "Title: " + title;
        sidebarKeywords.textContent = "Keywords: " + keywords;
        sidebarDescription.textContent = "Description: " + shortDescription;
        sidebarTools.textContent = "Tools Used: " + tools;
        
        sidebar.classList.add('open'); // Slide in the sidebar
      });
    });
  
    closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('open'); // Close the sidebar
    });
  
    // Redirect to Inventory Page on Click
    inventoryIcon.addEventListener('click', function() {
      window.location.href = "inventory.html";
    });
  });
  
  // Back Button Function
  function goBack() {
    window.location.href = "character-selection.html";
  }