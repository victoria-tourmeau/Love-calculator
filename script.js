function calculateLove() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 === "" || name2 === "") {
        document.getElementById('result').innerHTML = "Please enter both names.";
        return;
    }

    const loveScore = Math.floor(Math.random() * 101); // Generate a random love score between 0 and 100
    document.getElementById('result').innerHTML = `${name1} and ${name2} have a love compatibility of ${loveScore}%.`;
}