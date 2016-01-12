
function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function enlightPriority(priority) {
    var enlightedIssueClassName = "enlighted-" + priority
    var issues = document.querySelectorAll(".icon-" + priority)
    for(var i = 0; i < issues.length; i++) {
        var parent = issues[i].closest("tr")
        parent.className += " " + enlightedIssueClassName
    }
}

function updateHeader(headerName, label) {
    var element = document.querySelector(".user a")
    element.innerHTML = "A"
}

function iconifyColumn(columnName) {
    var icons = document.querySelectorAll(".iterable-item ." + columnName)
    for(var i = 0; i < icons.length; i++) {
        icons[i].className = "icon-col"
    }
}

enlightPriority("blocker")
enlightPriority("critical")
removeElementsByClass("votes")
updateHeader("user", "A")
iconifyColumn("user")