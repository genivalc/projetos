//_3euVJ  _3auIg _1QUKR _1MXsz colocar um desse no querySelectorAll
// const audios = document.querySelectorAll("audio")
//for(const audio of audios){audio.playbackRate = 3}
const interval = setInterval(() => {
    const header = document.querySelectorAll("")
    if (header) {
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList, add("twoTimesButton")
        
        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            console.log(audios)
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 2;
            })
        })

        header.appendChild(button)
    }
}, 1000)

