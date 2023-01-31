
$("#btnSubmit").click(function () {

    // declaring variables

    var letterGrade;
    var gradePct = (($("#assignments").val() * .5) + ($("#quizzes").val() * .1) + ($("#groupProjects").val() * .1) + ($("#intex").val() * .1) + ($("#midterm").val() * .1) + ($("#final").val() * .1));

    // calculating the final letter grade

    if (gradePct >= 94) {
        letterGrade = "A"
    } else if (gradePct >= 90) {
        letterGrade = "A-"
    } else if (gradePct >= 87) {
        letterGrade = "B+"
    } else if (gradePct >= 84) {
        letterGrade = "B"
    } else if (gradePct >= 80) {
        letterGrade = "B-"
    } else if (gradePct >= 77) {
        letterGrade = "C+"
    } else if (gradePct >= 74) {
        letterGrade = "C"
    } else if (gradePct >= 70) {
        letterGrade = "C-"
    } else if (gradePct >= 67) {
        letterGrade = "D+"
    } else if (gradePct >= 64) {
        letterGrade = "D"
    } else if (gradePct >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    // outputting to the form

    $("#result").html("Percent Grade: " + gradePct + "%<br>" + "Letter Grade: " + letterGrade);
})