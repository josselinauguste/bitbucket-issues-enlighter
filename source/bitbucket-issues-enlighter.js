
function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeColumn(columnName) {
    removeElementsByClass(columnName)
}

function enlightPriority(priority) {
    var enlightedIssueClassName = "enlighted-" + priority
    var issues = document.querySelectorAll(".icon-" + priority)
    for(var i = 0; i < issues.length; i++) {
        var parent = issues[i].closest("tr")
        if (parent) {
            parent.className += " " + enlightedIssueClassName
        }
    }
}

function updateColumnName(columnName, columnLabel) {
    var element = document.querySelector("." + columnName + " a")
    element.innerHTML = columnLabel
}

function iconifyColumn(columnName, newColumnLabel) {
    updateColumnName(columnName, newColumnLabel)
    var icons = document.querySelectorAll(".iterable-item ." + columnName)
    for(var i = 0; i < icons.length; i++) {
        icons[i].className = "icon-col"
    }
}

enlightPriority("blocker")
enlightPriority("critical")
removeColumn("votes")
iconifyColumn("user", "A")