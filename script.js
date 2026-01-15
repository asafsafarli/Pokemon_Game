
const rules = ["w", "e", "f"]
let point1 = 0
let point2 = 0

const p1El = document.getElementById("p1")
const p2El = document.getElementById("p2")
const resultEl = document.getElementById("result")

const playerImg = document.getElementById("playerPokemon")
const enemyImg = document.getElementById("enemyPokemon")

function randomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function attackAnim(img) {
    img.classList.add("attack")
    setTimeout(() => img.classList.remove("attack"), 200)
}

window.addEventListener("keydown", function (e) {
    const userChoose = e.key.toLowerCase()
    const compChoose = randomEl(rules)

    if (!rules.includes(userChoose)) {
        resultEl.className = "alert alert-warning text-center"
        resultEl.innerText = "Only W, E, F keys!"
        return
    }

    attackAnim(playerImg)
    attackAnim(enemyImg)

    if (
        (userChoose === "e" && compChoose === "f") ||
        (userChoose === "w" && compChoose === "e") ||
        (userChoose === "f" && compChoose === "w")
    ) {
        point1++
        resultEl.className = "alert alert-success text-center"
        resultEl.innerText = "YOU WIN!"
    }
    else if (userChoose === compChoose) {
        resultEl.className = "alert alert-secondary text-center"
        resultEl.innerText = "DRAW 🤝"
    }
    else {
        point2++
        resultEl.className = "alert alert-danger text-center"
        resultEl.innerText = "YOU LOSE!"
    }

    p1El.innerText = point1
    p2El.innerText = point2
})
