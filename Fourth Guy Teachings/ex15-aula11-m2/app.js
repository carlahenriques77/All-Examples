
const scores = [50, 25, 0, 30, 100, 20, 10]
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue // I don't quite get it, but... I **think** that it "Skips" something, like in this Example. It re-done the Code until the "0" was Skipped??? More tests are needed. 
    }
    console.log(`sua pontuação: ${scores[i]}`)
    if (scores[i] === 100) {
        console.log('parabéns, você atingiu a pontuação máxima')
        break // This "break" thing will stop the Loop if a Condition is meet. In this case, it stopped it when the "100" appeared.
    }
}
