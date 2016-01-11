
function enlightPriority(priority) {
    var enlightedIssueClassName = "enlighted-" + priority
    var issues = document.querySelectorAll(".icon-" + priority)
    for(var i = 0; i < issues.length; i++) {
        var parent = issues[i].closest("tr")
        parent.className += " " + enlightedIssueClassName
    }
}

enlightPriority("blocker")
enlightPriority("critical")
