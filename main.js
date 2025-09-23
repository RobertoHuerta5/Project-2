async function fetchPictures() {
    let userInput = document.getElementById("search").value ;
    let response = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    let jsonGiphy = await (response.json())
    let arraData = await (jsonGiphy.data)

    let resultPictures = document.getElementById("images");
    resultPictures.innerHTML = ""

    for(let index = 0 ; index < arraData.length; index++){
        let img = document.createElement ("img");
        img.src = arraData[index].images.fixed_width.url;
        resultPictures.append(img);
        console.log(arraData[index].images);

    }
}

document.getElementById("submit").addEventListener("click", fetchPictures)