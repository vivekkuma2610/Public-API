


async function loadTemperature(){
    selectElement = document.querySelector('#animal');
    animalName = selectElement.value;
    console.log("animalName", animalName)
    updatedname=animalName.toLowerCase();
    let res1 = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${updatedname}`)
    let data1 = await res1.json()
    console.log(data1)
    console.log(`Fun fact about ${animalName} is ${data1.text}`)
    document.getElementById("animalfactdisplay").innerHTML=`<b>Fun fact about ${animalName} is ${data1.text}<b/>`
}