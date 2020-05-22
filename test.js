function firstCommit() {
    console.log(firstCommit)
}

function secondCommit() {
    firstCommit()
    console.log(secondCommit)
}

function thirdCommit() {
    firstCommit()
    secondCommit()
}