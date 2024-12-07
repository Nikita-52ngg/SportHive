function showInfo(category) {
    const infoBox = document.getElementById("info");
    let content = "";

    switch (category) {
        case "aerobics":
            content = "Аэробные программы – семейный премиум фитнес-клуб с бассейном, 40 видами групповых программ, детским клубом, школой единоборств и скалодромом.";
            break;
        case "mindBody":
            content = "Mind&Body – программы для расслабления и улучшения гармонии между телом и разумом.";
            break;
        case "aeroPower":
            content = "Аэробно-силовые программы – эффективные тренировки для улучшения выносливости и силы.";
            break;
        case "dance":
            content = "Танцевальные программы – веселые занятия для поддержания формы под музыку.";
            break;
        case "strength":
            content = "Силовые программы – направлены на увеличение мышечной массы и силы.";
            break;
        case "functional":
            content = "Функциональный тренинг – улучшение физической подготовки с помощью комплексных упражнений.";
            break;
        case "martialArts":
            content = "Боевые искусства – тренировки, развивающие боевые навыки и самооборону.";
            break;
        default:
            content = "Выберите категорию, чтобы увидеть подробности.";
    }

    infoBox.innerHTML = `<p>${content}</p>`;
} 


function filterSchedule() {
    const categoryFilter = document.getElementById("category-filter").value;
    const hallFilter = document.getElementById("hall-filter").value;
    const timeFilter = document.getElementById("time-filter").value;
    const searchFilter = document.getElementById("search-filter").value.toLowerCase();
    const scheduleItems = document.querySelectorAll(".schedule-item");
  
    scheduleItems.forEach((item) => {
      const matchesCategory = categoryFilter === "all" || item.classList.contains(categoryFilter);
      const matchesHall = hallFilter === "all" || item.classList.contains(hallFilter);
      const matchesTime = !timeFilter || item.getAttribute("data-time") === timeFilter;
      const matchesSearch = item.getAttribute("data-name").toLowerCase().includes(searchFilter);
  
      if (matchesCategory && matchesHall && matchesTime && matchesSearch) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  function resetFilters() {
    document.getElementById("category-filter").value = "all";
    document.getElementById("hall-filter").value = "all";
    document.getElementById("time-filter").value = "";
    document.getElementById("search-filter").value = "";
    filterSchedule();
  }
