// =====================
// GAME DATA
// =====================
const rules = ["w", "e", "f"]

const pokemonImages = {
    w: "img/squirtle.jpg",   // Water
    e: "img/pikachu.jpg",    // Electric
    f: "img/charmander.png" // Fire
}

let point1 = 0
let point2 = 0

// =====================
// DOM ELEMENTS
// =====================
const p1El = document.getElementById("p1")
const p2El = document.getElementById("p2")
const resultEl = document.getElementById("result")

const playerImg = document.getElementById("playerPokemon")
const enemyImg = document.getElementById("enemyPokemon")

// =====================
// FUNCTIONS
// =====================
function randomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function attackAnim(img) {
    img.classList.add("attack")
    setTimeout(() => img.classList.remove("attack"), 200)
}

function changePokemon(imgEl, key) {
    imgEl.src = pokemonImages[key]
}

function playRound(userChoose) {
    const compChoose = randomEl(rules)

    // 🔄 Change Pokémon images
    changePokemon(playerImg, userChoose)
    changePokemon(enemyImg, compChoose)

    // ⚔️ Attack animation
    attackAnim(playerImg)
    attackAnim(enemyImg)

    // 🧠 Game logic
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

    // 📊 Update score
    p1El.innerText = point1
    p2El.innerText = point2
}

// =====================
// KEYBOARD CONTROLS
// =====================
window.addEventListener("keydown", function (e) {
    const userChoose = e.key.toLowerCase()

    if (!rules.includes(userChoose)) {
        resultEl.className = "alert alert-warning text-center"
        resultEl.innerText = "Only W, E, F keys!"
        return
    }

    playRound(userChoose)
})

// =====================
// MOBILE BUTTONS
// =====================
const mobileButtons = document.querySelectorAll("[data-key]")

mobileButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoose = btn.getAttribute("data-key")
        playRound(userChoose)
    })
})
